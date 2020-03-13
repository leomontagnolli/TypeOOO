class Disciplina {
    static media:number = 7;
    nome:string;
    
    constructor (nome:string ) {
        this.nome = nome;
    }
    calcularAprovação (nomeAluno:string , notaAluno:number) {
        if (notaAluno >= Disciplina.media) {
            return `${nomeAluno} aprovado(a) em ${this.nome}`;
        }else {
            return `${nomeAluno} reprovado (a) em ${this.nome}`;
        }
    }
}
let materia: Disciplina = new Disciplina ('Matematica');

console.log(materia.calcularAprovação('Leonardo', 8));