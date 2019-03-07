var currentTeam = {};

$(document).ready( function() {
  $('.team-item').on('click', function() {
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
}); 
