// Elementos da DOM
const rulesScreen = document.getElementById("rules-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const winScreen = document.getElementById("win-screen");
const keyAnimationScreen = document.getElementById("key-animation-screen");

const startButton = document.getElementById("start-button");
const restartButtonGameOver = document.getElementById("restart-button-gameover");
const restartButtonWin = document.getElementById("restart-button-win");
const nextPhaseButton = document.getElementById("next-phase-button");

const livesDisplay = document.getElementById("lives-display");
const keysDisplay = document.getElementById("keys-display");
const phaseTitle = document.getElementById("phase-title");
const challengeQuestion = document.getElementById("challenge-question");
const answerOptions = document.getElementById("answer-options");
const feedbackArea = document.getElementById("feedback-area");

const unlockedKeyImage = document.getElementById("unlocked-key-image");
const keyUnlockedTitle = document.getElementById("key-unlocked-title");
const timelineContainer = document.getElementById("timeline-container"); // Added for step 9

const backgroundMusic = document.getElementById("background-music");

// --- Desafios --- 
const challenges = {
    1: [ // Fase 1 - Bronze
        { question: "Com cartões perfurados, fiz arte virar padrão, Controlando teares com pura precisão. Sem saber, plantei a raiz da computação, Num tear francês, nasceu a inovação. Quem sou eu?", options: ["Debóra Araújo", "Grace Hopper", "Charles Babbage", "Joseph Marie Jacquard"], correct: 3 },
        { question: "Tenho bilhões de transistores a trabalhar, Sou o cérebro que faz tudo funcionar. Dentro de mim, instruções vão correr, Sou essencial para o computador viver. Quem sou eu?", options: ["Microprocessador", "CPU", "Transistor", "Memória"], correct: 0 },
        { question: "Sou o programa que tudo gerencia, Sem mim, nada obedece com maestria. Com interface ou só terminal, Sou quem manda no sistema final. Quem sou eu?", options: ["Placa-mãe", "Sistema operacional", "Fita magnética", "Mark I"], correct: 1 },
        { question: "Com três terminais, sou discreto e genial, Substituí válvulas de forma radical. Pequeno, veloz e fácil de integrar, Sem mim, o computador não podia avançar. Quem sou eu?", options: ["Pipeline", "ULA", "Transistor", "Theard"], correct: 2 },
        { question: "Com instruções simples, sou bem veloz, Processo em linha, sem dar voz. Poucas ordens, mas com harmonia, Minha arquitetura traz eficiência e economia. Quem sou eu?", options: ["RISC", "Theard", "RAM", "CISC"], correct: 0 },
        { question: "Sou o menor entre os irmãos, Dentro da CPU guardo os grãos. Pequeno, rápido e essencial, Minha função é fundamental. Quem sou eu?", options: ["Registrador", "CISC", "CPU", "HD"], correct: 0 },
        { question: "Comigo, instruções fluem sem parar, Cada etapa tem seu lugar. Executo antes mesmo de acabar, Sou técnica pra tudo acelerar. Quem sou eu?", options: ["ULA", "Ciberespaço", "Realidade Aumentada", "Pipeline"], correct: 3 },
        { question: "Qual linguagem de programação foi uma das primeiras a ser usada amplamente, especialmente em mainframes?", options: ["TypeScript", "Assembly", "C++", "COBOL"], correct: 3 }
    ],
    2: [ // Fase 2 - Prata
        { question: "Qual é o resultado da divisão binária: 1100 ÷ 10?", options: ["0110", "0100", "1100", "0101"], correct: 0 },
        { question: "Qual é o resultado da subtração binária: 1010 - 0011?", options: ["0111", "0110", "1110", "1010"], correct: 0 },
        { question: "Qual é o resultado da adição binária: 1101 + 101?", options: ["10010", "1010", "10101", "0011"], correct: 0 },
        { question: "Qual é o resultado da multiplicação binária: 110 × 11?", options: ["10010", "10101", "0011", "10110"], correct: 0 },
    ],
    3: [ // Fase 3 - Ouro
        
       { question: "Se um software é gratuito, sem restrição, e roda no PC com satisfação, qual termo se encaixa melhor na explicação?", options: ["Freeware", " Shareware", "Trial", "Adware"], correct: 0 },
       { question: "Um sistema que cresce a cada fração, ganha novas partes em cada versão. Qual modelo segue essa progressão?", options: ["Kanban", "Prototipação", "Scrum", "Incremental"], correct: 3 },
       { question: "Se o objeto virtual some e reaparece, com movimentos tortos que ninguém merece, qual a provável falha que acontece?", options: ["Bug do sensor", "Problema de ergonomia", "Erro de renderização", "Falha de som"], correct: 0 },
       { question: "Quer usar um software só pra testar, mas depois vai ter que pagar. Que tipo é esse, que parece liberar?", options: ["Beta", "Trial", "Open Source", "Freeware"], correct: 1 },
       { question: "Se a imagem responde ao meu tocar, e até gestos começa a interpretar, qual módulo isso vem controlar?", options: ["Saída", "Processamento", "Entrada", "Visualização"], correct: 1 },
       { question: "Quando o software não está mais à venda, e você pensa: “a lei já não o defenda!” Mas, segundo a norma nacional, o que diz a lei sobre esse final?", options: ["Pode ser usado com permissão parcial", "Perde-se a proteção legal", "Vira automaticamente software livre", "Continua protegido, mesmo sem venda"], correct: 3 }
    ], 
    4: [ // Fase 4 - Diamante (Final)
        { 
            question: "Para abrir o portal final, você deve reconhecer a faísca inicial. No porão de uma universidade esquecida pelo tempo, entre livros de Pascal e circuitos queimados, uma jovem cientista chamada Artemis descobriu um projeto incompleto de 1837: a Máquina Analítica de Babbage, redesenhada com componentes modernos e algoritmos de realidade virtual. Ao conectar a máquina ao seu computador, Artemis ativou um modo oculto chamado 'Presença Total'. Ela foi lançada dentro de uma simulação interativa onde encontrou Allan Turing, que lhe entregou um pergaminho de símbolos e estruturas hexadecimais, como se fossem feitiços ancestrais da lógica. A máquina a encarava. Então, uma voz metálica ecoou no ambiente: — Responda, Artemis: 'Em que momento a tecnologia vence?' ",
            options: ["Quando, ao observar, ouvir ou tocar, já não se sabe mais se foi a máquina que falou ou se fomos nós.", "Quando, ao observar, ouvir ou tocar, a máquina replica com perfeição aquilo que o humano esperava escutar."],
            correct: 0 
        }
    ]
};

let currentChallengeData = null; // Armazena os dados do desafio atual (incluindo resposta correta)
let usedChallengeIndices = { 1: [], 2: [], 3: [] }; // Rastreia desafios usados por fase

// Estado do Jogo
let currentPhase = 0; // 0: Regras, 1: Bronze, 2: Prata, 3: Ouro, 4: Diamante
let lives = 4;
let challengesCompletedInPhase = 0;
let collectedKeys = []; // ['bronze', 'silver', 'gold']

const phases = [
    null, // Índice 0 não usado para fase
    { name: "FASE 1 - CHAVE DO CONHECIMENTO", key: "bronze", challengesNeeded: 5, keyImage: "assets/images/bronze_key.png" },
    { name: "FASE 2 - CHAVE DA ESTRATÉGIA", key: "prata", challengesNeeded: 4, keyImage: "assets/images/silver_key.png" },
    { name: "FASE 3 - CHAVE DA PERCEPEÇÃO", key: "ouro", challengesNeeded: 3, keyImage: "assets/images/gold_key.png" },
    { name: "FASE FINAL - CHAVE MESTRA", key: "diamond", challengesNeeded: 1, keyImage: "assets/images/diamond_master_key.png", background: "assets/images/final_arena.png" }
];

// --- Timeline Data --- (Adicionado no Passo 9)
const timelineEvents = [
    { year: "~1940s", title: "Binário", description: "Os primórdios: Computadores usavam código binário (0s e 1s)", icon: "01" },
    { year: "~1950s", title: "Assembly", description: "Linguagens de montagem (Assembly) surgem, mais próximas do hardware.", icon: "A>" },
    { year: "~1960s", title: "Linguagens de Alto Nível", description: "COBOL e FORTRAN facilitam a programação.", icon: "{...}" },
    { year: "~1970s", title: "Microprocessadores & Jogos", description: "Surge o microprocessador. Jogos como Pong e Adventure (com o 1º Easter Egg!).", icon: "👾" },
    { year: "~1980s", title: "PCs", description: "Computadores pessoais se popularizam", icon: "🕹️" },
    { year: "~1990s", title: "A Web & Gráficos 3D", description: "A World Wide Web conecta o mundo. Gráficos 3D revolucionam os jogos.", icon: "🌐" },
    { year: "~2000s", title: "IA & Mundos Virtuais", description: "Inteligência Artificial avança. Mundos virtuais e MMOs crescem.", icon: "🤖" },
    { year: "Hoje", title: "IA Complexa & Metaverso", description: "IA generativa, redes neurais profundas e a busca pelo Metaverso.", icon: "✨" }
];

// Funções Auxiliares
function showScreen(screenElement) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    screenElement.classList.add("active");
}

