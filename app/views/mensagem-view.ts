import { View } from "./view.js";

export class MensagemView extends View{

    update(model: string): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    template(model: string):string {
        return `
            <p class="alert alert-info">${model }</p>
        `;
    }    
}