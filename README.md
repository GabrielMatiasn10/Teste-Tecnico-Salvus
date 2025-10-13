🧠 Guia Técnico Salvus — Node.js, React.js, Bancos de Dados e Git 
Este documento reúne explicações claras e objetivas sobre conceitos fundamentais de Node.js, React.js, bancos de dados e Git.
Ideal para entrevistas técnicas, estudos ou revisões rápidas. 
 🌀 Node.js 
🔹 O que é o Event Loop e como ele funciona 
O Event Loop é o mecanismo central do Node.js responsável por gerenciar a execução de código assíncrono. 
Como o Node.js é single-threaded, ele não cria múltiplas threads para tarefas simultâneas.
Em vez disso, ele usa o Event Loop para gerenciar eventos e callbacks de forma não bloqueante. 
🧩 Funcionamento Simplificado: 
O código principal é executado na call stack (pilha principal).
Operações assíncronas (I/O, timers, HTTP, etc.) são enviadas para o Thread Pool (libuv).
Quando terminam, seus callbacks vão para a fila de eventos.
O Event Loop monitora se a stack está vazia e, se estiver, pega o próximo callback da fila para executar. 
🔁 Isso permite que o Node.js execute tarefas de forma eficiente sem bloquear o fluxo principal. 
 🔹 Diferença entre Callbacks, Promises e Async/AwaitConceito Descrição ExemploCallback Função passada como argumento e executada após uma tarefa
 fs.readFile('file.txt', (err, data) => {...})assíncrona. Pode gerar o callback hell.Promise Representa uma operação assíncrona que pode estar pendente, resolvida
 fetch(url).then(res => res.json()).catch(err => console.error(err))ou rejeitada.Async/Await Sintaxe moderna baseada em Promises que torna o código mais limpo e
 const data = await fetch(url).then(r => r.json())legível. 
✅ Resumo:
Callbacks → Promises → Async/Await são evoluções no tratamento assíncrono, tornando o código cada vez mais legível e fácil de manter. 
 🔹 Tratamento de Erros no Node.js 
Exemplo com Callback: 
fs.readFile('arquivo.txt', (err, data) => {
if (err) {
console.error('Erro ao ler arquivo:', err);
return;
}
console.log(data.toString());
});

Exemplo com Promise: 
fetch('https://api.exemplo.com/dados')
.then(res => res.json())
.catch(err => console.error('Erro na requisição:', err));

Exemplo com Async/Await: 
try {
const res = await fetch('https://api.exemplo.com/dados');
const data = await res.json();
console.log(data);
} catch (err) {
console.error('Erro ao buscar dados:', err);
}

⚛️ React.js 
🔹 Diferença entre Componentes Funcionais e de ClasseTipo CaracterísticasComponente Funcional São funções JavaScript que retornam JSX. Usam Hooks para gerenciar estado e ciclo de vida.Componente de Classe São classes que estendem React.Component. Usam this.state e métodos de ciclo de vida como componentDidMount(). 
📘 Hoje em dia, os componentes funcionais são os mais usados por serem mais simples e performáticos. 
 🔹 Conceito de “State” e “Props”Conceito Descrição Mutável Onde é definidoState Dados internos do componente que podem mudar com o tempo. ✅ Sim Dentro do próprio componenteProps Dados recebidos de um componente pai. ❌ Não Passados via atributos no JSX 
Exemplo: 
function Saudacao({ nome }) {
const [contador, setContador] = useState(0);
return (
<div>
<h1>Olá, {nome}!</h1>
<button onClick={() => setContador(contador + 1)}>
Cliquei {contador} vezes
</button>
</div>
);
}

 🔹 O que são Hooks no React 
Hooks são funções especiais que permitem usar recursos do React (como state e ciclo de vida) em componentes funcionais. 
Principais Hooks:Hook FinalidadeuseState() Cria e gerencia estados locais.useEffect() Executa efeitos colaterais (como chamadas de API).useContext() Acessa dados do contexto global sem passar props manualmente.useRef() Cria referências para elementos DOM.useMemo() / useCallback() Otimizam re-renderizações e funções. 
 🗄️ Bancos de Dados 
🔹 Diferença entre Bancos Relacionais e Não RelacionaisTipo Estrutura Exemplo Quando usarRelacional (SQL) Tabelas com linhas e colunas (modelo
 MySQL, PostgreSQL Quando há relações complexas entre dados.estruturado).Não Relacional (NoSQL) Armazena dados como documentos, grafos ou
 MongoDB, Firebase Quando os dados são dinâmicos e não estruturados.chave-valor. 
 🔹 O que é Normalização 
A normalização é o processo de organizar dados em tabelas para eliminar redundâncias e garantir integridade referencial.
Divide uma tabela grande em várias menores, conectadas por chaves estrangeiras (FK). 
Benefícios: 
Evita duplicação de dados
Melhora a consistência
Facilita manutenção 
 🔹 Escalabilidade Horizontal de Banco de Dados 
Escalar horizontalmente significa adicionar mais servidores (nós) em vez de aumentar o poder de um único servidor.É útil para lidar com alto volume de acessos e dados. 
Estratégias: 
Sharding: dividir dados entre diferentes servidores.
Replicação: copiar dados entre instâncias para leitura distribuída.
Balanceamento de carga: distribuir requisições entre múltiplos nós. 
 🧩 Git 
🔹 O que é o Git e por que é usado 
O Git é um sistema de controle de versão distribuído.
Permite acompanhar mudanças no código, colaborar em equipe e manter histórico de todas as versões do projeto. 
Vantagens: 
Controle de histórico e versões
Trabalho em equipe com branches
Reversão fácil de mudanças 
 🔹 O que é um Branch 
Um branch é uma ramificação independente do projeto, usada para desenvolver novas funcionalidades sem afetar o código principal. 
Comandos úteis: 
git branch nova-feature # cria um novo branch
git checkout nova-feature # muda para o branch
git merge nova-feature # mescla o branch com o principal

Em projetos grandes, é comum usar estratégias como Git Flow ou Feature Branches para manter a organização. 
 🔹 O que são Merge Conflicts e como resolvê-los 
Um merge conflict ocorre quando duas alterações afetam a mesma linha de um arquivo ou parte do código.
O Git não sabe qual mudança manter. 
Exemplo de resolução: 
O Git marca o conflito no arquivo: ```txt <<<<<<< HEAD 
versão A
versão B  nova-feature ```
O desenvolvedor escolhe ou combina as versões.
Marca o conflito como resolvido: bash git add arquivo git commit 
