// function used to generate a press and change in color of a button
const listColor = ["blue","green","yellow","red"];

let level = 2;
let listUser = [];
listButton = [];
let counter = 1;
document.addEventListener("keydown",()=>{
    $("h1").html("Level 1");
    listButton.push(randomButton()); 
})


const rendering = (color) =>{
    $(`.${color}`).addClass("pressed");
    let audio = new Audio(`./sounds/${color}.mp3`);
    audio.play();
    setTimeout(()=>{
        $(`.${color}`).removeClass("pressed");
    },100)
}

const randomButton = () =>{
    let randomColor = listColor[Math.floor(Math.random()*4)];
    rendering(randomColor);
    return randomColor
}

const gameOver = ()=>{
    $("h1").html("Game Over");
    $("body").addClass("game-over");
    let audio = new Audio("./sounds/wrong.mp3");
    audio.play();
}


// OK the test for a length of one works but now we need to increase the size
$(".btn").on("click",(event) =>{
    console.log(counter);
    console.log(listButton);
    if (counter < listButton.length){
        if(event.target.id == listButton[counter-1]){
            counter++;
        }else{
            gameOver();
        }
    }else{
        if(event.target.id == listButton[counter-1]){
            //alert("ok we need to upgrade")
            $("h1").html(`Level ${level++}`);
            counter = 1;
            listButton.push(randomButton()); 
        }else{
            gameOver();
        }
    }

    }
)

