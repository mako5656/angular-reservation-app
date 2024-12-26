const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    cover_image: { type: String },
    name: { type: String, required: true, max: [60, '最大60文字までです'] },
    price: { type: Number },
    description: { type: String },
    heading1: { type: String },
    heading2: { type: String },
    heading3: { type: String },
    headingText1: { type: String },
    headingText2: { type: String },
    headingText3: { type: String },
});

module.exports = mongoose.model('Product', ProductSchema);