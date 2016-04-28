import $ from "jquery";

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


// $.getJSON(ruFinalURL).then(function (response){
//       var users = response.results;
//       console.log('users:', users);
//       users.forEach(function (user){
//         console.log(user)
//       });
//     });

//     $.getJSON(testimonyURL).then(function (response){
//         var testimonials = response.results;
//         console.log('testimonials: ', testimonials);
//       });
// });
      // var html = userTemplate(user);
      // $('.Testimonial').append(html);
    // I want to grab each testimonial and put one testimony on each user
    // testimonials.forEach(function (testimonial){
//       var html = testimonyTemplate(testimonial);
//       $('.users').append(html);
//     })
// })
//
// });
//
// function userTemplate (user) {
//   return `
//           <ul class="users">
//           <li><img src=${user.picture.large}></li>
//           </ul>
//   `;
// }
//
// function testimonyTemplate (testimony) {
//   return `
//           <li>${testimony.name}</li>
//           <li>${testimony.review}</li>
//   `;
// }
//
// var testimonyCOunt = 0;
// var numOfUsers = 3;
// function placeTestimony () {
//   if (count < numOfUsers.length) {
//     console.log('function called');
//     var current = testimonials.indexOf(count)
//     console.log(current);
//     count = count + 1;
//     console.log(count);
//   }
//   else {
//     console.log('testimonials are done');
//   }
// }
//
//
//
// // Don't know who's work this is but I kept it on there.
// $('.carousel').carousel();
