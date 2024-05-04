// create the event that will trigger the game to start
document.addEventListener("keydown",()=>{
    $("h1").html("Level 1");
    // choice of random starting point --> choice among 4 an play the corresponding sound.
    const listColor = ["blue","green","yellow","red"];
    let randomColor = listColor[Math.floor(Math.random()*4)];
    $(`.${randomColor}`).addClass("pressed");
    let audio = new Audio(`/sounds/${randomColor}.mp3`);
    audio.play();
    setTimeout(()=>{
        $(`.${randomColor}`).removeClass("pressed");
    },50)
})

// detection of which button is pressed and play the corresponding sound (using jQuery)
$(".btn").on("click",(event)=>{ 
    let buttonColor = event.target.id;
    let audio = new Audio(`/sounds/${buttonColor}.mp3`);
    audio.play();
    // when pressed, do not forget to indicate it using pressed class.
})


