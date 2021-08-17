export class NegociacoesView {

    private elemento:HTMLElement;

    constructor(seletor:string) {
        this.elemento = document.querySelector(seletor);
    }

    update():void {
        this.elemento.innerHTML = this.template();
    }

    template():string {
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