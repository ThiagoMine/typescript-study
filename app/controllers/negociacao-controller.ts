import { Negociacao } from "../models/negociacao.js"; // atenção ao JS

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor () {
        this.inputData          = document.querySelector('#data');
        this.inputQuantidade    = document.querySelector('#quantidade');
        this.inputValor         = document.querySelector('#valor');
    }

    adiciona(): void {
        const negociacao = this.criaNegociuacao();        
        console.log(negociacao);
    }

    criaNegociuacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
}