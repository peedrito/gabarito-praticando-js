// Dados Pessoais 
const Nome = "João";
const Peso = 87;
const Idade = 17;
const Altura = 1.7;
// Calculo para IMC
const calculo = peso / Altura ** 2;
// Condição pra saber se a pessoa é saudavel
let saude;
if (calculo < 18) {
    saude = "Seu IMC aponta que você não está saúdavel!"
} else if (calculo > 18 && calculo < 25) {
    saude = "Seu IMC aponta que você está saúdavel!"
} else if (calculo > 25) {
    saude = "Seu IMC aponto que há riscos de saúde!"
} else {
    saude = "Há provavelmente um erro no cálculo IMC."
}
// Imprime resposta no console.
console.log(`O/A Sr(a). ${Nome} tem atualmente ${Idade}, pesa ${peso}kg e sua altura é de ${Altura}. De acordo com o IMC: ${saude}`)