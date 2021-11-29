//declaring the playerMoney variable to hold the player's money value
var playerMoney = 10;

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

    //prompting the user for option to skip fight
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } 
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } 
        else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

    // if player choses to skip
    } 
    else if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm layer wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit");

        //if yes (true), leave fight
        if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight.  Goodbye!");
            //subtract money from playerMoney for skipping
            playerMoney -= 2;
        }

        //if no (false), ask question agian by running fight() again
        else {
            fight();
        }
    }   
    else {
    window.alert("You need to choose a valid option. Try again!");
    }
}

//fight function call
fight();

