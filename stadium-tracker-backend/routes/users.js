var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signin', (req, res, next) => {
  let userId = req.body.userId;
  req.session.id = userId;
  res.end();
});

module.exports = router;
