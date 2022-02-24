window.addEventListener('load', ()=> { /*escuchamos cuando se carga el documento*/
    /*creamos dos constantes y nos guardamos los elementos que necesitas*/
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    /*creamos otra constate para ocnvertir HTMLCollection en Array y poder iterar*/ 
    const keypadButtonsArray = Array.from(keypadButtons);
    /*iteramos por nuestro nuevo array de botonoes*/
    keypadButtonsArray.forEach( (button) => {
       /* hasta aqui si inspeccionamos la consola en la web, cada vez que demos click a un numero se va a guardar en la consola*/
        button.addEventListener('click', ()=> {
            /*console.log(button.innerHTML);*/
            calculadora(button, display)
        })
    })

});

/*funcion general sobre la cual la calculadora trabaja*/

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;
        case '=':
            calcular(display);
            break;
        default:
            actualizar(display, button);
            break;
    }
}

/*defincion de las funciones dentro del a funcion principal*/
/*eval es la funcion establecida que permite hacer los calculos*/ 

function calcular(display) {
    display.innerHTML = eval(display.innerHTML) /* Tomar el string, resolverlo y guardarlo en el innerHTML des display*/
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display){
    display.innerHTML = 0
}


/*explicacion*/ 

/*el querySelctor busca un solo elemento y lo guarda en la constante sería el primer número al tapiar la calculadora*/
/*getElementsByClassName atrapa varios elementos y los guarda dentro de la constante*/
/* array.from vuelve los objetos que el usuario tapea en la calculadora a array*/
/* button.addEventListener('click') interaccion con el usuario cuando haga click*/


