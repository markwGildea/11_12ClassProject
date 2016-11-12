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
    var role = "";
    var startDate = "";
    var monthRate = "";

    // Capture Button Click
    $("#submit").on("click", function() {

      // Grabbed values from text boxes
      name = $("#ee-name").val().trim();
      role = $("#role").val().trim();
      startDate = $("#start-date").val().trim();
      monthRate = $("#month-rate").val().trim();

      // Code for handling the push
      database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        monthRate: monthRate
      });

      // Don't refresh the page!
      return false;
    });

    database.ref().on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().name);
      console.log(childSnapshot.val().role);
      console.log(childSnapshot.val().startDate);
      console.log(childSnapshot.val().monthRate);


      // full list of items to the well
      $("#tbody").append("<tr><td> " + childSnapshot.val().name +
        " </td><td> " + childSnapshot.val().role +
        " </td><td id='startDate'> " + childSnapshot.val().startDate +
        " </td><td></td><td id='monthRate'> " + childSnapshot.val().monthRate + " </td><td></td></tr>");

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("value", function(snapshot) {

      // Log everything that's coming out of snapshot
      console.log(snapshot.val());
      console.log(snapshot.val().name);
      console.log(snapshot.val().role);
      console.log(snapshot.val().startDate);
      console.log(snapshot.val().monthRate);

      // Change the HTML to reflect
      // $("#name-display").html(snapshot.val().name);
      // $("#email-display").html(snapshot.val().role);
      // $("#age-display").html(snapshot.val().startDate);
      // $("#comment-display").html(snapshot.val().monthRate);

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
