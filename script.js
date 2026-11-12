// ==========================================
// 1. BANCO DE DADOS DO CONTEÚDO (ERER)
// ==========================================

const biografiasData = [
  {
    categoria: "Resistência & Liderança Negra",
    nome: "Dandara dos Palmares",
    descricao: "Guerreira negra que liderou o exército palmarino ao lado de Zumbi. Dominava técnicas de capoeira, estratégias de defesa e recusou acordos que mantivessem qualquer pessoa escravizada."
  },
  {
    categoria: "Literatura & Abolicionismo",
    nome: "Maria Firmina dos Reis",
    descricao: "Primeira romancista negra do Brasil (autora de 'Úrsula', 1859) e fundadora da primeira escola mista e gratuita do Maranhão, usando a educação como ferramenta de emancipação."
  },
  {
    categoria: "Filosofia & Meio Ambiente",
    nome: "Ailton Krenak",
    descricao: "Líder indígena, ambientalista, filósofo e imortal da Academia Brasileira de Letras. Autor de 'Ideias para Adiar o Fim do Mundo', defende a harmonia entre humanidade e natureza."
  },
  {
    categoria: "Filosofia & Direitos Humanos",
    nome: "Sueli Carneiro",
    descricao: "Filósofa, escritora e fundadora do Geledés (Instituto da Mulher Negra). Referência fundamental no pensamento sobre feminismo negro e combate ao epistemicídio no Brasil."
  }
];

const cienciaData = [
  {
    area: "Matemática & Computação",
    titulo: "Osso de Ishango & Lógica Binária",
    descricao: "Encontrado na África Central (20.000 a.C.), o Osso de Ishango demonstra sequências de números primos. Além disso, sistemas divinatórios africanos como o Ifá operam em base binária (2^8 = 256), precursora da lógica computacional moderna."
  },
  {
    area: "Engenharia & Metalurgia",
    titulo: "Siderurgia na África Antiga",
    descricao: "Povos como os Haya (atual Tanzânia) desenvolveram fornos de fundição de aço há mais de 2.000 anos que atingiam temperaturas superiores às dos fornos europeus da mesma época."
  },
  {
    area: "Agroecologia & Sustentabilidade",
    titulo: "Terra Preta de Índio (Amazônia)",
    descricao: "Solo antropogênico altamente fértil criado por povos indígenas pré-colombianos através do manejo sustentável de biocarvão e matéria orgânica, estudado hoje para combater mudanças climáticas."
  },
  {
    area: "Astronomia Indígena",
    titulo: "Constelações Tupis-Guaranis",
    descricao: "Povos originários do Brasil mapearam constelações como a Ema (Guyra Nhandu) e o Homem Velho, utilizando os astros para prever estações de plantio, colheita e ciclos das marés."
  }
];

const glossarioData = [
  {
    termo: "Antirracismo",
    definicao: "Postura ativa e prática cotidiana de identificação, questionamento e combate ao racismo em suas dimensões individuais, institucionais e estruturais."
  },
  {
    termo: "Racismo Estrutural",
    definicao: "Conjunto de práticas históricas, culturais, institucionais e econômicas que naturalizam desigualdades raciais na sociedade, indo além de atos isolados de preconceito."
  },
  {
    termo: "Ancestralidade",
    definicao: "Vínculo histórico, cultural e espiritual com os antepassados, fundamental nas cosmovisões africanas e indígenas para orientar a identidade e as ações no presente."
  },
  {
    termo: "Equidade",
    definicao: "Princípio de justiça social que reconhece as diferentes condições e barreiras enfrentadas por cada grupo, oferecendo recursos e oportunidades proporcionais para alcançar a igualdade real."
  },
  {
    termo: "Epistemicídio",
    definicao: "Apagamento, desvalorização ou destruição sistemática dos saberes, ciências, filosofias e formas de produção de conhecimento de povos negros e indígenas."
  },
  {
    termo: "Letramento Racial",
    definicao: "Processo contínuo de reeducação que permite compreender como a raça estrutura as relações sociais, desenvolvendo repertório crítico para promover a igualdade."
  }
];

