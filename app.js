// Define the player (USS Assembly) and alien ships
let USSassembly = {
    hull: 100,
    firepower: 20,  // Damage dealt on a hit
    accuracy: 0.8   // 80% chance to hit
};

let alienShips = [
    { name: "Alien Ship 1", hull: 100, firepower: 15, accuracy: 0.7 },
    { name: "Alien Ship 2", hull: 120, firepower: 18, accuracy: 0.75 },
    { name: "Alien Ship 3", hull: 150, firepower: 25, accuracy: 0.65 },
    { name: "Alien Ship 4", hull: 130, firepower: 20, accuracy: 0.8 },
    { name: "Alien Ship 5", hull: 110, firepower: 22, accuracy: 0.85 },
    { name: "Alien Ship 6", hull: 200, firepower: 30, accuracy: 0.6 }
];

let currentAlienIndex = 0; // Keeps track of the current alien ship
let alien = alienShips[currentAlienIndex];

// Reference HTML elements
const playerHealthElement = document.getElementById('player-health');
const playerFirepowerElement = document.getElementById('player-attack');
const playerAccuracyElement = document.getElementById('player-accuracy');
const alienHealthElement = document.getElementById('alien-health');
const alienFirepowerElement = document.getElementById('alien-attack');
const alienAccuracyElement = document.getElementById('alien-accuracy');
const battleLogElement = document.getElementById('battle-log');
const attackButton = document.getElementById('attack-button');

// Update the UI with player and alien stats
function updateStats() {
    playerHealthElement.textContent = `Health: ${player.health}`;
    playerFirepowerElement.textContent = `Firepower: ${player.firepower}`;
    playerAccuracyElement.textContent = `Accuracy: ${(player.accuracy * 100).toFixed(0)}%`;
    alienHealthElement.textContent = `Health: ${alien.health}`;
    alienFirepowerElement.textContent = `Firepower: ${alien.firepower}`;
    alienAccuracyElement.textContent = `Accuracy: ${(alien.accuracy * 100).toFixed(0)}%`;
}

// Handle player attack
function playerAttack() {
    // Check if the attack hits based on accuracy
    if (Math.random() < player.accuracy) {
        const damageToAlien = Math.floor(Math.random() * player.firepower) + 1;
        alien.health -= damageToAlien;
        battleLogElement.textContent = `You attack ${alien.name} for ${damageToAlien} damage!`;
    } else {
        battleLogElement.textContent = `You missed your attack!`;
    }

    if (alien.health <= 0) {
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
        player.health -= damageToPlayer;
        battleLogElement.textContent += `\n${alien.name} attacks you for ${damageToPlayer} damage!`;
    } else {
        battleLogElement.textContent += `\n${alien.name} missed its attack!`;
    }

    if (player.health <= 0) {
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
