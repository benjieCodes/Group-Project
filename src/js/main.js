import $ from "jquery";


// Working on the Testimony div
var randomUserBaseURL = "http://api.randomuser.me/";
var ruUserAmount = "?results=3"; // Pulling 3 users
var ruFinalURL = randomUserBaseURL + ruUserAmount;

// Pulling API using .getJSON
$.getJSON(ruFinalURL).then(function (response){
  console.log(response);
    response.results.forEach(function (res){
      console.log(res.picture.large);
    })

});
