const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ImageSchema = new Schema({
    url: String,
    filename: String
});

const accidentSchema = new Schema({

    location: {
        type: [Number],
        required: true
    },
    reporter: {
        type: Schema.Type.ObjectId,
        ref: 'User'
    },
    type: {
        type: String,
        required: true
    },
    images: [ImageSchema]
}, { timestamps: true })


module.exports = mongoose.model('Accident', accidentSchema);