function updateLivesDisplay() {
    livesDisplay.innerHTML = "<span>VIDAS:</span>";
    for (let i = 0; i < 4; i++) {
        const coinImg = document.createElement("img");
        coinImg.src = "assets/images/golden_coin.png";
        coinImg.alt = "Vida";
        coinImg.classList.add("life-coin");
        if (i >= lives) {
            coinImg.style.opacity = "0.3"; // Vida perdida fica mais opaca
        }
        livesDisplay.appendChild(coinImg);
    }
}

function updateKeysDisplay() {
    keysDisplay.innerHTML = "<span>CHAVES:</span>";
    const keyOrder = ["bronze", "prata", "ouro"]; // Ordem de exibição
    keyOrder.forEach(keyType => {
        const keyData = phases.find(p => p && p.key === keyType);
        if (keyData) {
            const keyImg = document.createElement("img");
            keyImg.src = keyData.keyImage;
            keyImg.alt = keyType;
            if (collectedKeys.includes(keyType)) {
                keyImg.classList.add("collected");
            }
            keysDisplay.appendChild(keyImg);
        }
    });
}

function playSound(soundId) {
    // Placeholder para efeitos sonoros (implementar com <audio>)
    console.log(`Playing sound: ${soundId}`);
    // Exemplo: const sound = new Audio(`assets/audio/${soundId}.wav`); sound.play();
}

