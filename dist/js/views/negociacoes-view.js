export class NegociacoesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update() {
        this.elemento.innerHTML = this.template();
    }
    template() {
        return `
            <table class="table table-houver table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }
}
