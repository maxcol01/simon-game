// function used to generate a press and change in color of a button
const listColor = ["blue","green","yellow","red"];
let listButton = [];
let level = 2;
let listUser = [];
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

// create the event that will trigger the game to start and selection of a 
// random button
document.addEventListener("keydown",()=>{
    $("h1").html("Level 1");
    listButton.push(randomButton());   
})



// detection of which button is pressed and play the corresponding sound (using jQuery)
$(".btn").on("click",(event)=>{ 
    let i = 0
    while(i < listButton.length){
        let buttonColor = event.target.id;
        rendering(buttonColor);
        listUser.push(buttonColor);
        console.log(buttonColor)
        console.log(listButton[0])
        if(buttonColor == listButton[i]){
            console.log("je passe ici")
            i++
        }else{
            $("h1").html("Game over");
            break
        }
    }
    $("h1").html(`Level ${level++}`);
    setTimeout(() =>listButton.push(randomButton()),1000)
    // once clicked that we need to check !
})
