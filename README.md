# 🧠 Teste Técnico Salvus — Node.js, React.js, Bancos de Dados e Git

Este documento reúne explicações claras e objetivas sobre conceitos fundamentais de **Node.js**, **React.js**, **bancos de dados** e **Git**.  
Ideal para entrevistas técnicas, estudos ou revisões rápidas.

---

## 🌀 Node.js

### 🔹 O que é o Event Loop e como ele funciona

O **Event Loop** é o mecanismo central do **Node.js** responsável por gerenciar a execução de código **assíncrono**.

Como o Node.js é **single-threaded**, ele não cria múltiplas threads para tarefas simultâneas.  
Em vez disso, ele usa o Event Loop para **gerenciar eventos e callbacks de forma não bloqueante**.

**Funcionamento simplificado:**
1. O código principal é executado na **call stack** (pilha principal).  
2. Operações assíncronas (I/O, timers, HTTP, etc.) são enviadas para o **Thread Pool** (libuv).  
3. Quando terminam, seus callbacks vão para a **fila de eventos**.  
4. O **Event Loop** monitora se a stack está vazia e, se estiver, pega o próximo callback da fila para executar.

🔁 Isso permite que o Node.js execute tarefas de forma eficiente sem bloquear o fluxo principal.

---

### 🔹 Diferença entre Callbacks, Promises e Async/Await

| Conceito | Descrição | Exemplo |
|-----------|------------|---------|
| **Callback** | Função passada como argumento e executada após uma tarefa assíncrona. Pode gerar o *callback hell*. | `fs.readFile('file.txt', (err, data) => {...})` |
| **Promise** | Representa uma operação assíncrona que pode estar *pendente*, *resolvida* ou *rejeitada*. | `fetch(url).then(res => res.json()).catch(err => console.error(err))` |
| **Async/Await** | Sintaxe moderna baseada em Promises que torna o código mais limpo e legível. | `const data = await fetch(url).then(r => r.json())` |

✅ **Resumo:**  
Callbacks → Promises → Async/Await são evoluções no tratamento assíncrono, tornando o código cada vez mais legível e fácil de manter.

---

### 🔹 Tratamento de Erros no Node.js

#### Exemplo com Callback:
```js
fs.readFile('arquivo.txt', (err, data) => {
  if (err) {
    console.error('Erro ao ler arquivo:', err);
    return;
  }
  console.log(data.toString());
});
