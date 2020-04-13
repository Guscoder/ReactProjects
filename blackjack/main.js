const redux = require("redux");

// store, actions, reducer

// Blackjack card game
// deck: ["ace of spades", "seven of diamonds", "jack of clubs"... ]
// goal: start with two cards, "hit" for more, try to get 21 or higher than dealer
// dealer vs player where each one starts with two and hits for more

// initialize - start with a fresh deck
// shuffle - shuffle the deck
// deal - give two cards to dealer and the player
// hit - give one card just to the player
// finish_hand - turn all cards back to the deck
// const storeStructure = {
//     deck: [],
//     dealer: [],
//     player: []
// }

const storeStructure = {
  deck: [],
  dealer: [],
  player: [],
};

// create fresh unsuffled deck
function createDeck() {
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const deck = [];
  for (let suit of suits) {
    for (let face of faces) {
      deck.push({ suit: suit, face: face });
    }
  }
  return deck;
}

//create reducer that accepts actions and returns new state based on action

const reducer = (state, action) => {
  if (state === undefined) {
    return {
      deck: createDeck(),
      dealer: [],
      player: [],
    };
  }

  switch (action.type) {
    case "DEAL": {
      if (state.deck.length < 4) {
        return state;
      }
      const copy = [...state.deck];
      return {
        deck: copy,
        dealer: [copy.pop(), copy.pop()],
        player: [copy.pop(), copy.pop()],
      };
    }
    case "HIT": {
      if (state.deck.length < 1) {
        return state;
      }
      if (handValue(state.player) >= 21) {
        return state;
      }
      const copy = [...state.deck];
      return {
        deck: copy,
        dealer: state.dealer,
        player: [...state.player, copy.pop()],
      };
    }
    case "SHUFFLE": {
      const copy = [...state.deck];

      //shuffle-swap every index of an array with a randomly-chosen index
      for (let index in copy) {
        let swapIndex = Math.floor(Math.random() * copy.length);

        let tempCard = copy[swapIndex];
        copy[swapIndex] = copy[index];
        copy[index] = tempCard;
      }

      return {
        deck: copy,
        dealer: state.dealer,
        player: state.player,
      };
    }
    case "FINISH_HAND": {
      return {
        deck: [...state.deck, ...state.dealer, ...state.player],
        dealer: [],
        player: [],
      };
    }
    default: {
      return state;
    }
  }
};

function handValue(hand) {
  return hand.map(cardValue).reduce((a, b) => a + b, 0);
}

function cardValue(card) {
  if (card.face === "A") {
    return 11;
  }
  if ("JQK".indexOf(card.face) >= 0) {
    return 10;
  } else {
    return card.face;
  }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
  const state = store.getState();
  const dealerScore = handValue(state.dealer);
  const playerScore = handValue(state.player);
  console.log("deck:", state.deck.length);
  console.log(dealerScore, "dealer:", state.dealer);
  console.log(playerScore, "player:", state.player);
});

const keypress = require("keypress");

keypress(process.stdin);

const MENU = "(s) shuffle, (d) deal, (h) hit, (f) finish hand, (x) quit ";
console.log(MENU);
process.stdin.on("keypress", (ch, key) => {
  console.log("key", key.name);
  if (key.name === "x") {
    process.stdin.pause();
  } else if (key.name === "s") {
    store.dispatch({ type: "SHUFFLE" });
  } else if (key.name === "d") {
    store.dispatch({ type: "DEAL" });
  } else if (key.name === "h") {
    store.dispatch({ type: "HIT" });
  } else if (key.name === "f") {
    store.dispatch({ type: "FINISH_HAND" });
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
