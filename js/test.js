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

/* Get info on streamers */
function getInfo() {
  for (i = 0; i < users.length; i++) {
    $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/" + users[i]).done(function(data) {
      /* Check streamers status online and append html */
      $.getJSON("https://wind-bow.glitch.me/twitch-api/streams/" + data.name).done(function(status) {
        if (status.stream !== null) {
          $(".box").append("<a href='" + data.url +"' class='list-group-item list-group-item-action flex-column online'>" +
            "<div class='d-flex justify-content-start w-100'>" +
            "<div class='img-box align-self-start'><img src='" + data.logo + "' class='img-thumbnail img-fluid float-left'></div>" +
            "<div class='streamInfo'><h5 class='name mb-1'>" +
            data.display_name + "</h5><p class='info mb-1'>" +
            data.status + "</p><p class='mb-1'>Online!</p></div></div></a>");
        } else {
          $(".box").append("<a href='" + data.url +"' class='list-group-item list-group-item-action flex-column offline'>" +
            "<div class='d-flex justify-content-start w-100'>" +
            "<div class='img-box align-self-start'><img src='" + data.logo + "' class='img-thumbnail img-fluid float-left'></div>" +
            "<div class='streamInfo w-100 justify-content-between'><h5 class='name mb-1'>" +
            data.display_name + "</h5><p class='mb-1'>Offline</p><p class='info mb-1'>" +
            data.status + "</p></div></div></a>");
        }
      });
    });
  }
}

$(document).ready(function() {
  getInfo();

  $("#all").on('click', function() {
    $('.offline').show();
    $('.online').show();
  });

  $("#online").on('click', function() {
    $('.offline').hide();
    $('.online').show();
  });

  $('#offline').on('click', function() {
    $('.offline').show();
    $('.online').hide();
  })
});
