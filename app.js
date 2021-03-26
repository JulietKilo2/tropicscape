const cards = document.querySelectorAll('.card');

cards.forEach(item => {
    item.addEventListener("click", function () {
        cards.forEach(item => {
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
})