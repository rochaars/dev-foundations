# JavaScript — Anotações Completas

> Mesma organização do arquivo do Notion, pronta para guardar no GitHub.

<details>
<summary><strong>Fundamentos / JavaScript no HTML</strong></summary>

<details>
<summary><strong>JavaScript em uma página HTML</strong></summary>

Para usar JavaScript em uma página HTML, você chama usando a **tag `<script>`**.

### 📌 Forma mais comum (JS dentro do HTML)

```html
<script>
  alert("Olá mundo!");
</script>
```

---

### 📌 Forma recomendada (JS em arquivo separado)

Você cria um arquivo, por exemplo:

**script.js**

```jsx
alert("Olá mundo!");
```

E chama no HTML assim:

```html
<script src="script.js"></script>
```

👉 O `src` serve para ligar o HTML ao arquivo JavaScript externo.

---

### 📌 Onde colocar a tag `<script>`?

Tradicionalmente existem 2 jeitos:

**1️⃣ No `<head>`**

```html
<head>
  <script src="script.js"></script>
</head>
```

**2️⃣ Antes de fechar o `<body>` (mais usado hoje)**

```html
<body>
  <h1>Meu site</h1>

  <script src="script.js"></script>
</body>
```

Colocar no final do `body` ajuda a página carregar primeiro o conteúdo e depois o JavaScript.

</details>

<details>
<summary><strong>sintaxe - Sintaxe é o jeito certo de escrever o código para o computador entender.</strong></summary>

## 🧠 O que é **sintaxe** no JavaScript?

Pensa assim:

**Sintaxe é o jeito certo de escrever o código para o computador entender.**

É igual gramática em português:

- Português certo → “Eu fui ao mercado.”
- Português errado → “Fui eu mercado ao.”

No JavaScript é a mesma coisa.

Se você escreve fora da sintaxe → dá erro.

---

## 🧩 Exemplo simples

### ✅ Sintaxe correta

```jsx
let nome = "Anderson";
console.log(nome);
```

👉 Aqui o JavaScript entende:

- `let` → criar variável
- `=` → guardar valor
- `console.log()` → mostrar na tela

---

### ❌ Sintaxe errada

```jsx
let nome "Anderson"
console.log nome
```

👉 Problemas:

- Faltou `=`
- Faltou `()`
- Faltou `;` (às vezes opcional, mas bom usar)

---

## 📦 Para que serve a sintaxe?

Ela serve para:

✔ Organizar o código

✔ Evitar erros

✔ Fazer o navegador entender o que você quer

✔ Permitir que outros programadores entendam seu código

---

## 🏗 Exemplo prático para iniciante

### Criando variável

```jsx
let idade = 25;
```

👉 Guarda número 25 dentro da variável idade.

---

### Criando função

```jsx
function saudacao() {
  console.log("Olá!");
}
```

👉 Criou uma função chamada `saudacao`.

---

### Usando condição

```jsx
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

👉 Aqui:

- `if` → se acontecer algo
- `{ }` → bloco de código

---

## ⚠ Coisas que iniciantes mais erram na sintaxe

### 1️⃣ Esquecer chaves

```jsx
if (true) {
  console.log("Oi");
}
```

---

### 2️⃣ Esquecer parênteses

```jsx
console.log("Teste");
```

---

### 3️⃣ Misturar maiúsculo e minúsculo

```jsx
console.log("ok"); // certo
Console.log("ok"); // errado
```

JS diferencia letras maiúsculas e minúsculas.

---

## 🗺 Resumo raiz

Sintaxe no JavaScript =

👉 Regras de escrita do código

👉 Forma correta de montar comandos

👉 Linguagem que o computador entende

</details>

</details>

<details>
<summary><strong>Saída e Depuração</strong></summary>

<details>
<summary><strong>document.write ( ) - é um comando que **escreve conteúdo direto no HTML da página**</strong></summary>

## 📜 O que é `document.write()`

`document.write()` é um comando que **escreve conteúdo direto no HTML da página enquanto ela está sendo carregada**.

Ele literalmente “injeta” texto ou HTML dentro do documento.

### 👉 Sintaxe básica

```jsx
document.write("Texto aqui");
```

---

## 🧠 Para que ele serve (na prática)

👉 Mostrar texto na tela

👉 Inserir HTML via JavaScript

👉 Usado muito em exemplos antigos e ensino básico

⚠️ Hoje em dia quase não é usado em projetos modernos.

---

## ✅ Exemplo 1 — Texto simples

```jsx
document.write("Olá mundo!");
```

Resultado na página:

```
Olá mundo!
```

---

## ✅ Exemplo 2 — Com HTML dentro

```jsx
document.write("<h1>Título grande</h1>");
document.write("<p>Parágrafo normal</p>");
```

Ele renderiza como HTML de verdade.

---

## ✅ Exemplo 3 — Usando variável

```jsx
let nome = "Anderson";

document.write("Olá " + nome);
```

---

## ⚠️ Problema importante (muito importante mesmo)

Se você usar `document.write()` **depois que a página já carregou**, ele pode apagar tudo da tela.

Exemplo perigoso:

```jsx
setTimeout(() => {
  document.write("Oi");
}, 3000);
```

👉 Depois de 3 segundos ele pode limpar a página inteira e mostrar só "Oi".

---

## 🧭 Como fazemos hoje em dia (modo moderno)

Hoje usamos coisas como:

### ✔ `innerHTML`

```jsx
document.getElementById("demo").innerHTML = "Texto novo";
```

### ✔ `textContent`

```jsx
document.getElementById("demo").textContent = "Texto novo";
```

---

## 📌 Resumão simples

| Coisa | Explicação |
| --- | --- |
| `document.write()` | Escreve direto no HTML |
| Funciona quando | Página ainda está carregando |
| Problema | Pode apagar a página depois |
| Uso hoje | Quase só para estudo |

</details>

<details>
<summary><strong>alert - caixinha de mensagem na tela do navegador.</strong></summary>

## 📌 O que é `alert` no JavaScript?

`alert` é uma função que mostra uma **caixinha de mensagem na tela do navegador**.

Ela serve para:

- Mostrar avisos
- Mostrar mensagens simples
- Testar código enquanto você aprende

---

## 🧠 Sintaxe básica

```jsx
alert("Sua mensagem aqui");
```

---

## ✅ Exemplo 1 — Primeiro teste

```jsx
alert("Olá, mundo!");
```

👉 Quando o código roda, aparece uma janela com:

```
Olá, mundo!
```

---

## ✅ Exemplo 2 — Aviso para usuário

```jsx
alert("Você precisa fazer login");
```

Muito usado antigamente para avisos rápidos.

---

## ✅ Exemplo 3 — Usando variável

```jsx
let nome = "Anderson";
alert("Bem-vindo, " + nome);
```

Resultado:

```
Bem-vindo, Anderson
```

---

## ⚠️ Coisa importante para saber

Quando o `alert` aparece:

- Ele **trava a página**
- O usuário precisa clicar em **OK** para continuar

Por isso hoje em dia ele é mais usado para:

✔ Aprender

✔ Testar código

✔ Debug simples

---

## 🆚 `alert` vs coisas modernas

Hoje muitos sites usam:

- Caixas bonitas (modais)
- Notificações visuais
- Mensagens dentro da página

Mas entender `alert` é ótimo porque ajuda a pegar a base do JavaScript.

---

## 💡 Dica de iniciante

Se você quer testar se algo está funcionando:

```jsx
let numero = 10;
alert(numero);
```

Ajuda a ver valores rapidamente.

</details>

<details>
<summary><strong>console.log - mostrar informações no console do navegador</strong></summary>

## 🧠 O que é `console.log` no JavaScript?

`console.log()` é uma função usada para **mostrar informações no console do navegador** (ou no terminal, se for Node.js).

👉 Pense como um “visor de diagnóstico”.

Você usa para:

- Ver valores de variáveis
- Testar se algo está funcionando
- Acompanhar o fluxo do código
- Encontrar erros

---

## 💻 Exemplo mais simples possível

```jsx
console.log("Olá mundo");
```

✅ Isso vai mostrar no console:

```
Olá mundo
```

---

## 📦 Exemplo com variável

```jsx
let nome = "Anderson";
console.log(nome);
```

Saída:

```
Anderson
```

👉 Muito usado para conferir se a variável tem o valor certo.

---

## 🔢 Exemplo com contas

```jsx
let numero1 = 10;
let numero2 = 5;

console.log(numero1 + numero2);
```

Saída:

```
15
```

---

## 🧪 Exemplo para depuração (debug)

```jsx
let idade = 18;

console.log("Valor da idade:", idade);

if (idade >= 18) {
    console.log("Maior de idade");
}
```

👉 Aqui você acompanha o que está acontecendo no código.

---

## 🌐 Onde aparece o console?

No navegador:

👉 Clique com botão direito

👉 Inspecionar

👉 Aba **Console**

---

## ⭐ Dica de iniciante (muito valiosa)

Programador usa `console.log` o tempo todo no começo.

É tipo acender a luz pra ver o que está acontecendo dentro do código.

---

## ⚠️ Algo importante

`console.log` é só para desenvolvimento.

Em projetos grandes, normalmente removem ou substituem por sistemas de log mais organizados.

</details>

</details>

<details>
<summary><strong>Variáveis</strong></summary>

<details>
<summary><strong>var - forma de criar variáveis</strong></summary>

## 👉 O que significa `var` no JavaScript?

`var` é uma **forma antiga de criar variáveis** no JavaScript.

Variável é basicamente um espaço para guardar informação.

Pensa assim: é como uma caixinha onde você coloca um valor para usar depois.

---

## 📌 Exemplo simples

```jsx
var nome = "Anderson";
console.log(nome);
```

👉 Aqui:

- `var` → cria a variável
- `nome` → é o nome da variável
- `"Anderson"` → é o valor guardado

---

## 📌 Outro exemplo

```jsx
var idade = 25;
var cidade = "São Paulo";

console.log(idade);
console.log(cidade);
```

---

## 🧠 Como o `var` funciona (explicação de iniciante)

### ✅ Pode mudar o valor depois

```jsx
var numero = 10;
numero = 20;

console.log(numero); // 20
```

---

### ⚠️ Problema do `var`

O `var` pode causar confusão porque ele **não respeita bem os blocos** (como `{ }`).

Exemplo:

```jsx
if (true) {
  var teste = "Olá";
}

console.log(teste); // Ainda funciona (isso pode dar problema)
```

---

## 🆕 Hoje em dia usamos mais `let` e `const`

### `let` → valor que pode mudar

```jsx
let idade = 30;
idade = 31;
```

### `const` → valor fixo (não muda)

```jsx
const pi = 3.14;
```

---

## 🏆 Resumão fácil

| Palavra | Pode mudar valor? | Recomendado hoje? |
| --- | --- | --- |
| var | ✅ Sim | ❌ Quase não |
| let | ✅ Sim | ✅ Sim |
| const | ❌ Não | ✅ Sim |

---

## 💬 Dica prática

Se estiver aprendendo hoje:

👉 Prefira **let** e **const**

👉 Entenda `var` porque você ainda vai ver em códigos antigos

</details>

<details>
<summary><strong>let - uma forma de declarar variáveis.</strong></summary>

## 📌 O que significa `let` no JavaScript?

`let` é uma forma de **declarar variáveis**.

Variável = um espaço na memória para guardar um valor.

👉 Pense como uma caixinha com nome, onde você guarda algo.

---

## 🧠 Por que existe `let`?

Antes, JavaScript usava muito `var`.

Mas `let` foi criado para deixar o código mais seguro e previsível.

Hoje, no dia a dia, o padrão moderno é:

- `let` → valor pode mudar
- `const` → valor não muda

---

## ✅ Exemplo básico

```jsx
let nome = "Anderson";
console.log(nome);
```

👉 Aqui:

- `let` cria a variável
- `nome` é o nome da variável
- `"Anderson"` é o valor guardado

---

## 🔄 Mudando o valor depois

```jsx
let idade = 20;
idade = 21;

console.log(idade);
```

✔ Pode mudar depois

✔ Não precisa usar `let` de novo

---

## 📦 Exemplo do mundo real

```jsx
let saldo = 100;

saldo = saldo - 30;

console.log(saldo); // 70
```

👉 Muito usado para:

- contadores
- valores que mudam
- estados do sistema

---

## 🚨 Diferença importante: escopo (onde funciona)

`let` funciona só dentro do bloco `{ }`.

```jsx
if (true) {
  let mensagem = "Oi";
}

console.log(mensagem); // ❌ erro
```

Isso evita bugs — coisa que antigamente acontecia muito.

---

## 🆚 let vs var (visão rápida)

|  | let | var |
| --- | --- | --- |
| Pode mudar valor | ✅ | ✅ |
| Escopo de bloco | ✅ | ❌ |
| Moderno | ✅ | ❌ |

---

## 🏆 Regra simples pra iniciante

👉 Valor vai mudar? → use **`let`**

👉 Valor fixo? → use **`const`**

---

## 💡 Dica prática

Hoje, programador moderno usa mais:

- `const` (maioria dos casos)
- `let` (quando precisa alterar)

</details>

<details>
<summary><strong>const - forma de declarar uma variável que não pode ser reatribuída</strong></summary>

## 🧠 O que é `const` no JavaScript?

`const` é uma forma de **declarar uma variável que não pode ser reatribuída** depois.

👉 Em termos simples:

Você cria → define o valor → e esse valor não pode ser trocado depois.

---

## 📦 Exemplo básico

```jsx
const nome = "Anderson";

console.log(nome);
```

✅ Funciona normal.

---

## ❌ Tentando mudar o valor

```jsx
const nome = "Anderson";

nome = "Carlos"; // ERRO
```

💥 Vai dar erro porque `const` não deixa mudar o valor depois.

---

## 🏗 Comparando com `let` (importante)

### `let` → pode mudar

```jsx
let idade = 20;
idade = 21; // OK
```

### `const` → não pode mudar

```jsx
const idade = 20;
idade = 21; // ERRO
```

---

## ⚠️ Pegadinha de iniciante (MUITO importante)

Se for **objeto ou array**, você não pode trocar o objeto inteiro,

mas pode mudar o conteúdo dentro.

### Objeto com `const`

```jsx
const pessoa = {
  nome: "Anderson"
};

pessoa.nome = "Carlos"; // ✅ Pode
```

Mas:

```jsx
pessoa = { nome: "Pedro" }; // ❌ Não pode
```

---

### Array com `const`

```jsx
const numeros = [1, 2, 3];

numeros.push(4); // ✅ Pode
```

Mas:

```jsx
numeros = [5, 6, 7]; // ❌ Não pode
```

---

## 🎯 Quando usar `const`?

Use `const` quando:

✔ O valor não deve mudar

✔ É uma configuração

✔ É algo fixo

✔ Boa prática moderna (muito usada hoje)

---

## 💡 Regra simples pra guardar

👉 Sempre comece usando `const`

👉 Se precisar mudar depois → troca pra `let`

Isso é prática comum entre programadores.

---

## 🧱 Exemplo real simples

```jsx
const PI = 3.14;
const nomeSistema = "Meu App";
const ativo = true;
```

</details>

</details>

<details>
<summary><strong>Strings / Textos</strong></summary>

<details>
<summary><strong>Concatenar - significa juntar valores</strong></summary>

## 📌 O que significa **concatenar** no JavaScript?

Concatenar significa **juntar valores**, normalmente **textos (strings)**, formando um texto só.

Pensa como colar duas palavras para virar uma frase.

---

## 🧠 Exemplo simples

```jsx
let nome = "Anderson";
let saudacao = "Olá, " + nome;

console.log(saudacao);
```

👉 Resultado:

```
Olá, Anderson
```

Aqui:

- `"Olá, "` → texto fixo
- `nome` → variável
- `+` → operador que junta (concatena)

---

## 🧩 Concatenando várias partes

```jsx
let nome = "Anderson";
let idade = 25;

let frase = "Meu nome é " + nome + " e tenho " + idade + " anos";

console.log(frase);
```

👉 Resultado:

```
Meu nome é Anderson e tenho 25 anos
```

---

## ⭐ Forma moderna (Template String)

Hoje em dia, muita gente prefere usar **template string** (mais limpo).

```jsx
let nome = "Anderson";
let idade = 25;

let frase = `Meu nome é ${nome} e tenho ${idade} anos`;

console.log(frase);
```

👉 Mesmo resultado — só que mais organizado.

---

## ⚠️ Detalhe importante para iniciantes

O `+` pode:

- Somar números
- Concatenar textos

Exemplo:

```jsx
console.log(2 + 2);        // 4
console.log("2" + "2");    // 22
console.log("2" + 2);      // 22
```

Quando tem texto, o JavaScript tende a transformar tudo em texto.

---

## 🪄 Exemplos práticos do dia a dia

✅ Mostrar nome do usuário

✅ Montar mensagens

✅ Criar textos dinâmicos em sites

✅ Mostrar resultados de cálculos formatados

</details>

<details>
<summary><strong>Template String ${} — mistura texto e variáveis</strong></summary>

<pre><code>`${item.nome} | ${item.preco}`</code></pre><p>Usamos crases e colocamos JavaScript dentro de <code>${}</code>.</p>

</details>

<details>
<summary><strong>replace() — substitui parte de um texto</strong></summary>

<pre><code>precoTexto.replace("R$", "");
"20,99".replace(",", ".");</code></pre><p>Serve para trocar uma parte do texto por outra.</p>

</details>

<details>
<summary><strong>trim() — remove espaços extras</strong></summary>

<pre><code>" 20,99 ".trim();</code></pre><p>Resultado: <code>"20,99"</code>.</p>

</details>

</details>

<details>
<summary><strong>Números / Math / Formatação</strong></summary>

<details>
<summary><strong>math.max - Ele compara números e devolve o maior.</strong></summary>

## O que é `Math.max` no JavaScript?

`Math.max()` é um **método do objeto `Math`** que serve para pegar **o maior número** entre os valores que você passar para ele.

Em português simples:

👉 Ele compara números e devolve o maior.

---

## 📌 Sintaxe básica

```jsx
Math.max(valor1, valor2, valor3, ...)
```

Você pode passar quantos números quiser, separados por vírgula.

---

## 🔹 Exemplo 1 — Uso mais simples

```jsx
let maior = Math.max(10, 5);
console.log(maior);
```

**Resultado:**

```
10
```

Ele comparou 10 e 5, e retornou o maior.

---

## 🔹 Exemplo 2 — Vários números

```jsx
let maior = Math.max(3, 8, 15, 2, 9);
console.log(maior);
```

**Resultado:**

```
15
```

---

## 🔹 Exemplo 3 — Usando com variáveis

```jsx
let idade1 = 18;
let idade2 = 25;

let maisVelho = Math.max(idade1, idade2);
console.log(maisVelho);
```

Isso é muito comum no dia a dia.

---

## 🔹 Exemplo 4 — Pegando o maior número de um array

Aqui é onde iniciantes costumam se enrolar.

Se você tiver um array:

```jsx
let numeros = [10, 20, 5, 30];
```

Se fizer isso:

```jsx
Math.max(numeros); // ERRADO
```

Não funciona.

### ✅ Forma correta usando "spread operator"

```jsx
let maior = Math.max(...numeros);
console.log(maior);
```

**Resultado:**

```
30
```

O `...` espalha os valores do array como se fosse:

```jsx
Math.max(10, 20, 5, 30);
```

---

## ⚠️ Cuidado importante

Se você passar algo que não seja número:

```jsx
Math.max(10, "20");
```

O JavaScript tenta converter automaticamente.

Mas se for algo inválido:

```jsx
Math.max(10, "banana");
```

Resultado:

```
NaN
```

`NaN` significa **Not a Number**.

---

## 🧠 Como pensar sobre isso (mentalidade de programador)

`Math.max` é útil quando você precisa:

- Validar limites
- Comparar valores
- Definir teto máximo
- Trabalhar com pontuações
- Encontrar o maior valor em uma lista

Exemplo prático real:

```jsx
let notaUsuario = 120;
let limite = 100;

