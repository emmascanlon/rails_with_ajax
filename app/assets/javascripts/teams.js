var currentTeam = {};
var showForm = false;

$(document).ready( function() {
  $(document).on('click', '.team-item', function() {

    currentTeam.id = this.dataset.id
    $.ajax({
      url: '/teams/' + currentTeam.id + '/players',
      method: "GET",
      dataType: "JSON"
    }).done( function(players) {
      var list = $('#players');
      list.empty();
      players.forEach( function(play) {
        var li = '<li data-player-id="' + play.id + '">' + play.name + ' - #'+ play.number + '</li>'
        list.append(li)
      });
    });
  });
  $('#toggle').on('click', function() {
    showForm = !showForm;
    $('#team-form').remove()
    $('#team-list').toggle()
  if (showForm) {
    $.ajax({
      url: '/team_form',
      method: 'GET'
    }).done( function(html) {
      $('#toggle').after(html);
    });
  }
}); 
$(document).on('submit', '#team-form form', function(e) {
  toggle();
  e.preventDefault();
  var data = $(this).serializeArray();
  $.ajax({
    url: '/teams',
    type: 'POST',
    dataType: 'JSON',
    data: data
  }).done( function(team) {
    var t = '<li class="team-item" data-id"' + team.id + '"data-name="' + team.name + '">' + team.name 
    + '-' + team.city + '</li>';
  $('teams-list').append(t);
  toggle()
  }).fail( function(err) {
    alert(err.responseJSON.errors)
  });
});

function toggle() {
  debugger
  showForm = !showForm;
  $('#team-form').remove()
}
  });
