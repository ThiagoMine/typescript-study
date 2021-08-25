import { Negociacao } from "../models/negociacao.js"; // atenção ao JS
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoes-view');
    private messageView = new MensagemView("#mensagemView");

    constructor () {
        this.inputData          = document.querySelector('#data');
        this.inputQuantidade    = document.querySelector('#quantidade');
        this.inputValor         = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adiciona(): void {
        const negociacao = this.criaNegociuacao();        
        if (negociacao.data.getDay()>0 && negociacao.data.getDay()<6) {
            this.negociacoes.adiciona(negociacao);
            this.atualizaView();
            this.limparFormulario();    
        } else {
            this.messageView.update('Apenas negociações em dias úteis são aceitas!');
        }
        
    }

    private criaNegociuacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    private limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }

    private atualizaView(): void{
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update('Negociação adicionada com sucesso!');
    }
}