export class Negociacoes {
    constructor() {
        this.negociacoes = []; // Negociacao[] = Array<Negociacao>
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; // Spread operator cria um novo array com os dados do array dentro do comando
    }
}
