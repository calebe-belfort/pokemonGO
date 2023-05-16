const botaoAlterarTema = document.getElementById("botao-alterar-tema");


const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuriEstaAtivo = body.classList.contains("modo-escuro")

body.classList.toggle("modo-escuro");

if (modoEscuriEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagen/moon.png");
} else{   
imagemBotaoTrocaDeTema.setAttribute("src" , " ./src/imagens/moon.png");
console.log(body.classList.contains ("modo-escuro"))
}
});

