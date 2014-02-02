/*jslint browser: true*/
/*global $, jQuery*/

var randomNum = Math.floor(Math.random()*101);
var listOfGuesses = [];


$(document).ready(function(){


    var generate = function() {
        randomNum = Math.floor(Math.random()*101);
        listOfGuesses.length = 0;
        input.value = "";
        return false;
    };

    
    
    
    var evaluate = function() {
        var numGuesses = listOfGuesses.length;
        if(numGuesses > 10) {
           $('.output').html("You lost. Dust yourself off and try again, try again.");
            $('body').removeClass();
            $('body').addClass("lost");
            $(".test").html("the answer is " +randomNum);
           return;
        }
        else {
            var lastGuess = listOfGuesses[listOfGuesses.length - 1];
            if (lastGuess === randomNum) {
                $(".output").html("You got it!");
                $('body').removeClass();
                $('body').addClass("celebrate");
                return;
            }
            if(numGuesses == 1) {
                var check = Math.abs(lastGuess - randomNum);
                if(check < 10) {
                    $('.output').html("Fire");
                    $('body').addClass("fire");
                }
                else if(check > 10 && check < 20) {
                    $('.output').html("Lukewarm");
                    $('body').addClass("warm");
                }
                else {
                    $('.output').html("New Ice Age");
                    $('body').addClass("cold");
                }
            }
            else {
                var previousGuess = listOfGuesses[listOfGuesses.length - 2];
                var lastCheck = Math.abs(lastGuess - randomNum);
                var prevCheck = Math.abs(previousGuess - randomNum);
                if(lastCheck < prevCheck) {
                    if (lastCheck < 5) {$('.output').html("You're so close!");
                                        $('body').removeClass();
                                        $('body').addClass("soclose");
                                       }
                    else {$('.output').html("Getting warmer");
                          $('body').removeClass();
                          $('body').addClass("warm");
                         }
                }
                else {
                    $('.output').html("Getting colder");
                    $('body').removeClass();
                    $('body').addClass("cold");
                }
            }
        }
    };

    var displayTries = function() {
        var numberOfTries = listOfGuesses.length;
        $('#numTries').html(numberOfTries);
        return false;
    };
    
    var stupefy = function() {
        var number = $("#guess").val();
        if(isNaN(number)) {
          alert("The entry '"+number+"' is not a number");
          return false;
        }
        if(number>100 || number<1){
          alert("Enter a number between 1 and 100!");
          return false;
        }
        var result = parseInt(number);
        
        listOfGuesses.push(result);
        displayTries();
        evaluate();
        return false;
    };    

    
    $('#submit').click(stupefy);
    $('#new').click(generate);
    
});