const quizPerguntas = [
  {
    pergunta: "Qual o significado do símbolo africano Adinkra 'Sankofa'?",
    opcoes: [
      "Avançar sem olhar para o passado",
      "Voltar e buscar o conhecimento ancestral para construir o futuro",
      "A força exclusiva da tecnologia moderna",
      "A separação entre ciência e cultura"
    ],
    correta: 1,
    explicacao: "Sankofa significa 'nunca é tarde para voltar e apanhar aquilo que ficou atrás', valorizando a sabedoria ancestral."
  },
  {
    pergunta: "Quem foi a primeira romancista negra do Brasil, autora do livro 'Úrsula' (1859)?",
    opcoes: [
      "Carolina Maria de Jesus",
      "Conceição Evaristo",
      "Maria Firmina dos Reis",
      "Djamila Ribeiro"
    ],
    correta: 2,
    explicacao: "Maria Firmina dos Reis publicou 'Úrsula' em 1859, obra pioneira da literatura abolicionista brasileira."
  },
  {
    pergunta: "O que é a 'Terra Preta de Índio' encontrada na Amazônia?",
    opcoes: [
      "Um tipo de minério vulcânico raro",
      "Um solo altamente fértil criado intencionalmente por povos indígenas antigos",
      "Uma área desmatada no século XIX",
      "Um tipo de rocha sedimentar marinha"
    ],
    correta: 1,
    explicacao: "É uma tecnologia agroecológica indígena milenar que mantém o solo fértil e sequestra carbono até hoje."
  },
  {
    pergunta: "Qual a diferença entre Igualdade e Equidade no letramento racial?",
    opcoes: [
      "São sinônimos exatos",
      "Igualdade dá o mesmo a todos; Equidade considera as desigualdades históricas para dar a cada um o que precisa",
      "Equidade se aplica apenas à economia",
      "Igualdade é um conceito exclusivo da matemática"
    ],
    correta: 1,
    explicacao: "A equidade reconhece que pontos de partida desiguais exigem políticas e suportes específicos para alcançar justiça."
  },
  {
    pergunta: "O que significa o conceito de 'Epistemicídio'?",
    opcoes: [
      "O estudo das epidemias tropicais",
      "O apagamento e invalidação dos saberes e ciências de povos não-brancos",
      "A criação de novas linguagens de programação",
      "A preservação de bibliotecas históricas"
    ],
    correta: 1,
    explicacao: "O conceito, muito trabalhado por Sueli Carneiro, denuncia a invisibilização das contribuições científicas africanas e indígenas."
  }
];

// ==========================================
// 2. NAVEGAÇÃO SPA E MENU MOBILE
// ==========================================

const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.page-section');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

