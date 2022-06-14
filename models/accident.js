const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imageSchema = require('./image')


const accidentSchema = new Schema({

    location: { type: [Number], required: true },
    reporter: { type: Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, required: true },
    discription: { type: String, required: true },
    images: [imageSchema]
}, { timestamps: true })


module.exports = mongoose.model('Accident', accidentSchema);
