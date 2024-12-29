// Define the player (USS Assembly) and alien ships
let player = {
    hull: 20,
    firepower: 5,  // Damage  hit
    accuracy: 0.7,   // 70% chance to hit
};

let alienShips = [
    { name: "Alien Ship 1", hull: 5.5, firepower: 2, accuracy: 0.65 },
    { name: "Alien Ship 2", hull: 3.5, firepower: 4, accuracy: 0.73 },
    { name: "Alien Ship 3", hull: 6, firepower: 3, accuracy: 0.65 },
    { name: "Alien Ship 4", hull: 5, firepower: 4, accuracy: 0.8 },
    { name: "Alien Ship 5", hull: 4, firepower: 2, accuracy: 0.75 },
    { name: "Alien Ship 6", hull: 3, firepower: 3, accuracy: 0.6 }
];

let currentAlienIndex = 0; // Keeps track of the current alien ship
let alien = alienShips[currentAlienIndex];

// Reference HTML elements
const playerHullElement = document.getElementById('player-hull');
const playerFirepowerElement = document.getElementById('player-attack');
const playerAccuracyElement = document.getElementById('player-accuracy');
const alienHullElement = document.getElementById('alien-hull');
const alienFirepowerElement = document.getElementById('alien-attack');
const alienAccuracyElement = document.getElementById('alien-accuracy');
const battleLogElement = document.getElementById('battle-log');
const attackButton = document.getElementById('attack-button');

// Update the UI with player and alien stats
function updateStats() {
    playerHullElement.textContent = `Hull: ${player.hull}`;
    playerFirepowerElement.textContent = `Firepower: ${player.firepower}`;
    playerAccuracyElement.textContent = `Accuracy: ${(player.accuracy * 100).toFixed(0)}%`;
    alienHullElement.textContent = `Hull: ${alien.hull}`;
    alienFirepowerElement.textContent = `Firepower: ${alien.firepower}`;
    alienAccuracyElement.textContent = `Accuracy: ${(alien.accuracy * 100).toFixed(0)}%`;
}

// Handle player attack
function playerAttack() {
    // Check if the attack hits based on accuracy
    if (Math.random() < player.accuracy) {
        const damageToAlien = Math.floor(Math.random() * player.firepower) + 1;
        alien.hull -= damageToAlien;
        battleLogElement.textContent = `You attack ${alien.name} for ${damageToAlien} damage!`;
    } else {
        battleLogElement.textContent = `You missed your attack!`;
    }

    if (alien.hull <= 0) {
        battleLogElement.textContent += ` You defeated ${alien.name}!`;
        window.alert(`${alien.name} has been defeated!`);
        currentAlienIndex++;
        
        if (currentAlienIndex < alienShips.length) {
            // Proceed to next alien ship
            alien = alienShips[currentAlienIndex];
            updateStats();
        } else {
            // All aliens defeated
            window.alert("Congratulations! You have defeated all the alien ships!");
            attackButton.disabled = true; // Disable attack button
        }
    } else {
        alienAttack();
    }

    updateStats();
}

// Handle alien attack
function alienAttack() {
    // Check if the alien attack hits based on its accuracy
    if (Math.random() < alien.accuracy) {
        const damageToPlayer = Math.floor(Math.random() * alien.firepower) + 1;
        player.hull -= damageToPlayer;
        battleLogElement.textContent += `\n${alien.name} attacks you for ${damageToPlayer} damage!`;
    } else {
        battleLogElement.textContent += `\n${alien.name} missed its attack!`;
    }

    if (player.hull <= 0) {
        battleLogElement.textContent += " You were defeated!";
        window.alert("You have been defeated. Game Over!");
        attackButton.disabled = true;
    }

    updateStats();
}

// Add event listener to attack button
attackButton.addEventListener('click', playerAttack);

// Initial game setup
updateStats();
