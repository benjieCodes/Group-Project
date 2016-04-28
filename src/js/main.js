import $ from 'jquery';

// BENJIES CURRENT WORK FOR THE TESTIMONY DIV
// DO NOT ERASE
var randomUserBaseURL = "http://api.randomuser.me/";
var ruGenders = ["?gender=female","?gender=male","?gender=male"];
var ruURL = randomUserBaseURL;

var testimonyURL = 'https://json-data.herokuapp.com/darts/testimonials';

// variable used to push each user image to this array
var users = [];

setTimeout(function (){
    console.log('users', users);
}, 1000);
// Made a function in order to be able to get the correct gender order each time
ruGenders.forEach (function (gender){
    var ruFinalURL = ruURL + gender;
    $.getJSON(ruFinalURL).then(function(response){
      var user = response.results[0];
      users.push(user)
    });
});
// variable used to push each testimonial object to this array
var testimonials = [];

var companyURL = 'https://json-data.herokuapp.com/darts/companies';

var testimonyURL = 'https://json-data.herokuapp.com/darts/testimonials';

// Pulling API using .getJSON
// $.getJSON(ruFinalURL).then(function (response){
//     response.results.forEach(function (res){
//       var html = getUser(res);
//       $('.Testimonial').append(html);
//     })

$.getJSON(testimonyURL).then(function (response){
  console.log(response);
    response.results.filter(function (res){
      var html = getTestimony(res);
      $('.users').append(html);
    })
})

// });


// on page load
getTestimonials();


// it takes longer for an API request compared to just a variable
setTimeout( function() {
  console.log('testimonials', testimonials);
}, 1000);

// defining function
function getTestimonials() {
  $.getJSON(testimonyURL).then(function(response){
    response.results.forEach(function(testimonial){
      testimonials.push(testimonial);
    });
  });
};

function getTestimony (testimony) {
  return `
          <li>${testimony.name}</li>
          <li>${testimony.review}</li>
  `;
}
// ---------------------------------------------------------------------------------------------------//
//Jeff code for company block
//interpolate company info so it can be accessed
var companyTemplate = function(company) {
  return `
  <div class= companies>
  <img src="${company.image_url}" alt="" />
  </div>
  `
}

$.getJSON(companyURL).then (function(res){
  // console.log(res);
  res.results.forEach(function(company){


    // console.log(company.image_url);
    var html = companyTemplate(company);
    $('.container').append(html);
  })
