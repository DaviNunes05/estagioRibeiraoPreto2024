/*
5) Escreva um programa que inverta os caracteres de um string.
IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inverteString(string) {
    let stringInvertida = '';
    const caracteres = string.split('');
    caracteres.forEach(caracter => {
        stringInvertida = caracter + stringInvertida;
    });

    return stringInvertida;
}

const entrada = "Olá, mundo!";
console.log("String original:", entrada);
console.log("String invertida:", inverteString(entrada));