let notaFinal = Math.min(notaUsuario, limite);
console.log(notaFinal);
```

Aqui estamos limitando a nota ao máximo permitido.

---

## 📚 Resumão

| Método | O que faz |
| --- | --- |
| `Math.max()` | Retorna o maior número |
| `Math.min()` | Retorna o menor número |

</details>

<details>
<summary><strong>math.min - você entrega vários números pra ele, e ele devolve o menor deles.</strong></summary>

## O que é `Math.min` no JavaScript?

`Math.min()` é um método nativo do objeto global **`Math`** do JavaScript. Ele serve para **retornar o menor número** entre os valores que você passar como argumento.

Pensa assim: você entrega vários números pra ele, e ele devolve o menor deles.

### Sintaxe básica:

```jsx
Math.min(valor1, valor2, valor3, ...)
```

---

## 🔹 Exemplo 1 – Uso simples

```jsx
let menor = Math.min(10, 5, 8, 20);
console.log(menor);
```

📌 Resultado:

```
5
```

Porque 5 é o menor número da lista.

---

## 🔹 Exemplo 2 – Comparando duas variáveis

```jsx
let precoProdutoA = 120;
let precoProdutoB = 95;

let menorPreco = Math.min(precoProdutoA, precoProdutoB);

console.log(menorPreco);
```

📌 Resultado:

```
95
```

Aqui ele compara os valores guardados nas variáveis.

---

## 🔹 Exemplo 3 – Usando com array (forma moderna)

Se você tiver um array:

```jsx
let numeros = [15, 3, 9, 22, 1];
```

Não dá pra fazer assim:

```jsx
Math.min(numeros); ❌
```

Isso não funciona.

O jeito correto é usar o operador spread `...`:

```jsx
let menorNumero = Math.min(...numeros);
console.log(menorNumero);
```

📌 Resultado:

```
1
```

O `...` "espalha" os valores do array como se você tivesse escrito:

```jsx
Math.min(15, 3, 9, 22, 1);
```

---

## 🔹 Comportamentos importantes

### 👉 Se não passar nenhum valor:

```jsx
Math.min();
```

Resultado:

```
Infinity
```

Porque matematicamente o menor valor possível começa como infinito positivo.

---

### 👉 Se tiver algo que não é número:

```jsx
Math.min(10, "abc");
```

Resultado:

```
NaN
```

Porque `"abc"` não pode ser convertido em número.

---

## 🧠 Dica prática de iniciante

Use `Math.min` quando você precisar:

- Saber o menor preço
- Comparar notas
- Definir limites mínimos
- Trabalhar com validação

Exemplo prático real:

```jsx
let estoque = 3;
let limiteMinimo = 5;

if (estoque < limiteMinimo) {
    console.log("Estoque abaixo do ideal");
}
```

Ou até:

```jsx
let quantidadeParaComprar = Math.min(estoque, 10);
```

---

## 📌 Resumão direto

`Math.min()`

➡ Recebe números

➡ Retorna o menor deles

➡ Funciona com valores separados ou com `...array`

➡ Retorna `NaN` se tiver valor inválido

</details>

<details>
<summary><strong>Number() — transforma em número</strong></summary>

<pre><code>Number("20.99");</code></pre><p>Resultado: <code>20.99</code> como número, permitindo fazer contas.</p>

</details>

<details>
<summary><strong>toFixed() — define casas decimais</strong></summary>

<pre><code>totalCarrinho.toFixed(2);</code></pre><p>Exemplo: <code>62.9</code> vira <code>"62.90"</code>.</p><p><strong>Importante:</strong> <code>toFixed()</code> devolve uma string.</p>

</details>

</details>

<details>
<summary><strong>Operadores</strong></summary>

<details>
<summary><strong>Operadores Aritméticos - São símbolos usados para fazer contas matemáticas no código</strong></summary>

## 📌 O que são Operadores Aritméticos?

São símbolos usados para fazer **contas matemáticas** no código. Igualzinho na calculadora ou no caderno — soma, subtração, multiplicação, divisão etc.

No JavaScript, eles servem para manipular números dentro das variáveis.

---

## 🧮 Principais Operadores Aritméticos no JavaScript

### ➕ Soma (`+`)

```jsx
let a = 10;
let b = 5;

let resultado = a + b;
console.log(resultado); // 15
```

---

### ➖ Subtração ()

```jsx
let resultado = 10 - 5;
console.log(resultado); // 5
```

---

### ✖️ Multiplicação ()

```jsx
let resultado = 10 * 5;
console.log(resultado); // 50
```

---

### ➗ Divisão (`/`)

```jsx
let resultado = 10 / 5;
console.log(resultado); // 2
```

---

### 🪨 Resto da Divisão (`%`) → chamado de **módulo**

Mostra o que sobra da divisão.

```jsx
let resultado = 10 % 3;
console.log(resultado); // 1
```

👉 Porque:

- 3 × 3 = 9
- Sobra 1

Muito usado para:

- Saber se número é par ou ímpar
- Fazer ciclos
- Jogos
- Validações

---

### ⬆️ Potência (`*`)

```jsx
let resultado = 2 ** 3;
console.log(resultado); // 8
```

👉 2 elevado a 3

---

## 🔥 Exemplo Real Simples

```jsx
let precoProduto = 100;
let desconto = 20;

let precoFinal = precoProduto - desconto;
console.log(precoFinal);
```

---

## 💡 Dica de Iniciante

Operadores aritméticos são usados o tempo todo:

- Carrinho de compras
- Sistemas financeiros
- Jogos
- Animações
- Dashboards
- Qualquer cálculo automático

---

## 🧠 Resumo rápido

| Operador | O que faz |
| --- | --- |
| `+` | Soma |
| `-` | Subtrai |
| `*` | Multiplica |
| `/` | Divide |
| `%` | Resto da divisão |
| `**` | Potência |

</details>

<details>
<summary><strong>Operadores de Atribuição - São operadores usados para atribuir valores a variáveis</strong></summary>

## 📌 O que são Operadores de Atribuição no JavaScript?

São operadores usados para **atribuir valores a variáveis**.

O mais básico é o `=` (igual), mas existem vários que já fazem **atribuição + cálculo ao mesmo tempo**.

Pensa assim:

👉 A variável é uma caixa

👉 O operador de atribuição coloca ou atualiza o valor dentro dela

---

## 🧱 Operador básico

### `=` → Atribuir valor

```jsx
let idade = 25;
```

👉 Aqui você está dizendo:

"idade recebe 25"

---

## ⚙️ Operadores de atribuição com cálculo

Eles são atalhos. Antigamente (e ainda hoje) você poderia fazer tudo “na mão”, mas esses operadores deixam o código mais limpo.

---

### ➕ `+=` (somar e atribuir)

```jsx
let numero = 10;
numero += 5; // numero = numero + 5

console.log(numero); // 15
```

---

### ➖ `=` (subtrair e atribuir)

```jsx
let numero = 10;
numero -= 3; // numero = numero - 3

console.log(numero); // 7
```

---

### ✖️ `=` (multiplicar e atribuir)

```jsx
let numero = 10;
numero *= 2; // numero = numero * 2

console.log(numero); // 20
```

---

### ➗ `/=` (dividir e atribuir)

```jsx
let numero = 10;
numero /= 2; // numero = numero / 2

console.log(numero); // 5
```

---

### 🧮 `%=` (resto da divisão e atribuir)

```jsx
let numero = 10;
numero %= 3; // numero = numero % 3

console.log(numero); // 1
```

---

## 🧠 Tradução mental simples

| Operador | Tradução fácil |
| --- | --- |
| `=` | recebe |
| `+=` | soma e guarda |
| `-=` | subtrai e guarda |
| `*=` | multiplica e guarda |
| `/=` | divide e guarda |

---

## 💡 Exemplo real de iniciante

Imagina saldo de conta:

```jsx
let saldo = 1000;

// entrou dinheiro
saldo += 500;

// pagou conta
saldo -= 200;

console.log(saldo); // 1300
```

---

## ⭐ Dica de quem programa

Esses operadores aparecem MUITO em:

- contadores
- jogos
- cálculos
- atualizações de valores
- loops

</details>

<details>
<summary><strong>Operadores de Sequencia - permite executar várias expressões em sequência</strong></summary>

## 📌 O que são Operadores de Sequência no JavaScript?

O **operador de sequência** (também chamado de **operador vírgula `,`**) permite executar **várias expressões em sequência**, mas **retorna apenas o valor da última**.

👉 Em outras palavras:

Você manda o JavaScript fazer várias coisas…

Mas ele só considera o resultado da última.

---

## 🧠 Sintaxe básica

```jsx
expressao1, expressao2, expressao3
```

✔ Todas são executadas

✔ Só a última vira o resultado final

---

## ✅ Exemplo simples

```jsx
let resultado = (1 + 2, 3 + 4);

console.log(resultado);
```

👉 O que acontece aqui:

1. `1 + 2` é executado → resultado 3 (ignorado)
2. `3 + 4` é executado → resultado 7 (esse vale)

✅ Saída:

```
7
```

---

## ✅ Exemplo mais realista

Muito usado dentro de loops ou quando você quer fazer várias operações numa linha.

```jsx
let a = 1;
let b = 2;

let resultado = (a += 3, b += 4);

console.log(resultado);
```

👉 Passo a passo:

- `a += 3` → a vira 4
- `b += 4` → b vira 6
- resultado final → 6

---

## ✅ Exemplo clássico em FOR

Aqui ele aparece naturalmente:

```jsx
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(i, j);
}
```

👉 Aqui:

- `i = 0, j = 10` → operador de sequência
- `i++, j--` → também sequência

---

## ⚠️ Cuidado (iniciante quase não usa)

Na prática do dia a dia, programadores evitam usar muito porque:

- Pode confundir quem lê o código
- Fica menos claro

Código mais “tradicional” costuma ser:

```jsx
let a = 1;
a += 3;

let b = 2;
b += 4;

let resultado = b;
```

Mais longo…

Mas muito mais fácil de entender.

---

## 🧩 Quando faz sentido usar?

👉 Em loops

👉 Em expressões curtas

👉 Quando você domina bem leitura de código

---

## 💬 Resumão estilo conversa de programador

Operador de sequência =

👉 Executa várias coisas

👉 Ignora tudo

👉 Só devolve o último resultado

</details>

<details>
<summary><strong>Operadores de comparação - comparar valores</strong></summary>

- `true` → verdadeiro
- `false` → falso

Eles são muito usados em **if**, **loops**, validações, etc.

---

# 🧠 O que são Operadores de Comparação?

São símbolos que comparam dois valores.

Exemplo simples:

```jsx
5 > 3
```

Resultado:

```jsx
true
```

Porque 5 é maior que 3.

---

# 📌 Principais operadores (para começar)

## ✅ Igualdade

### `==` → igual (com conversão de tipo)

```jsx
5 == "5"   // true
```

Aqui o JavaScript converte string para número.

---

### `===` → igual estrito (SEM conversão — recomendado)

```jsx
5 === "5"   // false
5 === 5     // true
```

👉 Na prática, prefira sempre `===`.

---

## ❌ Diferente

### `!=` → diferente (com conversão)

```jsx
5 != "5"   // false
```

---

### `!==` → diferente estrito

```jsx
5 !== "5"   // true
```

---

## 📏 Comparação numérica

### `>`

Maior que

```jsx
10 > 5   // true
```

---

### `<`

Menor que

```jsx
5 < 10   // true
```

---

### `>=`

Maior ou igual

```jsx
10 >= 10   // true
```

---

### `<=`

Menor ou igual

```jsx
5 <= 10   // true
```

---

# 🧪 Exemplo real para iniciante

```jsx
let idade = 18;

if (idade >= 18) {
  console.log("Pode entrar");
}
```

---

# ⚠️ Dica de ouro (coisa que todo iniciante aprende depois 😄)

Sempre prefira:

```
===
!==
```

Porque evita bugs.

---

# 🧠 Como pensar mentalmente

Imagine:

👉 “Isso é maior que aquilo?”

👉 “Isso é igual exatamente?”

👉 “Isso é diferente?”

Se sim → operador de comparação.

---

# 🚀 Mini exercício pra você testar

Tenta prever o resultado:

```jsx
10 === "10"
10 == "10"
7 > 10
7 < 10
```

</details>

<details>
<summary><strong>Operadores logicos - comparar condições e decidir se algo é verdadeiro (true) ou falso (false).</strong></summary>

---

# 🧠 O que são operadores lógicos no JavaScript?

Operadores lógicos servem para **comparar condições** e decidir se algo é **verdadeiro (true)** ou **falso (false)**.

Eles são muito usados em:

- `if`
- `while`
- validações
- regras de negócio

Pensa assim: eles funcionam como decisões do dia a dia.

> “Se chover **E** eu tiver guarda-chuva → saio”
> 
> 
> “Se chover **OU** fizer frio → levo casaco”
> 

---

# ⚙️ Os 3 operadores lógicos principais

## ✅ AND → `&&` (E)

Só retorna **true** se **todas** as condições forem verdadeiras.

### Exemplo:

```jsx
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir");
}
```

👉 Tradução mental:

> idade maior que 18 **E** tem carteira → pode dirigir
> 

Se uma das condições for falsa → resultado falso.

---

## ✅ OR → `||` (OU)

Retorna **true** se **pelo menos uma** condição for verdadeira.

### Exemplo:

```jsx
let temDinheiro = false;
let temCartao = true;

if (temDinheiro || temCartao) {
  console.log("Pode pagar");
}
```

👉 Tradução:

> tem dinheiro **OU** tem cartão → pode pagar
> 

---

## ✅ NOT → `!` (NÃO)

Inverte o valor lógico.

### Exemplo:

```jsx
let estaChovendo = false;

if (!estaChovendo) {
  console.log("Pode sair sem guarda-chuva");
}
```

👉 `!false` vira `true`

---

# 📊 Tabela simples para visualizar

| Operação | Exemplo | Resultado |
| --- | --- | --- |
| AND | true && true | true |
| AND | true && false | false |
| OR | true |  |
| OR | false |  |
| NOT | !true | false |

---

# 💡 Exemplo realista para iniciante

```jsx
let logado = true;
let ehAdmin = false;

if (logado && ehAdmin) {
  console.log("Acesso total");
} else {
  console.log("Acesso limitado");
}
```

---

# 🧩 Dica de ouro pra quem está começando

Lê assim:

- `&&` → **E também**
- `||` → **Ou então**
- `!` → **O contrário**

---

# 🚀 Mini exercício pra você testar

Tenta prever o resultado:

```jsx
let idade = 16;
let temAutorizacao = true;

console.log(idade >= 18 || temAutorizacao);
```

Resposta:

👉 `true` (porque tem autorização)

</details>

<details>
<summary><strong>++ — aumenta 1</strong></summary>

<pre><code>itemExistente.quantidade++;</code></pre><p>Se a quantidade era <code>1</code>, vira <code>2</code>, depois <code>3</code>, <code>4</code>...</p><p><strong>Lembre assim:</strong> <code>++</code> = adiciona 1.</p>

</details>

</details>

<details>
<summary><strong>Condicionais</strong></summary>

<details>
<summary><strong>Operador condicional (Ternario) - Ele serve para tomar uma decisão e retornar um valor, tudo em uma única linha.</strong></summary>

## 🧠 O que é o Operador Condicional (Ternário)

O **operador ternário** é uma forma curta de escrever um `if...else`.

Ele serve para tomar uma decisão e retornar um valor, tudo em **uma única linha**.

---

## 📌 Estrutura básica

```jsx
condicao ? valorSeVerdadeiro : valorSeFalso;
```

👉 Lê assim na prática:

Se a condição for verdadeira → usa o primeiro valor

Se for falsa → usa o segundo valor

---

## 🆚 Comparando com IF normal

### ✅ Usando IF

```jsx
let idade = 18;
let podeDirigir;

if (idade >= 18) {
  podeDirigir = "Sim";
} else {
  podeDirigir = "Não";
}

console.log(podeDirigir);
```

---

### ✅ Usando Ternário

```jsx
let idade = 18;

let podeDirigir = idade >= 18 ? "Sim" : "Não";

console.log(podeDirigir);
```

👉 Mesma lógica

👉 Menos código

👉 Mais usado em código moderno

---

## 🎯 Exemplo 1 — Número Par ou Ímpar

```jsx
let numero = 7;

let resultado = numero % 2 === 0 ? "Par" : "Ímpar";

console.log(resultado);
```

---

## 🎯 Exemplo 2 — Logado ou Não

```jsx
let logado = true;

let mensagem = logado ? "Bem-vindo!" : "Faça login";

console.log(mensagem);
```

---

## 🎯 Exemplo 3 — Usando direto no console

```jsx
let nota = 6;

console.log(nota >= 7 ? "Aprovado" : "Reprovado");
```

---

## ⚠️ Quando usar (dica de ouro)

✅ Use quando for algo simples

❌ Evite quando ficar muito grande ou difícil de ler

### ❌ Feio / difícil

```jsx
let resultado = idade > 18
  ? salario > 2000
    ? "Aprovado"
    : "Salário baixo"
  : "Menor de idade";
```

Nesses casos, `if` normal fica mais limpo.

---

## 🧱 Forma fácil de memorizar

Pensa assim:

👉 **Pergunta ? Verdadeiro : Falso**

Exemplo mental:

```
Está chovendo ? Leva guarda-chuva : Vai sem
```

</details>

<details>
<summary><strong>else - “senão”.</strong></summary>

Vamos direto ao ponto.

## O que significa `else` no JavaScript?

`else` significa **“senão”**.

Ele é usado junto com o `if` para dizer:

> "Se isso for verdadeiro, faça algo.
> 
> 
> SENÃO, faça outra coisa."
> 

É como uma decisão na vida real:

> Se estiver chovendo, levo guarda-chuva.
> 
> 
> Senão, saio sem.
> 

Em JavaScript funciona assim.

---

## 📌 Estrutura básica

```jsx
if (condição) {
  // código executado se for verdadeiro
} else {
  // código executado se for falso
}
```

---

## 🔹 Exemplo 1 — Número maior que 10

```jsx
let numero = 15;

if (numero > 10) {
  console.log("O número é maior que 10");
} else {
  console.log("O número é menor ou igual a 10");
}
```

### O que está acontecendo?

1. Criamos uma variável `numero`
2. Verificamos se ele é maior que 10
3. Se for → executa o primeiro bloco
4. Se não for → executa o bloco do `else`

Simples assim.

---

## 🔹 Exemplo 2 — Verificando idade

```jsx
let idade = 17;

