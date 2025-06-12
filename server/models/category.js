const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
            required: true,
        },
    ],
    color: {
        type: String,
        required: true,
    },
});

// Define a virtual property 'id' that converts '_id' to a string
categorySchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Enable virtuals in the JSON output
categorySchema.set('toJSON', {
    virtuals: true,
});

exports.Category = mongoose.model('Category', categorySchema);
exports.categorySchema = categorySchema;
