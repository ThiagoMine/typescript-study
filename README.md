# typescript-study

<h2>Aula 1</h2>

06 - Importação de módulo nativo do ECMAScript
Qual das alternativas abaixo importa corretamente um módulo nativo do EcmaScript?
A) <script module="app/app.js"></script>
B) <script module src="app/app.js"></script> - Correta
C) <script type="module" src="app/app.js"></script>
D) <script type="script" src="app/app.js"></script>

08 - Módulo e seu escopo
Qual das alternativas abaixo é verdadeira sobre o scopo de um módulo?
A) Módulos do ECMAScript não existem na verdade, tudo é considerado um script.
B) Tudo o que for declarado dentro de um módulo estará confinado nesse módulo, ao menos que o desenvolvedor decida exportar uma ou mais funcionalidades. - Correta
C) Tudo que for declarado dentro de um módulo é automaticamente visível para outros módulos.
D) Tudo o que for declarado dentro de um módulo, mesmo que o desenvolvedor queira dar visibilidade, não é passível de importação por outros módulos.

09 ES2015 e classes
No paradigma da orientação a objetos criamos a representação de algo do mundo real em nosso programa através de modelos e esses modelos são definidos através de classes.
Marque a alternativa que cria corretamente uma classe usando o ECMASCRIPT 2015:
A) class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
} - Correta
B) class Pessoa {
    Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
C) class Pessoa {
    nome;
    idade;
}


Nesta aula, aprendemos:
Introdução ao projeto e sua estrutura
Um pouco sobre módulos do ECMASCRIPT
Modelagem de uma Negociação em Javascript
Buracos em nossa modelagem por limitações da linguagem Javascript


===========================================================================================================================================================================

Aula 2

03 Sobre o compilador do TypeScript
Temos as seguintes afirmações a respeito do compilador do TypeScript:
1) O uso de Node.js é opcional, mas altamente recomendável
2) Ele traduz um código escrito em JavaScript para um código compatível com o TypeScript, necessário para que o navegador o compreenda
3) Podemos passar configurações especiais para o compilador através do arquivo tsconfig.json
4) É instalado através do npm
Sobre as afirmativas anteriores, podemos dizer que:
A) 3 e 4 são falsas.
B) 1 e 3 são verdadeiras.
C) 1 e 2 são falsas. - Correta

04
Intalar typescript


05 Configuração básica do compilador
Nome do arquivo: tsconfig.json - na raiz do projeto
{
    "compilerOptions": { 
        "outDir": "dist/js", // Diretório de saída do JS
        "target": "ES6"      // Action script do JS
    },
    "include": [
        "app/**/*"           // Diretório fonte do TS
    ]
}
No package.json criar o script: "compile": "tsc"
então teremos o comando: npm run compile


06 O arquivo tsconfig.json
Temos a seguinte declaração do arquivo tsconfig.json:
{
    "compilerOptions": {
        "target": "ES6",
        "outDir": "dist/js",    
    },
    "include": [
        "app/**/*"
    ]
}
Marque a alternativa a respeito da configuração:
A) A propriedade "target" indica para o compilator tsc (TypeScript Compiler) para qual versão do Javascript o código escrito em TypeScript deve ser compilado. Isso significa que o resultado final será arquivos Javascript sem qualquer referência para a sintaxe do Typescript. - Correta
B) A propriedade "outDir" indica para o compilador onde estão os arquivos ".ts" que ele deve compilar.
C) A propriedade "include" indica para o compilador onde os arquivos resultantes da compilação de arquivos ".ts" serão salvos.


07 Aprimorando a configuração
{
    "compilerOptions": {
        "outDir": "dist/js",
        "target": "ES6",
        "noEmitOnError": true // Impede que os arquivos JS sejam criados enquanto houverem erros no arquivo TS/compilação
    },
    "include": [
        "app/**/*"
    ]
}

08 Automatizando a compilação de arquivos
No package.json criar o script: "watch": "tsc -w"
Isso gera o comando npm run watch, que fica observando os arquivos ts quando houver alterações esse já compila o mesmo automaticamente
No package.json criar o script: "start": "concurrently \"npm run watch\" \"npm run server\"",
Isso gera o comando npm run start, que fica observando os arquivos ts quando houver alterações esse já compila o mesmo automaticamente e faz o refresh da página do navegador