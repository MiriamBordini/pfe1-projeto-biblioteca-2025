function validarCPF(cpf) {
    return /^\d{11}$/.test(cpf);
}

function fecharModal(modal) {
    modal.style.display = 'none';
}

function carregarLocacoes() {
    return JSON.parse(localStorage.getItem('locacoes')) || [];
}

function salvarLocacoes(locacoes) {
    localStorage.setItem('locacoes', JSON.stringify(locacoes));
}
