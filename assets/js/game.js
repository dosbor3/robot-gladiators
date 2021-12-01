//declaring player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Logging multiple values at once
console.log(playerName, playerAttack, playerHealth);

//Declaring enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//initializing fight variable to call a function
var fight = function(enemyName) {
    //repeat and execute as long as th enem-robot is alive
    while (playerHealth > 0 && enemyHealth > 0) {       

        //prompting the user for option to skip fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter'FIGHT' or 'SKIP' to choose.");        

        // if player choses to skip
       if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm layer wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit");

            //if yes (true), leave fight
            if(confirmSkip) {
                window.alert(playerName + " has decided to skip this fight.  Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney -= 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining." );  
    
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
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
            break;
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }            
    }    
}


//loop funcition for continuous play
var startGame = function() {
    //  * Fight all enemy-robots
    for (var i = 0; i < enemyNames.length; i++) {
        //reset player stats
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;
        
        if (playerHealth > 0) {
            //Inform the player of the current round number
            window.alert("Welcome to Robot Gladiators " + playerName + "! Round " + (i + 1));

            //Pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
            
            //reset enemyHealh before starting new fight
            enemyHealth = 50;

            //use debugger to pause script from running and cheeck what's going on 
            //debugger;

            //pass the pickedEnemyName variable's value into the fight function 
            fight(enemyNames[i]);
        }
    else {
        window.alert(playerName + ", you have lost your robot in battle! Game Over!");
        break;
        }
    }
    endGame();    
}

//Start the game when the page loads
startGame();

//provide game stats to player and option to end game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you've suvived he game! You now have a score pf " + playerMoney + ".");

    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //Prompting the player for game continuation
    var playAgainConfirm = window.confirm("Would you like to play again?");

    //if player chooses to continue play, restart the game
    if (playAgainConfirm) {
        //restart the game
        startGame();
    }

    else {
       window.alert("The game has now ended. Let's se how you did!"); 
    }

    

}



