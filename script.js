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

// Stack the deck slightly - move a web themed event card to not too late, not too soon
let index32 = deck.findIndex(card => card.id === 32);
if (index32 !== -1) {
  // Remove card ID 32 from its current position
  let card32 = deck.splice(index32, 1)[0];
  // Insert it at position 20 (index 19)
  deck.splice(19, 0, card32);
}

// Stack the deck slightly - move a web themed action card to pretty early on
let index1 = deck.findIndex(card => card.id === 1);
if (index1 !== -1) {
  // Remove card ID 1 from its current position
  let card1 = deck.splice(index1, 1)[0];
  // Generate a random index among 2, 3, or 4 (positions 3, 4, or 5 if counting from 1)
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

  // Get a reference to the description title and box
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

    // When mouse is over the card, update both the title and the description box
    img.addEventListener("mouseover", () => {
      cardTitle.textContent = card.name;
      descriptionDiv.textContent = card.description;
    });

    // Clicking the card plays it
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
