// ===============================
// script.js (consolidated & fixed)
// ===============================

// --- Random name pools (from your spec) ---
const playerNames = [
  "The Von Spigot Gallery",
  "LEAF Consulting",
  "Haunted History Tours Inc.",
  "First City Bank",
  "Baker Baker & McKenzie LLP",
  "The Museum of Lost Socks",
  "The World Wrestling Consortium"
];

const ai1Names = [
  "Business Systems Systems",
  "Lozenge AI",
  "Digital Sales Insight",
  "Hypercircle",
  "Noxio Box Toxic Storage Solutions",
  "Adjaye Jones & Cronk LLP",
  "Distributed Fusion Inc",
  "B.Well",
  "total Cashflow Solutions",
  "The Data Doulas"
];

// --- Helpers for names ---
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAI2Name() {
  const buzzwords = ["Synergy", "Quantum", "Hyper", "Total", "Future", "Ultra", "Virtual", "Dynamic", "Cloud", "Carbon", "Crypto", "Green"];
  const techTerms = ["Solutions", "Systems", "Analytics", "Intelligence", "Optimisation", "Flow", "Interface", "Blockchain", "Fusion", "Comms", "Matrix", "Ops"];
  const suffixes = ["Inc.", "LLP", "LLC", "Group", "Associates", "Holdings", "Consortium", "Syndicate", "Unlimited", "Worldwide", "Partners"];
  const wildcard = ["Lozenge", "Entropy", "Biscuit", "Tapioca", "Algo", "Flavour", "Mince", "Pigment", "Pentimento", "Pimento", "Taramasalata", "Hummus", "Sludge", "Algorithm", "Gunk", "Echo", "Vapor", "Goblin"];

  const pattern = Math.random();
  if (pattern < 0.33) {
    return `${pickRandom(buzzwords)} ${pickRandom(techTerms)} ${pickRandom(suffixes)}`;
  } else if (pattern < 0.66) {
    return `${pickRandom(wildcard)} ${pickRandom(buzzwords)} ${pickRandom(suffixes)}`;
  } else {
    return `${pickRandom(buzzwords)} ${pickRandom(wildcard)} ${pickRandom(techTerms)} ${pickRandom(suffixes)}`;
  }
}

// --- Player objects ---
const playerName = pickRandom(playerNames);
const AI1Name = pickRandom(ai1Names);
const AI2Name = generateAI2Name();

let player = {
  name: playerName,
  hand: [],
  progress: 0,
  sustainability: 0,
  actionsPlayed: new Set(),
  eventsPlayed: new Set()
};

let AI1 = {
  name: AI1Name,
  hand: [],
  progress: 0,
  sustainability: 0,
  actionsPlayed: new Set(),
  eventsPlayed: new Set()
};

let AI2 = {
  name: AI2Name,
  hand: [],
  progress: 0,
  sustainability: 0,
  actionsPlayed: new Set(),
  eventsPlayed: new Set()
};

// --- Utilities ---
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Lookup table to keep card names even after deck mutations
let CARD_BY_ID = {};
function initCardLookup() {
  if (!Array.isArray(deck)) return;
  const ALL_CARDS = deck.slice(); // snapshot before we splice/shuffle
  CARD_BY_ID = Object.fromEntries(ALL_CARDS.map(c => [c.id, c]));
}

// Move special cards before shuffling
function positionSpecialCards() {
  if (!Array.isArray(deck)) return;

  const index32 = deck.findIndex(card => card.id === 32);
  if (index32 !== -1) {
    const card32 = deck.splice(index32, 1)[0];
    deck.splice(19, 0, card32); // if deck shorter than 20, this just appends
  }

  const index1 = deck.findIndex(card => card.id === 1);
  if (index1 !== -1) {
    const card1 = deck.splice(index1, 1)[0];
    const randomIndex = 2 + Math.floor(Math.random() * 3); // 2–4 inclusive
    deck.splice(randomIndex, 0, card1);
  }
}

function dealOpeningHands() {
  if (!Array.isArray(deck)) return;
  for (let i = 0; i < 3; i++) {
    if (deck.length) player.hand.push(deck.pop());
    if (deck.length) AI1.hand.push(deck.pop());
    if (deck.length) AI2.hand.push(deck.pop());
  }
}

// --- Rendering & UI ---
function renderPlayerHand() {
  const handDiv = document.getElementById("playerHand");
  if (!handDiv) return;

  handDiv.innerHTML = "";
  const descriptionDiv = document.getElementById("descriptionBox");
  const cardTitle = document.getElementById("cardTitle");

  player.hand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = card.imagePath;
    img.alt = card.name;
    img.title = card.tooltip || "";
    img.style.width = "200px";
    img.style.marginRight = "10px";
    img.style.cursor = "pointer";
    img.addEventListener("mouseover", () => {
      if (cardTitle) cardTitle.textContent = card.name || "";
      if (descriptionDiv) descriptionDiv.textContent = card.description || "";
    });
    img.addEventListener("click", () => playPlayerCard(index));
    handDiv.appendChild(img);
  });
}

