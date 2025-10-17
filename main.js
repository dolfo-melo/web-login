
function validarLogin(event) {
    event.preventDefault() // Evita o envio padrão do formulário

    const usuarioValido = "admin"
    const senhaValida = "12345"

    const userInput = document.getElementById("userName")
    const passInput = document.getElementById("password")
    const messagemErro = document.getElementById("errorMessage")
    messagemErro.textContent = ""

    const usuario = userInput.value
    const senha = passInput.value

    if (usuario === usuarioValido && senha === senhaValida) {
        window.alert("Sucesso no login. Redirecionando")
        return window.open('cadastro.html');
    } else {
        messagemErro.textContent = "Usuário ou Senha inválidos"
        userInput.focus()
        userInput.value = ""
        passInput.value = ""
        return messagemErro;
    }
}

function cadastroInfo(event){
    event.preventDefault()

    //Coletar os dados do formulário
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const dataNasc = document.getElementById("dataNasc").value
    const telefone = document.getElementById("telefone").value
    const nivelEscolaridade = document.getElementById("nivelEscolaridade").value
    const genero = document.querySelector("input[name='genero']:checked")?.value
    const tecnologiaSelecionadas = document.querySelectorAll("input[name='tecnologias']:checked")

    const tecnologias = Array.from(tecnologiaSelecionadas).map(x => x.value)

    //Criar o objeto do formulário
    const usuario = {
        nome,
        email,
        dataNasc,
        telefone,
        nivelEscolaridade,
        genero,
        tecnologias
    }

    // Armazenar em LocalStorage os dados do Cadastro
    localStorage.setItem("usuarioCadastrado", JSON.stringify(usuario))
    alert("Cadastro efetuado com sucesso")
    console.log(usuario);
    
}