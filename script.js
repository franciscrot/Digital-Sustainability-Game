// script.js

// 1) Define players with sets for actionsPlayed and eventsPlayed
let player = {
  hand: [],
  progress: 0,
  sustainability: 0,
  actionsPlayed: new Set(),
  eventsPlayed: new Set()
};

let AI1 = { hand: [], progress: 0, sustainability: 0, actionsPlayed: new Set() };
let AI2 = { hand: [], progress: 0, sustainability: 0, actionsPlayed: new Set() };

// 2) Shuffle function
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// 3) Initialize the game
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

  const descriptionDiv = document.getElementById("descriptionBox");

  player.hand.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = card.imagePath;
    img.alt = card.name;
    img.title = card.tooltip;  

    img.style.width = "200px";
    img.style.height = "auto";
    img.style.marginRight = "10px";

    // Description displayed
    img.addEventListener("mouseover", () => {
      descriptionDiv.textContent = card.description;
    });

    img.addEventListener("click", () => playPlayerCard(index));

    handDiv.appendChild(img);
  });
}



// 5) Function to play a card
function playPlayerCard(index) {
  const chosenCard = player.hand.splice(index, 1)[0];
  // Apply card effect
  chosenCard.effect(player, AI1, AI2);
  // Record it in the correct set
  if (chosenCard.type === "action") {
    player.actionsPlayed.add(chosenCard.id);
  } else if (chosenCard.type === "event") {
    player.eventsPlayed.add(chosenCard.id);
  }
  // Draw a new card
  if (deck.length > 0) {
    player.hand.push(deck.pop());
  }
  // Re-render and update info
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

  const actionIds = Array.from(player.actionsPlayed).sort((a, b) => a - b);
  const eventIds = Array.from(player.eventsPlayed).sort((a, b) => a - b);

  // If no actions have been played yet, show "No actions played".
  if (actionIds.length === 0) {
    actionsDiv.textContent = "No actions played";
  } else {
    // Otherwise, map them into a comma-separated list (with tooltips, etc.)
    const actionHTML = actionIds.map(id => {
      const card = deck.find(c => c.id === id);
      const cardName = card ? card.name : "Unknown Card";
      return `<span title="${cardName}">${id}</span>`;
    }).join(", ");
    actionsDiv.innerHTML = actionHTML;
  }

  // Do the same for events
  if (eventIds.length === 0) {
    eventsDiv.textContent = "No events played";
  } else {
    const eventHTML = eventIds.map(id => {
      const card = deck.find(c => c.id === id);
      const cardName = card ? card.name : "Unknown Card";
      return `<span title="${cardName}">${id}</span>`;
    }).join(", ");
    eventsDiv.innerHTML = eventHTML;
  }
}



// 8) On page load, render initial state
window.onload = () => {
  renderPlayerHand();
  updateGameInfo();
  updatePlayedLists(); // in case sets start empty
};
