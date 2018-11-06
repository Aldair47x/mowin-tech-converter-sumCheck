var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/convertir', function(req, res, next) {
  const myValue = req.body.string;
  const a1 = myValue.split('').map(function (char) {
    return char.charCodeAt(0);
  }).reduce(function (current, previous) {
    return previous ^ current;
  });
  const checkSum = (a1).toString(16);
  res.json({
    cadena : checkSum
  })
});

module.exports = router;
