import { View } from "./view.js";
export class MensagemView extends View {
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
