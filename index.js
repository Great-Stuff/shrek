const img_wrapper = document.querySelector(".img-wrapper")
const image_count = document.querySelector(".image-count")
var count_image = 0

function count(){
    count_image = img_wrapper.children.length + 1
    image_count.textContent = count_image.toString()
}

document.addEventListener("click", (e) => {
    const percent = Math.round(Math.random()*100)

    if(percent <= 1){
        var img = "images/taylor.png"
    }
    else if (percent <= 5){
        var img = "images/weird-shrek-4.png"
        count()
    }
    else if (percent <= 25){
        var img = "images/silly-shrek-36.png"
        count()
    }
    else if (percent <= 40){
        var img = "images/shrek-bathroom-20.png"
        count()
    }
    else{
        var img = "images/shrek-40.png"
        count()

    }

    const DOM_img = new Image()
    DOM_img.src = img
    DOM_img.draggable = false
    img_wrapper.appendChild(DOM_img)

    const posX = e.clientX - (DOM_img.offsetWidth/2)
    const posY = e.clientY- (DOM_img.offsetHeight/2)

    DOM_img.style = `left:${posX}px; top:${posY}px;`

    if (e.target.classList.contains("clear")) {
        while (img_wrapper.hasChildNodes()){
            img_wrapper.firstChild.remove()
        }
        image_count.textContent = "0"
    }
})
