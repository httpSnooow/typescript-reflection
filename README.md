<div align="center">

![header](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2&height=220&section=header&text=ts-reflection-example&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Reflection%20%C2%B7%20Duck%20Typing%20%C2%B7%20Type%20Guards%20em%20TypeScript&descAlignY=58&descSize=16&descColor=bfdbfe)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![reflect-metadata](https://img.shields.io/badge/reflect--metadata-0.2-6366f1?style=flat-square&logo=npm&logoColor=white)](https://www.npmjs.com/package/reflect-metadata)
[![ts-node](https://img.shields.io/badge/ts--node-10.x-3178c6?style=flat-square&logo=ts-node&logoColor=white)](https://typestrong.org/ts-node/)
[![experimentalDecorators](https://img.shields.io/badge/experimentalDecorators-true-10b981?style=flat-square&logo=typescript&logoColor=white)]()
[![emitDecoratorMetadata](https://img.shields.io/badge/emitDecoratorMetadata-true-10b981?style=flat-square&logo=typescript&logoColor=white)]()

</div>

## 📋 Índice

- [O que é isso?](#-o-que-é-isso)
- [Como funciona](#️-como-funciona)
- [Conceitos](#-conceitos)
- [Como rodar](#-como-rodar)
- [Estrutura do Repositório](#-estrutura-do-repositório)
- [Exercício 02 — Decorators & Reflexão com Metadados](#-exercício-02--decorators--reflexão-com-metadados)

---

## 🧠 O que é isso?

Este repositório é um **exercício prático** de TypeScript que demonstra quatro pilares de tipagem dinâmica e reflexão em runtime:

| Conceito | Módulo | O que demonstra |
|---|---|---|
| **Introspecção / Reflexão** | `InspectorUtils.ts` | Inspeciona classe, atributos de instância e métodos de qualquer objeto |
| **Manipulação Dinâmica** | `DynamicUtils.ts` | Altera atributos e invoca métodos pelo nome (string) em runtime |
| **Duck Typing** | `Classes.ts` | Função universal que opera em qualquer objeto com `preco`, independente da classe |
| **Type Guards** | `TypeGuards.ts` | Narrowing seguro com predicado de tipo (`obj is Precificavel`) |
| **Decorators + Metadados** | `exercicio02/` | Decorator `@Tabela` e `@Campo` com `reflect-metadata` para mapeamento ORM-like |

---

## ⚙️ Como funciona

```
index.ts
  │
  ├── InspectorUtils.inspecionarObjeto(p)
  │     └── Imprime: classe, atributos da instância, métodos do protótipo
  │
  ├── DynamicUtils.alterarAtributo(p, "preco", 4500)
  │     └── Modifica atributos pelo nome via indexação dinâmica
  │
  ├── DynamicUtils.invocarMetodo(p, "aplicarDesconto", 10)
  │     └── Chama métodos pelo nome como string em runtime
  │
  ├── Classes.processarReajusteUniversal(objeto, desconto)
  │     └── Duck typing: opera em Produto, ItemTerceiros ou qualquer objeto com 'preco'
  │
  └── TypeGuards.demonstrarTypeGuard(obj)
        └── isPrecificavel(obj) → narrowing seguro para interface Precificavel
```

O ponto de entrada `index.ts` orquestra os quatro cenários em sequência, demonstrando cada conceito com instâncias de `Produto`, `ItemTerceiros` e `RelatorioLog`.

---

## 📦 Conceitos

### 🔍 Introspecção (InspectorUtils)

`inspecionarObjeto()` usa `Object.keys()`, `objeto.constructor.name` e `Object.getOwnPropertyNames(Object.getPrototypeOf())` para revelar a estrutura interna de qualquer objeto sem conhecê-lo em tempo de compilação.

```typescript
inspecionarObjeto(p);
// === Introspecção do Objeto ===
// Classe: Produto
// Atributos da Instância: titulo, preco, categoria
// Métodos da Classe: aplicarDesconto
```

---

### 🔧 Manipulação Dinâmica (DynamicUtils)

`alterarAtributo()` e `invocarMetodo()` utilizam indexação dinâmica (`objeto[nome]`) para modificar estado e executar comportamentos pelo nome, com validação de existência em runtime.

```typescript
alterarAtributo(p, "preco", 4500);       // → true
invocarMetodo(p, "aplicarDesconto", 10); // → aplica 10% de desconto
```

---

### 🦆 Duck Typing (Classes)

`processarReajusteUniversal()` verifica se o objeto possui `preco` usando o operador `in` — não importa qual a classe, só importa o comportamento. Isso é a essência do duck typing: *"Se tem `preco`, eu processo."*

```typescript
processarReajusteUniversal(produto, 10);     // funciona
processarReajusteUniversal(itemTerceiros, 15); // funciona
processarReajusteUniversal(relatorioLog, 10);  // avisa que não é compatível
```

---

### 🛡️ Type Guards (TypeGuards)

`isPrecificavel()` é um **predicado de tipo** (`obj is Precificavel`) que realiza narrowing seguro em runtime, permitindo ao compilador TypeScript saber com certeza o tipo após a verificação.

```typescript
if (isPrecificavel(obj)) {
  // aqui o TypeScript sabe que obj.preco existe e é number
  console.log(`Preço: R$ ${obj.preco}`);
}
```

---

## 🚀 Como rodar

**Pré-requisitos:** Node.js instalado.

```bash
# Instalar dependências
npm install

# Rodar o exercício 01
npm run dev

# Rodar o exercício 02 (Decorators + Reflexão)
npm run aula03:anotacoes
```

**Saída esperada (exercício 01):**

```
--- PARTE 1 e 2: Reflexão---
=== Introspecção do Objeto ===
Classe: Produto
Atributos da Instância: titulo, preco, categoria
Métodos da Classe: aplicarDesconto
...
--- PARTE 3: Duck Typing ---
...
--- PARTE 4: Type Guard ---
...
```

---

## 📁 Estrutura do Repositório

```
ts-reflection-example/
│
├── src/
│   ├── exercicio01/
│   │   ├── index.ts           # Ponto de entrada — orquestra os 4 cenários
│   │   ├── Classes.ts         # Classes do domínio + processarReajusteUniversal (duck typing)
│   │   ├── InspectorUtils.ts  # Introspecção de objetos em runtime
│   │   ├── DynamicUtils.ts    # Manipulação dinâmica de atributos e métodos
│   │   └── TypeGuards.ts      # Interface Precificavel + predicado isPrecificavel
│   │
│   └── exercicio02/
│       ├── anotacao/
│       │   ├── Campo.ts       # Decorator @Campo — registra metadados de colunas
│       │   └── Tabela.ts      # Decorator @Tabela — nome da tabela (opcional)
│       ├── modelo/
│       │   ├── SuperTabela.ts # Classe base com getPk, setPk e getTableName reflexivos
│       │   ├── Aluno.ts       # Entidade decorada com @Tabela("tb_aluno")
│       │   └── Pessoa.ts      # Entidade decorada com @Tabela("tb_pessoas")
│       ├── utils/
│       │   └── ReflexaoTabela.ts # Utilitário reflexivo: lê metadados em runtime
│       └── teste/
│           └── TesteAnotacoes.ts # Ponto de entrada do exercício 02
│
├── tsconfig.json              # experimentalDecorators + emitDecoratorMetadata habilitados
├── package.json               # Scripts de execução + dependências
└── .gitignore
```

---

## 🏷️ Exercício 02 — Decorators & Reflexão com Metadados

O **exercício 02** traduz o padrão Java de `@Anotação + Reflexão` para TypeScript, simulando um mini-ORM baseado em metadados.

### Como funciona

```
TesteAnotacoes.ts
  │
  ├── new Pessoa("Coisa", 10, "123456")
  │     └── @Tabela("tb_pessoas") registra o nome da tabela no construtor
  │     └── @Campo({...}) registra cada coluna via reflect-metadata
  │
  ├── tabela.getTableName()
  │     └── SuperTabela → ReflexaoTabela.getTableName()
  │           └── Reflect.getMetadata(TABELA_METADATA_KEY, construtor)
  │
  ├── tabela.getPkName() / getPk() / setPk()
  │     └── ReflexaoTabela localiza o @Campo({ isPk: true })
  │           └── Invoca getter/setter dinamicamente pelo nome
  │
  └── tabela.isCamposObrigatoriosPreenchidos()
        └── Filtra campos com isObrigatorio: true e verifica valores
```

### Decorator `@Tabela` — opcional

```typescript
@Tabela("tb_aluno")   // nome explícito
class Aluno extends SuperTabela<string> { ... }

@Tabela()             // sem nome → usa "pessoa" (nome da classe em minúsculo)
class Pessoa extends SuperTabela<number> { ... }

// Sem decorator → fallback automático pelo nome da classe
class Qualquer extends SuperTabela<number> { ... }
```

### Correspondência Java → TypeScript

| Java | TypeScript |
|---|---|
| `@Campo(...)` em um atributo | `@Campo({...})` em uma propriedade |
| `@Retention(RUNTIME)` | metadado armazenado por `reflect-metadata` |
| `Field.getAnnotation(Campo.class)` | `Reflect.getMetadata(CAMPOS_METADATA_KEY, construtor)` |
| `SuperTabela<TypePK>` | `SuperTabela<TypePK>` |
| `Method.invoke(obj, args)` | `objeto[nomeMetodo].apply(objeto, args)` |

---

<div align="center">

---

🇺🇸 **English version below**

---

</div>

<br/>

> **A hands-on TypeScript exercise covering four pillars of dynamic typing and runtime reflection:**
> Introspection · Dynamic Manipulation · Duck Typing · Type Guards.

<br/>

---

## 📋 Table of Contents

- [What is this?](#-what-is-this)
- [How it works](#️-how-it-works-1)
- [Concepts](#-concepts)
- [How to run](#-how-to-run-1)
- [Repository Structure](#-repository-structure-1)
- [Exercise 02 — Decorators & Metadata Reflection](#-exercise-02--decorators--metadata-reflection)

---

## 🧠 What is this?

This repository is a **hands-on TypeScript exercise** demonstrating four pillars of dynamic typing and runtime reflection:

| Concept | Module | What it demonstrates |
|---|---|---|
| **Introspection / Reflection** | `InspectorUtils.ts` | Inspects class name, instance attributes, and methods of any object |
| **Dynamic Manipulation** | `DynamicUtils.ts` | Reads/writes attributes and invokes methods by name (string) at runtime |
| **Duck Typing** | `Classes.ts` | A universal function that operates on any object with `preco`, regardless of class |
| **Type Guards** | `TypeGuards.ts` | Safe narrowing with a type predicate (`obj is Precificavel`) |
| **Decorators + Metadata** | `exercicio02/` | `@Tabela` and `@Campo` decorators with `reflect-metadata` for ORM-like mapping |

---

## ⚙️ How it works

```
index.ts
  │
  ├── InspectorUtils.inspecionarObjeto(p)
  │     └── Prints: class name, instance attributes, prototype methods
  │
  ├── DynamicUtils.alterarAtributo(p, "preco", 4500)
  │     └── Modifies attributes by name via dynamic indexing
  │
  ├── DynamicUtils.invocarMetodo(p, "aplicarDesconto", 10)
  │     └── Calls methods by their string name at runtime
  │
  ├── Classes.processarReajusteUniversal(object, discount)
  │     └── Duck typing: works on Produto, ItemTerceiros, or any object with 'preco'
  │
  └── TypeGuards.demonstrarTypeGuard(obj)
        └── isPrecificavel(obj) → safe narrowing to the Precificavel interface
```

---

## 📦 Concepts

### 🔍 Introspection (InspectorUtils)

`inspecionarObjeto()` uses `Object.keys()`, `object.constructor.name`, and `Object.getOwnPropertyNames(Object.getPrototypeOf())` to reveal the internal structure of any object without knowing its type at compile time.

---

### 🔧 Dynamic Manipulation (DynamicUtils)

`alterarAtributo()` and `invocarMetodo()` use dynamic indexing (`object[name]`) to modify state and execute behaviors by name, with runtime existence validation.

---

### 🦆 Duck Typing (Classes)

`processarReajusteUniversal()` checks if the object has a `preco` property using the `in` operator — the class is irrelevant, only the shape matters. This is the essence of duck typing: *"If it has `preco`, I process it."*

---

### 🛡️ Type Guards (TypeGuards)

`isPrecificavel()` is a **type predicate** (`obj is Precificavel`) that performs safe runtime narrowing, allowing the TypeScript compiler to know with certainty the object's type after the check.

---

## 🚀 How to run

**Prerequisites:** Node.js installed.

```bash
# Install dependencies
npm install

# Run exercise 01
npm run dev

# Run exercise 02 (Decorators + Reflection)
npm run aula03:anotacoes
```

---

## 📁 Repository Structure

```
ts-reflection-example/
│
├── src/
│   ├── exercicio01/
│   │   ├── index.ts           # Entry point — orchestrates the 4 scenarios
│   │   ├── Classes.ts         # Domain classes + processarReajusteUniversal (duck typing)
│   │   ├── InspectorUtils.ts  # Runtime object introspection
│   │   ├── DynamicUtils.ts    # Dynamic attribute and method manipulation
│   │   └── TypeGuards.ts      # Precificavel interface + isPrecificavel predicate
│   │
│   └── exercicio02/
│       ├── anotacao/
│       │   ├── Campo.ts       # @Campo decorator — registers column metadata
│       │   └── Tabela.ts      # @Tabela decorator — table name (optional)
│       ├── modelo/
│       │   ├── SuperTabela.ts # Base class with reflective getPk, setPk, getTableName
│       │   ├── Aluno.ts       # Entity decorated with @Tabela("tb_aluno")
│       │   └── Pessoa.ts      # Entity decorated with @Tabela("tb_pessoas")
│       ├── utils/
│       │   └── ReflexaoTabela.ts # Reflective utility: reads metadata at runtime
│       └── teste/
│           └── TesteAnotacoes.ts # Entry point for exercise 02
│
├── tsconfig.json              # experimentalDecorators + emitDecoratorMetadata enabled
├── package.json               # Run scripts + dependencies
└── .gitignore
```

---

## 🏷️ Exercise 02 — Decorators & Metadata Reflection

Exercise 02 translates the Java `@Annotation + Reflection` pattern to TypeScript, simulating a mini ORM powered by metadata.

### `@Tabela` Decorator — optional

```typescript
@Tabela("tb_aluno")   // explicit name
class Aluno extends SuperTabela<string> { ... }

@Tabela()             // no name → uses "pessoa" (class name lowercased)
class Pessoa extends SuperTabela<number> { ... }

// No decorator → automatic fallback to class name
class Any extends SuperTabela<number> { ... }
```

### Java → TypeScript mapping

| Java | TypeScript |
|---|---|
| `@Campo(...)` on a field | `@Campo({...})` on a property |
| `@Retention(RUNTIME)` | metadata stored by `reflect-metadata` |
| `Field.getAnnotation(Campo.class)` | `Reflect.getMetadata(CAMPOS_METADATA_KEY, constructor)` |
| `SuperTabela<TypePK>` | `SuperTabela<TypePK>` |
| `Method.invoke(obj, args)` | `object[methodName].apply(object, args)` |

<br/>

<div align="center">

![footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=2&height=120&section=footer)

</div>
