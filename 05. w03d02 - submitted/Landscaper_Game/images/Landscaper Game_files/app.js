// Global Variables
let landscapeButton;

// Default Tools
let tools = [
    {
        name: 'teeth',
        earnings: 1,
        purchasePrice: 0,
    },
    {
        name: 'rusty scissors',
        earnings: 5,
        purchasePrice: 5
    },
    {
        name: 'old-timey push lawnmwer',
        earnings: 25,
        purchasePrice: 20
    },
    {
        name: 'fancy battery powered lawnmower',
        earnings: 250,
        purchasePrice: 100
    },
    {
        name: 'starving students',
        earnings: 250,
        purchasePrice: 500
    }
];

// player - default values
let player = {
    money: 0,
    tool: tools[0]
};

const startGame = () => {
    // initialize a new player
    // automatically give player the new tool
    player = {
        money: 0,
        tool: tools.shift()
    };
    // alert('the game has started');
    // alerts are annoying - let's use a simple div and update the innerHTML as needed
    message('the game has started');
    renderStore();
};

const message = (str) => {
    const info = document.querySelector('.messages');
    info.innerHTML = `
  <h5>${str}</h5>
  <h6>Current tool: <span> ${player.tool.name}</span></h6>
  <h6>Current earnings: <span>${player.tool.earnings}</span></h6>
  <h6>Player bank account: <span> ${player.money}</span></h6>
  `;
    if (player.money >= 1000) {
        document.querySelector('.messages').innerHTML =
            `<h2> You did it! You won!</h2>`;

    }
};

const renderStore = () => {
    const store = document.querySelector('.store');
    if (tools.length > 0) {
        store.innerHTML = `
      <h5> Item available for purchase</h5>
      <h6> ${tools[0].name}</h6>
      <h6> Purchase price: ${tools[0].purchasePrice}</h6>
    `;
        store.innerHTML += (player.money >= tools[0].purchasePrice) ? `<button class='purchase'> Purchase </button>` : `<p>You can't afford this yet</p>`;
        const makePurchase = document.querySelector('.purchase');
        if (makePurchase) {
            makePurchase.addEventListener('click', () => {
                player.tool = tools.shift();
                renderStore();
                message('You have upgraded!');
            });
        }
    } else {
        store.innerHTML = `<h5> You have purchased all upgrades</h5>`;
    }
};

// A function for landscaping
const landscape = () => {
    // start with a simple console log
    // console.log('i am landscaping');
    // every time landscaped need to increase bank account by tool earnings, then update the message
    player.money += player.tool.earnings;
    message('You are working hard and making progress');
    renderStore();
};

document.addEventListener('DOMContentLoaded', () => {
    startGame();
    landscapeButton = document.querySelector('.landscape');
    landscapeButton.addEventListener('click', landscape);
});
