function adicionarLinha() {
    const tbody = document.getElementById('table-body');

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <td><input type="text" placeholder="Personagem"></td>
        <td><input type="text" placeholder="Habilidade"></td>
        <td><input type="text" placeholder="Nacionalidade"></td>
    `;

    tbody.appendChild(novaLinha);
    salvarLinhas();
}

function salvarLinhas() {
    const linhas = document.querySelectorAll('.styled-table tbody tr');

    const dados = [];

    linhas.forEach((linha) => {
        const inputs = linha.querySelectorAll('input');
        const dadosLinha = [];
        inputs.forEach((input) => {
            dadosLinha.push(input.value);
        });
        dados.push(dadosLinha);
    });

    localStorage.setItem('dadosTabela', JSON.stringify(dados));
}

function carregarLinhasSalvas() {
    const dadosSalvos = localStorage.getItem('dadosTabela');

    if (dadosSalvos) {
        const dados = JSON.parse(dadosSalvos);
        const tbody = document.getElementById('table-body');

        dados.forEach((linha) => {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `
                <td>${linha[0]}</td>
                <td>${linha[1]}</td>
                <td>${linha[2]}</td>
            `;
            tbody.appendChild(novaLinha);
        });
    }
}

window.onload = function() {
    carregarLinhasSalvas();
};