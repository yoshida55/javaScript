
$(document).ready(function() {
  $('.thumbnail').click(function() {
    var newSrc = $(this).attr('src');
    $('#mainImage').attr('src', newSrc);
  });
});
