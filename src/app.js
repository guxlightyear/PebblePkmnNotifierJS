var UI = require('ui');

var sleepPeriod = 10 * 1000; // 10 seconds
var appCard = new UI.Card({
  title:'Pokemon GO'
});
appCard.show();

function locationFound(location) {
  console.log('lat= ' + location.coords.latitude + ' lon= ' + location.coords.longitude);
}

function locationNotFound(error) {
  if (error.code == error.PERMISSION_DENIED) {
    console.log('Location access was denied by the user.');
    appCard.subtitle("Location disabled by the user");
  } else {
    console.log('location error (' + error.code + '): ' + error.message);
    appCard.subtitle('location error (' + error.code + '): ' + error.message);
  }
}

function getLocation() {
  console.log("In getLocation");
  // Choose options about the data returned
  var options = {
    enableHighAccuracy: true,
    maximumAge: 10000,
    timeout: 10000
  };

  // Request current position
  navigator.geolocation.getCurrentPosition(locationFound, locationNotFound, options);
}

function searchPokemons() {
  console.log('Finding pokemons');
  appCard.subtitle("Searching...");
  
  getLocation();
}

// execute
searchPokemons();

// Also schedule it to execute periodically
setInterval(searchPokemons, sleepPeriod);