if (idade >= 18) {
  console.log("Você é maior de idade");
} else {
  console.log("Você é menor de idade");
}
```

Aqui o JavaScript está tomando uma decisão baseada na idade.

---

## 🔹 Como pensar como programador

Imagine que o `if` é uma porta:

- Se a condição for verdadeira → entra por essa porta
- Se for falsa → entra pela porta do `else`

O `else` **só executa quando o `if` for falso**.

---

## 🔹 E se eu quiser mais de uma condição?

Aí usamos `else if`.

```jsx
let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

Aqui funciona assim:

1. Testa o primeiro `if`
2. Se for falso, testa o `else if`
3. Se tudo for falso, executa o `else`

---

## 🧠 Resumindo de forma simples

- `if` → se
- `else if` → senão se
- `else` → senão

O `else` é o **plano B** do código.

---

Se você quiser, posso te passar exercícios práticos para treinar isso no console do navegador 🔥

</details>

<details>
<summary><strong>if - “se”.</strong></summary>

## O que significa `if` no JavaScript?

`if` significa **“se”**.

Ele serve para tomar decisões no código.

Ou seja:

> **Se** algo for verdadeiro → faça isso.
> 
> 
> **Se não for** → faça outra coisa.
> 

É como na vida real:

- Se estiver chovendo → levo guarda-chuva.
- Se não estiver → não levo.

No JavaScript é igual.

---

## Estrutura básica do `if`

```jsx
if (condicao) {
  // código que será executado se a condição for verdadeira
}
```

Agora vamos para exemplos simples.

---

## Exemplo 1 — Número maior que 10

```jsx
let numero = 15;

if (numero > 10) {
  console.log("O número é maior que 10");
}
```

### O que está acontecendo aqui?

- Criamos uma variável `numero`
- Perguntamos: `numero > 10` ?
- Como 15 é maior que 10 → o código dentro das `{ }` é executado

Se fosse:

```jsx
let numero = 5;
```

Nada aconteceria, porque a condição seria falsa.

---

## Exemplo 2 — Usando `else` (senão)

```jsx
let idade = 17;

if (idade >= 18) {
  console.log("Pode dirigir");
} else {
  console.log("Não pode dirigir");
}
```

Aqui temos duas possibilidades:

- Se for maior ou igual a 18 → executa o primeiro bloco
- Senão → executa o segundo

Isso é tomada de decisão.

---

## Exemplo 3 — Comparando igualdade

```jsx
let senha = "1234";

if (senha === "1234") {
  console.log("Acesso permitido");
} else {
  console.log("Senha incorreta");
}
```

Aqui usamos:

```
===  (igualdade estrita)
```

Sempre prefira `===` ao invés de `==`, porque ele compara valor **e tipo**. Isso é uma boa prática que evita erro no futuro.

---

## Operadores que você vai usar com `if`

| Operador | Significa |
| --- | --- |
| `>` | maior que |
| `<` | menor que |
| `>=` | maior ou igual |
| `<=` | menor ou igual |
| `===` | igual |
| `!==` | diferente |
| `&&` | E |
| ` |  |

---

## Exemplo com duas condições

```jsx
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira === true) {
  console.log("Pode dirigir");
}
```

Aqui estamos dizendo:

> Se for maior de 18 **E** tiver carteira → pode dirigir.
> 

---

## Resumindo de forma simples

`if` serve para:

✔ Tomar decisões

✔ Executar código só quando algo for verdadeiro

✔ Criar lógica no programa

Sem `if`, seu código seria burro.

Com `if`, ele começa a pensar.

---

Se você quiser, posso te passar agora:

- 🔹 Exercícios simples para treinar
- 🔹 Explicar `else if`
- 🔹 Explicar o que é boolean
- 🔹 Ou montar pequenos desafios práticos

Qual você quer aprender agora?

</details>

<details>
<summary><strong>Switch - uma estrutura usada para escolher entre várias opções com base em um único valor.</strong></summary>

**`switch`** em JavaScript é uma estrutura usada para **escolher entre várias opções com base em um único valor**.

Ela é útil quando você teria vários `if / else if` comparando a mesma variável.

### Exemplo prático

Imagine que você quer mostrar uma mensagem dependendo do dia:

```jsx
let dia = 2;

switch (dia) {
    case 1:
        console.log("Segunda-feira");
        break;

    case 2:
        console.log("Terça-feira");
        break;

    case 3:
        console.log("Quarta-feira");
        break;

    default:
        console.log("Dia inválido");
}
```

Como `dia` vale `2`, o resultado será:

```
Terça-feira
```

### Como ele funciona

```
switch(valor)
    ↓
compara com os cases
    ↓
encontrou um igual?
    ↓
executa aquele bloco
```

Exemplo:

```jsx
switch (cor) {
    case "vermelho":
        // faz alguma coisa
        break;

    case "azul":
        // faz outra coisa
        break;
}
```

### O que é `case`?

`case` significa:

> “Se o valor for este aqui, execute isso.”
> 

### O que é `break`?

O `break` serve para **parar o switch** depois que um caso foi encontrado.

Sem ele, o JavaScript pode continuar executando os próximos `case`.

### O que é `default`?

`default` é como o `else`.

Ele roda quando nenhum dos `case` combina.

```jsx
default:
    console.log("Opção inválida");
```

### Resumo

```
switch  → analisa um valor
case    → define uma opção possível
break   → para a execução
default → caso nenhuma opção combine
```

Pense no `switch` como um **menu de opções**.

</details>

</details>

<details>
<summary><strong>Funções</strong></summary>

<details>
<summary><strong>Function - Uma função é um bloco de código que executa uma tarefa.</strong></summary>

## O que significa `function` no JavaScript?

Em JavaScript, **`function` significa função**.

Uma **função é um bloco de código que executa uma tarefa**.

Pensa assim:

Você escreve um conjunto de instruções uma vez…

E depois pode usar quantas vezes quiser.

É como uma receita de bolo:

- Você escreve a receita (função)
- Depois pode fazer o bolo sempre que quiser (chamar a função)

---

## Estrutura básica de uma função

```jsx
function nomeDaFuncao() {
  // código aqui dentro
}
```

### Exemplo simples:

```jsx
function dizerOla() {
  console.log("Olá, mundo!");
}
```

Mas atenção 👇

Isso só **cria** a função. Ela ainda não foi executada.

Para executar (chamar) a função:

```jsx
dizerOla();
```

Agora sim ela roda.

---

## Função com parâmetro (entrada de dados)

Funções ficam realmente poderosas quando recebem informações.

```jsx
function dizerOla(nome) {
  console.log("Olá, " + nome);
}
```

Chamando:

```jsx
dizerOla("Anderson");
```

Saída:

```
Olá, Anderson
```

O que aconteceu?

- `nome` é um **parâmetro**
- `"Anderson"` é o **argumento**
- A função usa o valor que recebeu

---

## Função que retorna valor (`return`)

Agora vamos subir um nível.

```jsx
function somar(a, b) {
  return a + b;
}
```

Chamando:

```jsx
let resultado = somar(5, 3);
console.log(resultado); 
```

Saída:

```
8
```

Aqui:

- A função calcula
- `return` devolve o resultado
- Podemos guardar o valor numa variável

Sem `return`, a função só executa.

Com `return`, ela devolve algo.

---

## Por que funções são importantes?

Porque elas:

- Organizam o código
- Evitam repetição
- Deixam o código mais limpo
- Facilitam manutenção
- Permitem reaproveitamento

Código sem função vira bagunça rápido.

---

## Outro exemplo prático (vida real)

```jsx
function calcularDesconto(preco) {
  return preco * 0.9;
}

let valorFinal = calcularDesconto(100);
console.log(valorFinal);
```

Isso retorna:

```
90
```

Você criou uma lógica reutilizável.

---

## Existe outro jeito de criar função?

Sim. Forma moderna:

```jsx
const somar = function(a, b) {
  return a + b;
};
```

E ainda existe a **arrow function** (mais moderna ainda):

```jsx
const somar = (a, b) => {
  return a + b;
};
```

Ou versão curta:

```jsx
const somar = (a, b) => a + b;
```

---

## Resumindo como programador raiz:

`function` é:

> Uma ferramenta para encapsular lógica e reutilizar código.
> 

Se você dominar funções, já está saindo do nível iniciante.

</details>

<details>
<summary><strong>Parâmetro — informação que a função recebe</strong></summary>

<pre><code>function converterPreco(precoTexto) {

}</code></pre><p>Aqui <code>precoTexto</code> é o parâmetro. Se chamarmos <code>converterPreco("R$ 20,99")</code>, mentalmente <code>precoTexto = "R$ 20,99"</code>.</p>

</details>

<details>
<summary><strong>Argumento — valor enviado para uma função</strong></summary>

<pre><code>converterPreco(preco);</code></pre><p>Aqui <code>preco</code> é o argumento enviado.</p><p><strong>Resumo:</strong> argumento = valor enviado; parâmetro = nome usado para receber esse valor dentro da função.</p>

</details>

<details>
<summary><strong>return — devolve um resultado</strong></summary>

<pre><code>function converterPreco(precoTexto) {
    const precoConvertido = Number(
        precoTexto
            .replace("R$", "")
            .trim()
            .replace(",", ".")
    );

    return precoConvertido;
}</code></pre><p>Se entrar <code>"R$ 20,99"</code>, o <code>return</code> devolve <code>20.99</code>.</p><p><strong>Lembre assim:</strong> função recebe → processa → <code>return</code> devolve.</p>

</details>

</details>

<details>
<summary><strong>Objetos e Classes</strong></summary>

<details>
<summary><strong>objeto - Um objeto é como uma ficha cadastral.</strong></summary>

Em JavaScript, **objeto** é uma estrutura que guarda **informações organizadas em pares de chave e valor**.

Pensa assim:

Um objeto é como uma ficha cadastral.

Nome → "Anderson"

Idade → 25

Profissão → "Programador"

Isso em JavaScript vira um objeto.

---

# 📦 O que é um Objeto no JavaScript?

É uma coleção de dados organizados.

A estrutura básica é:

```jsx
let pessoa = {
  nome: "Anderson",
  idade: 25,
  profissao: "Programador"
};
```

Aqui temos:

- `pessoa` → nome da variável
- `{}` → define que é um objeto
- `nome`, `idade`, `profissao` → são as **chaves**
- `"Anderson"`, `25`, `"Programador"` → são os **valores**

---

# 🔎 Como acessar os valores?

Existem duas formas clássicas:

## 1️⃣ Notação com ponto (mais usada)

```jsx
console.log(pessoa.nome);
```

## 2️⃣ Notação com colchetes

```jsx
console.log(pessoa["idade"]);
```

As duas funcionam. A primeira é mais comum no dia a dia.

---

# ✍️ Como modificar um objeto?

```jsx
pessoa.idade = 30;
```

Agora a idade mudou para 30.

---

# ➕ Como adicionar uma nova propriedade?

```jsx
pessoa.altura = 1.75;
```

Pronto, o objeto cresceu.

---

# 🗑 Como remover uma propriedade?

```jsx
delete pessoa.profissao;
```

---

# 🧠 Objeto pode ter função dentro?

Pode sim! E aí chamamos isso de **método**.

```jsx
let pessoa = {
  nome: "Anderson",
  falar: function() {
    console.log("Olá!");
  }
};

pessoa.falar();
```

Aqui `falar` é uma função dentro do objeto.

---

# 🎯 Resumindo como gente grande

Objeto em JavaScript é:

- Uma estrutura para organizar dados
- Formado por chave + valor
- Pode armazenar:
    - String
    - Número
    - Boolean
    - Array
    - Outro objeto
    - Função

---

# 💡 Por que objetos são tão importantes?

Porque **quase tudo no JavaScript gira em torno de objetos**.

Quando você cria:

- Um usuário
- Um produto
- Um carro
- Uma conta bancária
- Um componente

Você está modelando isso como objeto.

É a base da programação moderna.

</details>

<details>
<summary><strong>class - em JavaScript serve para criar um modelo de objetos.</strong></summary>

**`class`** em JavaScript serve para criar um **modelo de objetos**.

Na prática, você usa uma `class` quando quer criar várias coisas parecidas seguindo a mesma estrutura.

### Exemplo prático

Imagine um sistema com usuários.

Em vez de criar cada usuário manualmente, você pode criar uma classe:

```jsx
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

Depois pode criar vários usuários:

```jsx
const usuario1 = new Usuario("Anderson", 27);
const usuario2 = new Usuario("Carlos", 30);
```

Agora:

```jsx
console.log(usuario1.nome);
```

Resultado:

```
Anderson
```

### Pense assim

A `class` é como um **molde**.

```
Class Usuario
   ↓
define como um usuário deve ser
   ↓
cria vários usuários
```

Exemplo:

```
Molde: Usuario

usuario1
nome: Anderson
idade: 27

usuario2
nome: Carlos
idade: 30
```

### O que é `constructor`?

O `constructor` é uma função especial que roda quando você cria um novo objeto usando a classe.

```jsx
constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
```

Ele recebe os dados iniciais do objeto.

### O que é `this`?

O `this` representa **o objeto que está sendo criado**.

Então:

```jsx
this.nome = nome;
```

significa basicamente:

> "Guarde esse nome dentro deste objeto."
> 

### A classe também pode ter funções

Exemplo:

```jsx
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}
```

Depois:

```jsx
const usuario = new Usuario("Anderson");

usuario.apresentar();
```

Resultado:

```
Olá, meu nome é Anderson
```

### Resumo

```
class        → cria o molde
constructor  → configura o objeto quando ele nasce
this         → representa o próprio objeto
new          → cria um novo objeto usando a classe
```

Pense em **`class` = molde para criar objetos parecidos**.

</details>

<details>
<summary><strong>constructor() - em JavaScript é um método especial de uma** `class`</strong></summary>

**`constructor()`** em JavaScript é um método especial de uma `class` que serve para **definir os valores iniciais de um objeto quando ele é criado**.

### Na prática

Imagine esta classe:

```jsx
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
```

Quando você cria:

```jsx
const pessoa1 = new Pessoa("Anderson", 27);
```

o `constructor()` é executado automaticamente.

Ele recebe:

```
nome = "Anderson"
idade = 27
```

e guarda esses valores no objeto.

### Resultado

```jsx
console.log(pessoa1.nome);
```

Resultado:

```
Anderson
```

### Pense assim

```
new Pessoa("Anderson", 27)
        ↓
constructor recebe os dados
        ↓
this.nome = "Anderson"
this.idade = 27
        ↓
objeto criado
```

### O que é `this` aqui?

```jsx
this.nome = nome;
```

significa:

> “guarde o valor de `nome` dentro deste objeto.”
> 

Então:

```jsx
const pessoa1 = new Pessoa("Anderson", 27);
```

vira aproximadamente:

```
pessoa1
├── nome: "Anderson"
└── idade: 27
```

### Resumo

```
class       → cria o molde
constructor → define os dados iniciais
new         → cria o objeto
this        → representa o objeto criado
```

**`constructor()` = prepara o objeto no momento em que ele é criado.**

</details>

<details>
<summary><strong>Propriedades do objeto</strong></summary>

<p>Acessamos informações usando ponto:</p><pre><code>item.nome
item.preco
item.quantidade
item.precoNumero</code></pre><p>Exemplo: <code>item.quantidade++;</code> aumenta a propriedade <code>quantidade</code> desse item.</p>

</details>

<details>
<summary><strong>Propriedade abreviada</strong></summary>

<p>Em vez de:</p><pre><code>const item = { nome: nome, preco: preco };</code></pre><p>Podemos escrever:</p><pre><code>const item = { nome, preco };</code></pre>

</details>

</details>

<details>
<summary><strong>Eventos</strong></summary>

<details>
<summary><strong>O que são eventos?</strong></summary>

<p>Eventos são acontecimentos na página que o JavaScript pode detectar, como clique, tecla pressionada, movimento do mouse, alteração de campo ou carregamento da página.</p><pre><code>algo acontece na página
↓
evento é disparado
↓
JavaScript executa uma ação</code></pre><p>Hoje é muito comum registrar eventos com <code>addEventListener()</code>, mas os eventos tradicionais como <code>onclick</code>, <code>onchange</code> e <code>onkeydown</code> continuam importantes para leitura de código.</p>

</details>

<details>
<summary><strong>onclick - > Disparado quando recebe um click.</strong></summary>

## 📌 O que significa `onclick` no JavaScript?

`onclick` significa literalmente:

> **“quando clicar”**
> 

Ele é um **evento**.

Evento em JavaScript é algo que acontece na página, como:

- clicar
- digitar
- mover o mouse
- carregar a página
- etc.

Então:

```html
onclick="algumaCoisa()"
```

Quer dizer:

👉 “Quando alguém clicar aqui, execute essa função.”

---

# 🧠 Exemplo 1 — Jeito mais simples (HTML + JavaScript)

```html
<button onclick="mostrarMensagem()">Clique aqui</button>

<script>
  function mostrarMensagem() {
    alert("Você clicou no botão!");
  }
</script>
```

### 🔎 O que está acontecendo?

1. Temos um botão.
2. Quando ele é clicado…
3. A função `mostrarMensagem()` é executada.
4. Aparece um alerta na tela.

Simples assim.

---

# ⚠️ Mas calma… esse não é o jeito mais profissional

Esse jeito funciona, mas mistura HTML com JavaScript.

Hoje em dia usamos uma forma mais organizada.

Vamos fazer do jeito certo 👇

---

# 🏆 Exemplo 2 — Forma mais moderna (Recomendada)

```html
<button id="meuBotao">Clique aqui</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.onclick = function() {
    alert("Você clicou no botão!");
  };
</script>
```

### 🔎 O que mudou?

1. Pegamos o botão pelo `id`
2. Guardamos ele numa variável
3. Definimos o que acontece quando ele for clicado

Isso separa melhor as responsabilidades. Muito mais organizado.

---

# 🚀 Forma ainda melhor (padrão atual)

Hoje o mais profissional é usar:

```jsx
addEventListener()
```

Exemplo:

```html
<button id="meuBotao">Clique aqui</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("click", function() {
    alert("Você clicou no botão!");
  });
</script>
```

Aqui estamos dizendo:

> “Adicione um ouvinte de evento para clique.”
> 

É mais flexível e permite vários eventos no mesmo elemento.

---

# 🎯 Resumão para fixar

| Forma | O que é |
| --- | --- |
| `onclick` no HTML | Forma simples, mas mistura código |
| `elemento.onclick = ...` | Melhor organização |
| `addEventListener("click")` | Forma mais moderna e profissional |

---

# 💡 Dica importante pra quem está começando

Aprenda assim:

1️⃣ Entenda primeiro como `onclick` funciona

2️⃣ Depois pratique com `addEventListener`

3️⃣ Sempre separe HTML de JavaScript

Isso cria uma base forte. E base forte é o que diferencia quem só copia código de quem realmente entende.

</details>

<details>
<summary><strong>ondblclick - > Disparando quando clique duplo</strong></summary>

### 📌 O que significa `ondblclick` no JavaScript?

`ondblclick` é um **evento** que acontece quando o usuário dá **dois cliques rápidos (clique duplo)** em um elemento da página.

Pensa assim:

- `onclick` → 1 clique
- `ondblclick` → 2 cliques

Simples e direto.

---

## 🔹 Exemplo básico no HTML

```html
<button ondblclick="mostrarMensagem()">Clique duas vezes</button>

<script>
  function mostrarMensagem() {
    alert("Você deu dois cliques!");
  }
</script>
```

👉 Aqui, quando você clicar duas vezes no botão, a função `mostrarMensagem()` será executada.

