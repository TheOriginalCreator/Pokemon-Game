var app = new Vue({
    el: "#app",
    data: {
      //Specify the image src for both pokemon
      userPokemonSrc:
        "http://www.pngmart.com/files/2/Pikachu-PNG-HD.png",
      opponentPokemonSrc:
        "https://pre00.deviantart.net/b3df/th/pre/f/2017/113/d/5/lucario_transparent_by_lucarioocarina-db6xugp.png",
  
      //setting endOptions
      endOptions: ["Yes", "No"],
      endOn: false,
  
      // added startUserHP
      startUserHP: 100,
  
      // added userFill
      userFill: 100,
  
      // setting alive options for both user and computer
      userAlive: true,
      opponentAlive: true,
  
      //names for both of the pokemon
      userPokemon: "Pikachu",
      opponentPokemon: "Lucario",
  
      //add HP and Levels
      userHP: 100,
      opponentHP: 100,
      userLevel: 50,
      opponentLevel: 50,
  
      //Added a string with default battle text and an array with the battle options
      battleText: "What will Pikachu do?",
      battleOptions: ["Fight", "Pokemon", "Item", "Run"],
  
      //opponent pokemon attack arrays
      opponentAttacks: ["Close Combat", "Sword Dance", "Bullet Punch", "Slam"],
      opponentAttackDamage: [15, 40, 50, 25],
  
      //added dynamic user and computer health bars
      userHpBar: {
        width: "100%"
      },
      opponentHpBar: {
        width: "100%"
      },
  
      //create an array called fightOptions
      fightOptions: ["Thunder", "Bite", "Electro Ball", "Slam"],
  
      //set fightOn and OptionsOn
      fightOn: false,
      optionsOn: true,
  
      //added an array called userAttackDamage
      userAttackDamage: [15, 40, 50, 25],
  
      //adjust HP fill variable
      opponentFill: 100,
    },
  
    methods: {
      //call a function called processOption
      processOption: function(option) {
        switch (option) {
          case 1:
            //Handle the fight option
            this.optionsOn = false;
            this.fightOn = true;
            break;
  
          case 2:
            //Handle the pokemon option
            setTimeout(() => {
              this.battleText = "What will " + this.userPokemon + " do?";
            }, 2000);
            this.battleText = "You're our only hope " + this.userPokemon + "!";
            break;
  
          case 3:
            //Handle the item option
            setTimeout(() => {
              this.battleText = "What will " + this.userPokemon + " do?";
            }, 2000);
            this.battleText = "No items in bag";
            break;
  
          case 4:
            setTimeout(() => {
              this.battleText = "What will " + this.userPokemon + " do?";
            }, 2000);
            //handle the run option
            this.battleText = "There is no escape...";
            break;
        }
      },
  
      //processAttack function
      processAttack: function(attack) {
        switch (attack) {
          case 1:
            //handle scratch
            this.opponentHP -= this.userAttackDamage[attack - 1];
            //edit if HP !== 0
            this.opponentFill -= this.userAttackDamage[attack - 1];
  
            if (this.opponentFill <= 0) {
              this.opponentHpBar.width = "0%";
            } else {
              this.opponentHpBar.width = this.opponentFill + "%";
            }
            if (this.checkOpponentHp()) {
              this.battleText = this.opponentPokemon + " fainted! Play again?";
              this.processFaint(1);
            } else if (this.checkOpponentHp() === false) {
              if (this.userAlive) {
                setTimeout(() => {
                  this.battleText = "What will " + this.userPokemon + " do?";
                }, 4000);
                this.battleText =
                  this.userPokemon +
                  " used " +
                  this.fightOptions[attack - 1] +
                  "!";
  
                //call opponent attack function
                setTimeout(() => {
                  this.processOpponentAttack();
                }, 2000);
              }
              break;
            }
  
          case 2:
            //handle fly
            this.opponentHP -= this.userAttackDamage[attack - 1];
            //edit if HP !== 0
            this.opponentFill -= this.userAttackDamage[attack - 1];
            if (this.opponentFill <= 0) {
              this.opponentHpBar.width = "0%";
            } else {
              this.opponentHpBar.width = this.opponentFill + "%";
            }
            if (this.checkOpponentHp()) {
              this.battleText = this.opponentPokemon + " fainted! Play again?";
              this.processFaint(1);
            } else if (this.checkOpponentHp() === false) {
              setTimeout(() => {
                this.battleText = "What will " + this.userPokemon + " do?";
              }, 4000);
  
              this.battleText =
                this.userPokemon + " used " + this.fightOptions[attack - 1] + "!";
  
              //   call opponent attack function
              setTimeout(() => {
                this.processOpponentAttack();
              }, 2000);
            }
            break;
  
          case 3:
            //handle flamethrower
            this.opponentHP -= this.userAttackDamage[attack - 1];
            //edit if HP !== 0
            this.opponentFill -= this.userAttackDamage[attack - 1];
            if (this.opponentFill <= 0) {
              this.opponentHpBar.width = "0%";
            } else {
              this.opponentHpBar.width = this.opponentFill + "%";
            }
            if (this.checkOpponentHp()) {
              this.battleText = this.opponentPokemon + " fainted! Play again?";
              this.processFaint(1);
            } else if (this.checkOpponentHp() === false) {
              setTimeout(() => {
                this.battleText = "What will " + this.userPokemon + " do?";
              }, 4000);
  
              this.battleText =
                this.userPokemon + " used " + this.fightOptions[attack - 1] + "!";
  
              //   call opponent attack function
              setTimeout(() => {
                this.processOpponentAttack();
              }, 2000);
            }
  
            break;
  
          case 4:
            //handle ember
            this.opponentHP -= this.userAttackDamage[attack - 1];
            //edit if HP !== 0
            this.opponentFill -= this.userAttackDamage[attack - 1];
            if (this.opponentFill <= 0) {
              this.opponentHpBar.width = "0%";
            } else {
              this.opponentHpBar.width = this.opponentFill + "%";
            }
            if (this.checkOpponentHp()) {
              this.battleText = this.opponentPokemon + " fainted! Play again?";
              this.processFaint(1);
            } else if (this.checkOpponentHp() === false) {
              setTimeout(() => {
                this.battleText = "What will " + this.userPokemon + " do?";
              }, 4000);
  
              this.battleText =
                this.userPokemon + " used " + this.fightOptions[attack - 1] + "!";
  
              //   call opponent attack function
              setTimeout(() => {
                this.processOpponentAttack();
              }, 2000);
            }
            break;
        }
      },
  
      //Added a function called checkOpponentHp
      checkOpponentHp: function() {
        if (this.opponentHP <= 0) {
          return true;
        } else {
          return false;
        }
      },
  
      // added new function called processFaint
      processFaint: function(pokemon) {
        this.fightOn = false;
        this.endOn = true;
  
        if (pokemon === 1) {
          this.opponentAlive = false;
        } else {
          this.userHP = 0;
          this.userAlive = false;
        }
      },
  
      // created a new function called processOpponentAttack
      processOpponentAttack: function() {
        //  generate random number
        let random = Math.floor(Math.random() * 4 + 1);
  
        //do damage to the user
        this.userHP -= this.opponentAttackDamage[random - 1];
  
        this.userFill -= this.opponentAttackDamage[random - 1];
  
        if (this.userFill <= 0) {
          this.userHpBar.width = "0%";
        } else {
          this.userHpBar.width = this.userFill + "%";
        }
        if (this.checkUserHp()) {
          // add battle text
          this.battleText = this.userPokemon + " fainted! Play again?";
  
          this.processFaint(2);
        } else if (this.checkOpponentHp() === false) {
          //continue battle
          this.battleText =
            this.opponentPokemon +
            " used " +
            this.opponentAttacks[random - 1] +
            "!";
          this.fightOn = false;
          this.optionsOn = true;
        }
      },
  
      // added the checkUserHp function
      checkUserHp: function() {
        if (this.userHP <= 0) {
          //fainted
          return true;
        } else {
          //battle continues
          return false;
        }
      },
      //   created the reset battle function
      resetBattle: function() {
        //reset data to defaults before battle began
        this.endOn = false;
        this.fightOn = false;
        this.optionsOn = true;
        this.battleText = "What will Charizard do?";
        this.userAlive = true;
        this.opponentAlive = true;
        this.userHP = 100;
        this.opponentHP = 100;
        this.userFill = 100;
        this.opponentFill = 100;
        this.userHpBar.width = "100%";
        this.opponentHpBar.width = "100%";
      }
    },
  });
  