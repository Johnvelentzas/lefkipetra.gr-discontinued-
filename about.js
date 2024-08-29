const entrance = document.querySelector("#tour-entrance");
const header = document.querySelector("header");
const videos = document.getElementsByClassName("tour-video");
var previousScroll = 0;
var isHeaderShowing = true;
var startPos = 0;

var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 1000,
    // get page height from video duration
    setHeight = document.getElementById("tour-entrance"),
    // select video element         
    vid = document.getElementById('entrance-vid');
// var vid = $('#v0')[0]; // jquery option


window.addEventListener("scroll", function() {
    if (entrance.getBoundingClientRect().top == 0) { startPos = window.pageYOffset }
    if (entrance.getBoundingClientRect().top <= 0) {
        if (window.pageYOffset > previousScroll && isHeaderShowing) {
            isHeaderShowing = false;
            header.style.top = "-3rem";
        } else if (window.pageYOffset < previousScroll && !isHeaderShowing) {
            isHeaderShowing = true;
            header.style.top = "0";
        }
        previousScroll = window.pageYOffset;
        //scrollPlay()

    } else if (!isHeaderShowing) {
        isHeaderShowing = true;
        header.style.top = "0";
    }
})




function scrollPlay() {
    console.log(frameNumber)
    frameNumber = ((window.pageYOffset - startPos) / playbackConst).toFixed(2);
    vid.currentTime = frameNumber;
}

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
    setInterval(function() {
        vid.currentTime = (i / 60).toFixed(3);
        console.log(i)
        i += 1;
    }, 400)
});

var i = 0;