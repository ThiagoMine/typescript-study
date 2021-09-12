# typescript-study

<h2>Aula 1</h2>

<h3> 01 Importação de módulo nativo do ECMAScript </h3>
<article>
    <p>   
        Qual das alternativas abaixo importa corretamente um módulo nativo do EcmaScript? <br>
        A) <code><script module="app/app.js"></script></code><br>
        B) <code><script module src="app/app.js"></script> - <b>Correta</b></code><br>
        C) <code><script type="module" src="app/app.js"></script></code><br>
        D) <code><script type="script" src="app/app.js"></script></code><br>
    </p>
</article>

<h3> 02 Módulo e seu escopo </h3>
<article>
    <p>   
        Qual das alternativas abaixo é verdadeira sobre o scopo de um módulo?<br>
        A) Módulos do ECMAScript não existem na verdade, tudo é considerado um script.<br>
        B) Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades. - <b>Correta</b><br>
        C) Tudo que for declarado dentro de um módulo é automaticamente visível para outros módulos.<br>
        D) Tudo o que for declarado dentro de um módulo, mesmo que o desenvolvedor queira dar visibilidade, não é passível de importação por outros módulos.<br>
    </p>
</article>

<h3> 03 ES2015 e classes </h3>
<article>
    <p>   
        No paradigma da orientação a objetos criamos a representação de algo do mundo real em nosso programa através de modelos e esses modelos são definidos através de classes.<br>
        Marque a alternativa que cria corretamente uma classe usando o ECMASCRIPT 2015:<br>
        A) <br><code>class Pessoa {</code><br>
        <code>&nbsp;constructor(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this.nome = nome;</code><br>
        <code>&nbsp;&nbsp;this.idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code> - <b>Correta</b><br>
        B) <br><code>class Pessoa {</code><br>
        <code>&nbsp;Pessoa(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this.nome = nome;</code><br>
        <code>&nbsp;&nbsp;this.idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        C) <br><code>class Pessoa {</code><br>
        <code>&nbsp;nome;</code><br>
        <code>&nbsp;idade;</code><br>
        <code> }</code><br>
    </p>
</article>

<h3> 04 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Introdução ao projeto e sua estrutura<br>
        &nbsp;Um pouco sobre módulos do ECMASCRIPT<br>
        &nbsp;Modelagem de uma Negociação em Javascript<br>
        &nbsp;Buracos em nossa modelagem por limitações da linguagem Javascript<br>
    </p>
</article>

<hr>

<h2>Aula 2</h2>

<h3> 01 Sobre o compilador do TypeScript </h3>
<article>
    <p>   
        Temos as seguintes afirmações a respeito do compilador do TypeScript:<br>
        &nbsp;1) O uso de Node.js é opcional, mas altamente recomendável<br>
        &nbsp;2) Ele traduz um código escrito em JavaScript para um código compatível com o TypeScript, necessário para que o navegador o compreenda<br>
        &nbsp;3) Podemos passar configurações especiais para o compilador através do arquivo tsconfig.json<br>
        &nbsp;4) É instalado através do npm<br>
        Sobre as afirmativas anteriores, podemos dizer que:<br>
        &nbsp;A) 3 e 4 são falsas.<br>
        &nbsp;B) 1 e 3 são verdadeiras.<br>
        &nbsp;C) 1 e 2 são falsas. - <b>Correta</b><br>
    </p>
</article>

<h3> 02 Configuração básica do compilador </h3>
<article>
    <p>   
        Nome do arquivo: tsconfig.json - na raiz do projeto<br>
        <code>{</code><br>
        <code>&nbsp;"compilerOptions": { </code><br>
        <code>&nbsp;&nbsp;"outDir": "dist/js", // Diretório de saída do JS</code><br>
        <code>&nbsp;&nbsp;"target": "ES6"      // Action script do JS</code><br>
        <code>&nbsp;},</code><br>
        <code>&nbsp;"include": [</code><br>
        <code>&nbsp;&nbsp;"app/**/*" // Diretório fonte do TS</code><br>
        <code>&nbsp;]</code><br>
        <code>}</code><br>
        No package.json criar o script: <code>"compile": "tsc"</code><br>
        então teremos o comando: <code>npm run compile</code><br>
    </p>
</article>

<h3> 03 O arquivo tsconfig.json </h3>
<article>
    <p>   
        Temos a seguinte declaração do arquivo tsconfig.json:<br>
        <code>{</code><br>
        <code>&nbsp;"compilerOptions": {</code><br>
        <code>&nbsp;&nbsp;"target": "ES6",</code><br>
        <code>&nbsp;&nbsp;"outDir": "dist/js",</code><br>
        <code>&nbsp;},</code><br>
        <code>&nbsp;"include": [</code><br>
        <code>&nbsp;&nbsp;"app/**/*"</code><br>
        <code>&nbsp;]</code><br>
        <code>}</code><br>
        Marque a alternativa a respeito da configuração:<br>
        A) A propriedade "target" indica para o compilator tsc (TypeScript Compiler) para qual versão do Javascript o código escrito em TypeScript deve ser compilado. Isso significa que o <br>resultado final será arquivos Javascript sem qualquer referência para a sintaxe do Typescript. - <b>Correta</b><br>
        B) A propriedade "outDir" indica para o compilador onde estão os arquivos ".ts" que ele deve compilar.<br>
        C) A propriedade "include" indica para o compilador onde os arquivos resultantes da compilação de arquivos ".ts" serão salvos.<br>
    </p>
</article>