function navegarPara(targetId) {
  sections.forEach(sec => sec.classList.remove('active'));
  navButtons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(targetId).classList.add('active');
  const activeBtn = document.querySelector(`.nav-btn[data-target="${targetId}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // Fecha menu mobile após clicar
  navLinks.classList.remove('open');
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    navegarPara(btn.getAttribute('data-target'));
  });
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ==========================================
// 3. RENDERIZAÇÃO DINÂMICA DOS EIXOS
// ==========================================

function renderizarCards() {
  const gridBio = document.getElementById('grid-biografias');
  gridBio.innerHTML = biografiasData.map(item => `
    <article class="card">
      <span class="card-tag">${item.categoria}</span>
      <h3>${item.nome}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join('');

  const gridCiencia = document.getElementById('grid-ciencia');
  gridCiencia.innerHTML = cienciaData.map(item => `
    <article class="card">
      <span class="card-tag">${item.area}</span>
      <h3>${item.titulo}</h3>
      <p>${item.descricao}</p>
    </article>
  `).join('');
}

// ==========================================
// 4. GLOSSÁRIO PESQUISÁVEL EM TEMPO REAL
// ==========================================

const inputBusca = document.getElementById('busca-glossario');
const listaGlossario = document.getElementById('lista-glossario');

function renderizarGlossario(filtro = "") {
  const termoLimpo = filtro.toLowerCase().trim();
  const filtrados = glossarioData.filter(item =>
    item.termo.toLowerCase().includes(termoLimpo) ||
    item.definicao.toLowerCase().includes(termoLimpo)
  );

  if (filtrados.length === 0) {
    listaGlossario.innerHTML = `<p style="color: var(--texto-secundario);">Nenhum termo encontrado para "${filtro}".</p>`;
    return;
  }

  listaGlossario.innerHTML = filtrados.map(item => `
    <div class="glossario-item">
      <h4>${item.termo}</h4>
      <p>${item.definicao}</p>
    </div>
  `).join('');
}

inputBusca.addEventListener('input', (e) => {
  renderizarGlossario(e.target.value);
});

// ==========================================
// 5. QUIZ GAMIFICADO INTERATIVO
// ==========================================

let perguntaAtual = 0;
let pontuacao = 0;

const elProgresso = document.getElementById('quiz-progresso');
const elPontos = document.getElementById('quiz-pontos');
const elPergunta = document.getElementById('quiz-pergunta');
const elOpcoes = document.getElementById('quiz-opcoes');
const elFeedback = document.getElementById('quiz-feedback');
const btnProxima = document.getElementById('btn-proxima');

function carregarPergunta() {
  const atual = quizPerguntas[perguntaAtual];
  elProgresso.textContent = `Pergunta ${perguntaAtual + 1} de ${quizPerguntas.length}`;
  elPontos.textContent = `Pontuação: ${pontuacao}`;
  elPergunta.textContent = atual.pergunta;
  elFeedback.textContent = "";
  btnProxima.classList.add('hidden');

  elOpcoes.innerHTML = "";
  atual.opcoes.forEach((opcao, index) => {
    const btn = document.createElement('button');
    btn.classList.add('opcao-btn');
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(index, btn);
    elOpcoes.appendChild(btn);
  });
}

function verificarResposta(indiceEscolhido, botaoClicado) {
  const atual = quizPerguntas[perguntaAtual];
  const todosBotoes = document.querySelectorAll('.opcao-btn');

  todosBotoes.forEach(b => b.disabled = true);

  if (indiceEscolhido === atual.correta) {
    botaoClicado.classList.add('correta');
    pontuacao += 20;
    elPontos.textContent = `Pontuação: ${pontuacao}`;
    elFeedback.style.color = "#4ade80";
    elFeedback.textContent = `Correto! ${atual.explicacao}`;
  } else {
    botaoClicado.classList.add('errada');
    todosBotoes[atual.correta].classList.add('correta');
    elFeedback.style.color = "#f87171";
    elFeedback.textContent = `Incorreto. ${atual.explicacao}`;
  }

  btnProxima.classList.remove('hidden');
}

btnProxima.addEventListener('click', () => {
  perguntaAtual++;
  if (perguntaAtual < quizPerguntas.length) {
    carregarPergunta();
  } else {
    finalizarQuiz();
  }
});

function finalizarQuiz() {
  elPergunta.textContent = "Desafio Concluído!";
  elOpcoes.innerHTML = `
    <p style="font-size: 1.1rem; margin: 1rem 0;">
      Você alcançou <strong>${pontuacao} de ${quizPerguntas.length * 20} pontos</strong>!
    </p>
  `;
  elFeedback.textContent = "";
  btnProxima.textContent = "Reiniciar Quiz";
  btnProxima.onclick = () => {
    perguntaAtual = 0;
    pontuacao = 0;
    btnProxima.textContent = "Próxima Pergunta";
    btnProxima.onclick = () => {
      perguntaAtual++;
      if (perguntaAtual < quizPerguntas.length) carregarPergunta();
      else finalizarQuiz();
    };
    carregarPergunta();
  };
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================
renderizarCards();
renderizarGlossario();
carregarPergunta();