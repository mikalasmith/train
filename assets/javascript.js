// 1. Initialize Firebase.
var config = {
    apiKey: "AIzaSyDRxs3dzZ-6bAZ8xgERB5jInU4FPFU3JEc",
    authDomain: "train-schedule-737cc.firebaseapp.com",
    databaseURL: "https://train-schedule-737cc.firebaseio.com",
    projectId: "train-schedule-737cc",
    storageBucket: "train-schedule-737cc.appspot.com",
    messagingSenderId: "989148625323"
};

firebase.initializeApp(config);

// Create a variable to reference the firebase database.
var database = firebase.database();

// 2.Button for submitting train info
$("#add-train-btn").on("click", function (event) {
    console.log("working!");
    event.preventDefault();

    //Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-name-input").val().trim();
    var firstTrain = moment($("#train-time-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#train-frequency-input").val().trim();

    // Creates local "temporary" object for holding employee data -- what is meant by "temporary" object?
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        first: firstTrain,
        frequency: trainFrequency
    };

    // Uploads train info to the firebase database.
    database.ref().push(newTrain);

    // Logs everything to console.
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    // Clears all of the text-boxes.
    $("#train-name-input").val("");
    $("#destination-name-input").val("");
    $("#train-time-input").val("");
    $("#train-frequency-input").val("");
});
 
    // 3.Create Firebase event for adding train info to the database and a row in the html when a user adds an entry
    database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    
    console.log(childSnapshot.val());   // what should I expect to see in the console?

    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;

    // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrain);
    console.log(trainFrequency);

    //








    });