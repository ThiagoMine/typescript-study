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
        A) <code>class Pessoa {</code><br>
        <code>&nbsp;constructor(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this.nome = nome;</code><br>
        <code>&nbsp;&nbsp;this.idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code> - <b>Correta</b><br>
        B) <code>class Pessoa {</code><br>
        <code>&nbsp;Pessoa(nome, idade) {</code><br>
        <code>&nbsp;&nbsp;this.nome = nome;</code><br>
        <code>&nbsp;&nbsp;this.idade = idade;</code><br>
        <code>&nbsp;}</code><br>
        <code>}</code><br>
        C)         <code>class Pessoa {</code><br>
        <code>&nbsp;nome;</code><br>
        <code>&nbsp;idade;</code><br>
        <code> }</code><br>
    </p>
</article>

<h3> Revisão </h3>
<article>
    <p>   
        Nesta aula, aprendemos:<br>
        Introdução ao projeto e sua estrutura<br>
        Um pouco sobre módulos do ECMASCRIPT<br>
        Modelagem de uma Negociação em Javascript<br>
        Buracos em nossa modelagem por limitações da linguagem Javascript<br>
    </p>
</article>

<hr>

<h2>Aula 2</h2>

<h3> 03 Sobre o compilador do TypeScript </h3>
<article>
    <p>   
        Temos as seguintes afirmações a respeito do compilador do TypeScript:<br>
        1) O uso de Node.js é opcional, mas altamente recomendável<br>
        2) Ele traduz um código escrito em JavaScript para um código compatível com o TypeScript, necessário para que o navegador o compreenda<br>
        3) Podemos passar configurações especiais para o compilador através do arquivo tsconfig.json<br>
        4) É instalado através do npm<br>
        Sobre as afirmativas anteriores, podemos dizer que:<br>
        A) 3 e 4 são falsas.<br>
        B) 1 e 3 são verdadeiras.<br>
        C) 1 e 2 são falsas. - <b>Correta</b><br>
    </p>
</article>

<h3> 05 Configuração básica do compilador </h3>
<article>
    <p>   
        Nome do arquivo: tsconfig.json - na raiz do projeto<br>
        <code>{<br></code>
        <code>    "compilerOptions": { <br></code>
        <code>        "outDir": "dist/js", // Diretório de saída do JS<br></code>
        <code>        "target": "ES6"      // Action script do JS<br></code>
        <code>    },<br></code>
        <code>    "include": [<br></code>
        <code>        "app/**/*"           // Diretório fonte do TS<br></code>
        <code>    ]<br></code>
        <code>}<br></code>
        No package.json criar o script: <code>"compile": "tsc"</code><br>
        então teremos o comando: <code>npm run compile</code><br>
    </p>
</article>

<h3> 06 O arquivo tsconfig.json </h3>
<article>
    <p>   
        Temos a seguinte declaração do arquivo tsconfig.json:<br>
        <code>{</code><br>
        <code>    "compilerOptions": {</code><br>
        <code>        "target": "ES6",</code><br>
        <code>        "outDir": "dist/js",</code><br>
        <code>    },</code><br>
        <code>    "include": [</code><br>
        <code>        "app/**/*"</code><br>
        <code>    ]</code><br>
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
        <code>    "compilerOptions": {</code><br>
        <code>        "outDir": "dist/js",</code><br>
        <code>        "target": "ES6",</code><br>
        <code>        "noEmitOnError": true // Impede que os arquivos JS sejam criados enquanto houverem erros no arquivo TS/compilação</code><br>
        <code>    },</code><br>
        <code>    "include": [</code><br>
        <code>        "app/**/*"</code><br>
        <code>    ]</code><br>
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