const TOTAL_HP = 100;
const SUCCESS = 100;
class Fighter {
    constructor (dataJson) {
        this._name = dataJson.name;
        this._damage = dataJson.damage;
        this._hp = dataJson.hp;
        this._strength = dataJson.strength;
        this._agility = dataJson.agility;
        this._wins = 0;
        this._losses = 0;
    }
    getName(){
        return this._name;
    }
    getDamage(){
        return this._damage;
    }
    getStrength(){
        return this._strength;
    }
    getAgility(){
        return this._agility;
    }
    getHealth(){
        return this._hp;
    }
    attack(defender){
        let randomNum = Math.floor(Math.random()*SUCCESS + 1);
        let successProbability = SUCCESS - (defender.getStrength()+ defender.getAgility());
        if (successProbability > randomNum) {
            defender.dealDamage(this.getDamage());
            console.log(this.getName() + ' makes ' + this.getDamage() + ' damage to ' + defender.getName());
        } else {
            console.log(this.getName() + ' attack missed');
        }
    }
    logCombatHistory(){
        console.log('Name: ' + this.getName() + ', Wins: ' + this._wins + ', Losses: ' + this._losses);
    }
    heal(amountOfHealthPoints){
        let amount = amountOfHealthPoints + this.getHealth();
        this._hp = amount < TOTAL_HP ? amount : TOTAL_HP;
    }
    dealDamage(amountOfHealthPoints){
        let amount = this.getHealth() - amountOfHealthPoints;
        this._hp = amount < 0 ? 0 : amount;
    }
    addWin(){
        return this._wins ++;
    }
    addLosses(){
        return this._losses ++;
    }
}
const fighter1 = new Fighter({name:'Maximus', damage: 20, hp: 100, strength: 20, agility: 15});
const fighter2 = new Fighter({name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20});
function battle(fighter1, fighter2) {
    if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
        do {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
        } while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0);
        if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
            endGame(fighter1,fighter2);
        }
    } else {
        let dead = fighter1.getHealth() === 0 ? fighter1 : fighter2;
        console.log(dead.getName() + ' is dead and can`t fight.');
    }
}
function endGame(fighter1, fighter2) {
    let dead;
    let winner;
    if (fighter1.getHealth() === 0) {
        dead = fighter1;
        winner = fighter2;
    } else {
        dead = fighter2;
        winner = fighter1;
    }
    winner.addWin();
    dead.addLosses();
    console.log(winner.getName() + ' has won!');
}
battle(fighter1,fighter2);
const AMOUNT_OF_HP = 50;
fighter1.heal(AMOUNT_OF_HP);
fighter2.heal(AMOUNT_OF_HP);
battle(fighter1,fighter2);
fighter1.logCombatHistory();
fighter2.logCombatHistory();
battle(fighter1,fighter2);