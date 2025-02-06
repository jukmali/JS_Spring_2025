function myFirstFunction(number) {
    alert("My first JS function " + number);

    return 2 * number;
}

function myFunction(){
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById("demo").innerHTML = z;
}

function showXY(event){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ",<br> Y coords: " + y;
    document.getElementById("coordinates").innerHTML = coords;
}   

function buttonFunction(){
    alert("Button clicked");
}   