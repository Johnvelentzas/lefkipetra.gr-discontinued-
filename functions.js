var isLanguageMenuOpen = false;
var isMenuOpen = false;

function scrollToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.location.href = "index.html";
    }
}

window.addEventListener("scroll", function() {
    hasScrolled()
})

function hasScrolled() {
    if (window.pageYOffset < 20) {
        document.querySelector("header").style.boxShadow = "rgba(100, 100, 100, 0) 0px 0px 3px"
    } else if (window.pageYOffset < 40) {
        var shadow = "rgba(100, 100, 100, 0." + (Math.floor((window.pageYOffset - 20) / 4)) + ") 0px 0px 3px"
        document.querySelector("header").style.boxShadow = shadow
    } else if (window.pageYOffset > 40) {
        document.querySelector("header").style.boxShadow = "rgba(100, 100, 100, 0.5) 0px 0px 3px"
    }
}


function openlanguagemenu() {
    if (!isLanguageMenuOpen) {
        document.querySelector(".language-icon").style.display = "none"
        var langSwitcher = document.querySelector(".language-switcher")
        unfade(langSwitcher, 1, false)
        if (document.body.classList.contains("scrollable")) {
            document.body.classList.replace("scrollable", "unscrollable")
        }
        isLanguageMenuOpen = true;
    }
}

function closelanguagemenu() {
    if (isLanguageMenuOpen) {
        var langSwitcher = document.querySelector(".language-switcher")
        if (window.innerWidth < 800) {
            fade(langSwitcher, 1, true)
        }

        if (document.body.classList.contains("unscrollable") && !isMenuOpen) {
            document.body.classList.replace("unscrollable", "scrollable")
        }
        document.querySelector(".language-icon").removeAttribute("style")
        isLanguageMenuOpen = false;
    }
}

function openmenu() {
    if (!isMenuOpen) {
        if (document.body.classList.contains("scrollable")) {
            document.body.classList.replace("scrollable", "unscrollable")
        }
        var height = 48;
        var color = 255;
        var titleColor = 120;
        fade(document.querySelector(".menu-icon"), 0.5, false)
        document.querySelector(".menu-icon").removeAttribute("onclick")
        document.querySelector(".menu-icon").style.cursor = "default"
        var links = document.querySelectorAll(".navigation-link")
        var heightLinks = 4;
        links.forEach(element => {
            element.style.position = "fixed";
            element.style.left = "6.5%";
            element.style.width = "80%"
            element.style.top = (heightLinks + "rem")
            heightLinks += 6
        });
        linkToAppear = 1;
        var timer = setInterval(function() {
            height += 15
            if (color > 220) {
                color -= 4
            } else { color = 220 }
            if (titleColor > 80) {
                titleColor -= 4
            } else { titleColor = 80 }
            document.querySelector("header").style.height = (height + "px")
            document.querySelector("header").style.backgroundColor = ("rgb(" + color + ", " + color + ", " + color + ", 0.5)")

            if (height >= window.innerHeight) {
                clearInterval(timer)
                document.querySelector("header").style.height = "100%"
            }
            switch (linkToAppear) {
                case 1:
                    if (height > ((window.innerHeight * 2) / 10)) {
                        linkToAppear = 2;
                        var element = document.getElementById("photos")
                        unfade(element, 1, false)
                    }
                    break;
                case 2:
                    if (height > ((window.innerHeight * 4) / 10)) {
                        linkToAppear = 3;
                        unfade(document.getElementById("videos"), 1, false)
                    }

                    break;
                case 3:
                    if (height > ((window.innerHeight * 6) / 10)) {
                        linkToAppear = 4;
                        unfade(document.getElementById("about"), 1, false)
                    }
                    break;
                case 4:
                    if (height > ((window.innerHeight * 9) / 10)) {
                        linkToAppear = 5;
                        unfade(document.getElementById("close"), 1, false)
                    }
                    break;
                default:
                    break;
            }
        }, 0.01)
        isMenuOpen = true;
    }
}

function closemenu() {
    if (isMenuOpen) {
        if (document.body.classList.contains("unscrollable")) {
            document.body.classList.replace("unscrollable", "scrollable")
        }
        var height = window.innerHeight;
        var color = 220;
        var titleColor = 80;
        var menuIcon = document.querySelector(".menu-icon")
        unfade(menuIcon, 0.5, true)
        menuIcon.onclick = openmenu
        linkToDissapear = 1;
        var timer = setInterval(function() {
            height -= 15
            if (color < 252) {
                color += 4
            } else { color = 255 }
            if (titleColor < 120) {
                titleColor += 4
            } else { titleColor = 120 }
            document.querySelector("header").style.height = (height + "px")
            document.querySelector("header").style.backgroundColor = ("rgb(" + color + ", " + color + ", " + color + ", 0.3)")

            if (height <= 48) {
                clearInterval(timer)
                document.querySelector("header").removeAttribute("style")
                var links = document.querySelectorAll(".navigation-link")
                links.forEach(element => {
                    element.removeAttribute("style")
                });
            }
            switch (linkToDissapear) {
                case 1:
                    if (height < ((window.innerHeight * 10) / 10)) {
                        linkToDissapear = 2;
                        var element = document.getElementById("close")
                        fade(element, 1, true)
                    }
                    break;
                case 2:
                    if (height < ((window.innerHeight * 9) / 10)) {
                        linkToDissapear = 3;
                        fade(document.getElementById("about"), 1, true)
                    }

                    break;
                case 3:
                    if (height < ((window.innerHeight * 8) / 10)) {
                        linkToDissapear = 4;
                        unfade(document.getElementById("videos"), 1, true)
                    }
                    break;
                case 4:
                    if (height < ((window.innerHeight * 7) / 10)) {
                        linkToDissapear = 5;
                        fade(document.getElementById("photos"), 1, true)
                    }
                    break;
                default:
                    break;
            }
        }, 0.01)
        isMenuOpen = false;
    }
}

function fade(element, initialOpacity, removeStyleAfter) {
    var op = initialOpacity; // initial opacity
    var timer = setInterval(function() {
        element.style.opacity = op.toString()
        op -= 0.05;
        if (op <= 0.01) {
            clearInterval(timer);
            element.style.opacity = "0"
            if (removeStyleAfter) {
                element.removeAttribute("style")
            }
        }
    }, 0.1);
}

function unfade(element, finalOpacity, removeStyleAfter) {
    var op = 0.1; // initial opacity
    element.style.opacity = op
    element.style.display = "block"
    var timer = setInterval(function() {
        element.style.opacity = op
        op += 0.05;
        if (op >= finalOpacity) {
            clearInterval(timer);
            element.style.opacity = finalOpacity
            if (removeStyleAfter) {
                element.removeAttribute("style")
            }
        }
    }, 0.1);
}


//Handle resize

function onResize() {
    closelanguagemenu()
    closemenu()
}