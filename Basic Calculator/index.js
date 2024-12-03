const Findbuttons = document.getElementsByClassName("button");
const displayHTML = document.querySelector(".display");
var reset = false;

/*Notes to self: 
1.queryselector(selector) returns the first element that match the selector. 
 ~to use it, the selector need to be fill in like in css.(add "." to element class, "#" to id etc.)
  EX: queryselector(".button")
2.getElementsByClassName(class) returns an array
 ~no need to add "." to the front of the class. 
*/


for(var i=0;i<Findbuttons.length;i++){
    Findbuttons[i].addEventListener('click',handleClick);
}

/*Notes to self: 
1. First element in an array is [0], so the for loop need to start with i=0.
2. Total 16 elements with the class button in html, so the buttons.length = 16, and the last 
    element in the array [buttons] is i=15 (as first starts with zero).
3. So the stop point of the for loop is [i < buttons.length], it stops execute when i = 16 (16 not included).
*/

function handleClick(){

    buttonInnerHTML = this.innerHTML;

    switch(buttonInnerHTML){
        case "+":
            var button_class = ".press_plus";
            if(reset){reset = false;} //no need to reset if operator pressed
            displayHTML.innerHTML = displayHTML.innerHTML + buttonInnerHTML;
            break;
        case "-":
            var button_class = ".press_minus";
            if(reset){reset = false;} //no need to reset if operator pressed
            displayHTML.innerHTML = displayHTML.innerHTML + buttonInnerHTML;
            break;
        case "*":
            var button_class = ".press_multi";
            if(reset){reset = false;} //no need to reset if operator pressed
            displayHTML.innerHTML = displayHTML.innerHTML + buttonInnerHTML;
            break;
        case "/":
            var button_class = ".press_divide";
            if(reset){reset = false;} //no need to reset if operator pressed
            displayHTML.innerHTML = displayHTML.innerHTML + buttonInnerHTML;
            break;
        case "back":
            var button_class = ".press_"+buttonInnerHTML;
            displayHTML.innerHTML = displayHTML.innerHTML.slice(0, -1);
            break;
        case "=":
            var button_class = ".press_equal";
            if(displayHTML.innerHTML!=""){
                displayHTML.innerHTML = eval(displayHTML.innerHTML);
                reset = true;
            }
            break;
        default:
            var button_class = ".press_"+buttonInnerHTML;

            if(reset){
                displayHTML.innerHTML = "";
                reset = false;
            } 
            //reset calculator since previous calculation already complete

            displayHTML.innerHTML = displayHTML.innerHTML + buttonInnerHTML;
            break;
    }

    ButtonAnimate(button_class);
}

/*Notes to self: 

*/


//Animation
function ButtonAnimate(key){
    var Activebutton = document.querySelector(key);
    Activebutton.classList.add("pressed");

    setTimeout(function(){
        Activebutton.classList.remove("pressed");
    },100);
}