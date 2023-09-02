document.addEventListener("mouseup", (e) => {
    const percent = Math.round(Math.random()*100)
    const posX = e.clientX
    const posY = e.clientY

    if (percent <= 4){
        document.body.innerHTML += `<img src='images/weird-shrek-4.png' draggable='false' style='left:${posX}px; top:${posY}px;'>`
    }
    else if (percent <= 24){
        document.body.innerHTML += `<img src='images/silly-shrek-36.png' draggable='false' style='left:${posX}px; top:${posY}px;'>`
    }
    else if (percent <= 60){
        document.body.innerHTML += `<img src='images/shrek-bathroom-20.png' draggable='false' style='left:${posX}px; top:${posY}px;'>`
    }
    else{
        document.body.innerHTML += `<img src='images/shrek-40.png' draggable='false' style='left:${posX}px; top:${posY}px;'>`
    }

    if (e.target.classList.contains("clear")) {
        document.body.innerHTML = "<button class='clear'>Clear</button>";
    }
})