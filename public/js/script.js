document.addEventListener('scroll', function (event) {
    document.querySelectorAll("section").forEach((el, i) => {
        if (el.offsetTop - 400 <= window.scrollY) {
            const menuItems = document.querySelector('nav').childNodes

            menuItems.forEach((el) => {
                el.style.color = "#FFF"
            })
            menuItems[i].style.color = "#ffab00"
        }
    })
})

function animateBind(animClass) {
    const animItems = document.querySelectorAll('.' + animClass)
    window.addEventListener('scroll', () => {
        animItems.forEach((animItem) => {
            const point = animItem.getBoundingClientRect().top - window.innerHeight + animItem.offsetHeight / 2
            if (point < 0) {
                animItem.classList.remove(animClass)
            } else {
                animItem.classList.add(animClass)
            }
        })
    })
}
animateBind('anim-bottom')
animateBind('anim-left')
animateBind('anim-right')