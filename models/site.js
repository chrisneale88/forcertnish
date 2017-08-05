var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: { type: String , required: true},
    contact: { type: String, required: true },
    location: { type: String, required: true },
    //customer: { type: Schema.types.ObjectId, required: true },
    plant: [{ type: Schema.Types.ObjectId, ref: 'Plant'  }]
});

module.exports = mongoose.model('Site', schema);