const menu = document.querySelector('#menu')
const tema = document.querySelector('#tema')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo')
    tema.classList.toggle('ativo')
})

const user = document.querySelector('#user')
const userLogin = document.querySelector('#user-login')

user.addEventListener('click', () => {
    user.classList.toggle('aberto')
    userLogin.classList.toggle('aberto')

})