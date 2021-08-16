import { Negociacao } from "./negociacao.js"; //atenção ao js no final

export class Negociacoes{
    private negociacoes:Array<Negociacao> = [];

    adiciona(negociacao: Negociacao):void {
        this.negociacoes.push(negociacao);
    }

    lista():Array<Negociacao> {
        return [...this.negociacoes]; // Spread operator cria um novo array com os dados do array dentro do comando
    }   
}