const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    body: String,
    title: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model("Blog", blogSchema);