---

## 🔹 Forma mais moderna (recomendada)

Hoje em dia, o jeito mais organizado de trabalhar é usando `addEventListener`.

```html
<button id="meuBotao">Clique duas vezes</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("dblclick", function() {
    alert("Duplo clique detectado!");
  });
</script>
```

⚠️ Repara numa coisa importante:

Quando usamos `addEventListener`, o nome do evento é:

```
"dblclick"
```

E não `ondblclick`.

O `on` é usado apenas quando está direto no HTML.

---

## 🔹 Exemplo prático (mudando cor com duplo clique)

```html
<div id="caixa" style="width:200px;height:200px;background:blue;"></div>

<script>
  const caixa = document.getElementById("caixa");

  caixa.addEventListener("dblclick", function() {
    caixa.style.background = "red";
  });
</script>
```

Aqui acontece isso:

- A div começa azul
- Você dá dois cliques
- Ela fica vermelha

Simples e poderoso.

---

## 🔹 Quando usar `ondblclick`?

Alguns casos comuns:

- Abrir algo (igual ícones no Windows)
- Editar texto
- Ampliar imagem
- Ativar modo especial

Mas cuidado ⚠️

Em interfaces modernas, às vezes duplo clique não é tão comum em mobile (porque celular não tem clique duplo tradicional).

---

## 🧠 Resumo rápido

- `ondblclick` = evento de duplo clique
- Funciona em botões, divs, imagens, etc.
- Melhor prática → usar `addEventListener("dblclick", ...)`

---

Se você quiser, posso te passar um mini desafio para treinar isso agora e fixar de vez 🚀

</details>

<details>
<summary><strong>onmouseover - > Disparado quando o mouse esta sobre</strong></summary>

## 📌 O que significa `onmouseover`?

`onmouseover` é um **evento do JavaScript** que acontece quando o usuário passa o mouse por cima de um elemento.

Pensa assim:

👉 O mouse “encostou” no elemento → o evento dispara → alguma ação acontece.

É muito usado para:

- Mostrar mensagens
- Mudar cor
- Exibir menus
- Criar efeitos visuais
- Mostrar imagens ocultas

---

## 🧠 Estrutura básica

```html
<elemento onmouseover="algumaFuncao()">
```

Ou seja:

- `onmouseover` → evento
- `"algumaFuncao()"` → o que será executado

---

# 🔹 Exemplo 1 – Mostrando um alerta

```html
<p onmouseover="alert('Você passou o mouse aqui!')">
  Passe o mouse aqui
</p>
```

Quando o mouse passa por cima do texto, aparece um alerta.

Simples assim.

---

# 🔹 Exemplo 2 – Mudando a cor ao passar o mouse

```html
<p onmouseover="this.style.color='red'">
  Passe o mouse aqui
</p>
```

Aqui estamos dizendo:

- `this` → significa "esse próprio elemento"
- `style.color='red'` → muda a cor para vermelho

Quando o mouse entra, a cor muda.

---

# 🔹 Exemplo 3 – Usando função no JavaScript (forma mais organizada)

HTML:

```html
<p onmouseover="mudarCor(this)">
  Passe o mouse aqui
</p>
```

JavaScript:

```html
<script>
  function mudarCor(elemento) {
    elemento.style.backgroundColor = "yellow";
  }
</script>
```

Agora ficou mais profissional:

- Criamos uma função
- Passamos o elemento como parâmetro
- Alteramos o estilo dele

Isso é o jeito mais organizado de trabalhar.

---

# 🔹 Forma moderna (melhor prática)

Hoje em dia, o ideal é separar HTML e JavaScript.

HTML:

```html
<p id="texto">Passe o mouse aqui</p>
```

JavaScript:

```html
<script>
  const texto = document.getElementById("texto");

  texto.addEventListener("mouseover", function() {
    texto.style.color = "blue";
  });
</script>
```

Aqui usamos:

- `addEventListener`
- `"mouseover"` (sem o "on")

⚠️ Repara nisso:

`onmouseover` (HTML antigo)

`mouseover` (usando addEventListener)

---

# 🔥 Diferença importante

Existe também:

- `mouseover` → ativa sempre que o mouse entra, inclusive em elementos filhos
- `mouseenter` → ativa só quando entra no elemento principal

Mas isso você aprende com o tempo.

---

# 🎯 Resumindo para fixar

`onmouseover` significa:

> "Execute algo quando o mouse passar por cima"
> 

É um evento de interação com o usuário.

---

Se você quiser, posso te passar um mini desafio para treinar isso agora mesmo 💻🔥

</details>

<details>
<summary><strong>onmouseout - > Disparado quando o mouse é movido para fora do elemento</strong></summary>

## 📌 O que significa `onmouseout`?

`onmouseout` é um **evento do JavaScript** que acontece quando o mouse sai de cima de um elemento.

Traduzindo direto:

- `on` → quando
- `mouse` → mouse
- `out` → sair

Ou seja:

👉 **“Quando o mouse sair do elemento”**

É muito usado junto com `onmouseover` (quando o mouse entra).

---

## 🧠 Imagina assim…

Você tem um botão.

Quando o mouse passa por cima dele → muda a cor.

Quando o mouse sai → volta ao normal.

É exatamente aí que entra o `onmouseout`.

---

# 🟢 Exemplo 1 — Usando direto no HTML (forma simples)

```html
<div
  onmouseover="this.style.backgroundColor = 'green'"
  onmouseout="this.style.backgroundColor = 'gray'"
  style="width:200px; height:100px; background-color:gray;">

  Passe o mouse aqui
</div>
```

### 🔎 O que está acontecendo?

- `onmouseover` → quando o mouse entra, fica verde
- `onmouseout` → quando o mouse sai, volta para cinza

Simples e direto.

---

# 🔵 Exemplo 2 — Do jeito mais organizado (usando JavaScript)

Agora vamos fazer como programador de verdade 😎

```html
<div id="caixa">
  Passe o mouse aqui
</div>

<script>
  const caixa = document.getElementById("caixa");

  caixa.addEventListener("mouseover", function() {
    caixa.style.backgroundColor = "green";
  });

  caixa.addEventListener("mouseout", function() {
    caixa.style.backgroundColor = "gray";
  });
</script>

<style>
  #caixa {
    width: 200px;
    height: 100px;
    background-color: gray;
    text-align: center;
    line-height: 100px;
  }
</style>
```

### 📌 Aqui estamos usando:

- `addEventListener("mouseout", função)`

Essa é a forma moderna e recomendada.

---

# 🎯 Quando usar `onmouseout`?

Você usa quando quer:

- Esconder um menu
- Remover um destaque
- Voltar uma cor ao normal
- Fechar um tooltip
- Desativar um efeito visual

---

# ⚠️ Diferença importante (iniciante costuma confundir)

Existe também o `mouseleave`.

A diferença é sutil:

- `mouseout` → dispara mesmo se você sair para um elemento filho
- `mouseleave` → dispara apenas quando sai completamente do elemento

Mas isso você aprende com prática — primeiro domina o básico.

---

# 🧩 Exemplo real: efeito tipo botão profissional

```html
<button id="btn">Clique aqui</button>

<script>
  const btn = document.getElementById("btn");

  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
</script>
```

Agora o botão cresce quando o mouse entra e volta quando sai.

---

# 🏗 Resumão bem claro

`onmouseout` significa:

👉 Executar alguma coisa **quando o mouse sair do elemento**.

É um evento.

Eventos são coisas que acontecem na página.

JavaScript escuta esses eventos e reage.

</details>

<details>
<summary><strong>onmousemove - > quando o mouse se mover</strong></summary>

## 📌 O que significa `onmousemove` no JavaScript?

`onmousemove` é um **evento** que acontece quando o usuário move o mouse sobre um elemento (ou sobre a página).

Traduzindo de forma simples:

- `on` → quando
- `mouse` → mouse
- `move` → mover

Ou seja: **“quando o mouse se mover”**.

Sempre que o ponteiro se mexer em cima de algo que tem esse evento, uma função será executada.

---

# 🧱 Exemplo 1 – O mais simples possível

```html
<div onmousemove="mostrarMensagem()">
  Passe o mouse aqui
</div>

<script>
function mostrarMensagem() {
  console.log("O mouse está se movendo!");
}
</script>
```

### O que acontece aqui?

1. Você move o mouse dentro da `div`
2. O evento `onmousemove` é disparado
3. A função `mostrarMensagem()` é executada
4. A mensagem aparece no console

Simples assim.

---

# 🧠 Forma mais moderna (recomendada)

Hoje em dia usamos mais o `addEventListener`, que é mais organizado:

```html
<div id="area">
  Passe o mouse aqui
</div>

<script>
const area = document.getElementById("area");

area.addEventListener("mousemove", function() {
  console.log("Movendo o mouse...");
});
</script>
```

Aqui o funcionamento é o mesmo, mas estamos separando HTML de JavaScript, que é a forma mais profissional de fazer.

---

# 🎯 Exemplo 2 – Pegando a posição do mouse

O `onmousemove` também fornece informações importantes, como a posição do mouse.

```html
<div id="area" style="height:200px; background:lightgray;">
  Mova o mouse aqui
</div>

<p id="posicao"></p>

<script>
const area = document.getElementById("area");
const posicao = document.getElementById("posicao");

area.addEventListener("mousemove", function(evento) {
  posicao.textContent =
    "X: " + evento.clientX +
    " | Y: " + evento.clientY;
});
</script>
```

### O que é esse `evento`?

Ele é um objeto que contém informações sobre o que aconteceu.

Algumas propriedades úteis:

- `evento.clientX` → posição horizontal
- `evento.clientY` → posição vertical

---

# 🚀 Exemplo 3 – Criando um efeito visual

Agora algo mais interessante:

```html
<div id="bola" style="
  width:20px;
  height:20px;
  background:red;
  border-radius:50%;
  position:absolute;
"></div>

<script>
const bola = document.getElementById("bola");

document.addEventListener("mousemove", function(e) {
  bola.style.left = e.clientX + "px";
  bola.style.top = e.clientY + "px";
});
</script>
```

Agora a bolinha segue o mouse 😎

Isso é muito usado para:

- Efeitos visuais
- Jogos
- Interfaces interativas
- Animações
- Canvas
- Experiências modernas de UI

---

# ⚠️ Um detalhe importante

`mousemove` dispara **muitas vezes por segundo**.

Se você colocar código pesado ali dentro (como cálculos grandes ou requisições), pode deixar o site lento.

Em projetos maiores, usamos técnicas como:

- `throttle`
- `debounce`
- `requestAnimationFrame`

Mas isso é um próximo nível. Primeiro domine o básico.

---

# 🧩 Diferença entre eventos parecidos

- `mouseover` → dispara quando o mouse **entra**
- `mouseout` → dispara quando o mouse **sai**
- `mousemove` → dispara **enquanto o mouse está se movendo**

</details>

<details>
<summary><strong>onmousedown - > é quando aperta, não quando solta.</strong></summary>

Boa, Anderson! Vamos direto ao ponto, como programador raiz explicaria para quem está começando.

## 📌 O que significa `onmousedown`?

`onmousedown` é um **evento do JavaScript** que acontece **quando o usuário pressiona o botão do mouse sobre um elemento**.

👉 Repare: é quando **aperta**, não quando solta.

Quando solta, o evento é `onmouseup`.

Quando faz o clique completo (aperta e solta), é `onclick`.

---

## 🧠 Pensando de forma simples

Imagina assim:

- `mousedown` → apertou o botão
- `mouseup` → soltou o botão
- `click` → apertou e soltou

É como um interruptor:

- No momento que você empurra, é `mousedown`
- Quando larga, é `mouseup`

---

# 🔹 Exemplo 1 – Usando direto no HTML

```html
<button onmousedown="alert('Você apertou o botão!')">
  Aperte aqui
</button>
```

Quando você **pressionar** o botão do mouse (mesmo sem soltar), o alerta aparece.

---

# 🔹 Exemplo 2 – Forma mais moderna (melhor prática)

Hoje em dia, é mais organizado usar JavaScript separado do HTML:

```html
<button id="meuBotao">Aperte aqui</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.onmousedown = function() {
    alert("Você pressionou o botão!");
  };
</script>
```

Aqui estamos dizendo:

> Quando acontecer `mousedown` no botão, execute essa função.
> 

---

# 🔹 Exemplo 3 – Usando `addEventListener` (jeito profissional)

Esse é o jeito mais usado no mercado:

```html
<button id="meuBotao">Aperte aqui</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("mousedown", function() {
    console.log("Mouse pressionado!");
  });
</script>
```

🔎 Vantagem:

- Você pode adicionar vários eventos no mesmo elemento.
- Código mais organizado.
- Mais flexível.

---

# 🎯 Quando usar `mousedown`?

Ele é muito usado quando você precisa detectar o momento exato em que o usuário começa a pressionar algo, por exemplo:

- Criar efeito de botão pressionado
- Iniciar um arrastar (drag)
- Jogos
- Interações rápidas

---

# 🔥 Exemplo prático – efeito de botão pressionado

```html
<button id="meuBotao">Clique em mim</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("mousedown", function() {
    botao.style.backgroundColor = "red";
  });

  botao.addEventListener("mouseup", function() {
    botao.style.backgroundColor = "blue";
  });
</script>
```

Aqui:

- Quando aperta → fica vermelho
- Quando solta → volta para azul

Isso dá sensação de botão "físico".

---

# 🧱 Resumão de iniciante

`onmousedown`:

- É um evento.
- Dispara quando o botão do mouse é pressionado.
- Não precisa esperar soltar.
- Muito usado para interações mais dinâmicas.

---

Se você quiser, posso te explicar também:

- Diferença entre `click` e `mousedown` na prática real
- Como funciona o objeto `event`
- Como detectar qual botão do mouse foi clicado (esquerdo/direito)
- Como usar isso para criar um sistema de drag and drop

Qual você quer aprender agora? 🚀

</details>

<details>
<summary><strong>onmouseup - > O usuário solta o botão do mouse depois de ter clicado.</strong></summary>

Vamos direto ao ponto e depois eu te mostro exemplos práticos.

## 📌 O que significa `onmouseup`?

`onmouseup` é um **evento do mouse** no JavaScript.

Ele acontece quando:

👉 O usuário **solta o botão do mouse** depois de ter clicado.

Pensa assim:

1. Você aperta o botão do mouse → `mousedown`
2. Você solta o botão do mouse → `mouseup`
3. Se apertar e soltar no mesmo elemento → `click`

Ou seja, `mouseup` é literalmente o momento de **soltar o botão**.

---

# 🧠 Exemplo 1 – Usando direto no HTML

```html
<button onmouseup="mostrarMensagem()">
  Clique e solte aqui
</button>

<script>
  function mostrarMensagem() {
    alert("Você soltou o botão do mouse!");
  }
</script>
```

📍 O que acontece aqui:

- O botão tem o atributo `onmouseup`
- Quando você solta o botão do mouse sobre ele
- A função `mostrarMensagem()` é executada

Simples assim.

---

# 🧠 Exemplo 2 – Forma mais moderna (Recomendada)

Hoje em dia a forma mais organizada é usar `addEventListener`.

```html
<button id="meuBotao">
  Clique e solte aqui
</button>

<script>
  const botao = document.getElementById("meuBotao");

  botao.addEventListener("mouseup", function() {
    alert("Você soltou o botão do mouse!");
  });
</script>
```

Aqui é mais profissional porque:

- Separa HTML do JavaScript
- Deixa o código mais organizado
- Permite adicionar vários eventos no mesmo elemento

---

# 🔥 Exemplo 3 – Diferença entre mousedown e mouseup

```html
<div id="caixa" style="width:200px;height:200px;background:lightblue;">
  Clique aqui
</div>

<script>
  const caixa = document.getElementById("caixa");

  caixa.addEventListener("mousedown", function() {
    console.log("Você apertou o botão");
  });

  caixa.addEventListener("mouseup", function() {
    console.log("Você soltou o botão");
  });
</script>
```

🧠 Quando testar:

- Ao apertar → aparece "Você apertou o botão"
- Ao soltar → aparece "Você soltou o botão"

---

# 🎯 Quando usar `mouseup` na prática?

Ele é muito usado em:

- Sistemas de arrastar (drag and drop)
- Jogos no navegador
- Botões personalizados
- Controle de seleção
- Canvas

Por exemplo:

Você começa a arrastar algo com `mousedown`

E termina o movimento com `mouseup`

---

# ⚠️ Uma dica importante

O `mouseup` só dispara quando o botão é solto.

Se a pessoa apertar fora do elemento e soltar dentro, o comportamento pode mudar dependendo de como você programar.

---

# 🧩 Resumo simples

`onmouseup` significa:

> "Quando o usuário soltar o botão do mouse sobre esse elemento, execute algo."
> 

Se você quiser, posso te mostrar:

- Como fazer um botão mudar de cor só enquanto está pressionado
- Como criar um mini sistema de arrastar usando `mousedown` e `mouseup`
- Ou até um mini joguinho simples pra treinar eventos

Qual você prefere aprender agora? 🚀

</details>

<details>
<summary><strong>onfocus - > evento que acontece quando um elemento da página recebe foco.</strong></summary>

## 📌 O que é `onfocus` no JavaScript?

`onfocus` é um **evento** que acontece quando um elemento da página recebe foco.

Mas o que é “receber foco”?

É quando o usuário:

- Clica em um campo de input
- Usa a tecla `Tab` para ir até ele
- Seleciona um campo para digitar

Ou seja: o elemento fica “ativo” para interação.

---

## 🔎 Exemplo simples

```html
<input type="text" id="nome" onfocus="mostrarMensagem()">

<script>
function mostrarMensagem() {
    alert("Você clicou no campo!");
}
</script>
```

### O que acontece aqui?

1. O usuário clica no input.
2. O input recebe foco.
3. O evento `onfocus` dispara.
4. A função `mostrarMensagem()` é executada.
5. Aparece um alert.

Simples assim.

---

## 🧠 Forma mais moderna (boa prática)

Hoje em dia, evitamos colocar JavaScript direto no HTML. O ideal é separar as coisas.

```html
<input type="text" id="nome">

<script>
const input = document.getElementById("nome");

input.addEventListener("focus", function() {
    console.log("O campo recebeu foco!");
});
</script>
```

Aqui usamos:

```jsx
addEventListener("focus", ...)
```

Isso faz exatamente a mesma coisa, mas de forma mais organizada.

---

## 💡 Exemplo prático útil (mudando estilo)

```html
<input type="text" id="email" placeholder="Digite seu email">

<script>
const email = document.getElementById("email");

email.addEventListener("focus", function() {
    email.style.backgroundColor = "#ffffcc";
});
</script>
```

Quando o usuário clicar no campo:

- O fundo muda de cor
- Dá um feedback visual

Isso é muito usado em formulários.

---

## 🎯 Diferença entre `focus` e `blur`

Existe o oposto também:

- `focus` → quando entra no campo
- `blur` → quando sai do campo

Exemplo:

```jsx
email.addEventListener("blur", function() {
    email.style.backgroundColor = "white";
});
```

Agora:

- Quando clica → fica amarelo
- Quando sai → volta ao normal

---

## 🏗 Resumindo como programador

`onfocus` é:

- Um evento
- Disparado quando o elemento recebe foco
- Muito usado em formulários
- Melhor prática: usar `addEventListener("focus")`

</details>

