// detection of which button is pressed and play the corresponding sound
$(".btn").on("click",(event)=>{
    $("h1").html("Level 1")
    let buttonColor = event.target.id;
    let audio = new Audio(`/sounds/${buttonColor}.mp3`)
    audio.play()
})