// Função para embaralhar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca elementos
    }
}

function startGame() {
    console.log("Iniciando jogo...");
    currentPhase = 1;
    lives = 4;
    challengesCompletedInPhase = 0;
    collectedKeys = [];
    usedChallengeIndices = { 1: [], 2: [], 3: [] }; // Reseta desafios usados
    updateLivesDisplay();
    updateKeysDisplay();
    loadPhase(currentPhase);
    showScreen(gameScreen);
    backgroundMusic.volume = 0.3; // Ajuste o volume conforme necessário
    backgroundMusic.play().catch(error => console.error("Erro ao tocar música:", error));
}

function loadPhase(phaseIndex) {
    console.log(`Carregando Fase ${phaseIndex}`);
    const phaseData = phases[phaseIndex];
    if (!phaseData) return; // Fase inválida

    phaseTitle.textContent = phaseData.name;
    challengesCompletedInPhase = 0;
    feedbackArea.textContent = "";
    feedbackArea.className = "feedback-area"; // Limpa classes de feedback

    // Mudar background para a fase final
    if (phaseIndex === 4) {
        document.getElementById("game-container").style.backgroundImage = `url('${phaseData.background}')`;
    } else {
         document.getElementById("game-container").style.backgroundImage = `url('assets/images/ui_frame.png')`;
    }

    loadChallenge();
}

function loadChallenge() {
    if (!phases[currentPhase]) return;

    const phaseChallenges = challenges[currentPhase];
    let challengeIndex = -1;

    // Seleciona um desafio não utilizado para fases 1-3
    if (currentPhase >= 1 && currentPhase <= 3) {
        const availableIndices = phaseChallenges.map((_, i) => i).filter(i => !usedChallengeIndices[currentPhase].includes(i));
        if (availableIndices.length === 0) {
            console.warn(`Resetando desafios usados para fase ${currentPhase}`);
            usedChallengeIndices[currentPhase] = [];
            challengeIndex = Math.floor(Math.random() * phaseChallenges.length);
        } else {
            challengeIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        }
        usedChallengeIndices[currentPhase].push(challengeIndex);
    } else { // Fase 4 tem apenas um desafio
        challengeIndex = 0;
    }

    const challenge = phaseChallenges[challengeIndex];
    currentChallengeData = { // Armazena dados do desafio atual
        question: challenge.question,
        options: [...challenge.options], // Cria cópia para embaralhar
        correctAnswer: challenge.options[challenge.correct] // Guarda o texto da resposta correta
    };

    // Embaralha as opções
    shuffleArray(currentChallengeData.options);

    console.log(`Carregando desafio ${challengesCompletedInPhase + 1} da fase ${currentPhase}: ${currentChallengeData.question}`);
    challengeQuestion.textContent = currentChallengeData.question;
    answerOptions.innerHTML = ""; // Limpa opções anteriores

    // Cria botões de resposta
    currentChallengeData.options.forEach(optionText => {
        const button = document.createElement("button");
        button.textContent = optionText;
        button.onclick = () => handleAnswer(optionText === currentChallengeData.correctAnswer);
        answerOptions.appendChild(button);
    });

    answerOptions.querySelectorAll("button").forEach(btn => btn.disabled = false);
    feedbackArea.textContent = "";
    feedbackArea.className = "feedback-area";
}

