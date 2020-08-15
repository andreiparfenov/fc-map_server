var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Place = require('../models/Place.js');

//все места
router.get('/', function(req, res) {
  Place.find(function (err, places) {
    if (err) return next(err);
    res.json(places);
  });
});

//добавить место
router.post('/', function(req, res) {
  Place.create(req.body, function (err, place) {
    if (err) return next(err);
    res.json(place);
  });
});

//редактировать место
router.put('/:id', function(req, res, next) {
  Place.findByIdAndUpdate(req.params.id, req.body, function (err, place) {
    if (err) return next(err);
    res.json(place);
  });
});

//удалить место
router.delete('/:id', function(req, res, next) {
  Place.findByIdAndRemove(req.params.id, req.body, function (err, place) {
    if (err) return next(err);
    res.json(place);
  });
});

module.exports = router;