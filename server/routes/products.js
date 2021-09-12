var express = require('express');
var router = express.Router();
var Product = require('../models/productModel');

// Request URL: http://localhost:3000/products
router.get('/', function (req, res, next) {
    Product.find((err, data) => {
        if (err) throw err;
        res.send(data);
    })
});


router.get('/:id', function (req, res, next) {
    Product.findById(req.params.id, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

router.post('/', function (req, res, next) {
    Product.create(req.body, (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});

router.delete('/id', (req, res) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if (err) throw err;
        res.send('Product Successfully Deleted');
    })
});



module.exports = router;
