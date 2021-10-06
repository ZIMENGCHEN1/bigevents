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
$('#reg').submit(function (e) {
    e.preventDefault()
    $.ajax({
        url: "http://api-breakingnews-web.itheima.net/api/reguser",
        method: "POST",
        data: {
            username: $('#reg [name=username]').val(), password: $('#reg [name=password]').val()
        },
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg('注册失败')
            }
            layer.msg('注册成功')
            $('#link_login').click()
        }
    })
})

$('#login').submit(function (e) {
    e.preventDefault()
    $.ajax({
        url: "http://api-breakingnews-web.itheima.net/api/login",
        method: "POST",
        data: $(this).serialize(),
        success: function (res) {
            if (res.status !== 0) {
                return layer.msg('失败')
            }
            location.href = '/index.html'
        }
    })
})