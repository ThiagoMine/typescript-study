# typescript-study

<h2>Aula 1</h2>

<h3> 06 - Importação de módulo nativo do ECMAScript </h3>
<article>
    <p>   
        Qual das alternativas abaixo importa corretamente um módulo nativo do EcmaScript? <br>
        A) <code><script module="app/app.js"></script></code><br>
        B) <code><script module src="app/app.js"></script> - <b>Correta</b></code><br>
        C) <code><script type="module" src="app/app.js"></script></code><br>
        D) <code><script type="script" src="app/app.js"></script></code><br>
    </p>
</article>

<h3> 08 - Módulo e seu escopo </h3>
<article>
    <p>   
        Qual das alternativas abaixo é verdadeira sobre o scopo de um módulo?<br>
        A) Módulos do ECMAScript não existem na verdade, tudo é considerado um script.<br>
        B) Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades. - <b>Correta</b><br>
        C) Tudo que for declarado dentro de um módulo é automaticamente visível para outros módulos.<br>
        D) Tudo o que for declarado dentro de um módulo, mesmo que o desenvolvedor queira dar visibilidade, não é passível de importação por outros módulos.<br>
    </p>
</article>

<h3> 09 ES2015 e classes </h3>
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

<h3> Revisão </h3>
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

<h3> 03 Sobre o compilador do TypeScript </h3>
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

<h3> 05 Configuração básica do compilador </h3>
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

<h3> 06 O arquivo tsconfig.json </h3>
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

<h3> 07 Aprimorando a configuração </h3>
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

<h3> 08 Automatizando a compilação de arquivos </h3>
<article>
    <p>   
        No package.json criar o script: <code>"watch": "tsc -w"</code>
        Isso gera o comando <code>npm run watch</code>, que fica observando os arquivos ts quando houver alterações esse já compila o mesmo automaticamente
        No package.json criar o script: <code>"start": "concurrently \"npm run watch\" \"npm run server\""</code>,
        Isso gera o comando <code>npm run start</code>, que fica observando os arquivos ts quando houver alterações esse já compila o mesmo automaticamente e faz o refresh da página do navegador<br>
    </p>
</article>

<h3> 09 O modificador private </h3>
<article>
    <p>   
        Substituir # pelo _ adicionando o private<br>
    </p>
</article>

<h3> 10 TypeScript e classes </h3>
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

<h3> 11 Revisão </h3>
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

<h3> 02 O controller de negociação </h3>
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

<h3> 03 Integração com o formulário </h3>
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

<h3> 04 Surpresa ao instanciar uma negociação </h3>
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

<h3> 05 O tipo implícito any </h3>
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

<h3> 06 Sobre o tipo any </h3>
<article>
    <p>   
        Marque apenas as opções verdadeiras sobre o tipo any. Selecione 2 alternativas<br>
        &nbsp;A) Uma variável do tipo any só pode receber dados do tipo any.<br>
        &nbsp;B) Por padrão, é assumido automaticamente pelo TypeScript quando não definimos o tipo das nossas variáveis. - <b>Correta</b><br>
        &nbsp;C) É possível desativar o tipo implícito any passando uma configuração especial para o compilador no arquivo tsconfig.json. Isso fará com que o compilador emita um erro em todos os locais que o tipo any foi adotado implicitamente. - <b>Correta</b><br>
        &nbsp;D) Favorece o compilador, inclusive IDE's a realizarem o autocomplete e a inferirem todos os métodos da variável.<br>
    </p>
</article>

<h3> 07 Ajustando nosso controller </h3>
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

<h3> 08 Sobre o código </h3>
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

<h3> 09 Convertendo dados de entrada </h3>
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

<h3> 10 Conversão de data </h3>
<article>
    <p>   
        Marque a opção correta que cria um objeto Date a partir de uma string: Selecione uma alternativa<br>
        A) <code>const date = new Date('2021,2,20'); - <b>Correta</b></code><br>
        A) <code>const date = new Date('2021-2-20');</code><br>
        A) <code>const date = new Date('2021 2 20');</code><br>
    </p>
</article>

<h3> 11 Organizando melhor nosso código </h3>
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

<h3> 12 Limpando o formulário </h3>
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

<h3> 13 Revisão </h3>
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

<h3> 02 Modelo de uma lista de negociações </h3>
<article>
    <p>   
        Iniciando a criação do modelo negociações:<br>
        <code>export class Negociacoes{</code><br>
        <code>&nbsp;private negociacoes = [];</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 03 Primeiro contato com Generics </h3>
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

<h3>  04 Sobre Array </h3>
<article>
    <p>   
        Marque apenas as opções que declaram um array corretamente em TypeScript, assumindo que a configuração noImplicitAny está definida com o valor true. Selecione 2 alternativas<br>
        A) <code>let nomes: Array<string> = [];</code> - <b>Correta</b><br>
        B) <code>let idades: Array<Number> = [1, 2, 3];</code> - <b>Correta</b><br>
        C) <code>let salarios: Array = [5400.00, 2400.00, 7100.00];</code><br>
    </p>
