// ***** review data *****
const reviews = [
    {
        id: 1,
        name: "Jeremiah",
        imgPath: "pfp1.jpg",
        text: "Kayaking through the Mangrove forrest was the best experience ever! Unforgettable!"
    },
    {
        id: 2,
        name: "Dewy",
        imgPath: "pfp2.jpg",
        text: "The night party was probably the best one in the whole area. Good cocktails, awesome people, great musics, much recommended!"
    },
    {
        id: 3,
        name: "Taisiya",
        imgPath: "pfp3.jpg",
        text: "The romantic sunset cruise trip is something I'd never forget."
    },
    {
        id: 4,
        name: "Valentina",
        imgPath: "pfp4.jpg",
        text: "I'm a big fan of walking in the nature and Jungle Rat course was one of the best experiences!"
    },
]

// ***** DOM elements ***** 
const menuBars = document.querySelector('#menu-bars');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu-link');
const reviewsLeftBtn = document.querySelector('#reviews-left-btn');
const reviewsRightBtn = document.querySelector('#reviews-right-btn');
const navLogo = document.querySelector('.nav-logo');
const moreInfoBtns = document.querySelectorAll('.more-info');
// ***** Review functionaries *****
// set default index number
let reviewIndex = 0;
// display the review
function showReview(index) {
    const img = document.querySelector('.item-image');
    const name = document.querySelector('.item-name');
    const text = document.querySelector('.item-text');
    img.setAttribute('src', `./src/imgs/${reviews[index].imgPath}`);
    name.textContent = reviews[index].name;
    text.textContent = reviews[index].text;
};
// clicks on chevrons change the index
reviewsLeftBtn.addEventListener('click', function () {
    reviewIndex--;
    if (reviewIndex < 0) {
        reviewIndex = reviews.length - 1;
    }
    showReview(reviewIndex);
})
reviewsRightBtn.addEventListener('click', function () {
    reviewIndex++;
    if (reviewIndex === reviews.length) {
        reviewIndex = 0;
    }
    showReview(reviewIndex);
})
// on page load default(first) review shows up
window.addEventListener("load", showReview(reviewIndex));

// ***** Menu bars functionaries *****
// Toggles the menu-bar
menuBars.addEventListener('click', function () {
    menu.classList.toggle('menu-active')
});
// menu-bar de-activates on click
menuLinks.forEach(function (link) {
    link.addEventListener('click', () => menu.classList.remove('menu-active'))
});
// logo shows up after scrolls
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
        navLogo.classList.add('menu-active');
    }
    else {
        navLogo.classList.remove('menu-active');

    }
})

// ***** Additional info on tour section *****
moreInfoBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const allInfoContainers = document.querySelectorAll('.tour-info')
        const selectedSpan = e.target;
        const selectedID = e.target.dataset.id;
        const infoContainer = e.target.parentElement.children[3]
        const infoID = infoContainer.dataset.id;
        if (selectedID === infoID) {
            infoContainer.classList.toggle('tour-active')
        }
        if (infoContainer.classList.contains('tour-active')) {
            selectedSpan.textContent = 'Fold'
        }
        else {
            selectedSpan.textContent = "See more"
        }
    })
})