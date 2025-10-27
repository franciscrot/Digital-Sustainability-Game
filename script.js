// script.js

// 1) Define players with sets for actionsPlayed and eventsPlayed
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

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAI2Name() {
  const buzzwords = ["Synergy", "Quantum", "Hyper", "Total", "Future", "Ultra", "Virtual", "Dynamic", "Cloud", "Carbon", "Crypto", "Green"];
  const techTerms = ["Solutions", "Systems", "Analytics", "Intelligence", "Optimisation", "Flow", "Interface", "Blockchain", "Fusion", "Comms", "Matrix", "Ops"];
  const suffixes = ["Inc.", "LLP", "LLC", "Group", "Associates", "Holdings", "Consortium", "Syndicate", "Unlimited", "Worldwide", "Partners"];
  const wildcard = ["Lozenge", "Entropy", "Biscuit", "Tapioca", "Algo", "Flavour", "Shmarbon", "Marble", "Cat", "Quilt", "Moss", "Mince", "Pigment", "Pentimento", "Pimento", "Wink", "Walrus", "Zauzage", "Ghoul", "Fungus", "Clown", "Grace", "Taramasalata", "Hummus", "Sludge", "Algorithm", "Gunk", "Echo", "Vapor", "Goblin"];

  const pattern = Math.random();
  if (pattern < 0.33) {
    return `${pickRandom(buzzwords)} ${pickRandom(techTerms)} ${pickRandom(suffixes)}`;
  } else if (pattern < 0.66) {
    return `${pickRandom(wildcard)} ${pickRandom(buzzwords)} ${pickRandom(suffixes)}`;
  } else {
    return `${pickRandom(buzzwords)} ${pickRandom(wildcard)} ${pickRandom(techTerms)} ${pickRandom(suffixes)}`;
  }
}

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

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let index32 = deck.findIndex(card => card.id === 32);
if (index32 !== -1) {
  let card32 = deck.splice(index32, 1)[0];
  deck.splice(19, 0, card32);
}

let index1 = deck.findIndex(card => card.id === 1);
if (index1 !== -1) {
  let card1 = deck.splice(index1, 1)[0];
  let randomIndex = 2 + Math.floor(Math.random() * 3);
  deck.splice(randomIndex, 0, card1);
}

shuffle(deck);
for (let i = 0; i < 3; i++) {
  if (deck.length > 0) player.hand.push(deck.pop());
  if (deck.length > 0) AI1.hand.push(deck.pop());
  if (deck.length > 0) AI2.hand.push(deck.pop());
}

function renderPlayerHand() {
  const handDiv = document.getElementById("playerHand");
  handDiv.innerHTML = "";
  const descriptionDiv = document.getElementById("descriptionBox");
  const cardTitle = document.getElementById("cardTitle"); // <-- added this, let's try ...

  player.hand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = card.imagePath;
    img.alt = card.name;
    img.title = card.tooltip || "";
    img.style.width = "200px";
    img.style.marginRight = "10px";
    img.style.cursor = "pointer";
    img.addEventListener("mouseover", () => {
      if (cardTitle) cardTitle.textContent = card.name;
      if (descriptionDiv) descriptionDiv.textContent = card.description || "";
    });
    img.addEventListener("click", () => playPlayerCard(index));
    handDiv.appendChild(img);
  });
}


function logAIPlay(aiName, card) {
  const aiLogDiv = document.getElementById("aiLog");
  const entry = document.createElement("div");
  entry.innerHTML = `<strong>${aiName}</strong> played <em>${card.name}</em>: ${card.tooltip || "Effect applied."}`;
  aiLogDiv.appendChild(entry);
  aiLogDiv.scrollTop = aiLogDiv.scrollHeight; // Scroll to bottom automatically
}

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
    card.effect(player, AI1, AI2);
    logAIPlay(AI1.name, card);
  }
  if (deck.length > 0) AI1.hand.push(deck.pop());
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
      // not sure if this is right - was: AI2.hand.splice(eventIndex, 1)[0];
      card = AI2.hand.splice(index, 1)[0];
      AI2.eventsPlayed.add(card.id);
    }
  }
  if (card) {
    card.effect?.(player, AI1, AI2);
    logAIPlay(AI2.name, card);
  }
  if (deck.length > 0) AI2.hand.push(deck.pop());
}



function playPlayerCard(index) {
  const chosenCard = player.hand.splice(index, 1)[0];
  chosenCard.effect(player, AI1, AI2);
  if (chosenCard.type === "action") {
    player.actionsPlayed.add(chosenCard.id);
  } else if (chosenCard.type === "event") {
    player.eventsPlayed.add(chosenCard.id);
  }
  if (deck.length > 0) player.hand.push(deck.pop());
  playAI1Card();
  playAI2Card();
  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists();
}

function updateGameInfo() {
  const infoDiv = document.getElementById("gameInfo");
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
    : idArray.map(id => {
        const card = deck.find(c => c.id === id);
        const cardName = card ? card.name : "Unknown Card";
        return `<span title="${cardName}">${id}</span>`;
      }).join(", ");
}

function updatePlayedLists() {
  document.getElementById("yourActionsPlayed").innerHTML = renderCards(Array.from(player.actionsPlayed).sort((a, b) => a - b));
  document.getElementById("yourEventsPlayed").innerHTML = renderCards(Array.from(player.eventsPlayed).sort((a, b) => a - b));
  document.getElementById("ai1ActionsPlayed").innerHTML = renderCards(Array.from(AI1.actionsPlayed).sort((a, b) => a - b));
  document.getElementById("ai1EventsPlayed").innerHTML = renderCards(Array.from(AI1.eventsPlayed).sort((a, b) => a - b));
  document.getElementById("ai2ActionsPlayed").innerHTML = renderCards(Array.from(AI2.actionsPlayed).sort((a, b) => a - b));
  document.getElementById("ai2EventsPlayed").innerHTML = renderCards(Array.from(AI2.eventsPlayed).sort((a, b) => a - b));
}

window.onload = () => {
  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists();

  // Update AI section headings with their generated names
  document.getElementById("ai1ActionsLabel").textContent = `${AI1.name} Actions Played`;
  document.getElementById("ai1EventsLabel").textContent = `${AI1.name} Events Played`;
  document.getElementById("ai2ActionsLabel").textContent = `${AI2.name} Actions Played`;
  document.getElementById("ai2EventsLabel").textContent = `${AI2.name} Events Played`;
};


