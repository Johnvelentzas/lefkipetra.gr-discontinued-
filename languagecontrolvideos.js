const enPage = {
    "": "",
    "": "",
    "": "",
    "": ""
}

const grPage = {
    "": "",
    "": "",
    "": "",
    "": ""
}

if (localStorage.getItem('language') == 'gr') {
    changeTextLanguageTo('gr')
}


function changeTextLanguageTo(langPage) {
    if (langPage == "en") {
        langPage = enPage
    } else if (langPage == "gr") {
        langPage = grPage
    }
    /*
    document.getElementById("text1").innerText = langPage
    document.getElementById("text2").innerText = langPage
    document.getElementById("text3").innerText = langPage
    document.getElementById("text4").innerText = langPage
*/
}