function logAIPlay(aiName, card) {
  const aiLogDiv = document.getElementById("aiLog");
  if (!aiLogDiv) return;
  const entry = document.createElement("div");
  const safeTooltip = card.tooltip || "Effect applied.";
  entry.innerHTML = `<strong>${aiName}</strong> played <em>${card.name}</em>: ${safeTooltip}`;
  aiLogDiv.appendChild(entry);
  aiLogDiv.scrollTop = aiLogDiv.scrollHeight; // Scroll to bottom automatically
}

function updateGameInfo() {
  const infoDiv = document.getElementById("gameInfo");
  if (!infoDiv) return;
  infoDiv.innerHTML = `
    <strong>${player.name}</strong><br>
    Progress: ${player.progress}, Sustainability: ${player.sustainability}<br><br>
    <strong>${AI1.name}</strong><br>
    Progress: ${AI1.progress}, Sustainability: ${AI1.sustainability}<br><br>
    <strong>${AI2.name}</strong><br>
    Progress: ${AI2.progress}, Sustainability: ${AI2.sustainability}
  `;
}

function renderCards(idArray) {
  return idArray.length === 0
    ? "None"
    : idArray
        .map(id => {
          const card = CARD_BY_ID[id];
          const cardName = card ? card.name : "Unknown Card";
          return `<span title="${cardName}">${id}</span>`;
        })
        .join(", ");
}

function setHTMLById(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function updatePlayedLists() {
  setHTMLById("yourActionsPlayed", renderCards(Array.from(player.actionsPlayed).sort((a, b) => a - b)));
  setHTMLById("yourEventsPlayed", renderCards(Array.from(player.eventsPlayed).sort((a, b) => a - b)));
  setHTMLById("ai1ActionsPlayed", renderCards(Array.from(AI1.actionsPlayed).sort((a, b) => a - b)));
  setHTMLById("ai1EventsPlayed", renderCards(Array.from(AI1.eventsPlayed).sort((a, b) => a - b)));
  setHTMLById("ai2ActionsPlayed", renderCards(Array.from(AI2.actionsPlayed).sort((a, b) => a - b)));
  setHTMLById("ai2EventsPlayed", renderCards(Array.from(AI2.eventsPlayed).sort((a, b) => a - b)));
}

// --- Gameplay: AI turns & player plays ---
function playAI1Card() {
  let card = null;
  let index = AI1.hand.findIndex(c => c.type === "action");
  if (index !== -1) {
    card = AI1.hand.splice(index, 1)[0];
    AI1.actionsPlayed.add(card.id);
  } else {
    index = AI1.hand.findIndex(c => c.type === "event");
    if (index !== -1) {
      card = AI1.hand.splice(index, 1)[0];
      AI1.eventsPlayed.add(card.id);
    }
  }
  if (card) {
    card.effect?.(player, AI1, AI2);
    logAIPlay(AI1.name, card);
  }
  if (Array.isArray(deck) && deck.length > 0) AI1.hand.push(deck.pop());
}

function playAI2Card() {
  let card = null;
  let index = AI2.hand.findIndex(c => c.type === "action");
  if (index !== -1) {
    card = AI2.hand.splice(index, 1)[0];
    AI2.actionsPlayed.add(card.id);
  } else {
    index = AI2.hand.findIndex(c => c.type === "event");
    if (index !== -1) {
      // fixed: use 'index' (eventIndex did not exist)
      card = AI2.hand.splice(index, 1)[0];
      AI2.eventsPlayed.add(card.id);
    }
  }
  if (card) {
    card.effect?.(player, AI1, AI2);
    logAIPlay(AI2.name, card);
  }
  if (Array.isArray(deck) && deck.length > 0) AI2.hand.push(deck.pop());
}

function playPlayerCard(index) {
  const chosenCard = player.hand.splice(index, 1)[0];
  if (!chosenCard) return;

  chosenCard.effect?.(player, AI1, AI2);

  if (chosenCard.type === "action") {
    player.actionsPlayed.add(chosenCard.id);
  } else if (chosenCard.type === "event") {
    player.eventsPlayed.add(chosenCard.id);
  }

  if (Array.isArray(deck) && deck.length > 0) player.hand.push(deck.pop());

  // AI responses
  playAI1Card();
  playAI2Card();

  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists();
}

// --- Bootstrapping ---
window.onload = () => {
  // If the deck is defined in another file, ensure that file loads BEFORE this one (use 'defer' on both).
  if (!Array.isArray(window.deck)) {
    console.warn("deck is not defined or not an array. Skipping deck setup.");
  } else {
    initCardLookup();
    positionSpecialCards();
    shuffle(deck);
    dealOpeningHands();
  }

  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists();

  const ai1ActionsLabel = document.getElementById("ai1ActionsLabel");
  const ai1EventsLabel  = document.getElementById("ai1EventsLabel");
  const ai2ActionsLabel = document.getElementById("ai2ActionsLabel");
  const ai2EventsLabel  = document.getElementById("ai2EventsLabel");

  if (ai1ActionsLabel) ai1ActionsLabel.textContent = `${AI1.name} Actions Played`;
  if (ai1EventsLabel)  ai1EventsLabel.textContent  = `${AI1.name} Events Played`;
  if (ai2ActionsLabel) ai2ActionsLabel.textContent = `${AI2.name} Actions Played`;
  if (ai2EventsLabel)  ai2EventsLabel.textContent  = `${AI2.name} Events Played`;
};
