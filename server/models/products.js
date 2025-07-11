const mongoose = require('mongoose');
const { Category } = require('./category');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: [{ type: String, required: true }],
    images: [{ type: String, required: true }],
    brand: { type: String, default: '' },
    price: { type: Number, default: 0 },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
    dateCreate: { type: Date, default: Date.now },
});

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

exports.Product = mongoose.model('Product', productSchema);
exports.productSchema = productSchema;
