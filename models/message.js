var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.Object }
});

module.exports = mongoose.model('Message', schema);