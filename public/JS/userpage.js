function getusername() {
  $.get("/user", username);


  function username(data) {
    console.log(data);
    $("#displayName").append("<h4 class=card-title>" + data.username + "</h4>")

  }
}


function getrecipes() {
  $.get("/api/recipes", favoritedrecipes)

  function favoritedrecipes(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var recipecontainer = $("<div class = reccontainers>")
      recipecontainer.append("<p></p>");
      recipecontainer.append("<img class='recipeimg' src = " + data[i].thumbnail + ">");
      recipecontainer.append("<p></p>");
      recipecontainer.append("<a class = 'links' href= '" + data[i].href + "'target='_blank'>" + data[i].title + "</a>");
      recipecontainer.append("<p></p>")
      recipecontainer.append(data[i].ingredients);
      // recipecontainer.prepend(data.thumbnail);
      $("#display").append(recipecontainer);
    }
  }
}

function getrest() {
  $.get("/api/restaurants", favrests)

  function favrests(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var restcontainer =$("<div class = reccontainers>")
      restcontainer.append("<p></p>");
      restcontainer.append("<a class='links' href='"+ data[i].link +"'target='_blank'>" + data[i].name + "</a>");
      restcontainer.append("<p></p>");
      restcontainer.append(data[i].location);

      $("#restdisplay").append(restcontainer)

    }
  }
}

getusername();
getrecipes();
getrest();
