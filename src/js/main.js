import $ from "jquery";

// BENJIES CURRENT WORK FOR THE TESTIMONY DIV
// DO NOT ERASE
var randomUserBaseURL = "http://api.randomuser.me/";
var ruUserAmount = "?results=3"; // Pulling 3 users
var ruFinalURL = randomUserBaseURL + ruUserAmount;

var testimonyURL = 'https://json-data.herokuapp.com/darts/testimonials';

// Pulling API using .getJSON
$.getJSON(ruFinalURL).then(function (response){
    response.results.forEach(function (res){
      var html = getUser(res);
      $('.Testimonial').append(html);
    })
$.getJSON(testimonyURL).then(function (response){
  console.log(response);
    response.results.filter(function (res){
      var html = getTestimony(res);
      $('.users').append(html);
    })
})

});

function getUser (user) {
  return `
          <ul class="users">
          <li><img src=${user.picture.large}></li>
          </ul>
  `;
}

function getTestimony (testimony) {
  return `
          <li>${testimony.name}</li>
          <li>${testimony.review}</li>
  `;
}



// Don't know who's work this is but I kept it on there.
$('.carousel').carousel();
