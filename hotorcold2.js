/*jslint browser: true*/
/*global $, jQuery*/

var randomNum = Math.floor(Math.random()*101);
var counter   = 0;
var currValue = 0;
var lastValue = 0;

$(document).ready(function(){


    var generate = function() {
        randomNum = Math.floor(Math.random()*101);
        counter = 0;
        var currValue=0;
        var lastValue=0;
        input.value = "";
        return false;
    };

    
    
    
    var evaluate = function() {
        
        counter++;
        currValue = $("#guess").val();

        if (counter >= 10) { 
            $('.output').html("You lost. Dust yourself off and try again, try again.");
            $('body').removeClass();
            $('body').addClass("lost");
            $(".test").html("The answer is " +randomNum);
           return;
 
}
        
        else if (currValue === randomNum) {
                $(".output").html("You got it!");
                $('body').removeClass();
                $('body').addClass("celebrate");
                return;
            }
        else if(counter == 1) {
            lastValue = currValue;
            var check = Math.abs(currValue - randomNum);
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
                var lastCheck = Math.abs(currValue - randomNum);
                var prevCheck = Math.abs(lastValue - randomNum);
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
        lastValue = currValue;
}

        
    };

    var displayTries = function() {
        numTries = 10 - counter;
        $('#numTries').html(numTries);
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
        evaluate();
        displayTries();
        return false;
    };    

    
    $('#submit').click(stupefy);
    $('#new').click(generate);
    
});
