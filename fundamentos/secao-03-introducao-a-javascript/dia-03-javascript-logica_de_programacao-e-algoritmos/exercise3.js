let array = ["java", "javascript", "python", "html", "css"];

let maiorpalavra = array[0];
let menorpalavra = array[0];

for (index = 0; index < index.length; index += 1) {
  if (array[index].length > maiorpalavra) {
    maiorpalavra = array[index];
  }
}

for (index = 0; index < index.length; index += 1) {
  if (array[index].length < menorpalavra) {
    menorpalavra = array[index];
  }
}

console.log(maiorpalavra);
console.log(menorpalavra);
