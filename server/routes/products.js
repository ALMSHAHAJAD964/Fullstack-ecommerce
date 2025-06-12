const express = require('express');
const { isValidObjectId } = require('mongoose');
const { Category } = require('../models/category');
const { Product } = require('../models/products');
const cloudinary = require('cloudinary').v2;

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name, 
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});

router.get('/', async (req, res) => {
    try {
        const productsList = await Product.find().populate('category');

        if (!productsList.length) {
            return res.status(200).json({ success: true, data: [] });
        }

        res.status(200).json({ success: true, data: productsList });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to fetch products!',
        });
    }
});

router.post('/create', async (req, res) => {
    try {
        const {
            category,
            name,
            description,
            images,
            brand,
            price,
            countInStock,
            rating,
            numReviews,
            isFeatured,
            dateCreate,
        } = req.body;
        if (!isValidObjectId(category)) {
            return res.status(400).json({ success: false, message: 'Invalid category ID!' });
        }

        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(404).json({ success: false, message: 'Category not found!' });
        }
        let parsedDate = dateCreate ? new Date(dateCreate) : undefined;
        if (dateCreate && isNaN(parsedDate.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Invalid 'dateCreate' format. Use ISO format (e.g., '2025-01-17').",
            });
        }
        const pLimit = await import('p-limit');
        const limit = pLimit.default(2);

        const imagesToUpload = images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.allSettled(imagesToUpload);
        const imgurl = uploadStatus
            .filter((res) => res.status === 'fulfilled')
            .map((res) => res.value.secure_url);

        if (imgurl.length === 0) {
            return res.status(500).json({
                success: false,
                message: 'Failed to upload images!',
            });
        }

        let product = new Product({
            name,
            description,
            images: imgurl,
            brand,
            price,
            category,
            countInStock,
            rating,
            numReviews,
            isFeatured: isFeatured === 'true',
            dateCreate: parsedDate, 
        });

        product = await product.save();

        res.status(201).json({
            success: true,
            message: 'Product created successfully!',
            data: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message || 'Something went wrong while creating the product!',
        });
    }
});

router.get('/:id',async(req,res) =>{
    const product = await Product.findById(req.params.id);
    if(!product){
        return res.status(404).json({
            massage:"product not found!",
            status:false
        })
    }   
    return res.status(200).json({
        success: true,
        data: product,
    });
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            description,
            brand,
            price,
            category,
            countInStock,
            rating,
            numReviews,
            isFeatured,
            dateCreate,
            images,
        } = req.body;

        // Validate ID
        if (!isValidObjectId(id)) {
            return res.status(400).json({ success: false, message: 'Invalid product ID!' });
        }

        // Initialize Image Upload Array
        let imgurl = [];
        if (images && images.length > 0) {
            const pLimit = await import('p-limit');
            const limit = pLimit.default(2);

            const imagesToUpload = images.map((image) =>
                limit(async () => {
                    try {
                        const result = await cloudinary.uploader.upload(image);
                        return result.secure_url;
                    } catch (err) {
                        console.error(`Failed to upload image: ${err.message}`);
                        return null; // Skip this image
                    }
                })
            );

            const uploadStatus = await Promise.all(imagesToUpload);
            imgurl = uploadStatus.filter((url) => url !== null); // Remove failed uploads

            if (imgurl.length === 0) {
                return res.status(500).json({
                    success: false,
                    message: 'All image uploads failed!',
                });
            }
        }

        // Validate `dateCreate` if provided
        let parsedDate = dateCreate ? new Date(dateCreate) : undefined;
        if (dateCreate && isNaN(parsedDate.getTime())) {
            return res.status(400).json({
                success: false,
                message: "Invalid 'dateCreate' format. Use ISO format (e.g., '2025-01-17').",
            });
        }

        // Update Product
        const updatedFields = {
            ...(name && { name }),
            ...(description && { description }),
            ...(brand && { brand }),
            ...(price && { price }),
            ...(category && { category }),
            ...(countInStock && { countInStock }),
            ...(rating && { rating }),
            ...(numReviews && { numReviews }),
            ...(isFeatured !== undefined && { isFeatured: isFeatured === 'true' }),
            ...(parsedDate && { dateCreate: parsedDate }),
            ...(imgurl.length > 0 && { images: imgurl }), // Update only if new images exist
        };

        const product = await Product.findByIdAndUpdate(id, updatedFields, { new: true });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'The product with the given ID was not found.',
            });
        }

        // Success Response
        return res.status(200).json({
            success: true,
            message: 'Product successfully updated.',
            data: product,
        });
    } catch (err) {
        console.error('Error updating product:', err.message);
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the product.',
            error: err.message,
        });
    }
});


router.delete('/:id',async(req,res)=>{
    const deletProduct = await Product.findByIdAndDelete(req.params.id);
    
    if(!deletProduct){
        return res.status(404).json({
            massage:"product not found!",
            status:false
        })
    }   
    res.status(200).send({
        massage:"product successfully deleted.",
        status:true
    })
})
module.exports = router;
