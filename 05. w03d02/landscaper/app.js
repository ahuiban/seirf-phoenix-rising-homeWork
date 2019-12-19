console.log("it's working");

const player = {name: "Player", 
    tool: "teeth", 
    wallet: 0, 
    isWorking: true, 
    lawnCount: 0};

let dailyWage = 1; 



// if person.wallet >= 5 give option to buy scissors
//if you use scissors, you can eard 5 per day as much as you want
//if player.waller >=25, option to buy push mower
//with push mower, earn 50 per day
//player.wallet >= = 250, option to buy fancy mower
//player.wallet >= 500, option to hire students

const userName = prompt("Welcome to Landscaper Game! Your name?");
console.log(`Welcome ${userName}`);

player.name = userName;

while (player.wallet < 5) {
    player.lawnCount+= 1;
    player.wallet+= 1;
    console.log(`Number of Tasks ${player.lawnCount} $: ${player.wallet}`);
}

