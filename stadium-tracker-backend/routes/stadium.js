const { check } = require('express-validator/check');
const { sanitize } = require('express-validator/filter');
const Router = require('express');
const router = Router();
const { StadiumVisit } = require('../models');

/* GET users listing. */
router.post('/', function(req, res, next) {
  check('stadiumName', 'visitDate').isLength({min: 1});
  sanitize('stadiumName', 'visitDate').trim().escape();
  StadiumVisit.create({
    stadiumName: req.body.stadiumName,
    visitDate: req.body.visitDate,
    userId: req.session.key
  }).then((stadiumVisit) => {
    res.send();
  });
});

router.get('/', function(req, res, next) {
  StadiumVisit.findAll({
    where: {
      userId: req.session.key
    }
  }).then((rows) => {
    res.send(rows);
  });
});

router.delete('/:stadiumId', function (req, res, next) {
  const stadiumId = req.params.stadiumId;
  StadiumVisit.destroy({
    where: {
      id: stadiumId
    }
  }).then(() => {
    res.send();
  }).error((err) => {
    console.log(err);
  });
});

module.exports = router;
