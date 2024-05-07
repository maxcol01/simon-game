// FURTHER INSTRUCTIONS
//RETHINK THE ENTIRE LOGIC -> FUNCTIONS ?

// function used to generate a press and change in color of a button
const listColor = ["blue","green","yellow","red"];

let level = 2;
let listUser = [];
listButton = [];
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
$(".btn").on("click",(event) =>{
    let buttonColor = event.target.id;
    rendering(buttonColor);
    // need a way to iterate over the listButton array
    console.log(listButton)
    console.log(buttonColor)
    if (buttonColor == listButton[0]){
        $("h1").html("Level 2");
        setTimeout(() => listButton.push(randomButton()),1000)
    }else{
        $("h1").html("Game over");
        startGame();
    }
})

