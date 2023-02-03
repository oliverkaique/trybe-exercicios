//programas para fazer operações aritmeticas

// function soma(a, b) {
//   return a + b;
// }

// console.log(soma(5, 2));

// function soma(a, b) {
//   return a - b;
// }

// console.log(soma(5, 2));

// function soma(a, b) {
//   return a * b;
// }

// console.log(soma(5, 2));

// function soma(a, b) {
//   return a / b;
// }

// console.log(soma(5, 2));

// function soma(a, b) {
//   return a % b;
// }

// console.log(soma(5, 2));

//bonus da minha cabeça: função que passa como argumento para outra função

// const numero = [1, 2];

// function subtracao(numero) {
//   if (numero[0] > numero[1]) {
//     return numero[0] - numero[1];
//   } else {
//     return numero[0] + numero[1];
//   }
// }
// // console.log(subtracao());

// function multiplicaAsbutracao(multiplica, subtracao) {
//   return multiplica * subtracao;
// }

// console.log(multiplicaAsbutracao(5, subtracao(numero)));

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// const numeros = [15, 34];

// function maiorNumero(numeros) {
//   if (numeros[0] > numeros[1]) {
//     return "Numero" + numeros[0] + " maior que numero " + numeros[1];
//   } else if (numeros[1] > numeros[0]) {
//     return "Numero " + numeros[1] + " maior que numero " + numeros[0];
//   } else {
//     return "todos os numeros iguais";
//   }
// }

// console.log(maiorNumero(numeros));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const numeros = [15, 34, 30];

function maiorNumero(numeros) {
  if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {
    return (
      "Numero" +
      numeros[0] +
      " maior que numero " +
      numeros[1] +
      " E " +
      numeros[2]
    );
  } else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]) {
    return (
      "Numero " +
      numeros[1] +
      " maior que numero " +
      numeros[0] +
      " E " +
      numeros[2]
    );
  } else if (numeros[2] > numeros[1] && numeros[2] > numeros[0]) {
    return (
      "Numero " +
      numeros[2] +
      " maior que numero " +
      numeros[0] +
      " E " +
      numeros[1]
    );
  } else {
    return "os numeros são iguais";
  }
}

console.log(maiorNumero(numeros));
