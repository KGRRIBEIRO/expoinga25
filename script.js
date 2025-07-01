function acessibilidade() {
    const opcoes_acessibilidade = document.querySelector(".opcoes-acessibilidade");
    if (opcoes_acessibilidade.style.display === "none") {
        opcoes_acessibilidade.style.display = "block";
    } else {
        opcoes_acessibilidade.style.display = "none";
    }
};

function aumentarFonte() {
    const corpo = document.querySelector("body");
    const fonteAtual = parseFloat(getComputedStyle(corpo).fontSize);
    corpo.style.fontSize = (fonteAtual + 2) + "px";
}

function diminuirFonte() {
    const corpo = document.querySelector("body");
    const fonteAtual = parseFloat(getComputedStyle(corpo).fontSize);
    corpo.style.fontSize = (fonteAtual - 2) + "px";
}