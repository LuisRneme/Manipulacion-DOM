const titulo = document.querySelector('h1');
const parf = document.querySelector('p');
const parf1 = document.querySelector('parrafo1');
const caja = document.querySelector('input');


//querySelector señala el primer parrafo que encuentra
//querySelectorAll señala todos los parrafos que existe en html
console.log({
    titulo,
    parf,
    parf1,
});

//titulo.innerHTML='De esta forma cambio el titulo';//cpmvierte todo a codigo HTML
titulo.innerText ="Otra forma de cambiar el titulo";//convierte todo el codigo a texto

/*
titulo.getAttribute //Leer el atributo de un objeto
titulo.setAttribute //darle el valor a un atributo*/

console.log(titulo.getAttribute('pantalla'));
console.log(titulo.getAttribute('class'));

titulo.setAttribute('class', 'amarillo');//cambia el valor a un atributo
console.log(titulo.getAttribute('class'));

titulo.classList.add('azul');//agrega una clase a h1
console.log(titulo.getAttribute('class')); 
titulo.classList.remove('amarillo')//elimina la clase amarillo si es que existe
console.log(titulo.getAttribute('class'));

//Input para escribir en la caja de texto 
caja.value ="Estoy aprendiendo JavaScript";

//crear el elemento de html que nosotros quieramos
const imagenCreada = document.createElement('img');
imagenCreada.setAttribute('src','https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(imagenCreada);
parrafo1.append(imagenCreada);

const valor1 = document.querySelector('#caja');
const valor2 = document.querySelector('#caja1');
const resultado = document.querySelector('#calcular');
const resfinal = document.querySelector('#resultado-final');
const formu = document.querySelector('#formulario');


//addEventListener Clase desde aca
resfinal.addEventListener('click', btnOnClick);


function btnOnClick(){
    //console.log(valor1.value + valor2.value);
    const sumaValor = valor1.value + valor2.value;
    resfinal.innerText = "Resultado :" + sumaValor;
    //console.log("Escuchamos el click");
} 

restafinal.addEventListener('submit', inputEvent);

function inputEvent(event){
    event.preventDefault();
    const sumaValor = valor1.value + valor2.value;
    resfinal.innerText = "Resultado :" + sumaValor;
}