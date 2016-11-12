var config = {
  apiKey: "AIzaSyDlJyN9VI1uHG-gx6ob0NuH5bZ6X4JSRVs",
  authDomain: "class-app-project.firebaseapp.com",
  databaseURL: "https://class-app-project.firebaseio.com",
  storageBucket: "class-app-project.appspot.com",
  messagingSenderId: "80889691492"
};
firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
    var name = "";
    var email = "";
    var age = 0;
    var comment = "";

    // Capture Button Click
    $("#add-user").on("click", function() {

      // Grabbed values from text boxes
      name = $("#name-input").val().trim();
      email = $("#email-input").val().trim();
      age = $("#age-input").val().trim();
      comment = $("#comment-input").val().trim();

      // Code for handling the push
      database.ref().push({
        name: name,
        email: email,
        age: age,
        comment: comment
      });

      // Don't refresh the page!
      return false;
    });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().email);
      console.log(snapshot.val().age);
      console.log(snapshot.val().comment);

      // Change the HTML to reflect
      $("#name-display").html(snapshot.val().name);
      $("#email-display").html(snapshot.val().email);
      $("#age-display").html(snapshot.val().age);
      $("#comment-display").html(snapshot.val().comment);

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