<details>
<summary><strong>onchange - > Sempre que algo "muda", o `onchange` pode executar uma função.</strong></summary>

## 📌 O que significa `onchange` no JavaScript?

`onchange` é um **evento**.

Ele acontece quando o valor de um elemento HTML é alterado pelo usuário.

Ou seja:

> 👉 Sempre que algo "muda", o `onchange` pode executar uma função.
> 

Ele é muito usado em:

- `<input>`
- `<select>`
- `<textarea>`

---

# 🔹 Exemplo 1 — Usando `onchange` no HTML (modo simples)

```html
<input type="text" onchange="mostrarMensagem()">

<script>
function mostrarMensagem() {
  alert("O valor foi alterado!");
}
</script>
```

### 🧠 O que acontece aqui?

1. O usuário digita algo.
2. Quando ele **sai do campo** (clica fora ou aperta TAB),
3. O evento `onchange` dispara.
4. A função `mostrarMensagem()` é executada.

⚠ Importante:

`onchange` só dispara quando o campo perde o foco depois da alteração.

---

# 🔹 Exemplo 2 — Pegando o valor que mudou

```html
<input type="text" id="nome" onchange="mostrarValor()">

<script>
function mostrarValor() {
  let valor = document.getElementById("nome").value;
  console.log("Você digitou:", valor);
}
</script>
```

Aqui estamos:

- Pegando o elemento pelo `id`
- Acessando `.value`
- Mostrando no console

---

# 🔹 Exemplo 3 — Forma mais moderna (melhor prática)

Hoje em dia evitamos colocar JavaScript direto no HTML.

O jeito mais organizado é usar `addEventListener`.

```html
<input type="text" id="nome">

<script>
let input = document.getElementById("nome");

input.addEventListener("change", function() {
  console.log("Valor alterado:", input.value);
});
</script>
```

📌 Aqui estamos:

- Selecionando o elemento
- Escutando o evento `"change"`
- Executando uma função quando ele ocorre

Isso deixa o código mais limpo e profissional.

---

# 🔥 Diferença entre `onchange` e `oninput`

Isso é MUITO importante para quem está aprendendo:

| Evento | Quando dispara? |
| --- | --- |
| `change` | Quando o valor muda **e o campo perde foco** |
| `input` | A cada letra digitada |

Exemplo com `input`:

```jsx
input.addEventListener("input", function() {
  console.log("Digitando:", input.value);
});
```

Se você quiser algo em tempo real (tipo validação), use `input`.

---

# 🎯 Exemplo prático com `<select>`

```html
<select id="cor">
  <option value="red">Vermelho</option>
  <option value="blue">Azul</option>
</select>

<script>
let select = document.getElementById("cor");

select.addEventListener("change", function() {
  document.body.style.backgroundColor = select.value;
});
</script>
```

Quando o usuário troca a cor:

✔ O evento dispara

✔ O fundo da página muda

---

# 🧠 Resumindo como um programador raiz:

- `onchange` = executa algo quando o valor muda
- Muito usado em formulários
- Só dispara quando perde foco (em inputs de texto)
- Melhor prática: usar `addEventListener`

---

Se você quiser, posso te passar um mini desafio prático para treinar isso agora mesmo. Quer? 🚀

</details>

<details>
<summary><strong>onblur - > Disparado quando o elemento perde o foco.</strong></summary>

## 📌 O que significa `onblur` no JavaScript?

`onblur` é um **evento** que acontece quando um elemento perde o foco.

Traduzindo de forma simples:

- `blur` = “embaçar”, “perder o foco”
- `onblur` = “quando perder o foco”

Ou seja:

👉 Ele dispara quando você clica fora de um campo de texto, input, textarea, etc.

---

## 🧠 O que é "perder o foco"?

Foco é quando o elemento está ativo.

Exemplo:

- Você clica dentro de um `<input>` → ele ganha foco.
- Você clica fora dele → ele perde foco.
- Nesse momento o `onblur` é executado.

---

# 👇 Exemplo 1 — Jeito simples no HTML

```html
<input type="text" onblur="mostrarMensagem()" placeholder="Digite seu nome">

<script>
  function mostrarMensagem() {
    alert("Você saiu do campo!");
  }
</script>
```

### O que acontece aqui?

1. Você clica no campo
2. Digita algo
3. Clica fora
4. Aparece o alerta

Simples assim.

---

# 👇 Exemplo 2 — Jeito mais profissional (JavaScript puro)

Hoje em dia, é mais recomendado usar `addEventListener`.

```html
<input type="text" id="nome" placeholder="Digite seu nome">

<script>
  const input = document.getElementById("nome");

  input.addEventListener("blur", function() {
    alert("Você saiu do campo!");
  });
</script>
```

Aqui usamos:

```jsx
"blur"
```

Sem o `on`.

🔎 Regra:

- No HTML → `onblur`
- No JavaScript → `"blur"`

---

# 👇 Exemplo 3 — Validação prática (muito usado no mercado)

Um caso real: validar campo obrigatório.

```html
<input type="text" id="email" placeholder="Digite seu email">
<p id="erro" style="color: red;"></p>

<script>
  const email = document.getElementById("email");
  const erro = document.getElementById("erro");

  email.addEventListener("blur", function() {
    if (email.value === "") {
      erro.textContent = "O campo email é obrigatório!";
    } else {
      erro.textContent = "";
    }
  });
</script>
```

### O que isso faz?

Quando o usuário sai do campo:

- Se estiver vazio → mostra erro
- Se estiver preenchido → limpa o erro

Isso é muito comum em formulários profissionais.

---

# 🔄 Diferença entre `onfocus` e `onblur`

| Evento | Quando acontece |
| --- | --- |
| `focus` | Quando entra no campo |
| `blur` | Quando sai do campo |

Exemplo rápido:

```jsx
input.addEventListener("focus", function() {
  console.log("Entrou no campo");
});

input.addEventListener("blur", function() {
  console.log("Saiu do campo");
});
```

---

# ⚠️ Dica importante

`blur` **não funciona em qualquer elemento**, apenas nos que podem receber foco, como:

- input
- textarea
- select
- button
- elementos com `tabindex`

---

# 🎯 Resumindo como um programador raiz pensa:

`onblur` é usado quando você quer:

- Validar formulário
- Verificar se o campo foi preenchido
- Mostrar erro depois que o usuário sai
- Salvar algo automaticamente
- Alterar estilo quando perde foco

É um evento simples, mas extremamente importante.

---

Se você quiser, posso te passar um pequeno exercício para praticar e fixar isso de vez.

</details>

<details>
<summary><strong>onkeypress - > é um evento que acontece quando pressiona uma tecla no teclado.</strong></summary>

## 📌 O que significa `onkeypress` no JavaScript?

`onkeypress` é um **evento** que acontece quando o usuário pressiona uma tecla no teclado.

Ou seja:

> Sempre que alguém apertar uma tecla, algo pode acontecer.
> 

É como se você dissesse:

“Quando alguém apertar uma tecla aqui, execute essa função.”

---

## 🧠 Como funciona na prática?

Imagine um campo de input:

```html
<input type="text" onkeypress="mostrarTecla(event)">
```

E no JavaScript:

```jsx
function mostrarTecla(event) {
    console.log("Tecla pressionada:", event.key);
}
```

### O que está acontecendo aqui?

- `onkeypress` → fica escutando o teclado
- `mostrarTecla(event)` → chama a função quando uma tecla é pressionada
- `event.key` → mostra qual tecla foi pressionada

Se você apertar a tecla **A**, no console vai aparecer:

```
Tecla pressionada: A
```

Simples assim.

---

## 📌 Exemplo prático útil (iniciante)

### 🚫 Impedir que o usuário digite números

```html
<input type="text" onkeypress="return somenteLetras(event)">
```

```jsx
function somenteLetras(event) {
    let tecla = event.key;

    if (!/[a-zA-Z]/.test(tecla)) {
        return false; // bloqueia a tecla
    }
}
```

Agora o campo só aceita letras.

---

## ⚠️ Mas atenção (a parte importante)

Hoje em dia, `onkeypress` está ficando ultrapassado.

Os eventos mais modernos e recomendados são:

- `keydown`
- `keyup`

Exemplo moderno:

```jsx
document.querySelector("input").addEventListener("keydown", function(event) {
    console.log("Tecla:", event.key);
});
```

### Diferença rápida:

| Evento | Quando dispara |
| --- | --- |
| keydown | Quando a tecla é pressionada |
| keypress | Quando a tecla gera caractere |
| keyup | Quando a tecla é solta |

Na prática atual, use mais `keydown`.

---

## 🎯 Resumindo como um dev iniciante precisa entender

`onkeypress` é:

> Um evento que executa código quando uma tecla é pressionada.
> 

Ele é usado para:

- Validar input
- Capturar teclas
- Criar atalhos
- Bloquear caracteres

Mas no mundo moderno do JavaScript, prefira `addEventListener("keydown")`.

</details>

<details>
<summary><strong>onkeydown - > Disparado quando uma tecla e pressionada</strong></summary>

## 🔹 O que significa `onkeydown` no JavaScript?

`onkeydown` é um **evento** que acontece quando o usuário **pressiona uma tecla do teclado**.

Ou seja:

> 👉 No exato momento em que a tecla é pressionada (antes de soltar), o evento dispara.
> 

Ele é muito usado para:

- Detectar quando alguém aperta Enter
- Criar atalhos de teclado
- Validar campos enquanto a pessoa digita
- Criar jogos simples no navegador

---

## 🔹 Exemplo simples no HTML

```html
<input type="text" onkeydown="mostrarTecla(event)" />

<script>
  function mostrarTecla(event) {
    console.log("Tecla pressionada:", event.key);
  }
</script>
```

### O que está acontecendo aqui?

- `onkeydown="mostrarTecla(event)"` → chama a função quando uma tecla é pressionada
- `event.key` → mostra qual tecla foi pressionada

Se você apertar:

- A → aparece "A"
- Enter → aparece "Enter"
- Backspace → aparece "Backspace"

---

## 🔹 Forma mais profissional (usando addEventListener)

Como programador, é melhor fazer assim:

```html
<input type="text" id="campo" />

<script>
  const campo = document.getElementById("campo");

  campo.addEventListener("keydown", function(event) {
    console.log("Tecla pressionada:", event.key);
  });
</script>
```

Essa forma separa HTML do JavaScript. É mais organizada — e é assim que sistemas maiores são feitos.

---

## 🔹 Diferença entre `keydown`, `keyup` e `keypress`

| Evento | Quando acontece |
| --- | --- |
| `keydown` | Quando a tecla é pressionada |
| `keyup` | Quando a tecla é solta |
| `keypress` | (antigo) quando a tecla gera um caractere |

Hoje em dia usamos mais:

- `keydown`
- `keyup`

---

## 🔹 Exemplo prático: detectar Enter

```jsx
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    alert("Você apertou Enter!");
  }
});
```

Aqui estamos dizendo:

> Se a tecla pressionada for "Enter", faça algo.
> 

Isso é muito usado em formulários.

---

## 🔹 Exemplo legal: mover um elemento com teclado

```html
<div id="box" style="width:50px;height:50px;background:red;position:absolute;"></div>

<script>
  const box = document.getElementById("box");
  let posX = 0;

  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
      posX += 10;
      box.style.left = posX + "px";
    }
  });
</script>
```

Cada vez que você aperta → (seta direita), o quadrado anda.

É assim que muitos jogos 2D começam.

---

## 🔹 Resumindo de forma simples

`onkeydown` =

👉 "Quando uma tecla for pressionada, execute algo."

Ele trabalha junto com o objeto `event`, que traz informações como:

- `event.key` → qual tecla
- `event.code` → código físico da tecla
- `event.ctrlKey` → se Ctrl está pressionado
- `event.shiftKey` → se Shift está pressionado

---

Se você quiser, posso te passar agora:

- 🔥 Exercícios práticos para treinar
- 🎮 Um mini projeto usando teclado
- 📚 Explicação mais profunda sobre o objeto `event`
- 🧠 Diferença entre eventos inline e addEventListener

Qual você quer aprender agora?

</details>

<details>
<summary><strong>onkeyup - > disparado quando uma tecla é solta sobre um elemento.</strong></summary>

## 🔹 O que significa `onkeyup`?

`onkeyup` é um **evento** que acontece quando o usuário **solta uma tecla do teclado**.

Ou seja:

- 🔽 `keydown` → quando aperta a tecla
- 🔼 `keyup` → quando solta a tecla

O `onkeyup` executa uma função sempre que isso acontece.

---

## 🧠 Pensando como iniciante

Imagina um campo de texto.

Você começa a digitar seu nome:

A → solta a tecla → `onkeyup` dispara

N → solta a tecla → `onkeyup` dispara

D → solta a tecla → `onkeyup` dispara

Ele funciona como um "sensor" que fica ouvindo o teclado.

---

## 📌 Exemplo 1 — Usando direto no HTML

```html
<input type="text" onkeyup="mostrarTexto()">

<p id="resultado"></p>

<script>
function mostrarTexto() {
  const valor = document.querySelector("input").value;
  document.getElementById("resultado").innerText = valor;
}
</script>
```

### O que acontece aqui?

1. Você digita no input
2. Quando solta a tecla, `mostrarTexto()` é chamada
3. O texto digitado aparece no `<p>`

Isso já cria aquele efeito de "texto aparecendo em tempo real".

---

## 📌 Exemplo 2 — Forma mais moderna (melhor prática)

Hoje em dia a gente prefere usar `addEventListener`.

```html
<input type="text" id="campo">

<p id="resultado"></p>

<script>
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

campo.addEventListener("keyup", function() {
  resultado.innerText = campo.value;
});
</script>
```

### Por que essa forma é melhor?

- Separa HTML de JavaScript
- Deixa o código mais organizado
- É o jeito mais usado no mercado

---

## 📌 Exemplo 3 — Descobrindo qual tecla foi pressionada

```jsx
document.addEventListener("keyup", function(event) {
  console.log("Tecla pressionada:", event.key);
});
```

Se você apertar:

- Enter → aparece `"Enter"`
- A → aparece `"a"`
- Backspace → aparece `"Backspace"`

Isso é muito usado para:

- Criar atalhos
- Detectar quando o usuário pressiona Enter
- Criar jogos simples no navegador

---

## ⚠️ Diferença importante

Muita gente confunde:

| Evento | Quando acontece |
| --- | --- |
| keydown | Quando aperta a tecla |
| keypress | (antigo, quase não usado hoje) |
| keyup | Quando solta a tecla |

Normalmente usamos `keyup` quando queremos pegar o valor final digitado no campo.

---

## 🎯 Quando usar `onkeyup`?

Use quando você quiser:

- Validar formulário enquanto a pessoa digita
- Criar busca automática
- Mostrar contador de caracteres
- Detectar tecla Enter

---

Se você quiser, eu posso te passar um mini projeto simples usando `keyup` pra você treinar na prática. Quer?

</details>

<details>
<summary><strong>onload - > disparado quando a pagina terminou de ser carregada. body.</strong></summary>

Boa, Anderson! Vamos aprender isso do jeito certo, do começo, como se estivesse montando a base de uma casa. Sem pular etapa.

## 📌 O que significa `onload` no JavaScript?

`onload` significa literalmente **“quando carregar”**.

Ele é um evento que acontece **quando algo termina de carregar na página**.

Normalmente usamos:

- Quando a **página inteira terminou de carregar**
- Quando uma **imagem terminou de carregar**
- Quando um **arquivo externo (script, iframe, etc.) terminou de carregar**

---

# 🧠 Pensando como iniciante

Imagina que o navegador está montando a página:

1. Ele lê o HTML
2. Carrega imagens
3. Carrega CSS
4. Carrega JavaScript
5. Monta tudo na tela

O `onload` é como se você dissesse:

> "Ei! Só execute esse código depois que tudo estiver pronto."
> 

---

# 🏗 Exemplo 1 – Usando `onload` no body (forma simples)

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo</title>
</head>

<body onload="mensagem()">

  <h1>Minha Página</h1>

  <script>
    function mensagem() {
      alert("A página terminou de carregar!");
    }
  </script>

</body>
</html>
```

### 🔎 O que está acontecendo?

- A página começa a carregar.
- Quando tudo termina…
- O `onload` chama a função `mensagem()`.
- Aparece o alerta.

---

# 🧱 Exemplo 2 – Forma mais profissional (JavaScript moderno)

Hoje em dia é mais comum fazer assim:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo</title>
</head>

<body>

  <h1>Minha Página</h1>

  <script>
    window.onload = function() {
      alert("Página carregada completamente!");
    };
  </script>

</body>
</html>
```

### 🧠 Explicando:

- `window` = representa a janela do navegador
- `window.onload` = quando a janela terminar de carregar
- Ele executa a função automaticamente

---

# 🖼 Exemplo 3 – Usando `onload` em imagem

```html
<img src="imagem.jpg" onload="imagemCarregada()">

<script>
  function imagemCarregada() {
    console.log("Imagem carregada com sucesso!");
  }
</script>
```

Aqui o evento dispara **quando a imagem termina de carregar**, não a página inteira.

---

# 🚨 Diferença importante: `onload` vs `DOMContentLoaded`

Existe outro evento muito usado:

```jsx
document.addEventListener("DOMContentLoaded", function() {
  console.log("HTML carregado!");
});
```

### 🔥 Diferença:

| Evento | Quando dispara |
| --- | --- |
| `onload` | Quando TUDO carrega (imagens, css, etc.) |
| `DOMContentLoaded` | Quando o HTML já está pronto (mais rápido) |

Na prática moderna, usamos mais `DOMContentLoaded`.

---

# 🎯 Quando usar `onload`?

Use quando você precisa ter certeza que:

- Imagens já carregaram
- Arquivos externos terminaram
- Tudo está realmente pronto

---

# 🏆 Resumindo de forma simples

`onload` é um evento que executa um código **somente depois que algo terminou de carregar**.

É como dizer:

> "Só começa depois que estiver tudo pronto."
> 

---

Se você quiser, posso te passar um pequeno exercício para praticar isso agora. Quer?

</details>

<details>
<summary><strong>onresize - > disparado quando há um redimecionamento da janela.</strong></summary>

## 🔹 O que é `onresize` no JavaScript?

`onresize` é um **evento** que acontece quando o tamanho da janela do navegador muda.

Ou seja:

- Você arrasta a borda da janela
- Maximiza
- Minimiza
- Gira o celular

👉 Toda vez que a tela muda de tamanho, o evento `resize` é disparado.

---

## 🔹 Forma moderna de usar (recomendado)

Hoje em dia, o jeito mais correto é usar `addEventListener`:

```jsx
window.addEventListener("resize", function() {
    console.log("A janela foi redimensionada!");
});
```

### O que está acontecendo aqui?

- `window` → representa a janela do navegador
- `"resize"` → é o evento
- `function()` → o que vai acontecer quando o evento for disparado

---

## 🔹 Forma antiga (ainda funciona)

```jsx
window.onresize = function() {
    console.log("Mudou o tamanho da tela!");
};
```

Funciona, mas tem um detalhe importante:

⚠️ Se você colocar outro `window.onresize`, ele substitui o anterior.

Já com `addEventListener`, você pode ter vários ouvindo ao mesmo tempo.

---

# 🔹 Exemplo prático para iniciantes

Vamos mostrar a largura da tela sempre que ela mudar:

```jsx
window.addEventListener("resize", function() {
    console.log("Largura atual:", window.innerWidth);
});
```

