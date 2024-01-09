window.onload = function(){
    console.log("La pagina ha sido cargada...")


    let div = document.querySelector('div');

    div.addEventListener('click', saludo)
    div.addEventListener('mouseover', saludo)

    div.addEventListener('mouseout', () => {
        console.log("Salio del div")
    })

    /* let panelH3 = document.querySelector('.title')

    panelH3.addEventListener('click', () => {
        let panelP = document.querySelector('.contenedor p')
        panelP.style.display = panelP.style.display == 'block' ? 'none' : 'block';
    }) */
    
    let panelH3s = document.querySelectorAll('.contenedor .title')

    panelH3s.forEach((panelH3) => {

        panelH3.addEventListener('click', (evento) => {
            let panelP = evento.target.parentNode.children[1];
            panelP.style.display = panelP.style.display == 'block' ? 'none' : 'block';
        })

    })


    let search = document.querySelector("input[type=search]");

    search.addEventListener('keyup', (evento) => {
        console.log(evento.keyCode)
        console.log(evento.key)
    })
    

    let form = document.querySelector('#suscribir');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let email = document.querySelector('#email');

        if(email.value === ''){
            alert("El email no puede estar vacio")
            email.focus()
        }
    


       
    })


}

function saludo(evento){
    console.log(evento)

    let div = evento.target;
    div.style.backgroundColor = "red";
    console.log("Hola como estan?");
}

function inputFocus(){
    console.log("focus: entrando al input")
}

function inputBlur(){
    console.log("blur: saliendo del input")
}

function inputChange(){
    console.log("change: cambio algo en el valor (value)")
}

function inputKeyUp(){
    console.log("keyup: pulso una tecla y libero")
}

function validar(){
    console.log("validando")
    return false
}