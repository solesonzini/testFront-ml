var express = require('express');
var router = express.Router();


/* GET buscador. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET Detalle. */
router.get('/item', function(req, res, next) {
  res.render('detalle', { title: 'Express' });
});
/* GET resultados */
router.get('/resultados', function(req, res, next) {
  res.render('resultados', { title: 'Express' });
});


module.exports = router;
