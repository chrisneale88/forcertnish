var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Site = require('./site');

var schema = new Schema({
    businessName: { type: String, required: true },
    contact: {type: String, required: true },
    sites: [{type:  Schema.Types.ObjectId, ref: 'Site' }]
});

module.exports = mongoose.model('Customer', schema);