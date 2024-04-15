const nomes = ["Vagner", "Vilson", "Wesley", "Valdir", "Maraisa", "Vanderley"];
const nomesComV = []

for (let i = 0; i < nomes.length; i++) {
    const nome = nomes[i];
if (nome.includes("V")) {
    nomesComV.push(nome)

}

}
console.log(nomesComV);