<h3> 04 Aprimorando a configuração </h3>
<article>
    <p>   
        <code>{</code><br>
        <code>&nbsp;"compilerOptions": {</code><br>
        <code>&nbsp;&nbsp;"outDir": "dist/js",</code><br>
        <code>&nbsp;&nbsp;"target": "ES6",</code><br>
        <code>&nbsp;&nbsp;"noEmitOnError": true // Impede que os arquivos JS sejam criados enquanto houverem erros no arquivo TS/compilação</code><br>
        <code>&nbsp;},</code><br>
        <code>&nbsp;"include": [</code><br>
        <code>&nbsp;&nbsp;"app/**/*"</code><br>
        <code>&nbsp;]</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Automatizando a compilação de arquivos </h3>
<article>
    <p>   
        No package.json criar o script: <code>"watch": "tsc -w"</code>
        Isso gera o comando <code>npm run watch</code>, que fica observando os arquivos ts quando houver alterações esse já compila o mesmo automaticamente
        No package.json criar o script: <code>"start": "concurrently \"npm run watch\" \"npm run server\""</code>,
        Isso gera o comando <code>npm run start</code>, que fica observando os arquivos ts quando houver alterações esse já compila o mesmo automaticamente e faz o refresh da página do navegador<br>
    </p>
</article>

<h3> 06 O modificador private </h3>
<article>
    <p>   
        Substituir # pelo _ adicionando o private<br>
    </p>
</article>

<h3> 07 TypeScript e classes </h3>
<article>
    <p>   
        O TypeScript é um superset da ES2015, ou seja, além de suportar os recurso da linguagem desta versão, adiciona outros. Um exemplo é o suporte ao modificador private.<br>
        Marque a opção na qual há um erro de compilação do TypeScript de acesso indevido a uma propriedade privada.<br>
        A) <br>
        <code>class Pessoa {</code><br>
<br>
        <code>&nbsp;private _nome;</code><br>
        <code>&nbsp;_idade;</code><br>
<br>
        <code>&nbsp;constructor(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this._nome = nome;</code><br>
        <code>&nbsp;&nbsp;this._idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
<br>
        <code>let pessoa = new Pessoa('Danilo', 30);</code><br>
        <code>pessoa._idade = 20;</code><br><br>
        B) <br>
        <code>class Pessoa {</code><br>
<br>
        <code>&nbsp;private nome;</code><br>
        <code>&nbsp;idade;</code><br>
<br>
        <code>&nbsp;constructor(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this.nome = nome;</code><br>
        <code>&nbsp;&nbsp;this.idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
<br>
        <code>let pessoa = new Pessoa('Barney', 18);</code><br>
        <code>pessoa.nome = 'Martin';</code> - <b>Correta</b><br><br>
        C) <br>
        <code>class Pessoa {</code><br>
<br>
        <code>&nbsp;private nome;</code><br>
<br>
        <code>&nbsp;constructor(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this._nome = nome;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
<br>
        <code>let pessoa = new Pessoa('Milan', 25);</code><br>
        <code>pessoa._idade = 10; </code><br>
    </p>
</article>

<h3> 08 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:
        &nbsp;Download do TypeScript
        &nbsp;Configuração do compilador e papel do tsconfig.json
        &nbsp;Integração com scripts do Node.js
        &nbsp;Modificadores de accesso private e public
        &nbsp;Benefícios iniciais da linguagem TypeScript<br>
    </p>
</article>

<hr>

<h2>Aula 3</h2>

<h3> 01 O controller de negociação </h3>
<article>
    <p>   
        Criação do controler que lerá o formulário e criará o modelo, segue código gerado:<br>
        <code>export class negociacaoController{</code><br>
        <code>&nbsp;private inputData;</code><br>
        <code>&nbsp;private inputQuantidade;</code><br>
        <code>&nbsp;private inputValor;</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona() {</code><br>
        <code>&nbsp;&nbsp;console.log(this.inputData);</code><br>
        <code>&nbsp;&nbsp;console.log(this.inputQuantidade);</code><br>
        <code>&nbsp;&nbsp;console.log(this.inputValor);</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 02 Integração com o formulário </h3>
<article>
    <p>   
        Realizando a integração com o formulário no app.ts, segue código gerado:<br>
        <code>import { NegociacaoController } from "./controllers/negociacao-controller.js"; //Atentar para colocar o .js no auto complete</code><br>
<code></code><br>
        <code>const controller = new NegociacaoController();</code><br>
        <code>const form = document.querySelector('.form');</code><br>
        <code>form.addEventListener('submit', event => {</code><br>
        <code>&nbsp;event.preventDefault(); // Previne o Refresh da página, que seria uma ação default do formulário</code><br>
        <code>&nbsp;controller.adiciona();</code><br>
        <code>});</code><br>
    </p>
</article>

<h3> 03 Surpresa ao instanciar uma negociação </h3>
<article>
    <p>   
        Iniciando a captura de valores no Form, Alterações de código no controller:<br>
        <code>import { Negociacao } from "../models/negociacao.js"; // atenção ao JS</code><br>
<code></code><br>
        <code>export class NegociacaoController{</code><br>
        <code>&nbsp;private inputData;</code><br>
        <code>&nbsp;private inputQuantidade;</code><br>
        <code>&nbsp;private inputValor;</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona() {</code><br>
        <code>&nbsp;&nbsp;const negociacao = new Negociacao(</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.inputData.value,</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.inputQuantidade.value,</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.inputValor.value</code><br>
        <code>&nbsp;&nbsp;);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;console.log(negociacao);</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 04 O tipo implícito any </h3>
<article>
    <p>   
        Ativando a tipagem no compilador, ou seja, obrigando a utilização de tipagens, alteração de código:<br>
        No arquivo tsconfig.json dentro do array compilerOptions passamos a seguinte config <code> "noImplicitAny": true </code><br>
        Isso causou uma série de erros em negociacao.ts e negociacao-controller.ts, segue código alterado para arrumar o negociação.ts<br>
        <code>export class Negociacao {</code><br>
        <code>&nbsp;private _data: Date;</code><br>
        <code>&nbsp;private _quantidade: number;</code><br>
        <code>&nbsp;private _valor: number;</code><br>
<code></code><br>
        <code>&nbsp;constructor(data: Date, quantidade: number, valor: number) { // O tipo vem depois</code><br>
        <code>&nbsp;&nbsp;this._data = data;</code><br>
        <code>&nbsp;&nbsp;this._quantidade = quantidade;</code><br>
        <code>&nbsp;&nbsp;this._valor = valor;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get data() {</code><br>
        <code>&nbsp;&nbsp;return this._data;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get quantidade() {</code><br>
        <code>&nbsp;&nbsp;return this._quantidade;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get valor() {</code><br>
        <code>&nbsp;&nbsp;return this._valor;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get volume() {</code><br>
        <code>&nbsp;&nbsp;return this._quantidade * this._valor;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Sobre o tipo any </h3>
<article>
    <p>   
        Marque apenas as opções verdadeiras sobre o tipo any. Selecione 2 alternativas<br>
        &nbsp;A) Uma variável do tipo any só pode receber dados do tipo any.<br>
        &nbsp;B) Por padrão, é assumido automaticamente pelo TypeScript quando não definimos o tipo das nossas variáveis. - <b>Correta</b><br>
        &nbsp;C) É possível desativar o tipo implícito any passando uma configuração especial para o compilador no arquivo tsconfig.json. Isso fará com que o compilador emita um erro em todos os locais que o tipo any foi adotado implicitamente. - <b>Correta</b><br>
        &nbsp;D) Favorece o compilador, inclusive IDE's a realizarem o autocomplete e a inferirem todos os métodos da variável.<br>
    </p>
</article>

<h3> 06 Ajustando nosso controller </h3>
<article>
    <p>   
        Inciando fix do controller, arrumando o tipo HTMLInputElement<br>
        <code>import { Negociacao } from "../models/negociacao.js"; // atenção ao JS</code><br>
<code></code><br>
        <code>export class NegociacaoController{</code><br>
        <code>&nbsp;private inputData: HTMLInputElement;</code><br>
        <code>&nbsp;private inputQuantidade: HTMLInputElement;</code><br>
        <code>&nbsp;private inputValor: HTMLInputElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona() {</code><br>
        <code>&nbsp;&nbsp;const negociacao = new Negociacao(</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.inputData.value,</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.inputQuantidade.value,</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.inputValor.value</code><br>
        <code>&nbsp;&nbsp;);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;console.log(negociacao);</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 07 Sobre o código </h3>
<article>
    <p>   
        Marina configurou seu arquivo tsconfig.json da seguinte maneira:<br>
        <code>{</code><br>
        <code>&nbsp;"compilerOptions": {</code><br>
        <code>&nbsp;&nbsp;"target": "es6",</code><br>
        <code>&nbsp;&nbsp;"outDir": "app/js",</code><br>
        <code>&nbsp;&nbsp;"noEmitOnError": true,</code><br>
        <code>&nbsp;&nbsp;"noImplicitAny": false</code><br>
        <code>&nbsp;},</code><br>
        <code>&nbsp;"include": [</code><br>
        <code>&nbsp;&nbsp;"app/ts/**/*"</code><br>
        <code>&nbsp;]</code><br>
        <code>}</code><br>
        Em seguida declarou a seguinte classe<br>
        <code>class Controller {</code><br>
<code></code><br>
        <code>private inputPreco: HTMLInputElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor() {</code><br>
        <code>&nbsp;&nbsp;this.inputPreco = document.querySelector('#preco');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona(event) {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;event.preventDefault();</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;alert(this.inputPreco.value);</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        Marque as alternativas verdadeiras a respeito da classe Controller.<br><br>
        A) O código compila. - <b>Correta</b><br>
        B) O código não compila.<br>
        C) Não é um código TypeScript válido.<br>
    </p>
</article>

<h3> 08 Convertendo dados de entrada </h3>
<article>
    <p>   
        Finalizando fix do controller, arrumando os tipos da negociação, segue código<br>
        <code>import { Negociacao } from "../models/negociacao.js"; // atenção ao JS</code><br>
<code></code><br>
        <code>export class NegociacaoController{</code><br>
        <code>&nbsp;private inputData: HTMLInputElement;</code><br>
        <code>&nbsp;private inputQuantidade: HTMLInputElement;</code><br>
        <code>&nbsp;private inputValor: HTMLInputElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona() {</code><br>
        <code>&nbsp;&nbsp;const exp = /-/g;</code><br>
        <code>&nbsp;&nbsp;const date = new Date(this.inputData.value.replace(exp, ','));</code><br>
        <code>&nbsp;&nbsp;const quantidade = parseInt(this.inputQuantidade.value);</code><br>
        <code>&nbsp;&nbsp;const valor = parseFloat(this.inputValor.value);</code><br>
        <code>&nbsp;&nbsp;const negociacao = new Negociacao(date, quantidade, valor);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;console.log(negociacao);</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 09 Conversão de data </h3>
<article>
    <p>   
        Marque a opção correta que cria um objeto Date a partir de uma string: Selecione uma alternativa<br>
        A) <code>const date = new Date('2021,2,20'); - <b>Correta</b></code><br>
        A) <code>const date = new Date('2021-2-20');</code><br>
        A) <code>const date = new Date('2021 2 20');</code><br>
    </p>
</article>

<h3> 10 Organizando melhor nosso código </h3>
<article>
    <p>   
        Melhorando o código e tipando os métodos do controller e do model<br>
        Controller:<br>
        <code>import { Negociacao } from "../models/negociacao.js"; // atenção ao JS</code><br>
<code></code><br>
        <code>export class NegociacaoController{</code><br>
        <code>&nbsp;private inputData: HTMLInputElement;</code><br>
        <code>&nbsp;private inputQuantidade: HTMLInputElement;</code><br>
        <code>&nbsp;private inputValor: HTMLInputElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona(): void {</code><br>
        <code>&nbsp;&nbsp;const negociacao = this.criaNegociuacao();        </code><br>
        <code>&nbsp;&nbsp;console.log(negociacao);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;criaNegociuacao(): Negociacao {</code><br>
        <code>&nbsp;&nbsp;const exp = /-/g;</code><br>
        <code>&nbsp;&nbsp;const date = new Date(this.inputData.value.replace(exp, ','));</code><br>
        <code>&nbsp;&nbsp;const quantidade = parseInt(this.inputQuantidade.value);</code><br>
        <code>&nbsp;&nbsp;const valor = parseFloat(this.inputValor.value);</code><br>
        <code>&nbsp;&nbsp;return new Negociacao(date, quantidade, valor);</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        Model:<br>
        <code>export class Negociacao {</code><br>
        <code>&nbsp;private _data: Date;</code><br>
        <code>&nbsp;private _quantidade: number;</code><br>
        <code>&nbsp;private _valor: number;</code><br>
<code></code><br>
        <code>&nbsp;constructor(data: Date, quantidade: number, valor: number) { // O tipo vem depois</code><br>
        <code>&nbsp;&nbsp;this._data = data;</code><br>
        <code>&nbsp;&nbsp;this._quantidade = quantidade;</code><br>
        <code>&nbsp;&nbsp;this._valor = valor;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get data(): Date {</code><br>
        <code>&nbsp;&nbsp;return this._data;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get quantidade(): number {</code><br>
        <code>&nbsp;&nbsp;return this._quantidade;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get valor(): number {</code><br>
        <code>&nbsp;&nbsp;return this._valor;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get volume(): number {</code><br>
        <code>&nbsp;&nbsp;return this._quantidade * this._valor;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 11 Limpando o formulário </h3>
<article>
    <p>   
        Limpando formulário e colocando focus no data, segue método criado no controller:<br>
        <code>limparFormulario(): void{</code><br>
        <code>&nbsp;this.inputData.value = '';</code><br>
        <code>&nbsp;this.inputQuantidade.value = '';</code><br>
        <code>&nbsp;this.inputValor.value = '';</code><br>
<code></code><br>
        <code>&nbsp;this.inputData.focus();</code><br>
        <code>}</code><br>
        No Método adiciona(), foi adiconanda o seguinte comando logo após a apresentação do resultado no console.log <br>
        <code>this.limparFormulario();</code><br>
    </p>
</article>

<h3> 12 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;O tipo implícito any<br>
        &nbsp;Benefícios da tipagem estática<br>
        &nbsp;Mais configurações do compilador tsc<br>
        &nbsp;Retorno de método explícito<br>
        &nbsp;Conversão de valores da interface do usuário<br>
    </p>
</article>

<hr>

<h2>Aula 4</h2>

<h3> 01 Modelo de uma lista de negociações </h3>
<article>
    <p>   
        Iniciando a criação do modelo negociações:<br>
        <code>export class Negociacoes{</code><br>
        <code>&nbsp;private negociacoes = [];</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 02 Primeiro contato com Generics </h3>
<article>
    <p>   
        Criando uma lista tipo Array de Negociação na classe Negociações:<br>
        <code>import { Negociacao } from "./negociacao.js"; //atenção ao js no final</code><br>
<code></code><br>
        <code>export class Negociacoes{</code><br>
        <code>&nbsp;private negociacoes:Array<Negociacao> = [];</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 03 Sobre Array </h3>
<article>
    <p>   
        Marque apenas as opções que declaram um array corretamente em TypeScript, assumindo que a configuração noImplicitAny está definida com o valor true. Selecione 2 alternativas<br>
        A) <code>let nomes: Array<string> = [];</code> - <b>Correta</b><br>
        B) <code>let idades: Array<Number> = [1, 2, 3];</code> - <b>Correta</b><br>
        C) <code>let salarios: Array = [5400.00, 2400.00, 7100.00];</code><br>
    </p>
</article>

<h3> 04 Avançando com nosso modelo </h3>
<article>
    <p>   
        Criando métodos adiciona e lista na model negociações:<br>
        <code>adiciona(negociacao: Negociacao):void {</code><br>
        <code>&nbsp;this.negociacoes.push(negociacao);</code><br>
        <code>}</code><br>
<code></code><br>
        <code>lista():Array<Negociacao> {</code><br>
        <code>&nbsp;return this.negociacoes;</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Um problema não esperado </h3>
<article>
    <p>   
        Adicionando os métodos criados em negociações ao controller:<br>
        <code>import { Negociacao } from "../models/negociacao.js"; // atenção ao JS</code><br>
        <code>import { Negociacoes } from "../models/negociacoes.js";</code><br>
<code></code><br>
        <code>export class NegociacaoController{</code><br>
        <code>&nbsp;private inputData: HTMLInputElement;</code><br>
        <code>&nbsp;private inputQuantidade: HTMLInputElement;</code><br>
        <code>&nbsp;private inputValor: HTMLInputElement;</code><br>
        <code>&nbsp;private negociacoes = new Negociacoes();</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona(): void {</code><br>
        <code>&nbsp;&nbsp;const negociacao = this.criaNegociuacao();        </code><br>
        <code>&nbsp;&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;&nbsp;console.log(this.negociacoes.lista());</code><br>
        <code>&nbsp;&nbsp;this.limparFormulario();</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;criaNegociuacao(): Negociacao {</code><br>
        <code>&nbsp;&nbsp;const exp = /-/g;</code><br>
        <code>&nbsp;&nbsp;const date = new Date(this.inputData.value.replace(exp, ','));</code><br>
        <code>&nbsp;&nbsp;const quantidade = parseInt(this.inputQuantidade.value);</code><br>
        <code>&nbsp;&nbsp;const valor = parseFloat(this.inputValor.value);</code><br>
        <code>&nbsp;&nbsp;return new Negociacao(date, quantidade, valor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;limparFormulario(): void{</code><br>
        <code>&nbsp;&nbsp;this.inputData.value = '';</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade.value = '';</code><br>
        <code>&nbsp;&nbsp;this.inputValor.value = '';</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;this.inputData.focus();</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 06 Evitando a mutabilidade da lista </h3>
<article>
    <p>   
        No formato anterior era possível alterar a lista de negociações pelo método lista, usa-se a princípio o spread operator para solucionar o problema, segue método lista() alterado:<br>
        <code>lista():Array<Negociacao> {</code><br>
        <code>&nbsp;return [...this.negociacoes]; // Spread operator cria um novo array com os dados do array dentro do comando</code><br>
        <code>}  </code><br>
    </p>
</article>

<h3> 07 O modificador readonly </h3>
<article>
    <p>   
        A fim de melhorar a semantica do código usamos o tipo ReadonlyArray, e não a tecnica de spread.<br>
        <code>lista():ReadonlyArray<Negociacao> {</code><br>
        <code>&nbsp;return this.negociacoes; // Spread operator cria um novo array com os dados do array dentro do comando</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 08 Somente leitura </h3>
<article>
    <p>   
        Marque a opção que declara um array e que não disponibilize a remoção ou inclusão de novos items. Selecione uma alternativa<br>
        A) <code>const nomes: Readonly<string> = ['a', 'b', 'c'];</code><br>
        B) <code>const nomes: ReadonlyArray<string> = ['a', 'b', 'c'];</code> - <b>Correta</b>
        C) <code>const nomes: ArrayReadonly<string> = ['a', 'b', 'c'];</code><br>
    </p>
</article>

<h3> 09 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Modelagem da classe Negociacoes<br>
        &nbsp;Utiliação de Generics<br>
        &nbsp;Revisão sobre encapsulamento<br>
        &nbsp;Questões de mutabilidade e como solucioná-la<br>
        &nbsp;O tipo ReadonlyArray<br>
        &nbsp;Adição de negociações em nossa lista<br>
    </p>
</article>

<hr>

<h2>Aula 5</h2>

<h3> 01 Declaração no próprio construtor </h3>
<article>
    <p>   
        Criando atributos direto no construtor: <br>
        <code>constructor(</code><br>
        <code>&nbsp;private _data: Date, </code><br>
        <code>&nbsp;private _quantidade: number, </code><br>
        <code>&nbsp;private _valor: number</code><br>
        <code>) {}</code><br>
    </p>
</article>

<h3> 02 Construtor e atalho </h3>
<article>
    <p>   
        Temos a seguinte declaração de classe:<br>
        <code>export class Fatura {</code><br>
<code></code><br>
        <code>&nbsp;private criadaEm: Date;</code><br>
        <code>&nbsp;private quantidade: number;</code><br>
        <code>&nbsp;private valor: number;</code><br>
<code></code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;quantidade: number, </code><br>
        <code>&nbsp;&nbsp;valor: number</code><br>
        <code>&nbsp;) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.criadaEm = creadaEm;</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.quantidade = quantidade;</code><br>
        <code>&nbsp;&nbsp;&nbsp;this.valor = valor;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        Marque a alternativa que declara a mesma classe utilizando o atalho que o TypeScript possui e que vimos na aula.<br>
        A)  - <b>Correta</b><br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;private criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;private quantidade: number, </code><br>
        <code>&nbsp;&nbsp;private valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
        B) <br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;quantidade: number, </code><br>
        <code>&nbsp;&nbsp;valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
        C) <br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;public criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;public quantidade: number, </code><br>
        <code>&nbsp;&nbsp;public valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
<br>
    </p>
</article>

<h3> 03 Arrays e Generics </h3>
<article>
    <p>   
        Simplificando declarações de tipo array<br>
        <code>private negociacoes:Negociacao[] = []; // Negociacao[] = Array<Negociacao></code><br>
        <code>lista(): readonly Negociacao[] { // readonly Negociacao[] = ReadonlyArray<Negociacao></code><br>
    </p>
</article>

<h3> 04 Mais sobre readonly </h3>
<article>
    <p>   
        No model negociacao ao invés de usar os atributos como private, podemos usá-los como public porém usamos o readonly no construtor pos assim uma vez atribuido o valor neste construtor não é mais permitido altera-lo, o código era assim:<br>
        <code>export class Negociacao {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;private _data: Date, </code><br>
        <code>&nbsp;&nbsp;private _quantidade: number, </code><br>
        <code>&nbsp;&nbsp;private _valor: number</code><br>
        <code>&nbsp;&nbsp;) {}</code><br>
<code></code><br>
        <code>&nbsp;get data(): Date {</code><br>
        <code>&nbsp;&nbsp;return this._data;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get quantidade(): number {</code><br>
        <code>&nbsp;&nbsp;return this._quantidade;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get valor(): number {</code><br>
        <code>&nbsp;&nbsp;return this._valor;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get volume(): number {</code><br>
        <code>&nbsp;&nbsp;return this._quantidade * this._valor;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        E Fica assim:<br>
        <code>export class Negociacao {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;public readonly data: Date, </code><br>
        <code>&nbsp;&nbsp;public readonly quantidade: number, </code><br>
        <code>&nbsp;&nbsp;public readonly valor: number</code><br>
        <code>&nbsp;) {}</code><br>
<code></code><br>
        <code>&nbsp;</code><br>
        <code>&nbsp;get volume(): number {</code><br>
        <code>&nbsp;&nbsp;return this.quantidade * this.valor;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Um pouco mais sobre readonly </h3>
<article>
    <p>   
        Temos o seguinte código:<br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;private criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;private quantidade: number, </code><br>
        <code>&nbsp;&nbsp;private valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
        Marque a opção que torna a propriedade criadaEm somente leitura.<br>
        A) - <b>Correta</b> <br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;private readonly criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;private quantidade: number, </code><br>
        <code>&nbsp;&nbsp;private valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
        B) <br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;readonly private criadaEm: Date, </code><br>
        <code>&nbsp;&nbsp;private quantidade: number, </code><br>
        <code>&nbsp;&nbsp;private valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
        C) <br>
        <code>export class Fatura {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;private criadaEm: readonly Date, </code><br>
        <code>&nbsp;&nbsp;private quantidade: number, </code><br>
        <code>&nbsp;&nbsp;private valor: number</code><br>
        <code>&nbsp;) {}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 06 Mais surpresas em nossa modelagem </h3>
<article>
    <p>   
        Mesmo no readonly a data pode ser alterada pois é um objeto que possui métodos que permitem a manipulação do valor.<br>
    </p>
</article>

<h3> 07 Programação defensiva </h3>
<article>
    <p>   
        Fazemos programação defensica para solucionar o problema anterior, segue código:<br>
        <code>export class Negociacao {</code><br>
        <code>&nbsp;constructor(</code><br>
        <code>&nbsp;&nbsp;private _data: Date, </code><br>
        <code>&nbsp;&nbsp;public readonly quantidade: number, </code><br>
        <code>&nbsp;&nbsp;public readonly valor: number</code><br>
        <code>&nbsp;) {}</code><br>
<code></code><br>
        <code>&nbsp;get data():Date {</code><br>
        <code>&nbsp;&nbsp;const data = new Date(this._data.getTime());</code><br>
        <code>&nbsp;&nbsp;return data;</code><br>
        <code>&nbsp;}</code><br>
        <code>&nbsp;</code><br>
        <code>&nbsp;get volume(): number {</code><br>
        <code>&nbsp;&nbsp;return this.quantidade * this.valor;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 08 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Nova maneira de declaração de array com generics<br>
        &nbsp;O tipo ReadonlyArray<br>
        &nbsp;O modificador readonly<br>
        &nbsp;Getters vs propriedades públicas em modo de leitura<br>
        &nbsp;Programação defensiva<br>
    </p>
</article>

<hr>

# typescript-study-2

<h2>Aula 1</h2>

<h3> 01 Modelo para o usuário </h3>
<article>
    <p>   
        Apresentando o modelo de view que iremos usar. <br>
    </p>
</article>

<h3> 02 Criando nossa primeira view </h3>
<article>
    <p>   
        Iniciando o código da view:<br>
        <code>export class NegociacoesView {</code><br>
        <code>template():string {</code><br>
        <code>&nbsp;return `codigo html da tabela`;</code><br>
        <code>}</code><br>
    }
    </p>
</article>

<h3> 03 Integrando nossa view à página </h3>
<article>
    <p>   
        Fazendo o render do template no HTML<br>
        No index.html criamos uma div para receber a tabela a ser criada: <code><div id="negociacoes-view"></div></code><br>
        No código da view criamos o método update e fazemos atravé do construtor um cache do elemento a ser alterado, segue código:<br>
        <code>export class NegociacoesView {</code><br>
<code></code><br>
        <code>&nbsp;private elemento:HTMLElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor(seletor:string) {</code><br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;update():void {</code><br>
        <code>&nbsp;&nbsp;this.elemento.innerHTML = this.template();</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;template():string {</code><br>
        <code>&nbsp;&nbsp;return `codigo html da tabela`;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        No código da controller criamos um atributo para armazenar a classe view e no construtor da controller adicionamos uma chamada para o método update da view:<br>
        <code>private negociacoesView = new NegociacoesView('#negociacoes-view');</code><br>
        <code>his.negociacoesView.update();</code><br>
    </p>
</article>

<h3> 04 Criando elementos do DOM dinamicamente </h3>
<article>
    <p>   
        Utilizando a API do DOM, podemos criar elementos dinamicamente através de document.createElement ou:<br>
        A) Através da propriedade innerHTML que aceita receber elementos do DOM.<br>
        B) Através da propriedade innerHTML que recebe uma string que é convertida para elementos do DOM. - <b>Correta</b><br>
        C) textContent, que aceita receber uma string que é convertida em elementos do DOM.<br>
    </p>
</article>

<h3> 05 Revisando nossos passos </h3>
<article>
    <p>   
        Revisão dos passos 3 ao 6<br>
    </p>
</article>

<h3> 06 Unindo view e modelo </h3>
<article>
    <p>   
        1 - Controller manda para o método update do view o modelo Negociacoes<br>
        2 - O Método Update por sua vez transmite o model para o template<br>
        3 - O template irá mapear o model que contém um Array de Negociacao e criar uma linha de tabela <code><tr></code> para cada Negociacao<br>
        4 - Controller executa após cada inserção de negociação o update de view <br><br>
        Código da Controller:<br>
        <code>import { Negociacao } from "../models/negociacao.js"; // atenção ao JS</code><br>
        <code>import { Negociacoes } from "../models/negociacoes.js";</code><br>
        <code>import { NegociacoesView } from "../views/negociacoes-view.js";</code><br>
<code></code><br>
        <code>export class NegociacaoController{</code><br>
        <code>&nbsp;private inputData: HTMLInputElement;</code><br>
        <code>&nbsp;private inputQuantidade: HTMLInputElement;</code><br>
        <code>&nbsp;private inputValor: HTMLInputElement;</code><br>
        <code>&nbsp;private negociacoes = new Negociacoes();</code><br>
        <code>&nbsp;private negociacoesView = new NegociacoesView('#negociacoes-view');</code><br>
<code></code><br>
        <code>&nbsp;constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade');</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor');</code><br>
        <code>&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;adiciona(): void {</code><br>
        <code>&nbsp;&nbsp;const negociacao = this.criaNegociuacao();        </code><br>
        <code>&nbsp;&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;&nbsp;this.limparFormulario();</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;criaNegociuacao(): Negociacao {</code><br>
        <code>&nbsp;&nbsp;const exp = /-/g;</code><br>
        <code>&nbsp;&nbsp;const date = new Date(this.inputData.value.replace(exp, ','));</code><br>
        <code>&nbsp;&nbsp;const quantidade = parseInt(this.inputQuantidade.value);</code><br>
        <code>&nbsp;&nbsp;const valor = parseFloat(this.inputValor.value);</code><br>
        <code>&nbsp;&nbsp;return new Negociacao(date, quantidade, valor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;limparFormulario(): void{</code><br>
        <code>&nbsp;&nbsp;this.inputData.value = '';</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade.value = '';</code><br>
        <code>&nbsp;&nbsp;this.inputValor.value = '';</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;this.inputData.focus();</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br><br>
        Código da View:<br>
        <code>import { Negociacoes } from "../models/negociacoes.js";</code><br>
<code></code><br>
        <code>export class NegociacoesView {</code><br>
<code></code><br>
        <code>&nbsp;private elemento:HTMLElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor(seletor:string) {</code><br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;update(model: Negociacoes):void {</code><br>
        <code>&nbsp;&nbsp;this.elemento.innerHTML = this.template(model);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;template(model: Negociacoes):string {</code><br>
        <code>&nbsp;&nbsp;return `</code><br>
        <code>&nbsp;&nbsp;&nbsp;<table class="table table-houver table-bordered"></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;<thead></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>DATA</th></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>QUANTIDADE</th></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<th>VALOR</th></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;</thead></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;<tbody></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${model.lista().map(negociacao => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return `</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>?</td></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>${negociacao.quantidade}</td></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>${negociacao.valor}</td></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}).join(' ')}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;</tbody></code><br>
        <code>&nbsp;&nbsp;&nbsp;</table></code><br>
        <code>&nbsp;&nbsp;`;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 07 A arte do template string </h3>
<article>
    <p>   
        Guga escreveu o seguinte código:<br>
        <code>let vogais: string[] = ['a', 'e', 'i', 'o', 'u'];</code><br>
        <code>let template = `</code><br>
<code></code><br>
        <code>&nbsp;<ul></code><br>
        <code>&nbsp;&nbsp;${</code><br>
        <code>&nbsp;&nbsp;&nbsp;vogais.map(vogal => </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;`</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li>${vogal.toUpperCase()}</li></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;`</code><br>
        <code>&nbsp;&nbsp;&nbsp;).join('')</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>&nbsp;</ul></code><br>
        <code>`;</code><br>
        <code>console.log(template);</code><br><br>
        A saída de console.log exibirá:<br><br>
        A-) - <b>Correta</b><br>
        <code><ul></code><br>
        <code>&nbsp;<li>A</li>   </code><br>
        <code>&nbsp;<li>E</li>&nbsp; </code><br>
        <code>&nbsp;<li>I</li>&nbsp;  </code><br>
        <code>&nbsp;<li>O</li>&nbsp;  </code><br>
        <code>&nbsp;<li>U</li>&nbsp;</code><br>
        <code></ul></code><br><br>
        B-)<br>
        <code><ul></code><br>
        <code>&nbsp;<li>a</li>&nbsp; </code><br>
        <code>&nbsp;<li>e</li>&nbsp;  </code><br>
        <code>&nbsp;<li>i</li>&nbsp;</code><br>
        <code>&nbsp;<li>o</li>&nbsp; </code><br>
        <code>&nbsp;<li>u</li>  </code><br>
        <code></ul></code><br><br>
        C-)<br>
        <code><li>A</li></code><br>
        <code><li>E</li></code><br>
        <code><li>I</li></code><br>
        <code><li>O</li></code><br>
        <code><li>U</li></code><br>
    </p>
</article>

<h3> 08 Formatando a data </h3>
<article>
    <p>   
        1 - Usando a classe Intl para formatar a data<br><br>
        Alteração de código do template:<br>
        de: <code><td>?</td></code><br>
        para: <code><td>${new Intl.DateTimeFormat().format(negociacao.data)}</td></code><br>
    </p>
</article>

<h3> 09 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Inpiração no React para criação de templates declarativos e dinâmicos<br>
        &nbsp;Manipulação declarativa do DOM através de template<br>
        &nbsp;Template dinâmico<br>
        &nbsp;Formatação de datas usando Intl<br>
    </p>
</article>

<hr>

<h2>Aula 2</h2>

<h3> 01 Mensagem view </h3>
<article>
    <p>   
        1 - Cria view da mensagem:<br>
        Código:<br>
        <code>export class MensagemView {</code><br>
<code></code><br>
        <code>&nbsp;private element: HTMLElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor (seletor: string) {</code><br>
        <code>&nbsp;&nbsp;this.element = document.querySelector(seletor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;template(model: string):string {</code><br>
        <code>&nbsp;&nbsp;return `</code><br>
        <code>&nbsp;&nbsp;&nbsp;${model }</code><br>
        <code>&nbsp;&nbsp;`;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;update(model: string): void {</code><br>
        <code>&nbsp;&nbsp;const template = this.template(model);</code><br>
        <code>&nbsp;&nbsp;this.element.innerHTML = template;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br><br>
        2 - Cria propriedade para o Message view na controller:<br>
        Código:<br>
        Na importação de Classes: <code>import { MensagemView } from "../views/mensagem-view.js";</code><br>
        Na declaração de propriedades: <code>private messageView = new MensagemView("#mensagemView");</code><br><br>
        3 - Cria elemento no HTML:div id="mensagemView"<br>
        4 - Chama reinderização do elemento no click do botão por meio da View:<br>
        <code>this.messageView.update('Negociação adicionada com sucesso!');</code><br>
    </p>
</article>

<h3> 02 Repetição de código </h3>
<article>
    <p>   
        Identifica a repetição de Código nas views<br>
    </p>
</article>

<h3> 03 Herança e pequena surpresa </h3>
<article>
    <p>   
        1 - Criar view.ts contendo o atributo elemento e o contrutor:<br>
        <code>export class View{</code></br>
<code></code></br>
        <code>&nbsp;protected elemento: HTMLElement;</code></br>
<code></code></br>
        <code>&nbsp;constructor(seletor: string) {</code></br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code></br>
        <code>&nbsp;}</code></br>
        <code>}</code></br>
        </br>
        2 - Remover os contrutores e os atributos view de negociações e mensagem view.<br>
        </br>
    </p>
</article>

<h3> 04 Utilizando Herança </h3>
<article>
    <p>   
        Mônica decidiu criar um jogo em JavaScript, mas optou por <br>utilizar TypeScript devido aos recursos extras da linguagem. Ela <br>criou três classes:<br>
        <ul>
            <li>Humanoide</li>
            <li>Humano</li>
            <li>Alienigena</li>
        <ul>
        Em termos de design, tanto Humano quanto Alienigena são humanóides, por isso herdam dessa classe:<br><br>
        <code>class Humanoide {</code><br>
<code></code><br>
        <code>&nbsp;private _energia: number = 100;</code><br>
        <code>&nbsp;private _nome: string = '';</code><br>
<code></code><br>
        <code>&nbsp;get energia() {</code><br>
        <code>&nbsp;&nbsp;return this._energia;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;get nome() {</code><br>
        <code>&nbsp;&nbsp;return this._nome;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;set nome(nome) {</code><br>
        <code>&nbsp;&nbsp;this._nome = nome;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>}</code><br>
<code></code><br>
        <code>class Humano extends Humanoide {</code><br>
<code></code><br>
        <code>&nbsp;private _idade: number = 0;</code><br>
<code></code><br>
        <code>&nbsp;get idade() {</code><br>
        <code>&nbsp;&nbsp;return this._idade;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;set idade(idade) {</code><br>
        <code>&nbsp;&nbsp;this._idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
<code></code><br>
        <code>class Alienigena extends Humanoide {</code><br>
<code></code><br>
        <code>&nbsp;private _energiaExtra: number = 100;</code><br>
<code></code><br>
        <code>&nbsp;get energia() {</code><br>
        <code>&nbsp;&nbsp;return this._energia + this._energiaExtra;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br><br>
        Marque a alternativa verdadeira:<br>
        A-) A classe Humanoide não compila.<br>
        B-) A classe Alienigena não compila. - <b>Correta</b><br>
        C-) A classe Humano não compila.<br>
    </p>
</article>

<h3> 05 Modificador de acesso </h3>
<article>
    <p>   
        Temos o seguinte código:<br>
        <code>class Pai {</code><br>
        <code>&nbsp;private nome = '';</code><br>
        <code>}</code><br>
<code></code><br>
        <code>class Filha extends Pai {</code><br>
<code></code><br>
        <code>}</code><br>
<code></code><br>
        <code>const filha = new Filha();</code><br>
        <code>console.log(filha.nome);</code><br>
        Marque as 2 opções verdadeiras sobre o código.<br><br>
        A-) Mudar o modificador de acesso da propriedade nome de private para protected é uma solução garantindo apenas que classes filhas tenham acesso à propriedade. - <b>Correta</b><br>
        B-) Mudar o modificador de acesso da propriedade nome de private para public é uma solução, porém qualquer parte do sistema poderá acessar essa propriedade. - <b>Correta</b><br>
        C-) Mudar o modificador de acesso da propriedade nome de private para protected é uma solução, porém qualquer parte do sistema poderá acessar essa propriedade.<br>
        D-) Mudar o modificador de acesso da propriedade nome de private para public é uma solução, garantindo que apenas as classes filhas tenham acesso à propriedade.<br>
    </p>
</article>

<h3> 06 Mais surpresas com Herança </h3>
<article>
    <p>   
        1 - Reutilizando o método upate em view na classe pai: <br>
        <code>export class View{</code><br>
<code></code><br>
        <code>&nbsp;protected elemento: HTMLElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;update(model: string): void {</code><br>
        <code>&nbsp;&nbsp;const template = this.template(model);</code><br>
        <code>&nbsp;&nbsp;this.elemento.innerHTML = template;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;template(model: string):string {</code><br>
        <code>&nbsp;&nbsp;throw Error('Classe filha deve implementar o método template')</code><br>
        <code>&nbsp;}   </code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 07 Avançando no uso de Generics </h3>
<article>
    <p>   
        1 - Transformando o parametro model em generics usando o tipo genérico &lt;T&gt; que é definido no extend:<br>
        <code>export class View<T>{</code><br>
<code></code><br>
        <code>&nbsp;protected elemento: HTMLElement;</code><br>
<code></code><br>
        <code>&nbsp;constructor(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;update(model: T): void {</code><br>
        <code>&nbsp;&nbsp;const template = this.template(model);</code><br>
        <code>&nbsp;&nbsp;this.elemento.innerHTML = template;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;template(model: T):string {</code><br>
        <code>&nbsp;&nbsp;throw Error('Classe filha deve implementar o método template')</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br><br>
        2 - Definindo o tipo &lt;T&gt; na classe filha<br>
        mensagem: <code>export class MensagemView extends View&lt;string&gt;</code><br>
        negociacoes: <code>export class NegociacoesView extends View&lt;Negociacoes&gt;</code><br>
    </p>
</article>

<h3> 08 Dois tipos genéricos </h3>
<article>
    <p>   
        Fernando utiliza muito o IndexedDB, um banco de dados que vive no próprio navegador. Com forte influência de padrões de projeto, decidiu criar um GenericDAO:<br>
        <code>class GenericDAO {</code><br>
<code></code><br>
        <code>&nbsp;adiciona(objeto: Negociacao): number {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;apaga(objeto: Negociacao): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;buscaPorId(id: number): Negociacao {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;atualiza(objeto: Negociacao): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;listaTodos(): Negociacao[] {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
<code></code><br>
        <code>// exemplo de uso</code><br>
<code></code><br>
        <code>let dao = new GenericDao();</code><br>
        <code>let negociacao = new Negociacao(new Date(), 1, 200);</code><br>
<code></code><br>
        <code>// recebe o ID da negociação gerada</code><br>
<code></code><br>
        <code>let id = dao.adiciona(negociacao);</code><br>
        <code>let negociacaoBuscada = dao.buscaPorId(id);</code><br><br>
        O código escrito por Fernando não é genérico, pois esta amarrado ao tipo Negociacao. Além disso, o ID do elemento no IndexedDB pode ser um número ou uma string, e esse tipo esta fixo na definição da classe.<br>
        Marque a opção que torna a classe realmente genérica, permitindo persistir outros tipos, inclusive a definir um outro tipo de ID.<br><br>
        A-) - <b>Correta</b><br>
        <code>class GenericDAO&lt;T, K&gt; {</code><br>
<code></code><br>
        <code>&nbsp;adiciona(objeto: T): K {</code><br>
        <code>&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;apaga(objeto: T): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;buscaPorId(id: K): T {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;atualiza(objeto: T): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;listaTodos(): T[] {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        B-)<br>
        <code>class GenericDAO&lt;T&gt; {</code><br>
<code></code><br>
        <code>&nbsp;adiciona(objeto: T): number {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;apaga(objeto: T): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;buscaPorId(id: number): T {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;atualiza(objeto: number): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;listaTodos(): T[] {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        C-)<br>
        <code>class GenericDAO&lt;K&gt; {</code><br>
<code></code><br>
        <code>&nbsp;adiciona(objeto: Negociacao): K {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;apaga(objeto: Negociacao): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;buscaPorId(id: K): T {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;atualiza(objeto: Negociacao): void {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;listaTodos(): Negociacao[] {</code><br>
        <code>&nbsp;&nbsp;/* implementação do método omitida */</code><br>
        <code>&nbsp;}</code><br>
        <code>} </code><br>
    </p>
</article>

<h3> 09 Classe abstrata </h3>
<article>
    <p>   
        1 - Transformando view em uma classe abstrata para que a mesma não possa ser instânciada:<br>
        <code>export abstract class View&lt;T&gt;{</code><br><br>
        2 - Transformando o método template em abstrato, faz com que seja obrigatório a implementação deste na classe filha:<br>
        <code>abstract template(model: T):string;</code><br><br>
    </p>
</article>

<h3> 10 Utilizando Herança </h3>
<article>
    <p>   
        Eduardo tem que lidar com a geração de boleto bancário para diversos bancos. Contudo, apesar dos boletos serem muito parecidos, cada banco possui um cabeçalho diferente.<br>
        Ele decidiu então escrever o seguinte código:<br>
        <code>class Boleto {</code><br>
<code></code><br>
        <code>&nbsp;geraLinhaDigitavel(): string {</code><br>
        <code>&nbsp;&nbsp;/* lógica comum dos bancos */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;geraCabecalho(): string {</code><br>
        <code>&nbsp;&nbsp;throw new Error('Você precisa implementar a cabeçalho');</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
<code></code><br>
        <code>class BoletoBancoA extends Boleto {</code><br>
<code></code><br>
        <code>&nbsp;geraCabecalho(): string {</code><br>
        <code>&nbsp;&nbsp;/* lógica de geração do cabeçalho do banco A */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>}</code><br>
<code></code><br>
        <code>class BoletoBancoB extends Boleto {</code><br>
<code></code><br>
        <code>&nbsp;geraCabecalho(): string {</code><br>
        <code>&nbsp;&nbsp;/* lógica de geração do cabeçalho do banco B */</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>}</code><br>
        Marque a afirmativa verdadeira a respeito do código de Eduardo.<br><br>
        A-)Não faz sentido haver instâncias de Boleto, pois a classe não define a implementação de geraCabecalho(). Essa responsabilidade é das classes filhas, mas nada obriga o desenvolvedor a implementá-las em tempo de desenvolvimento e só será avisado caso tenha esquecido de implementá-lo em tempo de execução, no runtime da aplicação. - <b>Correta</b><br>
        B-)As classes filhas são obrigadas em tempo de desenvolvimento a implementarem geraCabecalho(), caso contrário haverá um erro de compilação.<br>
        C-)A classe Boleto precisa implementar a lógica de geração do cabeçalho para que seja utilizada pelas classes filhas.<br>
    </p>
</article>

<h3> 11 Classe abstrata </h3>
<article>
    <p>   
        Fernanda, assim como Eduardo do exercío anterior, tem que lidar com a geração de boleto bancário para diversos bancos. Porém ela adotou uma abordagem diferente:<br>
        <code>abstract class Boleto {</code><br>
<code></code><br>
        <code>geraLinhaDigitavel(): string {</code><br>
        <code>&nbsp;/* lógica comum dos bancos */</code><br>
        <code>}</code><br>
<code></code><br>
        <code>abstract geraCabecalho(): string;</code><br>
        <code>}</code><br>
<code></code><br>
        <code>class BoletoBancoA extends Boleto {</code><br>
<code></code><br>
        <code>geraCabecalho(): string {</code><br>
        <code>&nbsp;/* lógica de geração do cabeçalho do banco A */</code><br>
        <code>}</code><br>
<code></code><br>
        <code>}</code><br>
<code></code><br>
        <code>class BoletoBancoB extends Boleto {</code><br>
<code></code><br>
        <code>geraCabecalho(): string {</code><br>
        <code>&nbsp;/* lógica de geração do cabeçalho do banco B */</code><br>
        <code>}</code><br>
<code></code><br>
        <code>}</code><br>
        Marque a afirmativa verdadeira a respeito do código de Eduardo.<br><br>
        A-) Como Boleto agora é uma classe abstrata, não é possível criar instâncias desta classe. Isso faz sentido, porque a classe não sabe como o método geraCabecalho deve ser implementado. É responsabilidade das classes filhas a implementação do método. - <b>Correta</b><br>
        B-) As classes filhas não obrigadas em tempo de desenvolvimento a implementarem geraCabecalho().<br>
        C-) As classes filhas também precisa declarar o método geraCabecalho como abstract.<br>
    </p>
</article>

<h3> 12 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Herança com TypeScript<br>
        &nbsp;Classes com tipo genérico<br>
        &nbsp;Classes abstratas<br>
        &nbsp;O modificador protected<br>
    </p>
</article>

<hr>

<h2>Aula 3</h2>

<h3> 01 Visibilidade do método template </h3>
<article>
    <p>   
        1 - Restringindo o uso do método template para somente a classe pai e as classes filhas: <br>
        view.ts: <code>protected abstract template(model: T):string;</code><br> 
        negociacoes-view.ts: <code>protected template(model: Negociacoes):string {</code>
        mensagem-view.ts: <code>protected  template(model: string):string {</code>
    </p>
</article>

<h3> 02 Métodos privados </h3>
<article>
    <p>   
        1 - Criando método privado para a formatação de data na view negociacao:<br>
        <code>import { Negociacoes } from "../models/negociacoes.js";</code><br>
        <code>import { View } from "./view.js";</code><br>
<code></code><br>
        <code>export class NegociacoesView extends View<Negociacoes> {</code><br>
        <code>&nbsp;protected template(model: Negociacoes):string {</code><br>
        <code>&nbsp;&nbsp;return `</code><br>
        <code>&nbsp;&nbsp;<table class="table table-houver table-bordered"></code><br>
        <code>&nbsp;&nbsp;&nbsp;<thead></code><br>
        <code>&nbsp;&nbsp;&nbsp;<tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;<th>DATA</th></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;<th>QUANTIDADE</th></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;<th>VALOR</th></code><br>
        <code>&nbsp;&nbsp;&nbsp;</tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;</thead></code><br>
        <code>&nbsp;&nbsp;&nbsp;<tbody></code><br>
        <code>&nbsp;&nbsp;&nbsp;${model.lista().map(negociacao => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return `</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;<tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>${this.formatar(negociacao.data)}</td></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>${negociacao.quantidade}</td></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<td>${negociacao.valor}</td></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;</tr></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;`</code><br>
        <code>&nbsp;&nbsp;&nbsp;}).join(' ')}</code><br>
        <code>&nbsp;&nbsp;&nbsp;</tbody></code><br>
        <code>&nbsp;&nbsp;</table></code><br>
        <code>&nbsp;&nbsp;`;</code><br>
        <code>&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;private formatar(data: Date) {</code><br>
        <code>&nbsp;&nbsp;return new Intl.DateTimeFormat().format(data)</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 03 Centralizando updates em um único lugar </h3>
<article>
    <p>   
        Cria método privado que agrupa as atualizações de view na controller:<br>
        <code>private atualizaView(): void{</code><br>
        <code>&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;this.messageView.update('Negociação adicionada com sucesso!');</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 04 Aceitando apenas dias úteis </h3>
<article>
    <p>   
        Fazendo validações para dias uteis no método adiciona da controller (em JS):<br>
        <code>public adiciona(): void {</code><br>
        <code>&nbsp;const negociacao = this.criaNegociuacao();        </code><br>
        <code>&nbsp;if (negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {</code><br>
        <code>&nbsp;&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;&nbsp;this.atualizaView();</code><br>
        <code>&nbsp;&nbsp;this.limparFormulario();    </code><br>
        <code>&nbsp;} else {</code><br>
        <code>&nbsp;&nbsp;this.messageView.update('Apenas negociações em dias úteis são aceitas!');</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Sobre o objeto Date </h3>
<article>
    <p>   
        <code>Temos a seguinte instância de date:</code><br>
        <code>const date = new Date();</code><br>
        <code>Marque a opção verdadeira que retorna corretamente o dia da semana.</code><br><br>
        A-) <code>date.getDay()</code> - <b>Correta</b><br>
        B-) <code>date.getDate()</code><br>
        C-) <code>date.getDow()</code><br>
    </p>
</article>

<h3> 06  Organizando melhor nosso código </h3>
<article>
    <p>   
        1 - Melhorando código de validação do dia útil:<br>
        Cria-se duas prpriedades para o valor de sabado e domingo (enum):<br>
        <code>private SABADO = 6;</code><br>
        <code>private DOMINGO = 0;</code><br>
        Cria-se uma método para descobrir se é dia útil: <br>
        <code>private diaUtil(data: Date): boolean {</code><br>
        <code>&nbsp;return data.getDate() > this.DOMINGO && data.getDate() > this.SABADO;</code><br>
        <code>}</code><br>
        Altera-se o método adiciona: <br>
        <code>public adiciona(): void {</code><br>
        <code>&nbsp;const negociacao = this.criaNegociuacao();        </code><br>
        <code>&nbsp;if (!this.diaUtil(negociacao.data)) {</code><br>
        <code>&nbsp;&nbsp;this.messageView.update('Apenas negociações em dias úteis são aceitas!');</code><br>
        <code>&nbsp;&nbsp;return;</code><br>
        <code>&nbsp;}</code><br>
        <code>&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;this.atualizaView();</code><br>
        <code>&nbsp;this.limparFormulario();</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 07 Enumerations </h3>
<article>
    <p>   
        1 - Criar enum dias da semana (Enuns começam com 0):<br>
        <code>export enum DiasDaSemana{</code><br>
        <code>&nbsp;DOMINGO,</code><br>
        <code>&nbsp;SEGUNDA,</code><br>
        <code>&nbsp;TERCA,</code><br>
        <code>&nbsp;QUARTA,</code><br>
        <code>&nbsp;QUINTA,</code><br>
        <code>&nbsp;SEXTA,</code><br>
        <code>&nbsp;SABADO</code><br>
        <code>}</code><br>
        2 - Utilizando a enum na controller:<br>
        <code>return data.getDate() > DiasDaSemana.DOMINGO && data.getDate() > DiasDaSemana.SABADO;</code><br>
    </p>
</article>

<h3> 08 Cuidados na declaração de enums </h3>
<article>
    <p>   
        Fixando o valor da enum, deixando de usar o default<br>
        <code>export enum DiasDaSemana{</code><br>
        <code>&nbsp;DOMINGO = 0,</code><br>
        <code>&nbsp;SEGUNDA = 1,</code><br>
        <code>&nbsp;TERCA = 2,</code><br>
        <code>&nbsp;QUARTA = 3,</code><br>
        <code>&nbsp;QUINTA = 4,</code><br>
        <code>&nbsp;SEXTA = 5,</code><br>
        <code>&nbsp;SABADO = 6</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 09 Sobre o valor da enum </h3>
<article>
    <p>   
        Temos a seguinte enum:<br>
        <code>enum MinhaEnum {</code><br>
        <code>&nbsp;A,</code><br>
        <code>&nbsp;B = 3,</code><br>
        <code>&nbsp;C,</code><br>
        <code>&nbsp;D,</code><br>
        <code>&nbsp;F</code><br>
        <code>}</code><br>
        Qual o valor de MinhaEnum.D?<br><br>
        A-) 6<br>
        B-) 5 - <b>Correta</b> Alternativa correta! As enum começam de 0, porém, se modificarmos o valor de alguma das enum, os próximos valores passarão a contar a partir do novo valor.<br>
        C-) 4<br>
    </p>
</article>

<h3> 10 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Visibilidade de métodos<br>
        &nbsp;Validando negociações em dias úteis<br>
        &nbsp;Vantagens do uso de enums<br>
        &nbsp;Cuidados com enums<br>
    </p>
</article>

<hr>

<h2>Aula 4</h2>

<h3> 01 Isolando a lógica de conversão de entrada </h3>
<article>
    <p>   
        Transferindo a lógica de conversão de valores para a model negociação:<br>
        Na model negociacao cria-se o método criaDe:<br>
        <code>public criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {</code><br>
        <code>&nbsp;const exp = /-/g;</code><br>
        <code>&nbsp;const date = new Date(dataString.replace(exp, ','));</code><br>
        <code>&nbsp;const quantidade = parseInt(quantidadeString);</code><br>
        <code>&nbsp;const valor = parseFloat(valorString);</code><br>
        <code>&nbsp;return new Negociacao(date, quantidade, valor);</code><br>
        <code>}</code><br><br>
        Na negociacao-controller, remove-se o metodo criaNegociacao e altera-se o metodo adiciona a fim de chamar o método criaDe da model:<br>
        <code>public adiciona(): void {</code><br>
        <code>&nbsp;const negociacaoTemp = new Negociacao(null, 0, 0);</code><br>
        <code>&nbsp;const negociacao = negociacaoTemp.criaDe(</code><br>
        <code>&nbsp;&nbsp;this.inputData.value,</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade.value,</code><br>
        <code>&nbsp;&nbsp;this.inputValor.value</code><br>
        <code>&nbsp;);        </code><br>
        <code>&nbsp;if (!this.diaUtil(negociacao.data)) {</code><br>
        <code>&nbsp;&nbsp;this.messageView.update('Apenas negociações em dias úteis são aceitas!');</code><br>
        <code>&nbsp;&nbsp;return;</code><br>
        <code>&nbsp;}</code><br>
        <code>&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;this.atualizaView();</code><br>
        <code>&nbsp;this.limparFormulario();</code><br>
        <code>}</code><br>
        </p>
</article>

<h3> 02 Métodos estáticos </h3>
<article>
    <p>   
        Transformando o métoido criaDe em um método estático pois esse tipo de método pertence a classe mas não necessita de uma instancia da mesma para ser utilizado:<br>
        Model negociacao.ts:<br>
        &nbsp;&nbsp;de:<br>
        <code>public criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {</code><br>
        &nbsp;&nbsp;para:<br>
        <code>public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {</code><br><br>
        Controller negociacao-controller.ts:<br>
        &nbsp;&nbsp;de:<br>
        <code>const negociacaoTemp = new Negociacao(null, 0, 0);</code><br>
        <code>const negociacao = negociacaoTemp.criaDe(</code>
        <code>&nbsp;this.inputData.value,</code>
        <code>&nbsp;this.inputQuantidade.value,</code>
        <code>&nbsp;this.inputValor.value</code>
        <code>);</code><br>
        &nbsp;&nbsp;para:<br>
        <code>const negociacao = Negociacao.criaDe(</code><br>
        <code>&nbsp;this.inputData.value,</code><br>
        <code>&nbsp;this.inputQuantidade.value,</code><br>
        <code>&nbsp;this.inputValor.value</code><br>
        <code>); </code><br>
    </p>
</article>

<h3> 03 Sobre métodos estáticos </h3>
<article>
    <p>   
        Emma decidiu criar uma classe responsável por conter todas as operações auxiliares que operam sobre data:<br>
        <code>class DateUtils {</code><br>
        <code>&nbsp;&nbsp;public ehDiaUtil(data: Date) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return data.getDay() > DiasDaSemana.DOMINGO</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&& data.getDay() < DiasDaSemana.SABADO;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
        Vejamos a seu código em ação:<br>
        <code>const dateUtils = new DateUtils();</code><br>
        <code>const ehDiaUtil = dateUtils.ehDiaUtil(new Date());</code><br>
        Marque a opção que transforma corretamente o método ehDiaUtil em um método estático.<br><br>
        A-) - <b>Correta</b><br>
        <code>class DateUtils {</code><br>
        <code>&nbsp;&nbsp;public static ehDiaUtil(data: Date) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return data.getDay() > DiasDaSemana.DOMINGO</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&& data.getDay() < DiasDaSemana.SABADO;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
        B-)<br>
        <code>class DateUtils {</code><br>
        <code>&nbsp;&nbsp;static public ehDiaUtil(data: Date) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return data.getDay() > DiasDaSemana.DOMINGO</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&& data.getDay() < DiasDaSemana.SABADO;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
        C-)<br>
        <code>class DateUtils {</code><br>
        <code>&nbsp;&nbsp;public abstract ehDiaUtil(data: Date) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return data.getDay() > DiasDaSemana.DOMINGO</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&& data.getDay() < DiasDaSemana.SABADO;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 04 Protegendo nosso template </h3>
<article>
    <p>   
        Protegendo o template de inserções de scripts, utilizando uma expressão regular<br>
        Código da view.ts:<br>
        <code>export abstract class View<T>{</code><br>
        <code>&nbsp;&nbsp;protected elemento: HTMLElement;</code><br>
        <code>&nbsp;&nbsp;private escapar = false;</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;constructor(seletor: string, escapar: boolean) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;public update(model: T): void {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;let template = this.template(model);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;if (this.escapar) { </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;template = template.replace(/<script>[\s\S]*?<\/script>/, '');</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.elemento.innerHTML = template;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;protected abstract template(model: T):string;</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Parâmetros opcionais </h3>
<article>
    <p>   
        Transformando o parâmetro escapar em um parâmetro opicional, adicionando o "?" após o parâmetro, lembrando que os opicionais devem ser os últimos parâmetros<br>
        Código do construtor de view.ts:<br>
        <code>constructor(seletor: string, escapar?: boolean) {</code><br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;&nbsp;if (escapar) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.escapar = escapar;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 06 Sobre parâmetros opcionais </h3>
<article>
    <p>   
        Sobre parâmetros opcionais, marque a única opção que não compila.<br><br>
        A-)<code>function(a: number, b:number, c?:number): void { }</code><br>
        B-)<code>function(a: number, b?:number, c?:number): void { }</code><br>
        C-)<code>function(a?: number, b?:number, c:number): void { }</code> - <b>Correta</b><br>
    </p>
</article>

<h3> 07 Revisão </h3>
<article>
    <p>   
       Nesta aula, aprendemos:<br>
       &nbsp;Revisão da lógica de conversão negociações<br>
       &nbsp;Método estáticos<br>
       &nbsp;Parâmetros opcionais <br>
    </p>
</article>

<hr>

<h2>Aula 5</h2>

<h3> 01 Removendo comentários do código </h3>
<article>
    <p>   
        Removendo comentários usados nos arquivos ts atravéz da compilação usando o parâmetro: <code>"removeComments": true</code><br>
    </p>
</article>

<h3> 02 Mudança no tsconfig.json </h3>
<article>
    <p>   
        Ivan tentou remover comentários de seus arquivos ts durante o processo de compilação para JavaScript. No entanto, os comentários ainda continuaram presentes nos arquivos js. Veja como ele configurou o arquivo tsconfig.json:<br>
        <code>{</code><br>
        <code>&nbsp;&nbsp;"compilerOptions": {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;"outDir": "dist/js",</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;"target": "ES6",</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;"noEmitOnError": true,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;"noImplicitAny": false,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;"removeComments": false,</code><br>
        <code>&nbsp;&nbsp;},</code><br>
        <code>&nbsp;&nbsp;"include": ["app/**/*"]</code><br>
        <code>}</code><br>
        Marque a alternativa correta a respeito da configuração realizada por Ivan.<br><br>
        A-)Por mais que ele tenha adicionado a propriedade removeComments, ele esqueceu de atribuir o valor true. - <b>Correta</b><br>
        B-)Ele escreveu o nome da propriedade errada, o correto é removeComment e seu valor deve ser true.<br>
        C-)Ele esqueceu de atribuir true para a propriedade noImplicitAny.<br>
    </p>
</article>

<h3> 03 StrictNullChecks </h3>
<article>
    <p>   
        Setando a propriedade <code>"strictNullChecks": true</code>, essa propriedade nos obriga a tratar os elementos que podem receber nulos e isso causou uma série de erros no código.<br>
    </p>
</article>

<h3> 04 Sobre o StrictNullChecks </h3>
<article>
    <p>   
        Marque a alternativa correta a respeito do eveito do StrictNullChecks quando ativado.<br><br>
        A-)Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. Inclusive o StrictNullChecks obrigará o desenvolvedor a tratar todos os pontos de acesso a valores null em sua aplicação, forçando que o desenvolvedor pondere com cuidado cada cenário. - <b>Correta</b><br>
        B-)Faz com que compilador TSC aceite o valor null implicitamente para todos os tipos da aplicação.<br>
        C-)Diz para o compilador TSC que pare de assumir implicitamente o tipo null para todos os tipos da aplicação. Caso null faça sentido, o desenvolvedor deve deixar isso explícito em seu código. Apesar das checagem, o desenvolvedor não é obrigado a tratar todos os pontos de acesso a valores null em sua aplicação.<br>
    </p>
</article>

<h3> 05 Suprimindo a checagem onde faz sentido </h3>
<article>
    <p>   
        Usando o casting explicito 'as' ou <-TIPO-> para forçar o elemento como um tipo específico veja o código do construtor do negociacao-controller:<br>
        <code>constructor () {</code><br>
        <code>&nbsp;&nbsp;this.inputData          = <-HTMLInputElement>document.querySelector('#data');</code><br>
        <code>&nbsp;&nbsp;this.inputQuantidade    = document.querySelector('#quantidade') as HTMLInputElement;</code><br>
        <code>&nbsp;&nbsp;this.inputValor         = document.querySelector('#valor') as HTMLInputElement;</code><br>
        <code>&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 06 Tratando null em nosso código </h3> 
<article>
    <p>   
        Testando para tratar um possível null em app.ts, o TS entendo o tratamento com ifs<br>
        <code>const controller = new NegociacaoController();</code><br>
        <code>const form = document.querySelector('.form');</code><br>
        <code>if (form){</code><br>
        <code>&nbsp;&nbsp;form.addEventListener('submit', event => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault(); // Previne o Refresh da página, que seria uma ação default do formulário</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;controller.adiciona();</code><br>
        <code>&nbsp;&nbsp;});</code><br>
        <code>} else {</code><br>
        <code>&nbsp;&nbsp;throw Error("Não foi possível analisar a aplicação. Verifique se o form existe");   </code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 07 Últimos ajustes </h3>
<article>
    <p>   
        Tratando o querySelector do elemento no view.ts<br>
    </p>
</article>

<h3> 08 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;Remoção de comentários do código compilado<br>
        &nbsp;Ativação do strictNullChecks<br>
        &nbsp;Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks<br>
        &nbsp;Benefícios do strictNullChecks no controle do fluxo da sua aplicação<br>
    </p>
</article>

<hr>

# typescript-study-3

<h2>Aula 1</h2>

<h3> 01 Apresentação </h3>
<article>
    <p>   
        Reorganização de pastas<br>
    </p>
</article>

<h3> 02 Requisitos não funcionais </h3>
<article>
    <p>   
        Adicionando métodos que iram medir a performance do código.<br>
        No inicio do método: <code>const t1 = performance.now();</code><br>
        No final do método:<br>
        <code>const t2 = performance.now();</code><br>
        <code>console.log(`Tempo de execução da view: ${(t2-t1)/1000}`)</code><br>
    </p>
</article>

<h3> 03 TypeScript e Decorators </h3>
<article>
    <p>   
        1 Habilitando decorators no tsconfig.json: <code>"experimentalDecorators": true</code><br><br>
        2 Criando pasta decorators e o decorator logar-tempo-de-execucao.ts:<br>
        <code>export function logarTempoDeExecucao() {</code><br>
        <code>&nbsp;&nbsp;</code><br>
        <code>}</code><br><br>
        3 Implementando decorator no método adiciona():
        <code>@logarTempoDeExecucao()</code>
        <code>public adiciona(): void {</code>
    </p>
</article>

<h3> 04 API do Decorator </h3>
<article>
    <p>   
        Criando a assinatura básica do decorator:<br>
        <code>export function logarTempoDeExecucao() {</code><br>
        <code>&nbsp;&nbsp;return function(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>&nbsp;&nbsp;) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Implementando nosso Decorator </h3>
<article>
    <p>   
        Iniciando a implementação do decorator:<br>
        <code>export function logarTempoDeExecucao() {</code><br>
        <code>&nbsp;&nbsp;return function(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>&nbsp;&nbsp;) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor.value = function() {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const t1 = performance.now();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const retorno = metodoOriginal();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const t2 = performance.now();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000}`)</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retorno;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 06 TypeScript e Decorators </h3>
<article>
    <p>   
        Marque todas as afirmativas verdadeiras sobre TypeScript e Decorators. Selecione 2 alternativas:<br>
        A-)É utilizando como @NomeDoDecorator(). - <b>Correta</b><br>
        B-)É ativado por padrão na linguagem TypeScript.<br>
        C-)É um recurso experimental. - <b>Correta</b><br>
    </p>
</article>

<h3> 07 Sobre o descriptor </h3>
<article>
    <p>   
        Quando criamos um decorator, um dos parâmetros mais importantes é o descriptor.<br>
        Marque a alternativa verdadeira sobre o papel do descriptor:<br><br>
        A-) Nos dá acesso a implementação do método decorado através de descritor.value. - <b>Correta</b><br>
        B-) É o método decorado.<br>
        C-) Não podemos sobrescrever o valor de descriptor.value, definindo uma nova implementação para o método.<br>
    </p>
</article>

<h3> 08 Recorrendo ao JavaScript </h3>
<article>
    <p>   
        Usando recursos JS para solucionar o problema dos parâmetros e do this<br>
        Decorator:<br>
        <code>export function logarTempoDeExecucao() {</code><br>
        <code>&nbsp;&nbsp;return function(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>&nbsp;&nbsp;) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor.value = function(...args: any[]) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const t1 = performance.now();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const retorno = metodoOriginal.apply(this, args);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const t2 = performance.now();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/1000}`)</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retorno;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br><br>
        Método update da view.ts:<br>
        <code>@logarTempoDeExecucao()</code><br>
        <code>public update(model: T): void {</code><br>
        <code>&nbsp;&nbsp;let template = this.template(model);</code><br>
        <code>&nbsp;&nbsp;if (this.escapar) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;template = template</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(<-regex->, '');</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;this.elemento.innerHTML = template;</code><br>
        <code>}</code><br><br>
    </p>
</article>

<h3> 09 Curiosidade a respeito do Decorator </h3>
<article>
    <p>   
        Apenas mostrando o código JS Gerado<br>
    </p>
</article>

<h3> 10 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;&nbsp;Introdução e estrutura do projeto<br>
        &nbsp;&nbsp;Requisitos não funcionais<br>
        &nbsp;&nbsp;Decorator de método<br>
        &nbsp;&nbsp;Logar tempo de execução com decorator<br>
    </p>
</article>

<hr>

<h2>Aula 2</h2>

<h3> 01 Decorator com parâmetro </h3>
<article>
    <p>   
        Adicionando um atributo para definir a unidade de tempo do decorator<br>
        Decorator: <br>
        <code>export function logarTempoDeExecucao(emSegundos: boolean = false) {</code><br>
        <code>&nbsp;&nbsp;retu'rn function(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>&nbsp;&nbsp;) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor.value = function(...args: any[]) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let divisor = 1;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let unidade = "milisegundos";</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (emSegundos) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;divisor = 1000;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unidade = "segundos";</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const t1 = performance.now();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const retorno = metodoOriginal.apply(this, args);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const t2 = performance.now();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unidade}`)</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retorno;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br><br><br>
        Chamada do decorator passando um atributo:<br>
        <code>@logarTempoDeExecucao(true)</code><br>
        <code>public update(model: T): void {</code><br>
    </p>
</article>

<h3> 02 Esboço de um Decorator de método </h3>
<article>
    <p>   
        Rafaela deseja criar um decorator que, ao ser aplicado em um método, exibe no console a data na qual o método foi chamado. Contudo, se o decorator receber como parâmetro dd/MM/yyyy, deve exibir a data neste formato.<br>
        Marque a opção que declara o esqueleto do decorator que Rafaela deseja criar:<br><br>
        A-) <br>
        <code>function logData(formato: string = '') {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;return function(target: any, key: string) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// aqui vem a lógica do decorator</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
        B-) <br>
        <code>function logData() {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;return function(target: any, key: string, descriptor: PropertyDescriptor) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// aqui vem a lógica do decorator</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
        C-) <b>Correta</b> <br>
        <code>function logData(formato: string = '') {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;return function(target: any, key: string, descriptor: PropertyDescriptor) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// aqui vem a lógica do decorator</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 03 Criando um Decorator de inspeção </h3>
<article>
    <p>   
        Criando um decorator inspetor que retornara no console o nome do método, seus argumentos e seu retorno.<br>
        Decorator inspect.ts:<br>
        <code>export function inspect() {</code><br>
        <code>&nbsp;&nbsp;return function (</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>&nbsp;&nbsp;) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;descriptor.value = function (...args: any[]) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`--- Método: ${propertyKey}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`------ parâmetros: ${JSON.stringify(args)}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const retorno = metodoOriginal.apply(this, args);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`------ retorno: ${JSON.stringify(retorno)}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return retorno;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return descriptor;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br><br>
        Aplicando o decorator ao método update do view.ts:<br>
        <code>@inspect()</code><br>
        <code>@logarTempoDeExecucao(true)</code><br>
        <code>public update(model: T): void {</code><br>
    </p>
</article>

<h3> 04 Ordem de execução dos Decorators </h3>
<article>
    <p>   
        A ordem de excução segue a ordem de instalação do código de cima para baixo, porém ele decora de baixo para cima, ou seja, o o primeiro a ser excutado chama um método já decorado por todos os decorators de baixo para cima.<br>
    </p>
</article>

<h3> 05 Decorators e sua origem </h3>
<article>
    <p>   
        Marque a alternativa correta a respeito da ordem de aplicação dos decorators.<br><br>
        A-) Serão aplicados aleatoriamente.<br>
        B-) Serão aplicados do topo para baixo. - <b>Correta</b><br>
        C-) Serão aplicados de baixo para o topo.<br>
    </p>
</article>

<h3> 06 Simplificando o Decorator </h3>
<article>
    <p>   
        Quando o decorator não recebe parâmetros podemos não fazer um return da function anônima, logo fazemo o mesmo direto.<br>
        inspect.ts:<br>
        <code>export function inspect(</code><br>
        <code>&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>) {</code><br>
        <code>&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;descriptor.value = function (...args: any[]) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`--- Método: ${propertyKey}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`------ parâmetros: ${JSON.stringify(args)}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const retorno = metodoOriginal.apply(this, args);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`------ retorno: ${JSON.stringify(retorno)}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return retorno;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;return descriptor;</code><br>
        <code>}</code><br><br>
        Para chamar um decorator nessa sintaxe não passamos o ():<br>
        <code>@inspect</code><br>
        <code>@logarTempoDeExecucao(true)</code><br>
        <code>public update(model: T): void {</code><br>
    </p>
</article>

<h3> 07 Escapando texto através de Decorator </h3>
<article>
    <p>   
        Transferindo a lógica de escapar a tag &lt;script&gt; para um decorator.<br>
        Decorator escape.ts:<br>
        <code>export function escape(</code><br>
        <code>&nbsp;&nbsp;target: any,</code><br>
        <code>&nbsp;&nbsp;propertyKey: string,</code><br>
        <code>&nbsp;&nbsp;descriptor: PropertyDescriptor</code><br>
        <code>) {</code><br>
        <code>&nbsp;&nbsp;const metodoOriginal = descriptor.value;</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;descriptor.value = function (...args: any[]) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;let retorno = metodoOriginal.apply(this, args);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;if (typeof retorno === 'string'){</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`@escape em ação na classe </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.constructor.name} para o método </code>$<code>{propertyKey}`);$</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;retorno = retorno</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(/&lt;script&gt;[\s\S]*?&lt;\/script&gt;/, '');</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return retorno;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;return descriptor;</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 08 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;&nbsp;Decorator com parâmetro<br>
        &nbsp;&nbsp;Criação de um decorator de inspeção<br>
        &nbsp;&nbsp;Ordem de execução dos decorators<br>
        &nbsp;&nbsp;Simplicação no design de decorators<br>
        &nbsp;&nbsp;Portabilidade de funcionalidade antiga para decorators<br>
    </p>
</article>

<hr>

<h2>Aula 3</h2>

<h3> 01 Evitando código duplicado mais uma vez </h3>
<article>
    <p>   
        Iniciando a chamada do decorator de propriedade, que será criado postetriormente para facilitar a captura de elementos do DOM:<br>
        <code>import { inspect } from '../decorators/inspect.js';</code><br>
        <code>import { logarTempoDeExecucao } from '../decorators/</code><code>logar-tempo-de-execucao.js';</code><br>
        <code>import { DiasDaSemana } from '../enums/dias-da-semana.js';</code><br>
        <code>import { Negociacao } from '../models/negociacao.js';</code><br>
        <code>import { Negociacoes } from '../models/negociacoes.js';</code><br>
        <code>import { MensagemView } from '../views/mensagem-view.js';</code><br>
        <code>import { NegociacoesView } from '../views/negociacoes-view.</code>js';<br>
<code></code><br>
        <code>export class NegociacaoController {</code><br>
        <code>&nbsp;&nbsp;@domInject("#data")</code><br>
        <code>&nbsp;&nbsp;private inputData: HTMLInputElement;</code><br>
        <code>&nbsp;&nbsp;@domInject("#quantidade")</code><br>
        <code>&nbsp;&nbsp;private inputQuantidade: HTMLInputElement;</code><br>
        <code>&nbsp;&nbsp;@domInject("#valor")</code><br>
        <code>&nbsp;&nbsp;private inputValor: HTMLInputElement;</code><br>
        <code>&nbsp;&nbsp;private negociacoes = new Negociacoes();</code><br>
        <code>&nbsp;&nbsp;private negociacoesView = new NegociacoesView('#negociacoesView');</code><br>
        <code>&nbsp;&nbsp;private mensagemView = new MensagemView('#mensagemView');</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;constructor() {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;@inspect</code><br>
        <code>&nbsp;&nbsp;@logarTempoDeExecucao()</code><br>
        <code>&nbsp;&nbsp;public adiciona(): void {</code><br>
        <code>&nbsp;&nbsp;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const negociacao = Negociacao.criaDe(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.inputData.value, </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.inputQuantidade.value,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.inputValor.value</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;);</code><br>
        <code>&nbsp;&nbsp;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;if (!this.ehDiaUtil(negociacao.data)) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.mensagemView</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.update('Apenas negociações em dias úteis </code>são <code>aceitas');são </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return ;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.limparFormulario();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.atualizaView();</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;private ehDiaUtil(data: Date) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return data.getDay() > DiasDaSemana.DOMINGO </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&& data.getDay() < DiasDaSemana.SABADO;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;private limparFormulario(): void {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.inputData.value = '';</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.inputQuantidade.value = '';</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.inputValor.value = '';</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.inputData.focus();</code><br>
        <code>&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;private atualizaView(): void {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;this.mensagemView.update('Negociação adicionada com </code><code>sucesso');</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 02 Criando nosso próprio DOM Injector </h3>
<article>
    <p>   
        Iniciando a construção do DOM Injector (decorator que fará o recebmento de dados advindos do form):<br>
        <code>export function domInjector(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;return function(target: any, propertyKey: string) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 03 Criando getters dinamicamente </h3>
<article>
    <p>   
        Criando um getter dinâmico para resolver o problema da falta de acesso a instância da classe:<br>
        <code>export function domInjector(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;return function(target: any, propertyKey: string) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const getter = function() {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return elemento;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 04 Object.defineProperty </h3>
<article>
    <p>   
        Usando a prerrogativa Object.defineProperty para alterar a definição da propriedade para o getter já definido:<br>
        <code>export function domInjector(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;return function(target: any, propertyKey: string) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const getter = function() {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const elemento = document.querySelector(seletor);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Buscando elemento do DOM com seletor ${seletor} para</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inserir em ${propertyKey}`);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return elemento;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;Object.defineProperty(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target, </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;propertyKey, </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ get: getter }</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;);</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 05 Decorator de propriedade </h3>
<article>
    <p>   
        Segue o código de um decorator de propriedade:<br>
        <code>export function domInjector(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;return function(target: any, propertyKey: string) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(`Modificando protype ${target.constructor.name}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e adicionando getter para a propriedade ${propertyKey}`);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const getter = function() {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const elemento = <HTMLElement>document.querySelector(seletor);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return elemento;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br><br>
        A-) Funciona como esperado.<br>
        B-) Faltou aplicar o getter criado à propriedade definida pela variável propertyKey através de Object.defineProperty. - <b>Correta</b><br>
        C-) Há um erro de compilação.<br>
    </p>
</article>

<h3> 06 Um problema não esperado </h3>
<article>
    <p>   
        Fazendo uma revisão nota-se que o getter é executado em toda adição e não mais somente no construtor como antigamente, aqui definimos que teremos que fazer um cache desse elemento para qunado o mesmo já tiver sido instanciado uma vez não haja a necesssidade de refazer essa ação.<br>
    </p>
</article>

<h3> 07 Aplicando cache decorator copy </h3>
<article>
    <p>   
        Aplicando o cache verificando se o elemento já não é mais undefined: <br>
        <code>export function domInjector(seletor: string) {</code><br>
        <code>&nbsp;&nbsp;return function(target: any, propertyKey: string) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;let elemento: HTMLElement;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;const getter = function() {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if (!elemento) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elemento = <HTMLElement>document.querySelector(seletor);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return elemento;</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;Object.defineProperty(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;target, </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;propertyKey, </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ get: getter }</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;);</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 08 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;&nbsp;Como evitar código duplicado<br>
        &nbsp;&nbsp;Decorator de propriedade<br>
        &nbsp;&nbsp;Criação dinâmica de getters<br>
        &nbsp;&nbsp;O uso de Object.defineProperty<br>
        &nbsp;&nbsp;Cache de decorators<br>
    </p>
</article>

<hr>

<h2>Aula 4</h2>

<h3> 01 API externa </h3>
<article>
    <p>   
        1 Fazxer npm install da api<br>
        2 Fazer o npm start da API<br>
    </p>
</article>

<h3> 02 Alterando nossa página </h3>
<article>
    <p> 
        Iniciando a implementação da integração com a api.<br>  
        01 no index.html criar o botão importar:<br>
        <code>&lt;button class="btn btn-primary" id="botao-importa"&gt;Importar&lt;/button&gt;</code><br><br>
        02 na controller negociacao-controller.ts criamos o método importaDados:<br>
        <code>importaDados():void {</code><br>
        <code>&nbsp;&nbsp;alert('oi');</code><br>
        <code>}</code><br><br>
        03 em app.ts Criar prevenção e listener:<br>
        <code>const botaoImporta = document.querySelector('#botao-importa');</code><br>
<code></code><br>
        <code>if (botaoImporta) {</code><br>
        <code>&nbsp;&nbsp;botaoImporta.addEventListener('click', () => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;controller.importaDados();</code><br>
        <code>&nbsp;&nbsp;})</code><br>
        <code>} else {</code><br>
        <code>&nbsp;&nbsp;throw Error('Botão importa não foi encontrado')</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 03 Consumindo uma API </h3>
<article>
    <p>   
        Iniciando o consumo de API usando o fetch no método importaDados:<br>
        <code>public importaDados():void {</code><br>
        <code>&nbsp;&nbsp;fetch("http://localhost:8080/dados")</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;.then(res => res.json())</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;.then((dados: any[]) => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return dados.map(dado => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new Negociacao(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new Date(),</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dado.vezes,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dado.montante</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;})</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;.then(negociacoesDeHoje => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (let negociacao of negociacoesDeHoje) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;});</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 04 Definindo uma interface para a API </h3>
<article>
    <p>   
        Tratando os dados vindos da API<br>
        01 Criando pasta de intefaces<br>
        02 Criando a interface negociacao-do-dia.ts, que modelará o objeto advindo da API:<br>
        <code>export interface NegociacoesDoDia {</code><br>
        <code>&nbsp;&nbsp;montante: number;</code><br>
        <code>&nbsp;&nbsp;vezes: number;</code><br>
        <code>}</code><br>
        03 Utilizando a interface:<br>
        <code>.then((dados: NegociacoesDoDia[]) => {</code><br>
        Obs: quando usamos a interface temos o recurso do rename Symbol.<br>
    </p>
</article>

<h3> 05 API externa </h3>
<article>
    <p>   
        Clarice precisava buscar os dados de uma API que retorna os dados dos alunos matriculados em sua turma.<br>
        Vejamos um exemplo:<br><br>
        <code>fetch('http://endereco-da-api.com.br/alunos/1')</code><br>
        <code>&nbsp;&nbsp;.then(res => res.json())</code><br>
        <code>&nbsp;&nbsp;.then((aluno: any) => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(aluno.nome);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(aluno.matricula);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;// faz algo com o aluno</code><br>
        <code>&nbsp;&nbsp;});</code><br>
        5 meses depois, a API que ela utilizava mudou a propriedade matricula para inscricao. Com certeza a aplicação de Clarice se comportou erradamente. Então, ela foi e alterou seu código para:<br><br>
        <code>fetch('http://endereco-da-api.com.br/alunos/1')</code><br>
        <code>&nbsp;&nbsp;.then(res => res.json())</code><br>
        <code>&nbsp;&nbsp;.then((aluno: any) => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(aluno.nome);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;// modificou aqui! Veja que ela escreveu errado!</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(aluno.inscrica);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;// faz algo com o aluno</code><br>
        <code>&nbsp;&nbsp;});</code><br>
        No entanto, ao realizar a correção, ela escreveu errado o nome da propriedade inscricao. Novamente, ela só descobriu o problema em runtime para então realizar o ajuste final:<br><br>
        <code>fetch('http://endereco-da-api.com.br/alunos/1')</code><br>
        <code>&nbsp;&nbsp;.then(res => res.json())</code><br>
        <code>&nbsp;&nbsp;.then((aluno: any) => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(aluno.nome);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;// modificou aqui! Veja que ela escreveu corretamente.</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;console.log(aluno.inscricao);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;// faz algo com o aluno</code><br>
        <code>&nbsp;&nbsp;});</code><br>
        Se Clarice tivesse definido uma interface (um formato) para os dados recebidos do servidor, além das alterações serem mais fáceis de realizar, ela não teria como cometer o erro que cometeu escrevendo inscrica em vez de inscricao.<br>
        Marque a alternativa que cria a interface Aluno que define as propriedades mais recentes da API. Inclusive, aquela que tipa corretamente o retorno.<br><br>
        A-) - <b>Correta</b><br>
        <code>export interface Aluno {</code><br>
        <code>&nbsp;&nbsp;nome: string;</code><br>
        <code>&nbsp;&nbsp;inscricao: string</code><br>
        <code>}</code><br>
<code></code><br>
        <code>fetch('http://endereco-da-api.com.br/alunos/1')</code><br>
        <code>.then(res => res.json())</code><br>
        <code>.then((aluno: Aluno) => {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;console.log(aluno.nome);</code><br>
        <code>&nbsp;&nbsp;console.log(aluno.inscricao);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;// faz algo com o aluno</code><br>
        <code>});      </code><br><br>
        B-)<br>
        <code>export interface Aluno {</code><br>
        <code>&nbsp;&nbsp;nome: string;</code><br>
        <code>&nbsp;&nbsp;inscricao: string</code><br>
        <code>}</code><br>
<code></code><br>
        <code>fetch('http://endereco-da-api.com.br/alunos/1')</code><br>
        <code>.then(res => res.json())</code><br>
        <code>.then((aluno: any) => {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;console.log(aluno.nome);</code><br>
        <code>&nbsp;&nbsp;console.log(aluno.inscricao);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;// faz algo com o aluno</code><br>
        <code>});       </code><br><br>
        C-)<br>
        <code>export interface Aluno {</code><br>
        <code>&nbsp;&nbsp;public nome: string;</code><br>
        <code>&nbsp;&nbsp;public inscricao: string</code><br>
        <code>}</code><br>
<code></code><br>
        <code>fetch('http://endereco-da-api.com.br/alunos/1')</code><br>
        <code>// código omitido </code><br>
        <code>.then(res => res.json())</code><br>
        <code>.then((aluno: Aluno) => {</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;console.log(aluno.nome);</code><br>
        <code>&nbsp;&nbsp;console.log(aluno.inscricao);</code><br>
<code></code><br>
        <code>&nbsp;&nbsp;// faz algo com o aluno</code><br>
        <code>});</code><br>
    </p>
</article>

<h3> 06 Camada de serviços </h3>
<article>
    <p>   
        Isolando a consulta em um único lugar<br><br>
        01 Criando a pasta services em src e o arquivo negociações service, utilizando o fetch já criado no método importaDados da negociacao-controller:<br>
        <code>import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia.js";</code><br>
        <code>import { Negociacao } from "../models/negociacao.js";</code><br>
<code></code><br>
        <code>export class NegociacoesService {</code><br>
        <code>&nbsp;&nbsp;public obterNegociacoesDoDia(): Promise<Negociacao[]> {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;return fetch("http://localhost:8080/dados")</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then(res => res.json())</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.then((dados: NegociacoesDoDia[]) => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return dados.map(dado => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return new Negociacao(</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new Date(),</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dado.vezes,</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dado.montante</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}) </code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><br>
        <code>&nbsp;&nbsp;}</code><br>
        <code>}</code><br><br>
        02 Alterar método importaDados da negociacao-controller para utilizar o service e não mais fazer o fetch:<br>
        <code>public importaDados():void {</code><br>
        <code>&nbsp;&nbsp;this.negociacoesService</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;.obterNegociacoesDoDia()</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;.then(negociacoesDeHoje => {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for (let negociacao of negociacoesDeHoje) {</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoes.adiciona(negociacao);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.negociacoesView.update(this.negociacoes);</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;});</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 07 Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        &nbsp;&nbsp;API externa<br>
        &nbsp;&nbsp;Consumindo API externa<br>
        &nbsp;&nbsp;Definindo uma interface para a API<br>
        &nbsp;&nbsp;Isolando o acesso à API em um serviço<br>
    </p>
</article>

<hr>

<h2>Aula 5</h2>

<h3> 01 Chega de múltiplos console.log </h3>
<article>
    <p>
        Criando uma solução para impressão da classe (models) chamada paraTexto, que imprime em um console log os valores da transação:<br><br>
        01 Na model negociacao.ts:<br>
        <code>public paraTexto(): string {</code><br>
        <code>&nbsp;&nbsp;return `</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;Data: ${this.data},</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;Quantidade: ${this.quantidade},</code><br>
        <code>&nbsp;&nbsp;&nbsp;&nbsp;Valor: ${this.valor}</code><br>
        <code>&nbsp;&nbsp;`;</code><br>
        <code>}</code><br><br>
        02 Na model negociacoes.ts:<br>
        <code>public paraTexto(): string {</code><br>
        <code>&nbsp;&nbsp;return JSON.stringify(this, null, 2);</code><br>
        <code>}</code><br><br>
        03 Implementando na negociacao-controller.ts no método adiciona:<br>
        <code>this.negociacoes.adiciona(negociacao);</code><br>
        <code>console.log(negociacao.paraTexto());</code><br>
        <code>console.log(this.negociacoes.paraTexto());</code><br><br>
        Obs: JSON.stringify(Var, null, 2) imprime o json identado e com 2 de espaçamento<br>
    </p>
</article>

