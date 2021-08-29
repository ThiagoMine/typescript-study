import { NegociacaoController } from "./controllers/negociacao-controller.js"; //Atentar para colocar o .js no auto complete

const controller = new NegociacaoController();
const form = document.querySelector('.form') as HTMLInputElement;
form.addEventListener('submit', event => {
    event.preventDefault(); // Previne o Refresh da página, que seria uma ação default do formulário
    controller.adiciona();
});