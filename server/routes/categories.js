const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
const { isValidObjectId } = require('mongoose');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
})

router.get('/', async (req, res) => {
    const categoryList = await Category.find();
  
    if (!categoryList) {
        res.status(500).json({ success: false });
    }
    res.send(categoryList);
});

router.post('/create', async (req, res) => {
    try {

        const pLimit = await import('p-limit');
        const limit = pLimit.default(2);

        const imagesToUpload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            });
        });

        const uploadStatus = await Promise.all(imagesToUpload);
        const imgurl = uploadStatus.map((item) => item.secure_url);

        if (!uploadStatus) {
            return res.status(500).json({
                error: 'Image cannot upload',
                status: false,
            });
        }

        let category = new Category({
            name: req.body.name,
            images: imgurl,
            color: req.body.color,
        });

        category = await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({
            error: err.message,
            success: false,
        });
    }
});

router.get('/:id', async (req, res) => {
    const categoryId = req.params.id;

    // Check if the ID is a valid MongoDB ObjectId
    if (!isValidObjectId(categoryId)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid category ID format.',
        });
    }

    try {
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'The category with the given ID was not found.',
            });
        }
        return res.status(200).json({
            success: true,
            data: category,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while retrieving the category.',
            error: err.message,
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(200).json({
                success: false,
                message: 'id not match.',
                data: error
            });
        }
        return res.status(200).json({
            success: true,
            message: 'Category successfully deleted.',
            data: category
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while deleting the category.',
            error: err.message
        });
    }
});
router.put('/:id', async (req, res) => {

    const pLimit = await import('p-limit');
    const limit = pLimit.default(2);

    const imagesToUpload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        });
    });

    const uploadStatus = await Promise.all(imagesToUpload);
    const imgurl = uploadStatus.map((item) => item.secure_url);

    if (!uploadStatus) {
        return res.status(500).json({
            error: 'Image cannot upload',
            status: false,
        });
    }
    try {
        const category = await Category.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                images: imgurl,
                color: req.body.color,
            },
            { new: true } // Ensures the returned document is the updated one
        );

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'The category with the given ID was not found.'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Category successfully updated.',
            data: category
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: 'An error occurred while updating the category.',
            error: err.message
        });
    }
});


module.exports = router;
