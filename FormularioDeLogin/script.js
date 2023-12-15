function logar() {
    var login = document.getElementById('login').value
    var senha = document.getElementById('password').value

    if(login == 'admin' && senha == 'admin'){
        alert('Login efetuado com sucesso!')
        location.href = "homePage.html"
    }else if (login == '') {
        alert('Preencha o campo de login!')
    }else if (senha == '') {
        alert('Preencha o campo de senha!')
    }else{
        alert('Login ou senha incorretos!')
    }
}