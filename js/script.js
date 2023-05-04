$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const age = parseInt($('#age').val());
    if (age >= 18) {
      window.location.href = "legal.html";
    } else {
      window.location.href = "underage.html";
    } 
  });
});