$(document).ready(function(){
    $("#firstButton").click(function(){
       $("#myDiv").load("http://api.openweathermap.org/data/2.5/weather?q=Helsinki&units=metric&mode=JSON&APPID=ff64c247a136f706923d1ee0d55d71e2", function(response, status, xhr){
            if(status == "success")
                console.log("External content loaded successfully!");
            if(status == "error")
                console.log("Error loading external content: " + xhr.status + " " + xhr.statusText);
        });
    });

    $("#secondButton").click(function(){
        console.log("Second button clicked!");
        $("h1").html("New heading");
    });

    $("#thirdButton").click(function(){
        console.log("Third button clicked!");
        $("h1").hide();
        $("h2").slideUp();
        $("h2").slideDown();
    });

    $("#fourthButton").click(function(){
        console.log("Fourth button clicked!");
        var newElement = $("<p>New paragraph</p>");
        newElement.css("color", "blue");
        newElement.insertAfter("#myDiv");
    });

    $("li").click(function(){
        console.log("List item clicked!");
        $(this).css("color", "red");
    });
    
});