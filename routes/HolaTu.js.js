var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('HolaTu', { titulo: 'BIENVENIDA', Mensaje: ' Selem '});
});

module.exports = router;
