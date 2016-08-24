/*Nina Kong*/
function value() {
    $('#width').html($('.Position').width());
    $('#height').html($('.Position').height());
    $('#innerWidth').html($('.Position').innerWidth());
    $('#innerHeight').html($('.Position').innerHeight());
    $('#outWidth').html($('.Position').outerWidth());
    $('#outHeight').html($('.Position').outerHeight());
    $('#offset').html($('.Position').offset().top + "," + $('.Position').offset().left);
    $('#position').html($('.Position').position().top + "," + $('.Position').position().left);
}
function updateValue() {
    $('.Position').width(500);
    $('.Position').height(500);
    value();
}
$(document).ready(function () {
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    value();
    $('.Position').click(updateValue);
});
