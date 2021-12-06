//initializing fight variable to call a function
var fight = function(enemy) {
    //repeat and execute as long as th enem-robot is alive
    while (playerInfo.health > 0 && enemy.health > 0) {       

        //prompting the user for option to skip fight
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter'FIGHT' or 'SKIP' to choose.");        

        // if player choses to skip
       if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm layer wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit");

            //if yes (true), leave fight
            if(confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight.  Goodbye!");
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }        
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemy.health = Math.max(0, enemy.health - playerInfo.attack);
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining." );  
    
        // check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            break;
        } 
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
        console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
    
        // check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
            break;
        } 
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }            
    }    
}

//loop funcition for continuous play
var startGame = function() {
    //  * Fight all enemy-robots
    for (var i = 0; i < enemyInfo.length; i++) {        
        //reset player stats
        playerInfo.reset();
        
        if (playerInfo.health > 0) {
            //Inform the player of the current round number
            window.alert("Welcome to Robot Gladiators" + playerInfo.name + "! Round " + (i + 1));

            //Pick new enemy to fight based on the index of the enemy.names array
            var pickedEnemyObj = enemyInfo[i];
            
            //reset enemyHealh before starting new fight
            pickedEnemyObj.health = randomNumber(40, 60);

            //use debugger to pause script from running and cheeck what's going on 
            //debugger;

            //pass the pickedenemy.name variable's value into the fight function 
            fight(pickedEnemyObj); 

            //if we're not at the last enemy in the array, and player has not been defeated
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                if (storeConfirm){
                    shop();
                }                
            }            
        }
        
    else {
        window.alert(playerInfo.name + ", you have lost your robot in battle! Game Over!");
        break;
        }
    }
       
}
//provide game stats to player and option to end game
var endGame = function() {
    //if player is still alive, player wins!
    if (playerInfo.health > 0){
        window.alert("Great job, you've suvived he game! You now have a score of " + playerInfo.money + ".");

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
        "If you wish to REFILL your health, PRESS 1\n If you wish to UPGRADE your attack, PRESS 2\n If you wish to just LEAVE the store, PRESS 3  Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice " );
    
        //Using switch to determine to REFILL, UPGRADE, or, LEAVE the shop based on shopOptionPrompt value
        switch (shopOptionPrompt) {
            case 1:
                playerInfo.refillHealth();
                break;
                
                case 2:
                playerInfo.upgradeAttack();
                break;

                case 3:                    
                window.alert("Leaving the store.");
                //do nothing, so function will end
                break;

            default:
                window.alert("You did not ENTER a valid number.  Try again. ☹️");
                //call shop() again to force player to pick a valid option
                shop();
                break;            
        };
    }
    
    //function to generate a random numeric value
    var randomNumber = function (min, max) {
        var value = Math.floor(Math.random() * (max - min + 1) + min); // Ex. range 40 - 60... (60 - 40 + 1) + 40 = return number b/t 40 - 60
        return value;
    }    
    
    //function to handle the player name input
    var getPlayerName = function() {
        var name = "";

        //Continue to prompt user, until a valid name is entered
        while( name === null || name === "") {
            name = prompt ("What is your robot's name?");
        }
        console.log("Your robot's name is " + name);
        return name;
    }

    //declaring player variables
    var playerInfo = {
    name: getPlayerName(),
    health: 100, 
    attack: 10, 
    money: 10,
    
    //function to reset player's health, money, and attack values
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },

    //function to refill player's health after purchasing more health from the store
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for $7 dollars. 💰");
            this.health += 20;
            this.money -= 7; 
        }
        else {
            window.alert("You don't have enough money! 💰💰");
        }              
    },

    //function to upgrade player's attacking power after purchase from store
    upgradeAttack: function() {
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for $7 dollars. 💰");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money! 💰💰");
        }        
    }
};

    //Declaring an array of enemy objects
    var enemyInfo = [
        {
            name: "Roberto", 
            attack: randomNumber(10, 14)
        },

        {
            name: "Amy",
            attack: randomNumber(10, 14)
        },

        {
            name: "Robo Trumble",
            attack: randomNumber(10, 14)
        }

    ];

    

    //Start the game when the page loads
    startGame();

    //endGame function call
    endGame();


