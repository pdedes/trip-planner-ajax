var dayRouter = require('express').Router();
var attractionRouter = require('./attraction_router');

var models = require('../models');

dayRouter.get('/', function (req, res, next) {
    // serves up all days as json
    db.days.find({});
});
// POST /days
dayRouter.post('/', function (req, res, next) {
    // creates a new day and serves it as json
    db.days.insert({});
});
// GET /days/:id
dayRouter.get('/:id', function (req, res, next) {
    // serves a particular day as json
	var day = parseInt(req.params.id);
	console.log(day);
});
// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
    // deletes a particular day
    // db.days.remove({where: ...})
});

dayRouter.use('/:id', attractionRouter);


module.exports = dayRouter;