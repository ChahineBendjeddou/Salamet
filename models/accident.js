const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accidentSchema = new Schema({

    location: { type: [Number], required: true },
    reporter: { type: Schema.Type.ObjectId, ref: 'User' },
    type: { type: String, required: true },
    discription: { type: String, required: true },
    images: [String]
}, { timestamps: true })


module.exports = mongoose.model('Accident', accidentSchema);
