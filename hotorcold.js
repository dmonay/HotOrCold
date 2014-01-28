/*jslint browser: true*/
/*global $, jQuery*/

var randomNum = Math.floor(Math.random()*101);
var listOfGuesses = [];

$(document).ready(function(){


    var generate = function() {
        randomNum = Math.floor(Math.random()*101);
        $(".test").html(randomNum);
        return false;
    };

    
    
    
    var evaluate = function() {
        var lastGuess = listOfGuesses[listOfGuesses.length - 1];
        var previousGuess = listOfGuesses[listOfGuesses.length - 2];
        if (isNaN(lastGuess)) {$('.output').html("come on");}
        else if (lastGuess === randomNum) {$(".output").html("You got it!");}
        else if (listOfGuesses.length === 1) {
            if ((Math.abs(lastGuess - randomNum) < 20)) {$('.output').html("Lukewarm");}
            else if ((Math.abs(lastGuess - randomNum) < 10)) {$('.output').html("Fire");}
            else {$('.output').html("New Ice Age");}
        }
        else if (1 > listOfGuesses.length > 10) {
            if ((Math.abs(lastGuess - randomNum) < Math.abs(previousGuess - randomNum))) {$('.output').html("Getting warmer");}
            else {$('.output').html("Getting colder");}}
        else  {$('.output').html("You lost. Dust yourself off and try again, try again.");}
        return false;
    };

    var displayTries = function() {
        var numberOfTries = listOfGuesses.length + 1;
        $('.numTries').html(numberOfTries);
        return false;
    };
    
    var stupefy = function() {
        var result = parseInt($("#guess").val());
        listOfGuesses.push(result);
        displayTries;
        evaluate;
        return false;
    };    
    
 /*   var firstGuess = function() {
        if ((Math.abs(lastGuess - randomNum) < 20)) {$('.output').html("Lukewarm");}
        else if ((Math.abs(lastGuess - randomNum) < 10)) {$('.output').html("Fire");}
        else ((Math.abs(lastGuess - randomNum) < 20)) {$('.output').html("New Ice Age");}
    }
    
    var middleGuess = function() {
        if ((Math.abs(lastGuess - randomNum) < Math.abs(previousGuess - randomNum))) {$('.output').html("Getting warmer");}
        else ((Math.abs(lastGuess - randomNum) > Math.abs(previousGuess - randomNum))) {$('.output').html("Getting colder");}        
    }
    
  */  
    
    
    
    
    
    
    
    
        /*    if (result === randomNum) {
           
            $(".output").html("You got it!");
        }
    
        else if (Math.abs(result - randomNum) < 20) { $('.output').html("getting warmer");}
        else if (Math.abs(result - randomNum) > 20) { $('.output').html("getting colder");}
        else {
            $('.output').html("not even close");
        }
        return false; */
    
    
    
    
    var show = function() {
        $(".test").html(randomNum);
        return false;
    };
    

    
    $('#submit').click(stupefy);
    $('#display').click(show);
    $('#new').click(generate);
    
});