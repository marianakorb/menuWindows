
function getVisible() {

    const menu = document.querySelector("div#menu");

    if(menu.classList.contains("visibilidade")) {
        menu.classList.remove("visibilidade");
    } else {
        menu.classList.add("visibilidade");
    }
}

function atualizarDataHora() {
    // Obter elementos de data e hora
    let dataElement = document.getElementById('data');
    let horaElement = document.getElementById('hora');

    // Obter a data e a hora atuais
    let dataAtual = new Date();
    
    // Formatar a data
    let optionsData = { year: 'numeric', month: 'numeric', day: 'numeric' };
    let dataFormatada = dataAtual.toLocaleDateString('pt-BR', optionsData);
    
    // Formatar a hora
    let optionsHora = { hour: 'numeric', minute: 'numeric'};
    let horaFormatada = dataAtual.toLocaleTimeString('pt-BR', optionsHora);

    // Atualizar os elementos no HTML com a data e a hora atuais
    dataElement.textContent = dataFormatada;
    horaElement.textContent = horaFormatada;
}

// Chamar a função para exibir a data e a hora atuais
atualizarDataHora();

// Atualizar a cada segundo
setInterval(atualizarDataHora, 1000);