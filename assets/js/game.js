//declaring player variables
var playerName = window.prompt("What is your robot's name?");
var damage = randomNumber(enemyAttack - 3, enemyAttack);
playerHealth = Math.max(0, playerHealth - damage);
var enemyAttack = 12;
var playerMoney = 10;

//Logging multiple values at once
console.log(playerName, playerAttack, playerHealth);

//Declaring enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];

//generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);
enemyHealth = Math.max(0, enemyHealth - damage);
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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }        
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = Math.max(0, enemyHealth - playerAttack);
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
        playerHealth = Math.max(0, playerHealth - enemyAttack);
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
            enemyHealth = randomNumber(40, 60);

            //use debugger to pause script from running and cheeck what's going on 
            //debugger;

            //pass the pickedEnemyName variable's value into the fight function 
            fight(pickedEnemyName); 

            //if we're not at the last enemy in the array, and player has not been defeated
            if (playerHealth > 0 && i < enemyNames.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                if (storeConfirm){
                    shop();
                }                
            }            
        }
        
    else {
        window.alert(playerName + ", you have lost your robot in battle! Game Over!");
        break;
        }
    }
       
}
//provide game stats to player and option to end game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0){
        window.alert("Great job, you've suvived he game! You now have a score of " + playerMoney + ".");

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

//shop function that provides players with an option to retrieve additional perks
var shop = function() {
    //ask player what would they like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store?  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice ");
    
        //Using switch to determine to REFILL, UPGRADE, or, LEAVE the shop based on shopOptionPrompt value
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for $7 dollars.");

                    //increase health and decrease money by updating playerHealth and playerMoney
                    playerHealth += 20;
                    playerMoney -= 7;
                    break;
                }
                else {
                    window.alert("You don't have enough money!");
                }

                case "UPGRADE":
                case "upgrade" :
                if (playerMoney >= 7){
                    window.alert("Upgrading player's attack by 6 for $7 dollars.");
                    
                    //increase player's attack and decrease money by updating playerAttack and playerMoney
                    playerAttack += 6;
                    playerMoney -= 7;
                    break;
                }
                else {
                    window.alert("You don't have enough money!");
                }

                case "LEAVE":
                case "leave":
                window.alert("Leaving the store.");

                //do nothing, so function will end
                break;

            default:
                window.alert("You did not pick a valid option.  Try again.");
                //call shop() again to force player to pick a valid option
                shop();
                break;            
        }
    }
    
    //function to generate a random numeric value
    var randomNumber = function (min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min); // Ex. range 40 - 60... (60 - 40 + 1) + 40 = return number b/t 40 - 60
        return value;
    }

//Start the game when the page loads
startGame();

//endGame function call
 endGame();


