const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = require('./image')

const blogSchema = new Schema({
    body: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, required: true, trim: true },
    images: [imageSchema]
}, { timestamps: true });

module.exports = mongoose.model("Blog", blogSchema);