### `window.innerWidth`

Retorna a largura da janela em pixels.

---

# 🔹 Exemplo visual no HTML

```html
<p id="tamanho"></p>

<script>
window.addEventListener("resize", function() {
    document.getElementById("tamanho").textContent =
        "Largura da tela: " + window.innerWidth + "px";
});
</script>
```

Agora o texto muda automaticamente quando você redimensiona a janela.

---

# 🔹 Para que isso é usado na prática?

Programadores usam `resize` para:

- Ajustar layouts dinâmicos
- Recalcular tamanhos de elementos
- Trabalhar com responsividade além do CSS
- Atualizar gráficos
- Detectar mudança de orientação no celular

---

# 🔹 Dica importante (mentalidade profissional)

O evento `resize` dispara MUITAS vezes enquanto você está arrastando a janela.

Então em projetos maiores, usamos algo chamado **debounce** para evitar sobrecarga. Mas isso é assunto para o próximo nível 😉

</details>

<details>
<summary><strong>addEventListener () - faz o JavaScript ficar esperando um evento, como clique</strong></summary>

botao.addEventListener('click', function () {
});

### ▶ `addEventListener()`

**O que é:**

Faz o JavaScript ficar esperando alguma ação acontecer na página.

**Para que serve:**

Usamos quando queremos executar alguma coisa depois de um clique, digitação, movimento do mouse etc.

**No projeto Cafeteria:**

Usamos para perceber quando o usuário clica em **Adicionar ao Carrinho**.

```
botao.addEventListener('click', function () {
    // algo acontece aqui
});
```

**Lembre assim:**

`addEventListener` = “fique escutando um evento”.

</details>

<details>
<summary><strong>‘click’ - Informa que queremos executar o código quando o usuário clicar.</strong></summary>

**O que é:**

É um tipo de evento.

**Para que serve:**

Informa que queremos executar o código quando o usuário clicar.

```
botao.addEventListener('click', function () {
});
```

Existem outros eventos como:

```
'click'
'input'
'change'
'mouseover'
```

**Lembre assim:**

`click` = aconteceu um clique.

</details>

<details>
<summary><strong>event - É um objeto que contém informações sobre o evento que aconteceu.</strong></summary>

**O que é:**

É um objeto que contém informações sobre o evento que aconteceu.

```
function(event) {

}
```

**Para que serve:**

Permite trabalhar com informações do clique e também usar métodos como:

```
event.preventDefault();
```

**Lembre assim:**

`event` = informações sobre aquilo que acabou de acontecer.

</details>

<details>
<summary><strong>preventDefault () - Impede o comportamento padrão de um elemento HTML.</strong></summary>

**O que é:**

Impede o comportamento padrão de um elemento HTML.

**No nosso projeto:**

Os botões eram links:

```
<a href="#">
```

Por padrão, o `#` fazia a página subir.

Então usamos:

```
event.preventDefault();
```

para impedir isso.

**Lembre assim:**

`preventDefault()` = “não faça o comportamento padrão”.

</details>

</details>

<details>
<summary><strong>Arrays</strong></summary>

<details>
<summary><strong>arrays - é como uma caixa organizada que guarda vários valores dentro dela.</strong></summary>

## 📦 O que é um Array?

Um **array** é como uma caixa organizada que guarda vários valores dentro dela.

Em vez de criar várias variáveis assim:

```jsx
let nome1 = "João";
let nome2 = "Maria";
let nome3 = "Pedro";
```

Você cria uma única estrutura:

```jsx
let nomes = ["João", "Maria", "Pedro"];
```

Isso é um **array**.

---

## 🧠 Pensando de forma simples

Imagine uma prateleira com posições numeradas:

```
[0] João
[1] Maria
[2] Pedro
```

Cada item tem um **índice** (posição), e o JavaScript começa a contar do **zero**, não do 1.

---

## 📌 Como criar um Array

```jsx
let frutas = ["Maçã", "Banana", "Uva"];
```

Você pode guardar:

- Strings
- Números
- Booleanos
- Objetos
- Até outros arrays

Exemplo:

```jsx
let misturado = ["Anderson", 30, true];
```

---

## 🔎 Como acessar um valor

Você usa colchetes com o número da posição:

```jsx
let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana
```

Lembre-se: começa no 0.

---

## ➕ Adicionando elementos

### No final:

```jsx
frutas.push("Laranja");
```

### No começo:

```jsx
frutas.unshift("Abacaxi");
```

---

## ➖ Removendo elementos

### Último:

```jsx
frutas.pop();
```

### Primeiro:

```jsx
frutas.shift();
```

---

## 📏 Saber o tamanho do array

```jsx
console.log(frutas.length);
```

Isso mostra quantos itens existem.

---

## 🔁 Percorrendo um array (muito importante)

Aqui começa a parte poderosa.

```jsx
let frutas = ["Maçã", "Banana", "Uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
```

O que está acontecendo aqui?

- `i` começa em 0
- Enquanto `i` for menor que o tamanho do array
- Ele mostra o item da posição atual
- Depois aumenta `i` em 1

---

## 🚀 Exemplo prático para fixar

Vamos somar números:

```jsx
let numeros = [10, 20, 30];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma); // 60
```

---

## 🏗 Por que arrays são importantes?

Porque quase tudo na programação moderna usa listas:

- Lista de usuários
- Lista de produtos
- Lista de mensagens
- Lista de tarefas
- Resultados de uma API

Se você dominar arrays, domina metade do jogo.

</details>

<details>
<summary><strong>length - comprimento.</strong></summary>

Se você quer aprender JavaScript de verdade, precisa dominar o básico muito bem — e `length` é um desses fundamentos que parecem simples, mas são poderosos.

## 📌 O que significa `length` no JavaScript?

`length` significa **comprimento**.

Ele é usado principalmente para saber:

- 📦 Quantos itens existem em um **array**
- 🔤 Quantos caracteres existem em uma **string**

Ou seja: ele conta o tamanho de alguma coisa.

---

# 🔹 1️⃣ Usando `length` com STRING (texto)

```jsx
let nome = "Anderson";

console.log(nome.length);
```

### 🔎 O que acontece aqui?

A palavra `"Anderson"` tem 8 letras.

Resultado:

```
8
```

👉 O JavaScript conta cada caractere, inclusive espaços:

```jsx
let frase = "Oi tudo bem";

console.log(frase.length);
```

Resultado:

```
11
```

Sim, o espaço também conta!

---

# 🔹 2️⃣ Usando `length` com ARRAY (lista)

Agora vamos para algo muito usado na prática.

```jsx
let frutas = ["Maçã", "Banana", "Uva"];

console.log(frutas.length);
```

Resultado:

```
3
```

Porque existem **3 elementos** dentro do array.

---

# 🔹 3️⃣ Muito usado em repetições (for)

Aqui é onde a coisa começa a ficar interessante.

```jsx
let numeros = [10, 20, 30, 40];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```

### O que está acontecendo?

- `numeros.length` é 4
- O loop roda enquanto `i` for menor que 4
- Ele percorre todos os itens automaticamente

Isso é muito usado no dia a dia de programação.

---

# ⚠️ Cuidado importante

`length` é uma **propriedade**, não é função.

❌ Errado:

```jsx
nome.length();
```

✅ Certo:

```jsx
nome.length;
```

Sem parênteses!

---

# 🔥 Curiosidade interessante

Você pode até alterar o tamanho de um array:

```jsx
let lista = [1, 2, 3, 4, 5];

lista.length = 3;

console.log(lista);
```

Resultado:

```
[1, 2, 3]
```

Ele simplesmente corta o resto.

---

# 🧠 Resumindo de forma simples

`length` responde a pergunta:

> "Quantos tem aqui dentro?"
> 
- Texto → quantas letras
- Array → quantos elementos

---

Se você quiser, posso agora te explicar:

- Como usar `length` para validar senha
- Como limitar caracteres em um input
- Ou como contar palavras digitadas pelo usuário

Qual você quer aprender agora? 🚀

</details>

<details>
<summary><strong>push - coloca algo no final da fila.</strong></summary>

Boa, Anderson! Bora construir essa base do jeito certo. 👊

Em JavaScript, **`push`** é um método usado em **arrays (listas)**. Ele serve para **adicionar um novo elemento no final da lista**.

Pensa assim:

Um array é como uma fila. O `push()` coloca algo no **final da fila**.

---

## 📌 Exemplo simples

```jsx
let frutas = ["maçã", "banana"];

frutas.push("laranja");

console.log(frutas);
```

Resultado:

```jsx
["maçã", "banana", "laranja"]
```

👉 A `"laranja"` foi adicionada no final.

---

## 📌 O que o push retorna?

Uma coisa importante que muita gente não sabe no começo:

O `push()` **retorna o novo tamanho do array**.

Exemplo:

```jsx
let numeros = [1, 2, 3];

let novoTamanho = numeros.push(4);

console.log(novoTamanho); // 4
console.log(numeros);     // [1, 2, 3, 4]
```

Ele adicionou o 4 e retornou que agora o array tem 4 elementos.

---

## 📌 Posso adicionar mais de um valor?

Pode sim.

```jsx
let lista = [10];

lista.push(20, 30, 40);

console.log(lista);
```

Resultado:

```jsx
[10, 20, 30, 40]
```

---

## 📌 Exemplo prático (simulando um sistema)

Imagina que você está criando uma lista de tarefas:

```jsx
let tarefas = [];

tarefas.push("Estudar JavaScript");
tarefas.push("Treinar lógica");
tarefas.push("Criar um projeto");

console.log(tarefas);
```

Agora você tem uma lista dinâmica. Sempre que quiser adicionar algo novo, usa `push()`.

---

## 🧠 Resumão direto

- `push()` → adiciona no **final** do array
- Funciona só com arrays
- Retorna o **novo tamanho**
- Pode adicionar **um ou vários valores**

</details>

<details>
<summary><strong>slice - significa literalmente “fatiar”</strong></summary>

## 📌 O que é `slice()` no JavaScript?

`slice()` significa literalmente “fatiar”.

Ele serve para **pegar uma parte de algo**, sem alterar o original.

Você pode usar `slice()` em:

- ✅ Arrays
- ✅ Strings

E o mais importante:

👉 Ele **não modifica** o array ou string original. Ele cria uma **cópia da parte que você pediu**.

---

# 🧱 Sintaxe básica

```jsx
array.slice(inicio, fim)
```

- `inicio` → posição onde começa
- `fim` → posição onde termina (mas ele NÃO inclui essa posição)

⚠️ O índice começa em **0** no JavaScript.

---

# 🔢 Exemplo com Array

```jsx
let numeros = [10, 20, 30, 40, 50];

let parte = numeros.slice(1, 3);

console.log(parte);
```

### O que acontece aqui?

Índices do array:

```
[0] 10
[1] 20
[2] 30
[3] 40
[4] 50
```

`slice(1, 3)` significa:

- Começa no índice 1 → 20
- Vai até o índice 3 (mas não inclui ele)

Resultado:

```jsx
[20, 30]
```

E o array original continua igual:

```jsx
[10, 20, 30, 40, 50]
```

---

# 🔤 Exemplo com String

```jsx
let nome = "JavaScript";

let parte = nome.slice(0, 4);

console.log(parte);
```

Resultado:

```
Java
```

Porque ele pegou do índice 0 até antes do 4.

---

# 🔥 Slice com número negativo (muito usado!)

Você pode usar números negativos para contar de trás pra frente.

```jsx
let numeros = [10, 20, 30, 40, 50];

let ultimos = numeros.slice(-2);

console.log(ultimos);
```

Resultado:

```jsx
[40, 50]
```

- `2` significa:

→ "Comece 2 posições a partir do final"

Isso é MUITO usado para pegar os últimos itens.

---

# 🎯 Resumão direto ao ponto

`slice()` serve para:

✔️ Pegar parte de um array

✔️ Pegar parte de uma string

✔️ Não alterar o original

✔️ Trabalhar com índices positivos ou negativos

---

# 🚨 Diferença importante (iniciante costuma confundir)

`slice()` ❌ NÃO altera o array

`splice()` ⚠️ ALTERA o array

Exemplo rápido:

```jsx
let lista = [1, 2, 3, 4];

lista.splice(1, 2);

console.log(lista);
```

Resultado:

```jsx
[1, 4]
```

Ele removeu os elementos do array original.

---

# 🧠 Dica de programador

Sempre que você precisar:

- Criar cópia de parte de um array
- Paginar resultados
- Pegar últimos elementos
- Separar string

`slice()` é sua ferramenta.

</details>

<details>
<summary><strong>sort - um método usado para ordenar elementos de um array.</strong></summary>

## O que é `sort()` no JavaScript?

`sort()` é um método usado para **ordenar elementos de um array**.

Em português claro: ele reorganiza os itens de uma lista.

---

## 📌 Exemplo 1 — Ordenando palavras (o caso mais simples)

```jsx
let frutas = ["banana", "maçã", "laranja", "abacaxi"];

frutas.sort();

console.log(frutas);
```

Resultado:

```
["abacaxi", "banana", "laranja", "maçã"]
```

👉 Aqui ele organizou em **ordem alfabética**.

Por padrão, o `sort()` transforma tudo em texto e ordena como se fosse dicionário.

---

## ⚠️ Atenção: números não funcionam como você imagina

Olha isso:

```jsx
let numeros = [10, 2, 30, 4];

numeros.sort();

console.log(numeros);
```

Resultado:

```
[10, 2, 30, 4]
```

Estranho, né?

Isso acontece porque ele está comparando como texto:

- "10"
- "2"
- "30"
- "4"

Ele compara caractere por caractere, não o valor numérico.

---

## ✅ Forma correta de ordenar números

Você precisa passar uma **função de comparação**:

```jsx
let numeros = [10, 2, 30, 4];

numeros.sort(function(a, b) {
  return a - b;
});

console.log(numeros);
```

Resultado:

```
[2, 4, 10, 30]
```

### O que está acontecendo aqui?

A função recebe dois valores:

- `a`
- `b`

Se:

- resultado < 0 → `a` vem antes
- resultado > 0 → `b` vem antes
- resultado = 0 → mantém posição

Então:

```jsx
a - b
```

Isso ordena em **ordem crescente**.

---

## 🔁 Ordem decrescente

```jsx
numeros.sort(function(a, b) {
  return b - a;
});
```

Agora ele inverte.

---

## 💡 Forma moderna (arrow function)

Hoje em dia usamos assim:

```jsx
numeros.sort((a, b) => a - b);
```

Mais limpo, mais direto.

---

## 🧠 Exemplo real: ordenar objetos

```jsx
let pessoas = [
  { nome: "Carlos", idade: 32 },
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 40 }
];

pessoas.sort((a, b) => a.idade - b.idade);

console.log(pessoas);
```

Agora ele organiza pela idade.

---

## 🎯 Resumão

`sort()`:

- Organiza arrays
- Por padrão ordena como texto
- Para números, precisa de função de comparação
- Funciona também com objetos
- Altera o array original (isso é importante!)

---

Se você quiser, posso:

- Te passar exercícios práticos
- Te mostrar como fazer sem alterar o array original
- Ou te explicar como o algoritmo de ordenação funciona por trás

Qual desses você quer aprender agora? 🚀

</details>

<details>
<summary><strong>join() - é um método usado em arrays (listas) para transformar os elementos em uma única string.</strong></summary>

Boa, Anderson! Vamos do jeito raiz, entendendo a base antes de querer sair usando framework moderno 😄

## O que é `join` no JavaScript?

O `join()` é um método usado **em arrays** (listas) para **transformar os elementos em uma única string**.

Traduzindo:

Você tem vários valores separados dentro de um array… o `join()` junta tudo em um texto só.

---

## 📌 Estrutura básica

```jsx
array.join(separador)
```

- `array` → sua lista
- `separador` → o que você quer colocar entre os elementos
- Ele **retorna uma string**

---

## 🧠 Exemplo simples

```jsx
let nomes = ["João", "Maria", "Carlos"];

let resultado = nomes.join(" ");

console.log(resultado);
```

### Resultado:

```
João Maria Carlos
```

Ele colocou um espaço entre cada nome.

---

## 🔥 Exemplo com vírgula

```jsx
let frutas = ["Maçã", "Banana", "Uva"];

let lista = frutas.join(", ");

console.log(lista);
```

### Resultado:

```
Maçã, Banana, Uva
```

Aqui ele colocou vírgula + espaço entre os itens.

---

## 🚀 Exemplo criando uma frase

```jsx
let palavras = ["Eu", "estou", "aprendendo", "JavaScript"];

let frase = palavras.join(" ");

console.log(frase);
```

Resultado:

```
Eu estou aprendendo JavaScript
```

Percebe? Transformamos uma lista em uma frase.

---

## ⚡ Se não passar separador?

```jsx
let numeros = [1, 2, 3, 4];

console.log(numeros.join());
```

Resultado:

```
1,2,3,4
```

O padrão é vírgula.

---

## 🏗 Onde isso é muito usado?

- Criar textos a partir de listas
- Gerar CSV
- Montar URLs
- Exibir dados no HTML
- Transformar arrays em strings para enviar para API

Exemplo realista:

```jsx
let ids = [10, 25, 30];

let url = "https://api.com/users?ids=" + ids.join(",");

console.log(url);
```

Resultado:

```
https://api.com/users?ids=10,25,30
```

---

## 🎯 Resumão de iniciante

- `join()` → junta elementos de um array
- Sempre retorna **string**
- Pode definir o separador
- Não altera o array original

---

Se você quiser, posso agora te mostrar a diferença entre:

- `join()`
- `split()`
- `toString()`

Esses três juntos são a base pra manipular texto como gente grande em JavaScript.

</details>

<details>
<summary><strong>splice - Ele altera o array original</strong></summary>

Se você está aprendendo, entender `splice()` vai te dar um poder enorme pra manipular listas.

## 📌 O que é `splice()` no JavaScript?

O `splice()` é um método usado em **arrays** para:

- Remover elementos
- Adicionar elementos
- Substituir elementos

E o mais importante:

👉 Ele **altera o array original** (isso é fundamental saber).

---

## 🧠 Estrutura do splice

```jsx
array.splice(inicio, quantidade, item1, item2, ...)
```

### Parâmetros:

- `inicio` → posição onde começa a alteração
- `quantidade` → quantos elementos serão removidos
- `item1, item2...` → itens opcionais que você quer adicionar no lugar

---

# 🔥 Vamos ver exemplos práticos

---

## 1️⃣ Removendo elementos

```jsx
let frutas = ["maçã", "banana", "uva", "laranja"];

frutas.splice(1, 2);

console.log(frutas);
```

### O que aconteceu?

- Começou na posição `1` (banana)
- Removeu `2` itens (banana e uva)

Resultado:

```jsx
["maçã", "laranja"]
```

---

## 2️⃣ Adicionando elementos (sem remover nada)

```jsx
let numeros = [1, 2, 5];

numeros.splice(2, 0, 3, 4);

console.log(numeros);
```

### O que aconteceu?

- Começou na posição `2`
- Removeu `0` elementos
- Adicionou `3` e `4`

Resultado:

```jsx
[1, 2, 3, 4, 5]
```

---

## 3️⃣ Substituindo elementos

```jsx
let cores = ["azul", "verde", "amarelo"];

cores.splice(1, 1, "vermelho");

console.log(cores);
```

### O que aconteceu?

- Começou na posição `1` (verde)
- Removeu `1`
- Colocou "vermelho" no lugar

