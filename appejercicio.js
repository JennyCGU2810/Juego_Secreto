/*
//ejercicio 1
let listaGenerica=[];
*/

/*
//ejercicio 2
let lenguajesProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];
console.log(lenguajesProgramacion);
*/

/*
//ejercicio 3
lenguajesProgramacion.push("java", "Ruby", "GoLang");
console.log(lenguajesProgramacion);
*/

/*
//ejercicio 4

let lenguajesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];

lenguajesDeProgramacion.push('java', 'Ruby', 'GoLang');

console.log(lenguajesDeProgramacion);

function mostrarLista() 
{
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLista();

  */

  /*
  //ejercicio 5

  let lenguajesDeProgramacion=['JavaScript', 'C', 'C++', 'Kotlin','Python'];

  lenguajesDeProgramacion.push('java', 'Ruby', 'GoLang');

console.log(lenguajesDeProgramacion);

  function mostrarInversaLista() {
    for (let i = lenguajesDeProgramacion.length - 1; i >= 0; i--) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarInversaLista();
*/

/*
  //ejercicio 6

  function calcularMedia(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
  let numeros = [10, 20, 30, 40, 50];
  let media = calcularMedia(numeros);
  console.log(numeros);
  console.log('Média de la lista de numeros es:', media);
*/

/*
//ejercicio 7

function encontrarMayorMenor(lista) {
    let mayor = lista[0];
    let menor = lista[0];
  
    for (let i = 1; i < lista.length; i++) {
      if (lista[i] > mayor) {
        mayor = lista[i];
      }
      if (lista[i] < menor) {
        menor = lista[i];
      }
    }
  
    console.log('Mayor:', mayor);
    console.log('Menor:', menor);
  }
  
  let numeros = [15, 8, 25, 5, 12];
  encontrarMayorMenor(numeros);

  //ejercicio 8

  function sumaNumerosLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma;
  }
  
  let numero = [10, 20, 30, 40, 50];
  let sumanum = sumaNumerosLista(numero);
  
  console.log(numero);
  console.log('La suma de los número es:', sumanum);

  */

  //ejercicio 9

  function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
  
  let lista1=[];

  encontrarIndiceElemento(lista1,);


/*
  //ejercicio 10

  function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener la misma longitud.");
    }

    const resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }

    return resultado;
}

// Ejemplo de uso:
let listaA = [1, 2, 3];
let listaB = [4, 5, 6];
let resultadoSuma = sumarListas(listaA, listaB);
console.log(resultadoSuma); // Debería mostrar [5, 7, 9]
*/


 //ejercicio 11

 function obtenerCuadrados(lista) {
    const listaCuadrados = lista.map(numero => numero * numero);
    return listaCuadrados;
}

// Ejemplo de uso:
const numeros = [1, 2, 3, 4, 5];
const cuadrados = obtenerCuadrados(numeros);
console.log(cuadrados); // Debería mostrar [1, 4, 9, 16, 25]