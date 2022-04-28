var idade = 18;

if(idade >= 18){
    console.log("Idade para cadastro")
}else{
    console.log("Não é permitido menores de 18 anos")
}
var nomeParticipantes = ["Gilson", "Carlos", "Fredo", "Jonas", "Gabriel"];
console.log("Participantes");
console.log(nomeParticipantes);

var nomePalestrantes = ["Robson", "Alexandre", "Wilson", "Raimundo"];
console.log("Palestrantes");
console.log(nomePalestrantes);
let quantidadeDeParticipantes = nomeParticipantes.length;

if(quantidadeDeParticipantes < 100){
    console.log("Cadastro Permitido")
}else{
    console.log("Numero máximo de participantes atingido")
}