Resultado:

```jsx
["azul", "vermelho", "amarelo"]
```

---

# ⚠️ Algo MUITO importante

O `splice()`:

- ✔️ Modifica o array original
- ✔️ Retorna os itens removidos

Exemplo:

```jsx
let nomes = ["Ana", "Carlos", "Pedro"];

let removido = nomes.splice(1, 1);

console.log(removido); // ["Carlos"]
console.log(nomes);    // ["Ana", "Pedro"]
```

---

# 🧩 Diferença entre `splice()` e `slice()`

Muita gente confunde.

| splice | slice |
| --- | --- |
| Altera o array original | Não altera |
| Remove / adiciona | Apenas copia parte |
| Pode inserir itens | Não insere |

---

# 🎯 Regra simples para lembrar

Se você quer **mexer de verdade na lista**, use `splice()`.

Se você quer apenas **copiar uma parte**, use `slice()`.

</details>

<details>
<summary><strong>unshift - adicionar um ou mais elementos no início do array</strong></summary>

## O que é `unshift` no JavaScript?

`unshift` é um método usado em **arrays** (listas) para **adicionar um ou mais elementos no início do array**.

Pensa assim:

Se `push()` coloca no final…

👉 `unshift()` coloca no começo.

---

## 📌 Sintaxe

```jsx
array.unshift(elemento1, elemento2, ...)
```

Ele:

1. Adiciona os elementos no começo do array.
2. Move os outros elementos para frente.
3. Retorna o novo tamanho do array.

---

## 🧱 Exemplo simples

```jsx
let frutas = ["banana", "maçã"];

frutas.unshift("laranja");

console.log(frutas);
```

Resultado:

```jsx
["laranja", "banana", "maçã"]
```

Percebeu?

A "laranja" entrou na frente.

---

## 📦 Adicionando mais de um valor

```jsx
let numeros = [3, 4];

numeros.unshift(1, 2);

console.log(numeros);
```

Resultado:

```jsx
[1, 2, 3, 4]
```

Ele mantém a ordem dos elementos que você adiciona.

---

## 🔢 O que ele retorna?

```jsx
let lista = ["B", "C"];

let novoTamanho = lista.unshift("A");

console.log(novoTamanho);
console.log(lista);
```

Resultado:

```jsx
3
["A", "B", "C"]
```

Ele retorna o novo tamanho do array.

---

## 🆚 Diferença entre `push` e `unshift`

```jsx
let exemplo = [2, 3];

exemplo.push(4);     // adiciona no final
exemplo.unshift(1);  // adiciona no começo

console.log(exemplo);
```

Resultado:

```jsx
[1, 2, 3, 4]
```

---

## ⚠️ Coisa importante pra saber

`unshift` pode ser um pouco mais “pesado” que `push`, porque:

- Ele precisa mover todos os elementos do array uma posição pra frente.
- Em arrays muito grandes, isso pode impactar performance.

Mas relaxa — para aprendizado e maioria dos projetos comuns, funciona tranquilo.

---

## 🧠 Resumão estilo iniciante

- `unshift()` → adiciona no começo
- `push()` → adiciona no final
- Retorna → novo tamanho do array
- Modifica o array original

</details>

<details>
<summary><strong>pop - ele tira o item que está no final da lista.</strong></summary>

## 📌 O que é `pop()` no JavaScript?

No JavaScript, `pop()` é um **método de array**.

Ele serve para:

> 🔥 **Remover o ÚLTIMO elemento de um array**
> 
> 
> 📦 E devolver esse elemento removido
> 

Ou seja: ele tira o item que está no final da lista.

---

## 🧱 Vamos começar do começo: o que é um array?

Um array é basicamente uma lista:

```jsx
let frutas = ["maçã", "banana", "uva"];
```

Aqui temos:

| Índice | Valor |
| --- | --- |
| 0 | maçã |
| 1 | banana |
| 2 | uva |

---

## 🔥 Usando o `pop()`

Agora vamos remover o último item:

```jsx
let frutas = ["maçã", "banana", "uva"];

let removido = frutas.pop();

console.log(frutas);
console.log(removido);
```

### O que acontece?

1. `"uva"` é removida (porque está no final).
2. `"uva"` é guardada na variável `removido`.

### Resultado:

```jsx
["maçã", "banana"]
```

E:

```jsx
uva
```

---

## ⚠️ Algo muito importante

O `pop()`:

- ✔️ Modifica o array original
- ✔️ Sempre remove o último elemento
- ✔️ Retorna o valor removido
- ❌ Não remove algo específico do meio

---

## 🧠 Um jeito fácil de lembrar

Pensa numa pilha de pratos:

Você sempre tira o prato de cima.

Isso é o comportamento do `pop()`.

Na programação, isso se chama estrutura **LIFO**

(*Last In, First Out* — o último que entra é o primeiro que sai).

---

## 💡 Exemplo prático do mundo real

Imagine um carrinho de compras:

```jsx
let carrinho = ["camiseta", "calça", "tênis"];

carrinho.pop();

console.log(carrinho);
```

Se o cliente desistiu do último item adicionado, ele sai da lista.

---

## 🔄 Comparando com `push()`

Para você já começar a enxergar o sistema completo:

| Método | O que faz |
| --- | --- |
| `push()` | Adiciona no final |
| `pop()` | Remove do final |

Exemplo:

```jsx
let numeros = [1, 2];

numeros.push(3); // adiciona
numeros.pop();   // remove
```

---

## 🧪 E se o array estiver vazio?

```jsx
let lista = [];

let teste = lista.pop();

console.log(teste);
```

Resultado:

```jsx
undefined
```

Porque não tinha nada para remover.

---

## 🎯 Resumão direto

`pop()`:

- Remove o último elemento
- Retorna o elemento removido
- Altera o array original
- Funciona apenas em arrays

---

Se você quiser, posso te mostrar:

- Diferença entre `pop()` e `shift()`
- Como remover item específico do array
- Exercícios práticos para treinar
- Ou como isso funciona na lógica de pilha (stack)

Você está no começo — e dominar essas bases vai te deixar muito mais forte lá na frente 🚀

</details>

<details>
<summary><strong>shift - ele tira o item da frente da fila.</strong></summary>

## 📌 O que é `shift()`?

`shift()` é um método usado em **arrays (listas)**.

Ele faz duas coisas:

1. **Remove o primeiro elemento do array**
2. **Retorna (devolve) esse elemento removido**

Ou seja: ele tira o item da frente da fila.

Pensa numa fila de banco antiga mesmo. A primeira pessoa da fila é atendida e sai. A fila inteira anda uma posição pra frente. É exatamente isso que o `shift()` faz.

---

## 🧠 Estrutura básica

```jsx
array.shift()
```

---

## 🔹 Exemplo 1 – O básico do básico

```jsx
let frutas = ["Maçã", "Banana", "Laranja"];

let removida = frutas.shift();

console.log(removida); // Maçã
console.log(frutas);   // ["Banana", "Laranja"]
```

### O que aconteceu aqui?

- `"Maçã"` era o primeiro elemento
- O `shift()` removeu ela
- O array ficou menor
- A função devolveu o valor removido

---

## 🔹 Exemplo 2 – Usando como fila

```jsx
let fila = ["Cliente 1", "Cliente 2", "Cliente 3"];

while (fila.length > 0) {
  let atendido = fila.shift();
  console.log(atendido + " foi atendido");
}
```

### Resultado:

```
Cliente 1 foi atendido
Cliente 2 foi atendido
Cliente 3 foi atendido
```

Aqui estamos usando `shift()` como uma **estrutura de fila (FIFO – First In, First Out)**.

---

## ⚖️ Diferença entre `shift()` e `pop()`

Isso é importante:

| Método | Remove de onde? |
| --- | --- |
| `shift()` | Remove do começo |
| `pop()` | Remove do final |

Exemplo:

```jsx
let numeros = [10, 20, 30];

numeros.pop();   // remove 30
numeros.shift(); // remove 10
```

---

## ⚠️ Atenção importante

`shift()` **altera o array original**.

Ele não cria uma cópia.

Ele modifica o próprio array.

Se você precisar manter o original intacto, teria que fazer uma cópia antes:

```jsx
let original = [1, 2, 3];
let copia = [...original];

copia.shift();

console.log(original); // [1, 2, 3]
console.log(copia);    // [2, 3]
```

---

## 🔥 Quando usar `shift()`?

Use quando:

- Estiver trabalhando com **filas**
- Precisar processar itens na ordem
- Estiver consumindo dados sequencialmente

---

## 🧱 Um detalhe mais técnico (visão mais profunda)

O `shift()` é um pouco mais "pesado" que `pop()`, porque:

- Ele precisa reorganizar todos os índices do array
- Todos os elementos "andam uma casa"

Em arrays grandes, isso pode impactar performance.

Mas no dia a dia? Pode usar tranquilo.

---

## 🎯 Resumindo como um iniciante deve guardar

`shift()`:

- Remove o primeiro elemento
- Retorna o elemento removido
- Diminui o tamanho do array
- Move os outros elementos para frente

</details>

<details>
<summary><strong>filter - Ele cria um novo array contendo apenas os elementos que passaram no teste.</strong></summary>

Se você entender bem isso, já começa a pensar como programador de verdade.

---

## 📌 O que é `filter()` no JavaScript?

O `filter()` é um método usado em **arrays** (listas) para **filtrar elementos** com base em uma condição.

Ele cria **um novo array** contendo apenas os elementos que passaram no teste.

> Pense assim: você tem uma caixa cheia de coisas e quer separar só o que interessa.
> 

---

## 🔹 Estrutura básica

```jsx
array.filter(function(elemento) {
  return condição;
});
```

Ou na forma mais moderna (arrow function):

```jsx
array.filter((elemento) => condição);
```

---

# 🔥 Exemplo 1 — Filtrar números maiores que 10

```jsx
let numeros = [5, 12, 8, 20, 3];

let maioresQue10 = numeros.filter((numero) => numero > 10);

console.log(maioresQue10);
```

### 📌 Resultado:

```jsx
[12, 20]
```

### O que aconteceu aqui?

Para cada número:

- Se for maior que 10 → entra no novo array
- Se não for → é ignorado

Simples assim.

---

# 🔥 Exemplo 2 — Filtrar nomes com mais de 4 letras

```jsx
let nomes = ["Ana", "Carlos", "João", "Fernanda"];

let nomesGrandes = nomes.filter((nome) => nome.length > 4);

console.log(nomesGrandes);
```

### Resultado:

```jsx
["Carlos", "Fernanda"]
```

Aqui usamos `nome.length` para saber o tamanho da palavra.

---

# 🔥 Exemplo 3 — Filtrar objetos (muito usado no mundo real)

Agora vamos deixar mais profissional.

```jsx
let pessoas = [
  { nome: "Anderson", idade: 22 },
  { nome: "Maria", idade: 17 },
  { nome: "João", idade: 30 }
];

let maioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);

console.log(maioresDeIdade);
```

### Resultado:

```jsx
[
  { nome: "Anderson", idade: 22 },
  { nome: "João", idade: 30 }
]
```

Aqui o filtro foi pela propriedade `idade`.

Isso é extremamente comum em sistemas reais.

---

# 🎯 Regra de Ouro do `filter()`

O `filter()` sempre:

1. Percorre o array inteiro
2. Executa uma função para cada item
3. Se a função retornar `true`, o item entra no novo array
4. Se retornar `false`, ele é descartado
5. Retorna um **novo array** (não altera o original)

---

# ⚠️ Muito Importante

Ele **não modifica o array original**.

```jsx
console.log(numeros);
// Continua igual
```

Se você quiser substituir, precisa fazer:

```jsx
numeros = numeros.filter(...)
```

---

# 🧠 Diferença entre `filter()` e `map()`

- `filter()` → Filtra (remove o que não serve)
- `map()` → Transforma (modifica cada item)

Exemplo rápido:

```jsx
let dobrados = numeros.map((n) => n * 2);
```

Aqui ele não filtra nada, só transforma.

---

# 🏗 Quando você vai usar `filter()` na prática?

- Buscar usuários ativos
- Filtrar produtos por preço
- Remover itens inválidos
- Criar sistemas de busca
- Aplicar filtros em interfaces

É uma das funções mais usadas no JavaScript moderno.

---

Se você quiser, posso te passar agora:

- 🔹 Exercícios para treinar
- 🔹 Comparação entre `for`, `forEach` e `filter`
- 🔹 Como criar um filtro em um input de busca
- 🔹 Como usar filter junto com includes()

Qual desses você quer aprender agora? 🚀

</details>

<details>
<summary><strong>concat - `concat` vem de “concatenate”, que significa juntar.</strong></summary>

## O que significa `concat` no JavaScript?

`concat` vem de **“concatenate”**, que significa **juntar**.

No JavaScript, o método `.concat()` é usado principalmente para:

- 🔹 **Juntar strings**
- 🔹 **Juntar arrays**

E o mais importante:

Ele **não altera o original**, ele cria algo novo.

---

# 📌 1️⃣ `concat` com STRING

Vamos começar simples.

```jsx
let nome = "Anderson";
let sobrenome = "Silva";

let nomeCompleto = nome.concat(" ", sobrenome);

console.log(nomeCompleto);
```

### O que está acontecendo aqui?

- `"Anderson"` está chamando `.concat()`
- Ele recebe dois valores:
    - `" "` → espaço
    - `sobrenome`
- Ele junta tudo e retorna uma nova string

Resultado:

```
Anderson Silva
```

⚠️ Importante:

`nome` continua sendo `"Anderson"`.

Ele não muda.

---

## 🧠 Mas hoje em dia… quase ninguém usa concat para string

Normalmente usamos:

```jsx
let nomeCompleto = nome + " " + sobrenome;
```

Ou o jeito mais moderno:

```jsx
let nomeCompleto = `${nome} ${sobrenome}`;
```

Esse último é chamado de **Template String** e é o mais usado atualmente.

---

# 📌 2️⃣ `concat` com ARRAY (aqui ele brilha mais)

Agora sim começa a ficar interessante.

```jsx
let frutas1 = ["Maçã", "Banana"];
let frutas2 = ["Uva", "Laranja"];

let todasFrutas = frutas1.concat(frutas2);

console.log(todasFrutas);
```

Resultado:

```
["Maçã", "Banana", "Uva", "Laranja"]
```

### O que aconteceu?

- `frutas1` chamou `.concat(frutas2)`
- Ele juntou os dois arrays
- Criou um novo array
- Não alterou `frutas1`

Se você fizer:

```jsx
console.log(frutas1);
```

Vai continuar:

```
["Maçã", "Banana"]
```

---

# 📌 Concatenando mais de um array

```jsx
let a = [1, 2];
let b = [3, 4];
let c = [5, 6];

let resultado = a.concat(b, c);

console.log(resultado);
```

Resultado:

```
[1, 2, 3, 4, 5, 6]
```

---

# 📌 Também funciona misturando valores

```jsx
let numeros = [1, 2];

let resultado = numeros.concat(3, 4, [5, 6]);

console.log(resultado);
```

Resultado:

```
[1, 2, 3, 4, 5, 6]
```

---

# 🔥 Conceito importante (mentalidade de programador)

`concat` é um método **imutável**.

Ou seja:

✔️ Ele cria algo novo

❌ Ele não modifica o original

Isso é muito valorizado hoje em desenvolvimento moderno, principalmente quando você trabalha com React ou programação funcional.

---

# 📌 Resumão direto ao ponto

`concat` = juntar coisas.

- Com **string** → junta textos
- Com **array** → junta listas
- Sempre retorna um **novo valor**

---

Se você quiser, posso agora te explicar:

- Diferença entre `concat` e `push`
- Diferença entre `concat` e spread `[...]`
- Ou fazer pequenos exercícios pra você praticar

Qual você prefere? 🚀

</details>

<details>
<summary><strong>array.isArray () - é um método do próprio JavaScript usado para verificar se um valor é realmente um array.</strong></summary>

## 📌 O que é `Array.isArray()`?

`Array.isArray()` é um método do próprio JavaScript usado para verificar se um valor é realmente um array.

Ele retorna:

- `true` → se for um array
- `false` → se não for

---

## 🧠 Por que isso é importante?

No JavaScript, muita coisa é "object". Por exemplo:

```jsx
let lista = [1, 2, 3];
let objeto = { nome: "Anderson" };

console.log(typeof lista);   // "object"
console.log(typeof objeto);  // "object"
```

Percebe o problema? 🤔

`typeof` não consegue diferenciar array de objeto comum.

É aí que entra o `Array.isArray()`.

---

## ✅ Exemplo básico

```jsx
let numeros = [10, 20, 30];

console.log(Array.isArray(numeros)); // true
```

Agora com algo que NÃO é array:

```jsx
let nome = "Anderson";

console.log(Array.isArray(nome)); // false
```

---

## 🔎 Comparando com objeto

```jsx
let pessoa = { nome: "Anderson", idade: 25 };

console.log(Array.isArray(pessoa)); // false
```

---

## 💡 Exemplo prático (situação real)

Imagina que você recebe um dado de uma API e precisa saber se pode usar `.map()` nele:

```jsx
function processar(dado) {
  if (Array.isArray(dado)) {
    dado.map(item => console.log(item));
  } else {
    console.log("Não é um array!");
  }
}

processar([1, 2, 3]); // funciona
processar("texto");   // Não é um array!
```

Isso evita erro do tipo:

```
TypeError: dado.map is not a function
```

---

## 🎯 Resumo direto ao ponto

`Array.isArray(valor)`

👉 Verifica se o valor é um array

👉 Retorna `true` ou `false`

👉 É a forma correta de testar arrays

</details>

<details>
<summary><strong>find () - Procura um item dentro de um Array.</strong></summary>

**O que é:**

Procura um item dentro de um Array.

**No projeto:**

Usamos para descobrir se o café já estava no carrinho.

```
const itemExistente = carrinho.find(function(produto) {
    return produto.nome === nome;
});
```

Se encontrar:

```
{ nome: "Café Coado", quantidade: 2 }
```

Se não encontrar:

```
undefined
```

**Lembre assim:**

`find()` = encontrar um item específico.

</details>

<details>
<summary><strong>forEach () - Percorre todos os itens de uma lista.</strong></summary>

**O que é:**

Percorre todos os itens de uma lista.

```
carrinho.forEach(function(item) {

});
```

Exemplo:

```
Café Coado
Café Moído
Café Expresso
```

O `forEach()` passa por:

```
1º Café Coado
2º Café Moído
3º Café Expresso
```

**Lembre assim:**

`forEach()` = “para cada item, faça alguma coisa”.

</details>

<details>
<summary><strong>reduce () - Percorre um Array e transforma vários valores em um único resultado.</strong></summary>

**O que é:**

Percorre um Array e transforma vários valores em **um único resultado**.

**No nosso projeto:**

Usamos para somar todas as quantidades:

```
const quantidadeTotal = carrinho.reduce(function(acumulador, item) {
    return acumulador + item.quantidade;
}, 0);
```

Exemplo:

```
Café Coado = 3
Café Moído = 2
Café Expresso = 1

0 + 3 = 3
3 + 2 = 5
5 + 1 = 6
```

Resultado:

```
6
```

**Lembre assim:**

`reduce()` = reduzir vários valores para um resultado só.

</details>

<details>
<summary><strong>map() — transforma cada item e cria um novo Array</strong></summary>


