//Clip Area Generator//
let generateButton = document.querySelector(".generate"); 
let clipArea = document.querySelector(".clip-Area");

/*
Only one element with the class name "generate" & "clip-Area", so instead of getElementbyClassName that returns
an array that capture all elements, querySelector was used.
It returns the first element that captures.
As querySelector is a general selector, need to put "." in front of the class name to represent this is a class name.
*/

//Add click event to the button
generateButton.addEventListener('click',function(){

    //get input value
    let xInput = document.getElementById("maxWidth"); 
    let yInput = document.getElementById("maxHeight"); 

    if(xInput.value){
        xMax = xInput.value;
    }else{
        xMax = clipArea.offsetWidth;
    }

    if(yInput.value){
        yMax = yInput.value;
    }else{
        yMax = clipArea.offsetHeight;
    }

    let verticesNum = Math.floor(Math.random()*100)+3; //Generate a random number of vertices,minimum 3, maximum 103.
    var coords = []; //Define array for the coordinates

    //for loop to get the coordinate of each vertices.
    for(i=1;i<=verticesNum;i++){

        //limit both coordinate to within 500px.
        let xran = Math.floor(Math.random()* xMax)+1;
        let yran = Math.floor(Math.random()* yMax)+1;

        //push the coordinates into array in the format of {(x-coordinate)px (y-coordinate)px}.
        coords.push(`${xran}px ${yran}px`);
    }

    //change value in clippath
    clipArea.style.clipPath= `polygon(${coords})`;

    //Print Output
    let output = `clip-path: polygon(${coords});`
    document.getElementById("result").innerHTML=output;
})

