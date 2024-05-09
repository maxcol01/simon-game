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
    },50)
}

const randomButton = () =>{
    let randomColor = listColor[Math.floor(Math.random()*4)];
    rendering(randomColor);
    return randomColor
}

//checht the user input
// the idea is to check if the user input is the same as the listButton array
// we want to trigger the function that compares once clicking the button and we will use a 
// counter variable to check if the retained value is the same as the one at the position in the listButton array.
// this avoid using a for loop.
$(".btn").on("click",(event) =>{
    if (counter < listButton.length){
        if(event.target.id == listButton[counter-1]){
            counter++;
        }else{
            $("h1").html("Game Over");
        }
    }else{
        if(event.target.id == listButton[counter-1]){
            alert("ok we need to upgrade")
        }else{
            $("h1").html("Game Over")
        }
    }

    }
)

