const multiplica = (a: number, b: number) => a * b

//ou

function multiplica2(a: number, b: number) {
    return a * b;
}

class Nome {
    nome: string
    constructor(nome: string){
        this.nome = nome
    }

    dizOi(): string {
        return `Olá ${this.nome}!`
    }
}