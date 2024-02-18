let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte sempre!😄";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})
function calcular(event) {
    let valorGasolina = document.getElementById('gasolina').value;
    let valorAlcool = document.getElementById('alcool').value;
    const mostraResultado = document.getElementById('resultado');

    if (valorGasolina != '' && valorAlcool != '') {
        event.preventDefault();
        let resultado = valorAlcool / valorGasolina;
        document.querySelector('.container-resultado').style.display = 'flex';

        if(resultado <= 0.7) {
            mostraResultado.innerText =
            `O Álcool !` 
        }else {
            mostraResultado.innerText =
            `A Gasolina !`
        }
    }
}

