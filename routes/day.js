var dayRouter = require('express').Router();
var models = require('../models');
var attractionRouter = require('express').Router();

var models = require('../models');

dayRouter.get('/', function (req, res, next) {
    // serves up all days as json
    // db.days.find({});
    console.log("Days GET Root");
    res.send();
});
// POST /days
dayRouter.post('/', function (req, res, next) {
    // creates a new day and serves it as json
    // db.days.insert({});
    var currentDay = req.body;
    console.log("Days POST Root");

    models.Day.findOneAndRemove({"number": currentDay.day}, function (err, day) {
    	// Sending null here prevents a failure to convert the empty objects
    	var newDay = new models.Day({number: currentDay.day });
    	console.log("Didn't Find One Day: ", err);
  
    	newDay.save(function(err, day) {
    		if(err) {
    			console.log("Save Error: ", err);
    			return err;
    		} else {
    			console.log("Created Day ");
    		}
		    res.json(day);
    	});
    });

});
// GET /days/:id
dayRouter.get('/:id', function (req, res, next) {
    // serves a particular day as json
	// var day = parseInt(req.params.id);
    console.log("Days/ID GET Root", req.params.id);
	res.send();
});
// DELETE /days/:id
dayRouter.delete('/:id', function (req, res, next) {
    // deletes a particular day
    // db.days.remove({where: ...})
    console.log("Days/ID DELETE Root");
    res.send();
});

dayRouter.use('/:id', attractionRouter);

// POST /days/:id/hotel
attractionRouter.post('/hotel', function (req, res, next) {
    // creates a reference to the hotel
    console.log("Attr. Router POST /hotel");
    console.log(req);
    res.send();
});
// DELETE /days/:id/hotel
attractionRouter.delete('/hotel', function (req, res, next) {
    // deletes the reference of the hotel
});
// POST /days/:id/restaurants
attractionRouter.post('/restaurants', function (req, res, next) {
    // creates a reference to a restaurant
    console.log("Attr. Router POST /restaurants");
    console.log(req);
    res.send();
});
// DELETE /days/:dayId/restaurants/:restId
attractionRouter.delete('/restaurant/:id', function (req, res, next) {
    // deletes a reference to a restaurant
});
// POST /days/:id/thingsToDo
attractionRouter.post('/thingsToDo', function (req, res, next) {
    // creates a reference to a thing to do
    console.log("Attr. Router POST /thingsToDo");
    var thingID = req.body.id;
    var dayNum = req.body.dayNum;

    // models.ThingToDo.findById(thingID, function (err, thing) {
    // 	console.log("DB Call Thing: ", thing);
    // });

	// using findOneAndUpdate bypasses Mongoose. This is hard to spot, but it prevents us from taking advantage of Mongoose's functionality
    // {$addToSet: ...} creates a unique list to add to, you cannot add duplicates
    // {$push: ...} allows duplicates, and is what we are picking in this scenario
    models.Day.findOneAndUpdate({number: dayNum}, {$addToSet: {thingsToDo: thingID}}, function (err, day) {
    	if(err) {
    		console.log("FOAU Err: ", err);
    	} else {
    		console.log("Successful Thing Save: ");
    	}
    });

    // db.thingsToDo.insert({});

    res.send();
});
// DELETE /days/:dayId/thingsToDo/:thingId
attractionRouter.delete('/thingsToDo/:id', function (req, res, next) {
    // deletes a reference to a thing to do
});

module.exports = dayRouter;