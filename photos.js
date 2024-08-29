const numberOfPhotos = 48;

var isOnFullScreen = false;
const fullImage = document.getElementById("fullscreen-image");
const backIcon = document.getElementById("back-icon");
const fullBackground = document.getElementById("fullscreen");
const header = document.querySelector("header");
const loadMore = document.getElementById("load-more");

var currFullImage;
var isBeingMoved = false;
var nextPhoto = numberOfPhotos;

while (nextPhoto > numberOfPhotos - 9) {
    loadImage(nextPhoto);
    nextPhoto--;
}

function loadImage(n) {
    var imageElement = document.createElement("img");
    var src = "photos/" + n + ".jpg";
    imageElement.src = src;
    imageElement.alt = "photo";
    var imageDivElement = document.createElement("div");
    imageDivElement.classList.add("photo-card");
    imageDivElement.addEventListener("click", function() {
        imageToFullscreen();
    })
    imageDivElement.addEventListener("mouseover", function() {
        currFullImage = this.children.item(0);
    })
    imageDivElement.appendChild(imageElement);
    document.querySelector(".photo-display").appendChild(imageDivElement);
}

function loadMoreImages() {
    for (let index = 0; index < 9; index++) {
        if (nextPhoto > 0) {
            loadImage(nextPhoto);
            nextPhoto--;
        } else {
            loadMore.style.display = "none";
            break;
        }
    }
}

backIcon.addEventListener("click", function() {
    imageOutOfFullscreen();
})

/*
window.addEventListener("resize", function() {
    if (isBeingMoved) { return }
    if (isOnFullScreen) {
        var width = currFullImage.width;
        var height = currFullImage.height;

        var ratio = height / width;

        fullTop = Math.max(48, (((window.innerHeight - (window.innerWidth * ratio) + 48)) / 2))
        fullLeft = Math.max(0, ((window.innerWidth - ((window.innerHeight - 48) / ratio)) / 2))
        fullHeight = Math.min(window.innerHeight - 48, ((window.innerWidth * ratio)))
        fullWidth = Math.min(window.innerWidth, ((window.innerHeight - 48) / ratio))
        fullImage.style.top = fullTop + "px";
        fullImage.style.left = fullLeft + "px";
        fullImage.style.width = fullWidth + "px";
        fullImage.style.height = fullHeight + "px";
    }
})
*/

fullImage.addEventListener("touchstart", touchStart);
fullImage.addEventListener("touchmove", touchMove);
fullImage.addEventListener("touchend", touchEnd);

var yOffset = 0;
var yStart = 0;
var dtop = 0;
var left = 0;
var width = 0;
var height = 0;
var ratio = 0;
var borderRadious = 0;


function touchStart(event) {
    isBeingMoved = true;
    var fullImageRects = fullImage.getBoundingClientRect();
    fullImage.style.transition = "none"
    yStart = event.touches[0].clientY;
    dtop = fullImageRects.top;
    left = fullImageRects.left;
    width = fullImage.width;
    height = fullImage.height;
    ratio = height / width;
    yOffset = 0;
    borderRadious = 0;
}


function touchMove(event) {

    yOffset = Math.max(event.touches[0].clientY - yStart, -30);
    fullImage.style.top = dtop + (yOffset * 1.2) + "px";
    fullImage.style.left = left + Math.min(yOffset / 2, 150) + "px";
    fullImage.style.width = width - (Math.min(yOffset / 2, 150) * 2) + "px";
    fullImage.style.height = (width - (Math.min(yOffset / 2, 150) * 2)) * ratio + "px";
    fullImage.style.borderRadius = Math.min(yOffset, 200) / 500 + "rem";
}

function touchEnd() {
    fullImage.style.transition = ""
    if (yOffset > 100) {
        imageOutOfFullscreen(currFullImage);
    } else {
        imageToFullscreen(fullImage);
    }
    yOffset = 0;
}

function imageOutOfFullscreen() {
    isBeingMoved = true;
    isOnFullScreen = false;

    header.style.top = "";

    var rect = currFullImage.getBoundingClientRect()
    fullImage.style.top = rect.top + "px";
    fullImage.style.left = rect.left + "px";
    fullImage.style.width = (rect.right - rect.left) + "px";
    fullImage.style.height = (rect.bottom - rect.top) + "px";
    fullImage.style.borderRadius = "0.4rem";
    fullBackground.classList.remove("on")

    backIcon.style.boxShadow = "rgba(150, 150, 150, 0.4) 0px 0px 0px"
    backIcon.style.opacity = "0"

    setTimeout(function() {
        fullImage.style = "";
        fullImage.src = "";
        backIcon.style = "";
        fullBackground.style = ""
        if (document.body.classList.contains("unscrollable")) {
            document.body.classList.replace("unscrollable", "scrollable")
        }
        isBeingMoved = false;
    }, 600)
}

function imageToFullscreen() {
    isBeingMoved = true;

    header.style.top = "-3rem";

    var rect = currFullImage.getBoundingClientRect()
    var top = rect.top;
    var left = rect.left;
    var width = currFullImage.width;
    var height = currFullImage.height;
    var imageURL = currFullImage.src;
    fullBackground.classList.add("on");
    fullBackground.style.height = "100%"
    if (document.body.classList.contains("scrollable")) {
        document.body.classList.replace("scrollable", "unscrollable");
    }
    fullImage.src = imageURL;
    fullImage.style.top = top + "px";
    fullImage.style.left = left + "px";
    fullImage.style.width = width + "px";
    fullImage.style.height = height + "px";
    fullImage.style.borderRadius = "0.4rem";
    var ratio = currFullImage.height / currFullImage.width;

    setTimeout(function() {
        fullTop = Math.max(0, (((window.innerHeight - (window.innerWidth * ratio))) / 2))
        fullLeft = Math.max(0, ((window.innerWidth - ((window.innerHeight) / ratio)) / 2))
        fullHeight = Math.min(window.innerHeight, ((window.innerWidth * ratio)))
        fullWidth = Math.min(window.innerWidth, ((window.innerHeight) / ratio))
        fullImage.style.top = fullTop + "px";
        fullImage.style.left = fullLeft + "px";
        fullImage.style.width = fullWidth + "px";
        fullImage.style.height = fullHeight + "px";
        fullImage.style.borderRadius = "0";
    }, 1)
    backIcon.style.top = "1rem";
    backIcon.style.left = "1rem"
    backIcon.style.opacity = "1"
    setTimeout(function() {
        isOnFullScreen = true;
        isBeingMoved = false;
    }, 600)
}