</article>

<h3> 05 Avançando com nosso modelo </h3>
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

<h3> 06 Um problema não esperado </h3>
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

<h3> 07 Evitando a mutabilidade da lista </h3>
<article>
    <p>   
        No formato anterior era possível alterar a lista de negociações pelo método lista, usa-se a princípio o spread operator para solucionar o problema, segue método lista() alterado:<br>
        <code>lista():Array<Negociacao> {</code><br>
        <code>&nbsp;return [...this.negociacoes]; // Spread operator cria um novo array com os dados do array dentro do comando</code><br>
        <code>}  </code><br>
    </p>
</article>

<h3> 08 O modificador readonly </h3>
<article>
    <p>   
        A fim de melhorar a semantica do código usamos o tipo ReadonlyArray, e não a tecnica de spread.<br>
        <code>lista():ReadonlyArray<Negociacao> {</code><br>
        <code>&nbsp;return this.negociacoes; // Spread operator cria um novo array com os dados do array dentro do comando</code><br>
        <code>}</code><br>
    </p>
</article>

<h3> 09 Somente leitura </h3>
<article>
    <p>   
        Marque a opção que declara um array e que não disponibilize a remoção ou inclusão de novos items. Selecione uma alternativa<br>
        A) <code>const nomes: Readonly<string> = ['a', 'b', 'c'];</code><br>
        B) <code>const nomes: ReadonlyArray<string> = ['a', 'b', 'c'];</code> - <b>Correta</b>
        C) <code>const nomes: ArrayReadonly<string> = ['a', 'b', 'c'];</code><br>
    </p>
</article>

<h3> 10 Revisão </h3>
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

<h3> 02 Declaração no próprio construtor </h3>
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

<h3> 03 Construtor e atalho </h3>
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

<h3> 04 Arrays e Generics </h3>
<article>
    <p>   
        Simplificando declarações de tipo array<br>
        <code>private negociacoes:Negociacao[] = []; // Negociacao[] = Array<Negociacao></code><br>
        <code>lista(): readonly Negociacao[] { // readonly Negociacao[] = ReadonlyArray<Negociacao></code><br>
    </p>
</article>

<h3> 05 Mais sobre readonly </h3>
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

<h3> 06 Um pouco mais sobre readonly </h3>
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

<h3> 07 Mais surpresas em nossa modelagem </h3>
<article>
    <p>   
        Mesmo no readonly a data pode ser alterada pois é um objeto que possui métodos que permitem a manipulação do valor.<br>
    </p>
</article>

<h3> 08 Programação defensiva </h3>
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

<h3> 09 Revisão </h3>
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

<h3> 03 Modelo para o usuário </h3>
<article>
    <p>   
        Apresentando o modelo de view que iremos usar. <br>
    </p>
</article>

<h3> 04 Criando nossa primeira view </h3>
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

<h3> 05 Integrando nossa view à página </h3>
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

<h3> 06 Criando elementos do DOM dinamicamente </h3>
<article>
    <p>   
        Utilizando a API do DOM, podemos criar elementos dinamicamente através de document.createElement ou:<br>
        A) Através da propriedade innerHTML que aceita receber elementos do DOM.<br>
        B) Através da propriedade innerHTML que recebe uma string que é convertida para elementos do DOM. - <b>Correta</b><br>
        C) textContent, que aceita receber uma string que é convertida em elementos do DOM.<br>
    </p>
</article>

<h3> 07 Revisando nossos passos </h3>
<article>
    <p>   
        Revisão dos passos 3 ao 6<br>
    </p>
</article>

<h3> 08 Unindo view e modelo </h3>
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

<h3>  </h3>
<article>
    <p>   
        Guga escreveu o seguinte código:<br>
        <code>let vogais: string[] = ['a', 'e', 'i', 'o', 'u'];</code><br>
        <code>let template = `</code><br>
<code></code><br>
        <code>&nbsp;<ul></code><br>
        <code>        ${</code><br>
        <code>            vogais.map(vogal => </code><br>
        <code>                `</code><br>
        <code>                    <li>${vogal.toUpperCase()}</li></code><br>
        <code>                `</code><br>
        <code>            ).join('')</code><br>
        <code>        }</code><br>
        <code>    </ul></code><br>
        <code>`;</code><br>
        <code>console.log(template);</code><br><br>
        A saída de console.log exibirá:<br><br>
        A-) - <b>Correta</b><br>
        <code><ul></code><br>
        <code>&nbsp;<li>A</li>   </code><br>
        <code>&nbsp;<li>E</li>     </code><br>
        <code>&nbsp;<li>I</li>      </code><br>
        <code>&nbsp;<li>O</li>      </code><br>
        <code>&nbsp;<li>U</li>    </code><br>
        <code></ul></code><br><br>
        B-)<br>
        <code><ul></code><br>
        <code>&nbsp;<li>a</li>     </code><br>
        <code>&nbsp;<li>e</li>      </code><br>
        <code>&nbsp;<li>i</li>    </code><br>
        <code>&nbsp;<li>o</li>     </code><br>
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