<p><strong>O que é:</strong> <code>map()</code> percorre um Array, transforma cada item e devolve <strong>um novo Array</strong>.</p>
<pre><code>const numeros = [1, 2, 3];
const dobrados = numeros.map(function(numero) {
    return numero * 2;
});

console.log(dobrados); // [2, 4, 6]</code></pre>
<p><strong>Diferença importante:</strong></p>
<ul>
<li><code>forEach()</code> → percorre para executar uma ação.</li>
<li><code>map()</code> → percorre para criar um novo Array transformado.</li>
<li><code>filter()</code> → percorre para manter apenas os itens que passam em uma condição.</li>
</ul>
<p><strong>Lembre assim:</strong> <code>map()</code> = “pegue cada item, transforme e monte outra lista”.</p>


</details>

</details>

<details>
<summary><strong>DOM / Manipulação do HTML</strong></summary>

<details>
<summary><strong>DOM — como o JavaScript enxerga e altera o HTML</strong></summary>


<p><strong>DOM</strong> significa <em>Document Object Model</em>. É a representação da página que permite ao JavaScript encontrar, ler, criar e alterar elementos do HTML.</p>
<pre><code>HTML da página
↓
DOM
↓
JavaScript consegue acessar e modificar</code></pre>
<p>No Projeto Cafeteria, o DOM é usado para encontrar botões, descobrir qual café foi clicado, ler nome e preço, atualizar o contador e criar os itens do carrinho.</p>
<p><strong>Lembre assim:</strong> DOM é a ponte entre o JavaScript e o HTML.</p>


</details>

<details>
<summary><strong>document.getElementById - achar um elemento específico do HTML usando o ID dele</strong></summary>

`document.getElementById` é um jeito de o JavaScript **achar um elemento específico do HTML usando o ID dele**.

Pensa assim: o HTML é como uma página cheia de peças. O `getElementById` é como se você falasse:

👉 “Me entrega exatamente aquela peça que tem esse nome aqui”.

---

## 📌 Pra que ele serve na prática

Ele serve para você conseguir **mexer no HTML usando JavaScript**, tipo:

- Mudar texto
- Mudar cor
- Esconder ou mostrar algo
- Pegar valor de input
- Criar interações (cliques, animações, etc.)

---

## 🧠 Estrutura básica

```jsx
document.getElementById("idDoElemento")
```

👉 Você coloca entre aspas o **id que está no HTML**.

---

## ✅ Exemplo simples

### HTML

```html
<p id="mensagem">Olá mundo</p>
```

### JavaScript

```jsx
let elemento = document.getElementById("mensagem");
console.log(elemento);
```

Aqui ele pega o `<p>` e guarda dentro da variável.

---

## 🔥 Exemplo mudando texto

```jsx
document.getElementById("mensagem").innerText = "Texto novo!";
```

---

## ⚠️ Regra importante

IDs devem ser **únicos** na página.

Se tiver dois iguais → pode dar problema.

---

## 💡 Quando você vai usar muito isso

- Botões
- Formulários
- Animações simples
- Interatividade básica
- Manipulação do DOM

---

## 🪄 Resumo direto

👉 Busca elemento pelo ID

👉 Permite alterar HTML com JavaScript

👉 Base de praticamente toda interação web

</details>

<details>
<summary><strong>.innerHTML - ler ou alterar o conteúdo HTML dentro de um elemento</strong></summary>

### 📌 O que é `.innerHTML`?

`.innerHTML` é uma propriedade usada para **ler ou alterar o conteúdo HTML dentro de um elemento**.

Pensa assim:

👉 Ele pega tudo que está *dentro* da tag

👉 Ou coloca algo novo dentro dela (texto ou HTML)

---

## 🧱 Exemplo simples (HTML)

```html
<p id="texto">Olá mundo</p>
```

---

## 📜 Lendo o conteúdo com JavaScript

```jsx
let conteudo = document.getElementById("texto").innerHTML;
console.log(conteudo);
```

✅ Vai mostrar:

```
Olá mundo
```

---

## ✏️ Alterando o conteúdo

```jsx
document.getElementById("texto").innerHTML = "Agora mudou!";
```

Resultado na tela:

```
Agora mudou!
```

---

## 🎨 Colocando HTML dentro (não só texto)

Aqui é onde ele fica poderoso.

```jsx
document.getElementById("texto").innerHTML = "<strong>Texto em negrito</strong>";
```

Resultado:

👉 Texto aparece em **negrito** na página.

---

## ⚠️ Cuidado importante

`.innerHTML` interpreta HTML.

Se vier conteúdo de usuário ou banco sem cuidado → pode gerar falha de segurança (XSS).

Quando quiser só texto puro, costuma-se usar:

- `.textContent` (mais seguro)

Exemplo:

```jsx
document.getElementById("texto").textContent = "<b>Isso não vira HTML</b>";
```

Vai mostrar literalmente:

```
<b>Isso não vira HTML</b>
```

---

## 🧠 Resumo rápido

`.innerHTML` serve para:

✅ Ler conteúdo HTML dentro de um elemento

✅ Alterar conteúdo HTML

✅ Inserir tags HTML dinamicamente

</details>

<details>
<summary><strong>append - “adicionar no final”.</strong></summary>

No JavaScript, **`append` significa “adicionar no final”**.

Ele é usado principalmente para **adicionar elementos ou textos dentro de outro elemento HTML**, geralmente no final do conteúdo que já existe.

---

# 📌 Onde o `append` é usado?

Ele é um método do DOM (Document Object Model), ou seja, você usa quando está manipulando HTML com JavaScript.

Exemplo de HTML simples:

```html
<div id="caixa">
  <p>Primeiro parágrafo</p>
</div>
```

Agora vamos adicionar algo dentro dessa `div`.

---

# 🧠 Exemplo 1 – Adicionando texto

```jsx
const caixa = document.getElementById("caixa");

caixa.append("Texto adicionado no final");
```

🔎 O que acontece?

- O JavaScript pega a div
- Usa `append`
- Adiciona o texto no final dela

Resultado:

```html
<div id="caixa">
  <p>Primeiro parágrafo</p>
  Texto adicionado no final
</div>
```

---

# 🧱 Exemplo 2 – Criando e adicionando um elemento

Aqui é onde começa a ficar interessante.

```jsx
const caixa = document.getElementById("caixa");

const novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Novo parágrafo criado pelo JS";

caixa.append(novoParagrafo);
```

🔎 Passo a passo:

1. Criamos um novo `<p>`
2. Colocamos um texto dentro dele
3. Usamos `append` para colocar dentro da `div`

Resultado final:

```html
<div id="caixa">
  <p>Primeiro parágrafo</p>
  <p>Novo parágrafo criado pelo JS</p>
</div>
```

Percebe? Ele sempre adiciona no final.

---

# ⚖ Diferença entre `append` e `appendChild`

Antigamente usávamos muito:

```jsx
caixa.appendChild(novoParagrafo);
```

Diferenças principais:

| append() | appendChild() |
| --- | --- |
| Aceita texto direto | Não aceita texto direto |
| Pode adicionar vários itens de uma vez | Só aceita um elemento |
| Mais moderno | Mais antigo |

Exemplo com vários itens:

```jsx
caixa.append("Texto 1", document.createElement("br"), "Texto 2");
```

O `appendChild` não permite isso.

---

# 🏗 Pensando como programador

Imagina que sua página é uma casa.

- `createElement` → você constrói um móvel
- `append` → você coloca o móvel dentro da casa
- Sempre no final do cômodo

Simples e direto.

---

# 🚀 Quando você vai usar muito isso?

- Criar listas dinâmicas
- Mostrar mensagens
- Adicionar comentários
- Criar cards automaticamente
- Trabalhar com APIs

</details>

<details>
<summary><strong>querySelector() — procura um elemento</strong></summary>

<pre><code>const nomeProduto = produto.querySelector('h3');
produto.querySelector('.preco-atual');</code></pre><p>Retorna o primeiro elemento que encontrar.</p>

</details>

<details>
<summary><strong>querySelectorAll() — procura vários elementos</strong></summary>

<pre><code>const botoesAdicionarCarrinho = document.querySelectorAll('.add-carrinho');</code></pre><p><strong>Importante:</strong> retorna uma <code>NodeList</code>, não exatamente um Array.</p>

</details>

<details>
<summary><strong>closest() — procura o elemento pai mais próximo</strong></summary>

<pre><code>const produto = botao.closest('.box');</code></pre><p>No projeto usamos para descobrir a qual card de café o botão pertence.</p>

</details>

<details>
<summary><strong>textContent — lê ou altera texto</strong></summary>

<pre><code>const nome = nomeProduto.textContent;
contadorCarrinho.textContent = 5;</code></pre><p><strong>Lembre assim:</strong> <code>textContent</code> = texto do elemento.</p>

</details>

<details>
<summary><strong>createElement() — cria um elemento HTML</strong></summary>

<pre><code>const produtoCarrinho = document.createElement('div');</code></pre><p>Cria um elemento, mas ainda não o coloca na página.</p>

</details>

<details>
<summary><strong>appendChild() — coloca um elemento dentro de outro</strong></summary>

<pre><code>listaCarrinho.appendChild(produtoCarrinho);</code></pre><p><strong>Lembre assim:</strong> <code>appendChild()</code> = adicione este filho aqui dentro.</p>

</details>

</details>

<details>
<summary><strong>Estruturas de Repetição</strong></summary>

<details>
<summary><strong>for - em JavaScript é uma estrutura de repetição</strong></summary>

**`for`** em JavaScript é uma estrutura de repetição.

Ela serve para **repetir um bloco de código várias vezes** sem precisar escrever a mesma coisa repetidamente.

### Exemplo prático

Se você quiser mostrar os números de 1 até 5:

```jsx
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Resultado:

```
1
2
3
4
5
```

### Como ele funciona

O `for` normalmente tem 3 partes:

```jsx
for (início; condição; alteração) {
    // código
}
```

No exemplo:

```jsx
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```

Temos:

```
let i = 1
→ começa no 1

i <= 5
→ continua enquanto i for menor ou igual a 5

i++
→ aumenta 1 a cada repetição
```

### Na prática

O JavaScript faz isso:

```
i = 1 → executa
i = 2 → executa
i = 3 → executa
i = 4 → executa
i = 5 → executa
i = 6 → para
```

### Um exemplo mais útil

Imagine uma lista:

```jsx
let nomes = ["Ana", "Carlos", "João"];
```

Você pode percorrer todos:

```jsx
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}
```

Resultado:

```
Ana
Carlos
João
```

### O que é `i`?

`i` é só uma variável de controle.

É muito usada por costume, porque vem de ideia de **índice**.

Você poderia usar outro nome:

```jsx
for (let contador = 1; contador <= 5; contador++) {
    console.log(contador);
}
```

Funciona igual.

### Resumo

```
for → repetir um código várias vezes
```

Pense assim:

```
começa
  ↓
verifica condição
  ↓
executa código
  ↓
aumenta contador
  ↓
repete
```

É um dos laços de repetição mais usados em JavaScript.

</details>

</details>

<details>
<summary><strong>Datas</strong></summary>

<details>
<summary><strong>getFullYear - método usado para pegar o ano completo de uma data</strong></summary>

**`getFullYear()`** em JavaScript é um método usado para **pegar o ano completo de uma data**.

Na prática:

```jsx
const hoje = new Date();

console.log(hoje.getFullYear());
```

Se o ano atual for 2026, o resultado será:

```
2026
```

### Exemplo prático

Imagine que você quer mostrar:

```
Ano atual: 2026
```

Você pode fazer:

```jsx
const data = new Date();
const ano = data.getFullYear();

console.log(`Ano atual: ${ano}`);
```

### Como funciona

Primeiro:

```jsx
new Date()
```

cria uma data.

Depois:

```jsx
.getFullYear()
```

pega apenas o ano dessa data.

Pense assim:

```
new Date()
↓
23/09/2026
↓
getFullYear()
↓
2026
```

### Também funciona com uma data específica

```jsx
const nascimento = new Date("1998-05-10");

console.log(nascimento.getFullYear());
```

Resultado:

```
1998
```

### Resumo

```jsx
data.getFullYear()
```

= **pegar o ano completo de uma data**.

Exemplo:

```
1998
2024
2026
```

E o `Full` é importante porque antigamente existia `getYear()`, que não é recomendado para esse uso.

</details>

</details>

<details>
<summary><strong>JSON</strong></summary>

<details>
<summary><strong>JSON.parse() - serve para transformar um texto em formato JSON em um objeto JavaScript.</strong></summary>

**`JSON.parse()`** em JavaScript serve para **transformar um texto em formato JSON em um objeto JavaScript**.

### Na prática

Imagine que você recebeu este texto:

```jsx
const dados = '{"nome":"Anderson","idade":27}';
```

Nesse momento, `dados` ainda é apenas uma **string**.

Se você tentar:

```jsx
console.log(dados.nome);
```

não vai funcionar como objeto.

Então você usa:

```jsx
const usuario = JSON.parse(dados);
```

Agora `usuario` virou um objeto JavaScript:

```jsx
console.log(usuario.nome);
```

Resultado:

```
Anderson
```

### Pense assim

```
JSON em texto
↓
JSON.parse()
↓
objeto JavaScript
```

Exemplo:

```jsx
const texto = '{"produto":"Teclado","preco":150}';

const objeto = JSON.parse(texto);

console.log(objeto.produto);
```

Resultado:

```
Teclado
```

### Onde isso é usado?

Muito quando você recebe dados de:

```
API
localStorage
servidor
arquivo JSON
```

Por exemplo, com `localStorage`:

```jsx
const dados = localStorage.getItem("usuario");

const usuario = JSON.parse(dados);
```

### Cuidado

O texto precisa estar em JSON válido.

Isso funciona:

```jsx
'{"nome":"Anderson"}'
```

Isso dá erro:

```jsx
"{nome:'Anderson'}"
```

Porque JSON exige, normalmente, chaves e valores de texto com aspas duplas.

### Resumo

```jsx
JSON.parse()
```

= **pegar um texto JSON e transformar em objeto JavaScript**.

Forma fácil de lembrar:

```
parse = converter texto em objeto
```

E o contrário é:

```jsx
JSON.stringify()
```

que transforma objeto JavaScript em texto JSON.

</details>

<details>
<summary><strong>JSON.stringify() - serve para transformar um objeto JavaScript em texto no formato JSON.</strong></summary>

**`JSON.stringify()`** em JavaScript serve para **transformar um objeto JavaScript em texto no formato JSON**.

Na prática, ele faz o contrário de `JSON.parse()`.

### Exemplo prático

Você tem um objeto:

```jsx
const usuario = {
    nome: "Anderson",
    idade: 27
};
```

Se quiser transformar esse objeto em texto JSON:

```jsx
const texto = JSON.stringify(usuario);

console.log(texto);
```

Resultado:

```
{"nome":"Anderson","idade":27}
```

Agora `texto` é uma **string**.

### Pense assim

```
objeto JavaScript
↓
JSON.stringify()
↓
texto JSON
```

### Onde isso é usado?

Muito quando você precisa salvar ou enviar dados.

Por exemplo, no `localStorage`:

```jsx
const usuario = {
    nome: "Anderson",
    idade: 27
};

localStorage.setItem("usuario", JSON.stringify(usuario));
```

Depois, para recuperar:

```jsx
const dados = localStorage.getItem("usuario");

const usuarioSalvo = JSON.parse(dados);
```

Então o fluxo fica:

```
Objeto
↓
JSON.stringify()
↓
Texto
↓
salva/envia
↓
JSON.parse()
↓
Objeto novamente
```

### Comparando os dois

```
JSON.stringify()
→ objeto para texto

JSON.parse()
→ texto para objeto
```

### Resumo

```jsx
JSON.stringify(objeto)
```

= **transformar um objeto JavaScript em texto JSON**.

</details>

</details>

<details>
<summary><strong>Requisições HTTP</strong></summary>

<details>
<summary><strong>XMLHttpRequest() - usada para fazer requisições HTTP</strong></summary>

**`XMLHttpRequest()`** é uma ferramenta do JavaScript usada para **fazer requisições HTTP**, ou seja, buscar ou enviar dados para um servidor sem precisar recarregar a página inteira.

Hoje ela ainda existe, mas em código moderno normalmente usamos mais o **`fetch()`**.

### Na prática

Imagine que seu site precisa buscar dados de usuários em uma API.

Com `XMLHttpRequest()` você pode fazer algo assim:

```jsx
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.exemplo.com/usuarios");

xhr.onload = function () {
    console.log(xhr.responseText);
};

xhr.send();
```

A ideia é:

```
JavaScript
   ↓
XMLHttpRequest
   ↓
faz pedido para o servidor
   ↓
servidor responde
   ↓
JavaScript recebe os dados
```

### O que cada parte faz?

```jsx
new XMLHttpRequest()
```

Cria o objeto que vai fazer a requisição.

```jsx
xhr.open("GET", "URL")
```

Prepara a requisição.

Aqui:

```
GET
```

significa buscar dados.

Depois:

```jsx
xhr.send()
```

envia a requisição.

E:

```jsx
xhr.onload = function () {
```

define o que deve acontecer quando a resposta chegar.

### Exemplo simples

```jsx
const xhr = new XMLHttpRequest();

xhr.open("GET", "dados.json");

xhr.onload = function () {
    console.log(xhr.responseText);
};

xhr.send();
```

Se `dados.json` tiver:

```json
{
  "nome": "Anderson",
  "idade": 27
}
```

o JavaScript recebe esse conteúdo como resposta.

### Por que o nome é estranho?

`XMLHttpRequest` vem de uma época em que XML era muito usado para troca de dados.

Mas ele pode trabalhar com:

- JSON
- texto
- HTML
- XML
- outros formatos

Hoje JSON é muito mais comum.

### Hoje se usa mais `fetch()`

O mesmo tipo de coisa normalmente seria feito assim:

```jsx
fetch("dados.json")
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados);
    });
```

Então pense assim:

```
XMLHttpRequest → forma mais antiga
fetch()        → forma mais moderna
```

### Resumo

```jsx
new XMLHttpRequest()
```

= criar uma requisição para se comunicar com servidor/API sem recarregar a página.

</details>

</details>

<details>
<summary><strong>Projeto Cafeteria — revisão prática</strong></summary>

<details>
<summary><strong>Fluxo completo — como os conceitos trabalham juntos</strong></summary>


<pre><code>Usuário clica em "Adicionar ao Carrinho"
↓
addEventListener()
detecta o clique
↓
preventDefault()
impede o comportamento padrão do link
↓
closest()
descobre qual card foi clicado
↓
querySelector()
encontra nome e preço
↓
textContent
lê os textos do HTML
↓
converterPreco()
replace() + trim() + Number()
↓
cria o objeto item
{ nome, preco, quantidade, precoNumero }
↓
find()
procura se o produto já existe no carrinho
↓
if / else
├─ existe → quantidade++
└─ não existe → push(item)
↓
atualizarCarrinho()
↓
forEach()
percorre os produtos
↓
subtotal
preço × quantidade
↓
createElement() + appendChild()
mostram os itens na página
↓
reduce()
soma as quantidades
↓
totalCarrinho
soma os subtotais
↓
Carrinho atualizado na tela</code></pre>
<p>Esse fluxo é importante porque mostra que os comandos não existem isoladamente: cada um resolve uma pequena parte de um problema maior.</p>


</details>

</details>

