let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let email = document.querySelector('#conteudo')

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido'
    } else {
        txt.innerHTML = ''
    }

}