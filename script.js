// function used to generate a press and change in color of a button
const listColor = ["blue","green","yellow","red"];
let listButton = [];
let listUser = [];
let level = 1;

const rendering = (color) =>{
    $(`.${color}`).addClass("pressed");
    let audio = new Audio(`/sounds/${color}.mp3`);
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

// create the event that will trigger the game to start and selection of a 
// random button
document.addEventListener("keydown",()=>{
    $("h1").html("Level 1");
    listButton.push(randomButton());
})

// detection of which button is pressed and play the corresponding sound (using jQuery)
$(".btn").on("click",(event)=>{ 
    let buttonColor = event.target.id;
    rendering(buttonColor);
    listUser.push(buttonColor);
})
