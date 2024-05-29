
const listColor = ["blue","green","yellow","red"];

let level = 2;
let counter = 1;
listButton = [];

document.addEventListener("keydown",()=>{
    $("h1").html("Level 1");
    listButton.push(randomButton()); 
    if($("body").hasClass("game-over")){
        $("body").removeClass("game-over")
    }

})


const rendering = (color, time) =>{
    $(`.${color}`).addClass("pressed");
    let audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
    setTimeout(()=>{
        $(`.${color}`).removeClass("pressed");
    },time)
}

const randomButton = () =>{
    let randomColor = listColor[Math.floor(Math.random()*4)];
    rendering(randomColor, 200);
    return randomColor
}

const gameOver = ()=>{
    $("h1").html("Game Over ! Press a key to start again");
    $("body").addClass("game-over");
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
    level = 2;
    counter = 1;
    listButton = [];
}


$(".btn").on("click",(event) =>{
    rendering(event.target.id,100)
    if (counter < listButton.length){
        if(event.target.id == listButton[counter-1]){
            counter++;
            
        }else{
            gameOver();
            listButton = [];
            level = 2;
        }
    }else{
        if(event.target.id == listButton[counter-1]){
            //alert("ok we need to upgrade")
            $("h1").html(`Level ${level++}`);
            counter = 1;
            setTimeout(()=>listButton.push(randomButton()), 400 )
            
        }else{
            gameOver();
            listButton = [];
            level = 2;
        }
    }

    }
)

