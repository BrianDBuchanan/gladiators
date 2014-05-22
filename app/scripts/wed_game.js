function Gladiator(name, talent) {
	this.name = name;
	this.life = 100;

		}

// arena
function Arena(gameType, crowdReaction) {
	this.gameType = gameType;
	this.crowdReaction = crowdReaction;
	this.begin = function(gladiator) {
		var randomTrue = function() {
	var rand = Math.floor(Math.random() * 10);

	if(rand > 5){
		return 0;
	} else {
		return 1;
	}

}

if (randomTrue()) {
	gladiator.life = gladiator.life + this.crowdReaction
} else {
	gladiator.life = gladiator.life - this.crowdReaction
		}
	}
}

//weapon
function Weapon(type, damage) {
	this.type = type;
	this.damage = damage;
	this.hit = functon(gladiator) {
		gladiator.life = gladiator.life - this.damage

		if (gladiator.life < 0){
			$(".status").text("You have defeated the Gladiator");
		} else {
	alert("The Gladiaiftor has been hit. Keep on fighting!")
		console.log(gladiator.life);
		}
}
}

//teammate
function Teammate(name, health) {
	this.name = name;
	this.health = health;
	this.tagTeam = function(gladiator) {
		gladiator.life = gladiator.life + this.health
}}

//VARIABLES


// gladiators
var Thunder = new Gladiator("Thunder", "headlock");
var Laser = new Gladiator("Laser", "knuckle sandwich");
// weapons
var tennisBallGun = new Weapon("Tennis Ball Gun", 30);
var giantMetalBall = new Weapon("Giant Metal Ball", 40);
// arenas
var Eliminator = new Arena("Eliminator", 20);
var Gauntlet = new Arena("Gauntlet", 30);
// teammate
var Storm = new Teammate("Storm", 25);
var Turbo = new Teammate("Turbo", 50);