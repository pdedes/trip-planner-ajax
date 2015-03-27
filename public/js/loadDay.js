// Persistence Load
// This script will query the database upon site load, to see if 
// there are itineraries saved in the DB. It will loop through the days
// if they exist, and render the day tabs.

// $addDay.on('click', function() {
//   //"model-y"
//   var newDay = {
//     restaurants: [],
//     thingsToDo: [],
//     hotel: null,
//     dayNum: days.length + 1
//   }

//   days.push(newDay)

//   $.ajax({
//       type: 'POST',
//       url: '/day/',
//       data: {"day": newDay.dayNum},
//       success: function (response) {
//         // console.log(response);
//       }
//   });

//   var newDayBtn = templates.get('day-btn')
//     .text(newDay.dayNum)
//     .insertBefore($addDay)
//     .on('click', function() {
//       switchCurrentDay(newDay, $(this))
//     })

//   switchCurrentDay(newDay, newDayBtn)
// });
var daysFromDB;

$( document ).ready(function() {
    console.log( "DB Querying Script" );
    // var daysInDB = 0;
    // // Query Mongoose for the number of days in the DB
    // models.Day.find().count();

	$.ajax({
	    type: 'GET',
	    url: '/day/',
	    success: function (response) {
	      console.log("Page Loaded with DB Persistence");
	      daysFromDB =  response;
	    }
	});

	// Using the returned query of days from the DB...
	// Loop over each, and draw the itinerary to it's respective day tab.
	// daysFromDB.forEach(function(day) {

	// });

});