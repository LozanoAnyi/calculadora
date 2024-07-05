function suma(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function restar(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function dividir(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function multiplicar(a, b) {
  return parseFloat(a) * parseFloat(b);
}

document.getElementById("sumar").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;

  const resultado = document.getElementById("resultado");
  const suma = parseInt(valorA) + parseInt(valorB);

  resultado.innerText = suma;
});

document.getElementById("restar").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;

  const resultado = document.getElementById("resultado");
  const resta = parseInt(valorA) - parseInt(valorB);

  resultado.innerText = resta;
});

document.getElementById("restar").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;

  const resultado = document.getElementById("resultado");
  const resta = parseInt(valorA) - parseInt(valorB);

  resultado.innerText = resta;
});

document.getElementById("dividir").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;

  const resultado = document.getElementById("resultado");
  const dividir = parseInt(valorA) / parseInt(valorB);

  resultado.innerText = dividir;
});

document.getElementById("multiplicar").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;

  const resultado = document.getElementById("resultado");
  const multiplicar = parseInt(valorA) * parseInt(valorB);

  resultado.innerText = multiplicar;
});

document.getElementById("cuadrado").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;

  const resultado = document.getElementById("resultado");
  const cuadrado = parseInt(valorA) * parseInt(valorA);

  resultado.innerText = cuadrado;
});

document.getElementById("promedio").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;
  const valorC = document.getElementById("valorC").value;

  const sumadetodo = suma(suma(valorA, valorB), valorC);
  const promedio = dividir(sumadetodo, 3);

  const resultado = document.getElementById("resultado");

  resultado.innerText = promedio;
});

document.getElementById("porcentage").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;
  const valorC = document.getElementById("valorC").value;

  const porcentage = multiplicar(valorB, dividir(valorA, 100));

  const resultado = document.getElementById("resultado");

  resultado.innerText = porcentage;
});

document.getElementById("generarporcentage").addEventListener("click", () => {
  const valorA = document.getElementById("valorA").value;
  const valorB = document.getElementById("valorB").value;
  const valorC = document.getElementById("valorC").value;

  const generarporcentage = multiplicar(dividir(valorA, valorB), 100);

  const resultado = document.getElementById("resultado");

  resultado.innerText = generarporcentage;
});

// let valorA = prompt("ingresa el valor a:");
// let valorB = prompt("ingresa el valor b:");
// let valorAccion = prompt("ingresa la operacion que deseas realizar:");

// function suma(a, b) {
//   let resultado = a + b;

//   console.log(`La suma de ${a} y ${b} es ${resultado}`);
// }

// function resta(a, b) {
//   let resultado = a - b;

//   console.log(`la resta de ${a} y ${b} es ${resultado}`);
// }

// function multiplicacion(a, b) {
//   let resultado = a * b;

//   console.log(`la multiplicacion de ${a} y ${b} es ${resultado}`);
// }

// function division(a, b) {
//   let resultado = a / b;

//   if (b == 0) {
//     console.log("no es posible dividir por 0");
//   } else {
//     console.log(`la division de ${a} y ${b} es ${resultado}`);
//   }
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// function cuadradoDeUnNumero(numero) {
//   return multiplicar(numero, numero);
// }

// let numero = 5;
// let cuadrado = cuadradoDeUnNumero(numero);
// console.log(`El cuadrado de ${numero} es ${cuadrado}`);

// switch (valorAccion) {
//   case "suma":
//     suma(valorA, valorB);
//     break;

//   case "resta":
//     resta(valorA, valorB);
//     break;

//   case "multiplicacion":
//     multiplicacion(valorA, valorB);
//     break;

//   case "division":
//     division(valorA, valorB);
//     break;

//   case "cuadrado":
//     cuadradoDeUnNumero(valorA);
//     break;

//   default:
//     alert(
//       "intentalo de nuevo, escoge si quieres realizar una suma, resta, multiplicacion o division."
//     );
//     break;
// }
