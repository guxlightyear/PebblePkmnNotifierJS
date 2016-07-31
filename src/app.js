var UI = require('ui');

var sleepPeriod = 10 * 1000; // 10 seconds
var appCard = new UI.Card({
  title:'Pokemon GO'
});
appCard.show();


function searchPokemons() {
  console.log('Finding pokemons');
  appCard.subtitle("Searching...");
}

setInterval(searchPokemons, sleepPeriod);

