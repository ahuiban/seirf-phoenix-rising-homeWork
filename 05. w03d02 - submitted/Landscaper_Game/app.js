// Global Variables
let pressToButton;

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
        name: 'old-timey push lawnmower',
        earnings: 50,
        purchasePrice: 25
    },
    {
        name: 'fancy battery-powered lawnmower',
        earnings: 100,
        purchasePrice: 250
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
    message('*** Press the yelow button to start the game ***');
    renderDepot();
};

const message = (str) => {
    const info = document.querySelector('.instructions');
    info.innerHTML = `
  <h5>${str}</h5>
  <h6>Current tool: <span> ${player.tool.name}</span></h6>
  <h6>Current earnings: <span>${player.tool.earnings}</span></h6>
  <h6>Player bank account: <span> ${player.money}</span></h6>
  `;
    if (player.money >= 1000) {
        document.querySelector('.instructions').innerHTML =
            `<h1>You did it! You won!</h1>`;

    }
};

const renderDepot = () => {
    const depot = document.querySelector('.depot');
    if (tools.length > 0) {
        depot.innerHTML = `
      <h5> NextUpgrade: </h5>
      <h6><i><u> ${tools[0].name} </u></i></h6>
      <h6> Purchase price: $${tools[0].purchasePrice}</h6>
    `;
        depot.innerHTML += (player.money >= tools[0].purchasePrice) ? `<button class='purchase'> Purchase </button>` : `<h6><i>You can't afford this yet!!😞</i></h6>`;
        const makePurchase = document.querySelector('.purchase');
        if (makePurchase) {
            makePurchase.addEventListener('click', () => {
                player.money -= tools[0].purchasePrice;
                player.tool = tools.shift();


                renderDepot();
                message('You have upgraded!');
            });
        }
    } else {
        depot.innerHTML = `<h5> You have purchased all upgrades</h5>`;
    }
};

// A function for landscaping
const pressTo = () => {
    // start with a simple console log
    // console.log('i am landscaping');
    // every time landscaped need to increase bank account by tool earnings, then update the message
    player.money += player.tool.earnings;
    message('*** Keep Working ***');
    renderDepot();
};

document.addEventListener('DOMContentLoaded', () => {
    startGame();
    pressToButton = document.querySelector('.pressTo');
    pressToButton.addEventListener('click', pressTo);
});
