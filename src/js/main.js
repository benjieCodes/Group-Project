import $ from 'jquery';

// --------------------------------------------PRODUCT info NISA SECTION 1

var proInfoURL = 'https://json-data.herokuapp.com/darts/info';

 $.getJSON(proInfoURL).then(function (response){
  //  console.log(response);
  var title = response.data.product.title;
  //  console.log('title:   ', title);
  var des = response.data.product.description;
  // console.log(des);
  // console.log(infoTemplate(title, des));

  var html = infoTemplate(title, des);

  $(".CompanyInfo").append(html);

});


// generates a html template
function infoTemplate(title, des){
  return `
    <span class="title">${title}</span>
    <p class="description">${des}</p>`
};

// console.log(infoTemplate (info);
// BENJIES CURRENT WORK FOR THE TESTIMONY DIV
// DO NOT ERASE
var randomUserBaseURL = "http://api.randomuser.me/";
var ruGenders = ["?gender=female","?gender=female","?gender=male"];
var ruURL = randomUserBaseURL;

var testimonyURL = 'https://json-data.herokuapp.com/darts/testimonials';

// variables used to call function into objects to pull into this array
var users = [];
var testimonials = [];



// ON PAGE LOAD FUNCTIONS
getUsers();
getTestimonials();
setTimeout( function() {
  buildObject();
}, 1000);




// FUNCTION DEFINITIONS
// Made a function in order to be able to get the correct gender order each time
function getUsers () {
  ruGenders.forEach (function (gender){
  var ruFinalURL = ruURL + gender;
    $.getJSON(ruFinalURL).then(function(response){
      var user = response.results[0];
      users.push(user)
    });
  });
}


function getTestimonials() {
  $.getJSON(testimonyURL).then(function(response){
    response.results.forEach(function(testimonial){
      testimonials.push(testimonial);
    });
  });
};



function buildObject () {

  for (var count = 0; count < users.length; count++) {
    // console.log(count);
    var index = count;
    var user = users[index];
    var testimonial = testimonials[index];

    var object = {
      image: user.picture.large,
      name: testimonial.name,
      review: testimonial.review
    };

    $('.testimonialuser').append(testimonialTemplate(object));
  }

}

function testimonialTemplate (object) {
  return `
          <ul class="users">
            <li class="userImage"><img src="${object.image}"</li>
            <li class="userName">${object.name}</li>
            <li class="userReview">"${object.review}"</li>
          </ul>
  `;
};






// ---------------------------------------------------------------------------------------------------//
//Jeff code for company block
//interpolate company info so it can be accessed

var companyURL = 'https://json-data.herokuapp.com/darts/companies';

var companyTemplate = function(company) {
  return `
  <img src="${company.image_url}" alt="" />
  `
}

$.getJSON(companyURL).then (function(res){
  // console.log(res);
  res.results.forEach(function(company){

    // console.log(company.image_url);
    var html = companyTemplate(company);

    $('.companies').append(html);
  });

  });


//creating a function to run at an interval changing the carousel picture
  function moveCarousel() {
        var first     = $('.first');
        var last      = $('.last');
        var current   = $('.active');
        //next is the immediate next sibling of the displayed photo
        var next      = current.next();

        //remove active class from current photo and add the next photo


        if (current.hasClass('last')) {
          first.addClass('active')
          last.removeClass('active')

        } else {
          current.removeClass('active');
          next.addClass('active');
        }

    };
    setInterval(moveCarousel, 4000);


// creating a function to display a pop up when button 'Add to Cart' is clicked
var popupWindow = $('.popupWindow');
var showPopupButton = $('.showPopup');
var closePopup = $('.closePopup');


//When I click the button it will show up as clicked
showPopupButton.on('click', function () {
  popupWindow.removeClass('hidden');
});

closePopup.on('click', function (){
  popupWindow.addClass('hidden');
})
