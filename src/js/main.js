import $ from 'jquery';

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
//Jeff code for company block
$.getJSON(companyURL).then (function(res){
  // console.log(res);
  res.results.forEach(function(company){

    console.log(company.image_url);
    // var html = getCompany(res)

  })


});


// Don't know who's work this is but I kept it on there.
// $('.carousel').carousel();
