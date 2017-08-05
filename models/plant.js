var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    plantId: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    site: { type: Schema.Types.ObjectId, required: true}
});

module.exports = mongoose.model('Plant', schema);