<h3> 10 Formatando a data </h3>
<article>
    <p>   
        1 - Usando a classe Intl para formatar a data<br><br>
        Alteração de código do template:<br>
        de: <code><td>?</td></code><br>
        para: <code><td>${new Intl.DateTimeFormat().format(negociacao.data)}</td></code><br>
    </p>
</article>

<h3> 11 - Revisão </h3>
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

<h3> 02 Mensagem view </h3>
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
        <code>&nbsp;&nbsp;&nbsp;<p class="alert alert-info">${model }</p></code><br>
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
        <code>this.messageView.update('Negociação adicionada com sucesso!');<code><br>
    </p>
</article>

<h3> 03 Repetição de código </h3>
<article>
    <p>   
        Identifica a repetição de Código nas views<br>
    </p>
</article>

<h3> 04 Herança e pequena surpresa </h3>
<article>
    <p>   
        1 - Criar view.ts contendo o atributo elemento e o contrutor:<br>
        <code>export class View{<code></br>
<code><code></br>
        <code>&nbsp;protected elemento: HTMLElement;<code></br>
<code><code></br>
        <code>&nbsp;constructor(seletor: string) {<code></br>
        <code>&nbsp;&nbsp;this.elemento = document.querySelector(seletor);<code></br>
        <code>&nbsp;}<code></br>
        <code>}<code></br>
        </br>
        2 - Remover os contrutores e os atributos view de negociações e mensagem view.<br>
        </br>
    </p>
</article>

<h3> 05 Utilizando Herança </h3>
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
        <code>    private _energia: number = 100;</code><br>
        <code>    private _nome: string = '';</code><br>
<code></code><br>
        <code>    get energia() {</code><br>
        <code>        return this._energia;</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    get nome() {</code><br>
        <code>        return this._nome;</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    set nome(nome) {</code><br>
        <code>        this._nome = nome;</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>}</code><br>
<code></code><br>
        <code>class Humano extends Humanoide {</code><br>
<code></code><br>
        <code>    private _idade: number = 0;</code><br>
<code></code><br>
        <code>    get idade() {</code><br>
        <code>        return this._idade;</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    set idade(idade) {</code><br>
        <code>        this._idade = idade;</code><br>
        <code>    }</code><br>
        <code>}</code><br>
<code></code><br>
        <code>class Alienigena extends Humanoide {</code><br>
<code></code><br>
        <code>    private _energiaExtra: number = 100;</code><br>
<code></code><br>
        <code>    get energia() {</code><br>
        <code>        return this._energia + this._energiaExtra;</code><br>
        <code>    }</code><br>
        <code>}</code><br><br>
        Marque a alternativa verdadeira:<br>
        A-) A classe Humanoide não compila.<br>
        B-) A classe Alienigena não compila. - <b>Correta</b><br>
        C-) A classe Humano não compila.<br>
    </p>
</article>

<h3> 06 Modificador de acesso </h3>
<article>
    <p>   
        Temos o seguinte código:<br>
        <code>class Pai {</code><br>
        <code>    private nome = '';</code><br>
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

<h3> 07 Mais surpresas com Herança </h3>
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

<h3> 08 Avançando no uso de Generics </h3>
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

<h3> 09 Dois tipos genéricos </h3>
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
        <code>    adiciona(objeto: T): K {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    apaga(objeto: T): void {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    buscaPorId(id: K): T {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    atualiza(objeto: T): void {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    listaTodos(): T[] {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
        <code>}</code><br>
        B-)<br>
        <code>class GenericDAO&lt;T&gt; {</code><br>
<code></code><br>
        <code>    adiciona(objeto: T): number {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    apaga(objeto: T): void {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    buscaPorId(id: number): T {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    atualiza(objeto: number): void {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    listaTodos(): T[] {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
        <code>}</code><br>
        C-)<br>
        <code>class GenericDAO&lt;K&gt; {</code><br>
<code></code><br>
        <code>    adiciona(objeto: Negociacao): K {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    apaga(objeto: Negociacao): void {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    buscaPorId(id: K): T {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    atualiza(objeto: Negociacao): void {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
<code></code><br>
        <code>    listaTodos(): Negociacao[] {</code><br>
        <code>        /* implementação do método omitida */</code><br>
        <code>    }</code><br>
        <code>} </code><br>
    </p>
</article>

<h3> 10 Classe abstrata </h3>
<article>
    <p>   
        1 - Transformando view em uma classe abstrata para que a mesma não possa ser instânciada:<br>
        <code>export abstract class View&lt;T&gt;{</code><br><br>
        2 - Transformando o método template em abstrato, faz com que seja obrigatório a implementação deste na classe filha:<br>
        <code>abstract template(model: T):string;</code><br><br>
    </p>
</article>

<b>Correta</b>

&nbsp;