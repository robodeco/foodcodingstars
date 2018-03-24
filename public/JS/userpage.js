$.get("/user", username);

function username(data) {
  $("#displayName").append("<h4 class=card-title>" + data.username +"</h4>")
}
