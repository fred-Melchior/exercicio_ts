"use strict";
const multiplica = (a, b) => a * b;
//ou
function multiplica2(a, b) {
    return a * b;
}
class Nome {
    constructor(nome) {
        this.nome = nome;
    }
    dizOi() {
        return `Olá ${this.nome}!`;
    }
}