function handleAnswer(isCorrect) {
    answerOptions.querySelectorAll("button").forEach(btn => btn.disabled = true);

    console.log(`Resposta ${isCorrect ? "correta" : "incorreta"}`);
    if (isCorrect) {
        feedbackArea.textContent = "CORRETO!";
        feedbackArea.className = "feedback-area correct";
        playSound("correct");
        challengesCompletedInPhase++;

        if (currentPhase === 4) {
            setTimeout(winGame, 1500);
        } else if (challengesCompletedInPhase >= phases[currentPhase].challengesNeeded) {
            setTimeout(() => unlockKey(currentPhase), 1500);
        } else {
            setTimeout(loadChallenge, 1500);
        }
    } else {
        feedbackArea.textContent = "INCORRETO!";
        feedbackArea.className = "feedback-area incorrect";
        playSound("incorrect");
        
        if (currentPhase === 4)
            lives = 0;
        else 
            lives--;
        
        updateLivesDisplay();
        if (lives <= 0) {
            setTimeout(gameOver, 500);
        } else {
            setTimeout(loadChallenge, 1500);
        }
    }
}

function unlockKey(phaseIndex) {
    const phaseData = phases[phaseIndex];
    if (!phaseData || collectedKeys.includes(phaseData.key)) return;

    console.log(`Desbloqueando chave: ${phaseData.key}`);
    collectedKeys.push(phaseData.key);
    updateKeysDisplay();

    keyUnlockedTitle.textContent = `CHAVE DE ${phaseData.key.toUpperCase()} DESBLOQUEADA!`;
    unlockedKeyImage.src = phaseData.keyImage;
    unlockedKeyImage.alt = `Chave de ${phaseData.key}`;
    showScreen(keyAnimationScreen);
    playSound("key_unlock");
}

function nextPhase() {
    currentPhase++;
    if (currentPhase > 4) {
        console.error("Tentando ir para fase inválida após vitória");
        winGame();
    } else {
        loadPhase(currentPhase);
        showScreen(gameScreen);
    }
}

function gameOver() {
    console.log("Game Over");
    showScreen(gameOverScreen);
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    playSound("game_over");
}

// --- Função WinGame Atualizada (Passo 9) ---
function winGame() {
    console.log("Vitória!");
    showScreen(winScreen);
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    playSound("win");
    buildInteractiveTimeline(); // Chama a função para construir a timeline
}

// --- Função para Construir a Timeline (Passo 9) ---
function buildInteractiveTimeline() {
    timelineContainer.innerHTML = ""; // Limpa conteúdo anterior
    const timelineLine = document.createElement("div");
    timelineLine.classList.add("timeline-line");

    timelineEvents.forEach((event, index) => {
        const eventElement = document.createElement("div");
        eventElement.classList.add("timeline-event");
        eventElement.style.left = `${(index / (timelineEvents.length - 1)) * 90 + 5}%`; // Espaçamento

        const eventIcon = document.createElement("div");
        eventIcon.classList.add("timeline-icon");
        eventIcon.textContent = event.icon;
        eventIcon.title = `${event.year}: ${event.title}`; // Tooltip

        const eventDetails = document.createElement("div");
        eventDetails.classList.add("timeline-details");
        eventDetails.innerHTML = `<strong>${event.year}: ${event.title}</strong><p>${event.description}</p>`;

        eventIcon.onclick = () => {
            // Remove a classe 'active' de todos os detalhes primeiro
            document.querySelectorAll('.timeline-details.active').forEach(el => el.classList.remove('active'));
            // Adiciona a classe 'active' ao detalhe clicado
            eventDetails.classList.toggle("active");
        };

        eventElement.appendChild(eventIcon);
        eventElement.appendChild(eventDetails);
        timelineLine.appendChild(eventElement);
    });

    timelineContainer.appendChild(timelineLine);
}

// Event Listeners
startButton.addEventListener("click", startGame);
restartButtonGameOver.addEventListener("click", () => {
    showScreen(rulesScreen);
    document.getElementById("game-container").style.backgroundImage = `url('assets/images/ui_frame.png')`;
});
restartButtonWin.addEventListener("click", () => {
    showScreen(rulesScreen);
    document.getElementById("game-container").style.backgroundImage = `url('assets/images/ui_frame.png')`;
});
nextPhaseButton.addEventListener("click", nextPhase);

// Inicialização
showScreen(rulesScreen);
updateLivesDisplay();
updateKeysDisplay();

