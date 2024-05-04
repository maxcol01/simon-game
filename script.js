// function used to generate a press and change in color of a button
const listColor = ["blue","green","yellow","red"];
let listButton = [];
let listUser = [];
const randomButton = () =>{
    let randomColor = listColor[Math.floor(Math.random()*4)];
    $(`.${randomColor}`).addClass("pressed");
    let audio = new Audio(`/sounds/${randomColor}.mp3`);
    audio.play();
    setTimeout(()=>{
        $(`.${randomColor}`).removeClass("pressed");
    },50)
    return randomColor
}

// create the event that will trigger the game to start and selection of a 
// random button
document.addEventListener("keydown",()=>{
    $("h1").html("Level 1");
    let seleltButton = randomButton();
    listButton.push(seleltButton);
    console.log(listButton);
})

// detection of which button is pressed and play the corresponding sound (using jQuery)
$(".btn").on("click",(event)=>{ 
    let buttonColor = event.target.id;
    let audio = new Audio(`/sounds/${buttonColor}.mp3`);
    audio.play();
    // when pressed, do not forget to indicate it using pressed class.
    listUser.push(buttonColor);
    console.log(listUser);
})


