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
    date: {
        type: Date,
        default: Date.now()
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

})


module.exports = mongoose.model('Accident', accidentSchema);
