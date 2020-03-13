"use strict";
class Disciplina {
    constructor(nome) {
        this.nome = nome;
    }
    calcularAprovação(nomeAluno, notaAluno) {
        if (notaAluno >= Disciplina.media) {
            return `${nomeAluno} aprovado(a) em ${this.nome}`;
        }
        else {
            return `${nomeAluno} reprovado (a) em ${this.nome}`;
        }
    }
}
Disciplina.media = 7;
let materia = new Disciplina('Matematica');
console.log(materia.calcularAprovação('Leonardo', 8));
