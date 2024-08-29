const enPage = {
    "text1": "Lefki Petra is a summerwear boutique located in the beautiful town of Nidri in the Ionian island of Lefkada and was created to make your Greek summer even more memorable.",
    "text2": "Our basic philosophy is to offer our customers top Greek premium quality brands.",
    "text3": "Sun Of A Beach Swimwear, Zeylo Sunglasses, Eleni Vakondiou Jewelery, Island Fashion Bags and Hats, Zografos Silk Scarves and Accessories are some of our partners, whose full product array we offer exclusively throughout Lefkada.",
    "text4": "We are waiting for you to start our summer together in Greece..."
}

const grPage = {
    "text1": "Η Lefki Petra είναι μια boutique που βρίσκεται στο πανέμορφο Νυδρί της Λευκάδας και δημιουργήθηκε για να κάνει ακόμη πιο όμορφο το καλοκαίρι σας στην Ελλάδα!",
    "text2": "Βασική μας φιλοσοφία είναι να φιλοξενούμε στο μαγαζί μας κορυφαίες Ελληνικές premium εταιρείες.",
    "text3": "Sun Of A Beach Swimwear, Zeylo Sunglasses, Eleni Vakondiou Jewelery, Island Fashion Bags and Hats, Zografos Silk Scarves and Accessories είναι μερικοί από τους συνεργάτες μας, τους οποίους θα τους βρείτε αποκλειστικά σε εμάς σε όλη τη Λευκάδα.",
    "text4": "Σας περιμένουμε να ταξιδέψουμε μαζί στην Ελλάδα και αυτό το καλοκαίρι..."
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
    document.getElementById("text1").innerText = langPage.text1
    document.getElementById("text2").innerText = langPage.text2
    document.getElementById("text3").innerText = langPage.text3
    document.getElementById("text4").innerText = langPage.text4
}