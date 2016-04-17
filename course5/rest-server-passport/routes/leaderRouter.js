var express = require('express'),
bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Verify = require('./verify');
var leadership = express.Router();
leadership.use(bodyParser.json());
var Leaders = require('../models/leadership');
leadership.route('/')
    .get(Verify.verifyOrdinaryUser, function (req, res, next) {
        Leaders.find({}, function (err, dish) {
            if (err) throw err;
            res.json(dish);
        });
    })
    .post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Leaders.create(req.body, function (err, dish) {
            if (err) throw err;
            console.log('Dish created!');
            var id = dish._id;

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('Added the dish with id: ' + id);
        });
    })
    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Leaders.remove({}, function (err, resp) {
            if (err) throw err;
            res.json(resp);
        });

    });

leadership.route('/:leaderId')
    .get(Verify.verifyOrdinaryUser, function (req, res, next) {
        Leaders.findById(req.params.dishId, function (err, dish) {
            if (err) throw err;
            res.json(dish);
        });

    })

    .put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Leaders.findByIdAndUpdate(req.params.dishId, {
            $set: req.body
        }, {
            new: true
        }, function (err, dish) {
            if (err) throw err;
            res.json(dish);
        });
    })

    .delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function (req, res, next) {
        Leaders.findByIdAndRemove(req.params.dishId, function (err, resp) {        if (err) throw err;
            res.json(resp);
        });

    });

module.exports = leadership;