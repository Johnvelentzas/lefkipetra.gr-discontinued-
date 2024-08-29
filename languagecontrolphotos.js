const enPage = {
    "load": "Load more",
    "": "",
    "": "",
    "": ""
}

const grPage = {
    "load": "Φώρτωση περισσοτέρων",
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
    document.getElementById("load").innerText = langPage.load;

}