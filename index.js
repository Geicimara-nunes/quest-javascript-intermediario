const inputs = document.querySelectorAll('.input-texto');

const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const msgErro = document.querySelectorAll('.erro');
    
    inputs.forEach((itens, indice) => {
        if(itens.value !=''){
            itens.classList.add('campo-preenchido');
            itens.classList.remove('vazio');
           msgErro[indice].classList.remove('mostrar');

        }else{
            itens.classList.remove('campo-preenchido');
            itens.classList.add('vazio');
            msgErro[indice].classList.add('mostrar');
        }
    })

} )























































