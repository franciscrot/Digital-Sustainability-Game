// script.js

// 1) Define players with sets for actionsPlayed and eventsPlayed
let player = {
  hand: [],
  progress: 0,
  sustainability: 0,
  actionsPlayed: new Set(),
  eventsPlayed: new Set()
};

let AI1 = { hand: [], progress: 0, sustainability: 0, actionsPlayed: new Set(), eventsPlayed: new Set() };
let AI2 = { hand: [], progress: 0, sustainability: 0, actionsPlayed: new Set(), eventsPlayed: new Set() };

// 2) Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Stack the deck slightly - move a web themed event card to not too late, not too soon
let index32 = deck.findIndex(card => card.id === 32);
if (index32 !== -1) {
  let card32 = deck.splice(index32, 1)[0];
  deck.splice(19, 0, card32);
}

// Stack the deck slightly - move a web themed action card to pretty early on
let index1 = deck.findIndex(card => card.id === 1);
if (index1 !== -1) {
  let card1 = deck.splice(index1, 1)[0];
  let randomIndex = 2 + Math.floor(Math.random() * 3);
  deck.splice(randomIndex, 0, card1);
}

// 3) Deal the cards to the players
shuffle(deck);
for (let i = 0; i < 3; i++) {
  if (deck.length > 0) player.hand.push(deck.pop());
  if (deck.length > 0) AI1.hand.push(deck.pop());
  if (deck.length > 0) AI2.hand.push(deck.pop());
}

// 4) Function to render player's hand (3 images)
function renderPlayerHand() {
  const handDiv = document.getElementById("playerHand");
  handDiv.innerHTML = "";

  const descriptionTitle = document.getElementById("descriptionTitle");
  const descriptionDiv = document.getElementById("descriptionBox");

  player.hand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = card.imagePath;
    img.alt = card.name;
    img.title = card.tooltip;

    img.style.width = "200px";
    img.style.height = "auto";
    img.style.marginRight = "10px";

    img.addEventListener("mouseover", () => {
      cardTitle.textContent = card.name;
      descriptionDiv.textContent = card.description;
    });

    img.addEventListener("click", () => playPlayerCard(index));

    handDiv.appendChild(img);
  });
}

function playAI1Card() {
  let actionIndex = AI1.hand.findIndex(card => card.type === "action");

  if (actionIndex !== -1) {
    const chosenCard = AI1.hand.splice(actionIndex, 1)[0];
    chosenCard.effect(player, AI1, AI2);
    AI1.actionsPlayed.add(chosenCard.id);
  } else {
    let eventIndex = AI1.hand.findIndex(card => card.type === "event");
    if (eventIndex !== -1) {
      const chosenCard = AI1.hand.splice(eventIndex, 1)[0];
      chosenCard.effect(player, AI1, AI2);
      AI1.eventsPlayed.add(chosenCard.id);
    }
  }

  if (deck.length > 0) {
    AI1.hand.push(deck.pop());
  }
}

function playAI2Card() {
  let actionIndex = AI2.hand.findIndex(card => card.type === "action");

  if (actionIndex !== -1) {
    const chosenCard = AI2.hand.splice(actionIndex, 1)[0];
    chosenCard.effect(player, AI1, AI2);
    AI2.actionsPlayed.add(chosenCard.id);
  } else {
    let eventIndex = AI2.hand.findIndex(card => card.type === "event");
    if (eventIndex !== -1) {
      const chosenCard = AI2.hand.splice(eventIndex, 1)[0];
      chosenCard.effect(player, AI1, AI2);
      AI2.eventsPlayed.add(chosenCard.id);
    }
  }

  if (deck.length > 0) {
    AI2.hand.push(deck.pop());
  }
}

// 5) Function to play a card
function playPlayerCard(index) {
  const chosenCard = player.hand.splice(index, 1)[0];
  chosenCard.effect(player, AI1, AI2);

  if (chosenCard.type === "action") {
    player.actionsPlayed.add(chosenCard.id);
  } else if (chosenCard.type === "event") {
    player.eventsPlayed.add(chosenCard.id);
  }

  if (deck.length > 0) {
    player.hand.push(deck.pop());
  }

  // AI turn sequence
  playAI1Card();
  playAI2Card();

  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists();
}

// 6) Update scoreboard or other info
function updateGameInfo() {
  const infoDiv = document.getElementById("gameInfo");
  infoDiv.innerHTML = `
    Player - Progress: ${player.progress}, Sustainability: ${player.sustainability}
    <br>
    AI1 - Progress: ${AI1.progress}, Sustainability: ${AI1.sustainability}
    <br>
    AI2 - Progress: ${AI2.progress}, Sustainability: ${AI2.sustainability}
  `;
}

// 7) Update the lists of played actions/events
function updatePlayedLists() {
  const actionsDiv = document.getElementById("actionsPlayedList");
  const eventsDiv = document.getElementById("eventsPlayedList");

  const yourActionIds = Array.from(player.actionsPlayed).sort((a, b) => a - b);
  const yourEventIds = Array.from(player.eventsPlayed).sort((a, b) => a - b);

  const aiActionIds = Array.from(new Set([...AI1.actionsPlayed, ...AI2.actionsPlayed])).sort((a, b) => a - b);
  const aiEventIds = Array.from(new Set([...AI1.eventsPlayed, ...AI2.eventsPlayed])).sort((a, b) => a - b);

  actionsDiv.innerHTML = `
    <strong>Your actions played:</strong><br>
    ${yourActionIds.length === 0 ? "None" : yourActionIds.map(id => {
      const card = deck.find(c => c.id === id);
      const cardName = card ? card.name : "Unknown Card";
      return `<span title="${cardName}">${id}</span>`;
    }).join(", ")}
    <br><br>
    <strong>AI actions played:</strong><br>
    ${aiActionIds.length === 0 ? "None" : aiActionIds.map(id => {
      const card = deck.find(c => c.id === id);
      const cardName = card ? card.name : "Unknown Card";
      return `<span title="${cardName}">${id}</span>`;
    }).join(", ")}
  `;

  eventsDiv.innerHTML = `
    <strong>Your events played:</strong><br>
    ${yourEventIds.length === 0 ? "None" : yourEventIds.map(id => {
      const card = deck.find(c => c.id === id);
      const cardName = card ? card.name : "Unknown Card";
      return `<span title="${cardName}">${id}</span>`;
    }).join(", ")}
    <br><br>
    <strong>AI events played:</strong><br>
    ${aiEventIds.length === 0 ? "None" : aiEventIds.map(id => {
      const card = deck.find(c => c.id === id);
      const cardName = card ? card.name : "Unknown Card";
      return `<span title="${cardName}">${id}</span>`;
    }).join(", ")}
  `;
}

// 8) On page load, render initial state
window.onload = () => {
  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists();
};
