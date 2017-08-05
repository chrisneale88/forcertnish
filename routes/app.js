var express = require('express');
var router = express.Router();
var Site = require('../models/site');

router.get('/', function(req, res ,next){
   res.render('index');
});


/* DB TESTING PAGES //

router.get('/', function (req, res, next) {
    Site.findOne({}, function(err, doc) {
        if(err) {
            return res.send('ERROR!');
        }
        res.render('node', { site: doc.location });
    });
});

router.post('/', function(req, res, next) {
   var name = req.body.name;
   var site  = new Site({
       name: name,
       contact: 'John Doe',
       location: 'Moranbah'
   });

   site.save();
   res.redirect('/');
}); */

module.exports = router;
