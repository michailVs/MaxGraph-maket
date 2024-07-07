const body = document.body
const burger = document.querySelector('.burger')
const popup = document.querySelector('.popup')
const menu = document.querySelector('.header__nav').cloneNode(1)
const search = document.querySelector('.search')

burger.addEventListener('click', () => {
    burger.classList.toggle('open')
    body.classList.toggle('active')
    popup.classList.toggle('open')
    menu.style.flexDirection = 'column'
    menu.style.height = '100svh'
    menu.style.justifyContent = 'center'
    Array.from(menu.children).forEach(el => el.style.fontSize = '2.25rem')
    search.style.position = 'absolute'
    search.style.top = '2.25rem'
    search.style.right = '1.875rem'
    popup.append(search, menu)
    popup.addEventListener('click', e => {
        if (!e.target.classList.contains('navbar__link') && !e.target.classList.contains('search') && !e.target.parentNode.classList.contains('search')) {
            burger.classList.remove('open')
            body.classList.remove('active')
            popup.classList.remove('open')
        }
    })
})