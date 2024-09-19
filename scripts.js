let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

botaoNao.addEventListener("mouseover", function(){
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY =  Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.top = posY + "px";
    botaoNao.style.left = posX + "px";

    mensagemErro.style.display = "block";
});

botaoSim.addEventListener("mouseover", function(){
    alert("Ótima escolha! Minha chave PIX é o número do celular!");
});