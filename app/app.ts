import { NegociacaoController } from "./controllers/negociacao-controller.js"; //Atentar para colocar o .js no auto complete

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault(); // Previne o Refresh da página, que seria uma ação default do formulário
        controller.adiciona();
    });
} else {
    throw Error("Não foi possível analisar a aplicação. Verifique se o form existe");   
}
