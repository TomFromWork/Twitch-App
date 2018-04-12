var users = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas"
];

var results = [];

function getStatus(i) {
  $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + users[i],
    function(data) {
      console.log(data.display_name);
      console.log(data.status);
      results.push("<div class='row'><h2 id='name'>"
        + data.display_name +"</h2><p id='info'>"
        + data.status +"</p></div>")
    });
}

function getInfo(i) {
  $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + users[i],
    function(data) {
      console.log(data);
    });
}

$(document).ready(function() {

  for (i = 0; i < users.length; i++) {
    (function(x) {
      getStatus(x);
    })(i);
  }

  for (i = 0; i < users.length; i++) {
    (function(x) {
      getInfo(x);
    })(i);
  }

  $(".box").html(results.join(""));
  console.log(results);

});
