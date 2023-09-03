document.addEventListener("click", (e) => {
    const percent = Math.round(Math.random()*100)

    if (percent <= 4){
        var img = "images/weird-shrek-4.png"
    }
    else if (percent <= 24){
        var img = "images/silly-shrek-36.png"
    }
    else if (percent <= 60){
        var img = "images/shrek-bathroom-20.png"
    }
    else{
        var img = "images/shrek-40.png"
    }

    const DOM_img = new Image()
    DOM_img.src = img
    DOM_img.draggable = false
    document.body.appendChild(DOM_img)

    const posX = e.clientX - (DOM_img.offsetWidth/2)
    const posY = e.clientY- (DOM_img.offsetHeight/2)

    DOM_img.style = `left:${posX}px; top:${posY}px;`

    if (e.target.classList.contains("clear")) {
        document.body.innerHTML = "<button class='clear'>Clear</button>";
    }
})