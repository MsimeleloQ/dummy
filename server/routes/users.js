var express = require('express');
var router = express.Router();
var User = require('../models/userModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find((err, data) => {
    if (err) throw err;
    res.send(data)
  })
});

router.get('/:id', function (req, res, next) {
  User.findById(req.params.id, (err, data) => {
    if (err) throw err;
    if (!data)
        return res.status(404).send("User with Given Id does not exist.");
    res.send(data);
  });
})

router.post('/', function (req, res, next) {
  User.create(req.body, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
})

router.put('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, data) => {
    if (err) throw err;
  if (!data)
      return res.status(404).send("User with given Id does not exist.");
    User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  });
})


router.delete('/:id', (req, res,next) => {
  User.findById(req.params.id, (err, data) => {
    if (err) throw err;
    if (!data)
        return res.status(404).send("User with the given Id does not exist");
        User.findByIdAndDelete(req.params.id, (err, data) => {
          if (err) throw err;
          res.send(data);
        });
  });
})






module.exports = router;
