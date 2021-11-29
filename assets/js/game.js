//declaring player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//Logging multiple values at once
console.log(playerName, playerAttack, playerHealth);

//Declaring enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//initializing fight variable to call a function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");

    //updating enemyHealth... enemyHealth - playerAttack
    enemyHealth -= playerAttack;

    //logging results for confirmation of accuracy
    console.log(playerName + " attacked " + enemyName + ".  " + enemyName + " now has " + enemyHealth + " remaining.");

    //updating playerHealth.... playerHealth - enemyAttack 
    playerHealth -= enemyAttack;

    //logging results for confirmation of accuracy 
    console.log(enemyName + " attacked " + playerName + ".  " + playerName + " now has " + playerHealth + " remaining.");

    //check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    //check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

}

//fight function call
fight();

