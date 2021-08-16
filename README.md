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
        B) <code>const nomes: ReadonlyArray<string> = ['a', 'b', 'c'];</code><br> - <b>Correta</b>
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

