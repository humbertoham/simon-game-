var colors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var playerPattern = [];
var level = 1;
var loop = 0;
var input = 0;
var counter = 0;
function chooseColor(l) {


    gamePattern[l] = colors[nextSequence()];


    return gamePattern[l];
}
function nextSequence() {

    var r = Math.random();
    var random = Math.floor(r * 4);
    return random;
}
    function task(level){
        if(loop < level){
        setTimeout(function(){
            
            var pattern = chooseColor(loop);
        switch (pattern) {
                case "green":
                    $("#green").addClass("pressed");
                    setTimeout(function () {
                        $("#green").removeClass("pressed");
                    }, 300);
                    var green = new Audio('sounds/green.mp3');
                    green.play();
                    break;
                case "red":
                    $("#red").addClass("pressed");
                    setTimeout(function () {
                        $("#red").removeClass("pressed");
                    }, 300);
                    var red = new Audio('sounds/red.mp3');
                    red.play();
                    break;
                case "blue":
                    $("#blue").addClass("pressed");
                    setTimeout(function () {
                        $("#blue").removeClass("pressed");
                    }, 300);
                    var blue = new Audio('sounds/blue.mp3');
                    blue.play();
                    break;
                case "yellow":
                    $("#yellow").addClass("pressed");
                    setTimeout(function () {
                        $("#yellow").removeClass("pressed");
                    }, 300);
                    var yellow = new Audio('sounds/yellow.mp3');
                    yellow.play();
                    break;


            }
            loop++;

                task(level);
           
}, 800);
        
    } }
function gameON(){
        $("h1").text("level " + level);
        task(level);

}

        $(".btn").click(function (event) {

        var eventID = event.target.id
            if(input < gamePattern.length){
         switch (eventID) {
            case "green":
            $("#green").addClass("pressed");
            setTimeout(function () {
                $("#green").removeClass("pressed");
            }, 200);
            var green = new Audio('sounds/green.mp3');
            green.play();
            
             playerPattern[input] = "green";
            
            
           
            break;
          case "red":
            $("#red").addClass("pressed");
            setTimeout(function () {
                $("#red").removeClass("pressed");
            }, 200);
            var red = new Audio('sounds/red.mp3');
            red.play();
            playerPattern[input] = "red";
            
            break;
            case "blue":
            $("#blue").addClass("pressed");
            setTimeout(function () {
                $("#blue").removeClass("pressed");
            }, 200);
            var blue = new Audio('sounds/blue.mp3');
            blue.play();
            playerPattern[input] = "blue";
            
            break;
            case "yellow":
            $("#yellow").addClass("pressed");
            setTimeout(function () {
                $("#yellow").removeClass("pressed");
            }, 200);
            var yellow = new Audio('sounds/yellow.mp3');
            yellow.play();
            playerPattern[input] = "yellow";
            
            break;


    }
        input++;
    if(input === level){
        game();
    } 
}



});
    $(document).keypress(function () {
        
       
        gameON();



       

});
    

    function game(){
    for(var q = 0; q < level; q++){

        if(playerPattern[q] != gamePattern[q]){
            counter++;

        } 
    }
    
    if(counter != 0){
        $("h1").text("Wrong!!!");
        var wrong = new Audio('sounds/wrong.mp3');
            wrong.play();
            $("body").addClass("red"); 
            setTimeout(function() {
            ;$("body").removeClass("red"); 
        }, 200);
        setTimeout(function() {
            location.reload();
        }, 1000);

    } else{
        level++;
         loop = 0;
         input = 0;
        gameON();


    }


    }

    