window.addEventListener("load", function(){
    imprimeTabelaDoHTML(document.querySelectorAll(".aluno"));
})

function imprimeTabelaDoHTML(todosOsAlunos){

    todosOsAlunos.forEach(function(aluno){
        const primeiraNota = aluno.querySelector(".info-notaum").textContent;
        const segundaNota = aluno.querySelector(".info-notadois").textContent;
        let mediaCalculada = calculaMedia(primeiraNota, segundaNota);
            if (mediaCalculada < 5) {
                aluno.classList.add("abaixo-da-media");
            }
        aluno.querySelector(".info-media").textContent = mediaCalculada;
        
    })
}
      

function calculaMedia(notaUmRecebida, notaDoisRecebida) {
    return((parseFloat(notaUmRecebida) + parseFloat(notaDoisRecebida)) / 2).toFixed(2);  
}
