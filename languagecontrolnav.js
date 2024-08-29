const en = {
    "photos": "Photos",
    "videos": "Videos",
    "about": "About us",
    "socials": "Socials:",
    "info": "Info:",
    "location": "Location | Ellomenou street 114, Nidri | Lefkada, Greece",
    "partners": "Partners:"
}

const gr = {
    "photos": "Φωτογραφίες",
    "videos": "Βίντεο",
    "about": "Σχετικά με εμάς",
    "socials": "Κοινωνικά:",
    "info": "Πληροφορίες:",
    "location": "Τοποθεσία | Οδός Ελλομένου 114, Νυδρί | Λευκάδα, Ελλάδα",
    "partners": "Συνεργάτες:"
}

if (localStorage.getItem('language') == null) {
    localStorage.setItem('language', 'en')
} else
if (localStorage.getItem('language') == 'en') {
    changeLanguageTo('en')
} else if (localStorage.getItem('language') == 'gr') {
    changeLanguageTo('gr')
}

var lang = en

function changeLanguageTo(lang) {
    if (lang == "en") {
        document.documentElement.setAttribute("lang", "en")
        localStorage.setItem('language', 'en')
        lang = en

    } else if (lang == "gr") {
        document.documentElement.setAttribute("lang", "gr")
        localStorage.setItem('language', 'gr')
        lang = gr
    }
    document.getElementById("photos").innerText = lang.photos
    document.getElementById("videos").innerText = lang.videos
    document.getElementById("about").innerText = lang.about
    document.getElementById("socials-lang").innerText = lang.socials
    document.getElementById("info-lang").innerText = lang.info
    document.getElementById("location-lang").innerText = lang.location
    document.getElementById("partners-lang").innerText = lang.partners
}