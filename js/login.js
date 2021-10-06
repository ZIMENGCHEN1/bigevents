(function qiehuan() {
    var login = document.querySelector('#link_login')
    var reg = document.querySelector('#link_reg')
    reg.onclick = function () {
        this.parentNode.parentNode.style.display = 'none'
        login.parentNode.parentNode.style.display = 'block'
    }
    login.onclick = function () {
        this.parentNode.parentNode.style.display = 'none'
        reg.parentNode.parentNode.style.display = 'block'
    }
})()