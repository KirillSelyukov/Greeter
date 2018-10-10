var g = g$('john', 'doe');

console.log();
$('#login').click(function() {
  console.log('click');
  $('#logindiv').hide();
  var language = $('#lang').val();
  g.setLang(language)
    .HTMLGreeting('#greeting', true)
    .log();
});
