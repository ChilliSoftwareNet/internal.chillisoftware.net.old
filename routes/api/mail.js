var express = require('express');
var mailController = require(__base + 'controllers/mail');
var router = express.Router();

/* GET home page. */
router.post('/contact', function(req, res, next) {
    mailController.contact(req.body);
    res.status(200);
    res.end();
});

module.exports = router;
