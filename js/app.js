function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashbord__item__img'); // . significa que eu estou chamando uma classa
    let botao = gameClicado.querySelector('.dashbord__item__button');
    let nomeJogo= gameClicado.querySelector('.dashboard__item__name' );

    alert(nomeJogo.textContent); //Textcontent; imprimir um texto que está dentro de uma tag ou innerHMTL

}