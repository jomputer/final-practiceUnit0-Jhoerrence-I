/*******************************************************
PSEUDOCODE:
1. Create variables to store basic hero information
2. Combine strings to format hero descriptions
3. Use control structures to determine hero strength level
4. Build an array to store multiple heroes
5. Loop through the array to display hero data
6. Create objects to represent each hero with properties
7. Store objects in an array to act as a database
8. Print results using console.log to verify outputs
*******************************************************/


/***********************
1. VALUES, DATA TYPES, AND OPERATIONS
***********************/
// Creating variables with different data types
let heroName = "Spider-Man"; // string
let heroHealth = 14; // number
let heroAttack = 3; // number
let isAvenger = true; // boolean

console.log("Hero Name:", heroName);
console.log("Health + Attack =", heroHealth + heroAttack); // operation


/***********************
2. STRINGING CHARACTERS TOGETHER
***********************/
// Using template literals to combine strings
let heroDescription = `${heroName} has ${heroHealth} health and ${heroAttack} attack.`;

console.log("Hero Description:", heroDescription);


/***********************
3. CONTROL STRUCTURES AND LOGIC
***********************/
// Using if/else to determine strength level
let strengthLevel;

if (heroAttack >= 4) {
    strengthLevel = "Strong";
} else if (heroAttack >= 3) {
    strengthLevel = "Moderate";
} else {
    strengthLevel = "Weak";
}

console.log(`${heroName} is classified as: ${strengthLevel}`);


/***********************
4. BUILDING ARRAYS
***********************/
// Creating an array of hero names
let heroNames = ["Spider-Man", "Iron Man", "Captain Marvel"];

console.log("Hero Names Array:", heroNames);


/***********************
5. USING ARRAYS
***********************/
// Looping through the array
for (let i = 0; i < heroNames.length; i++) {
    console.log(`Hero at index ${i}: ${heroNames[i]}`);
}


/***********************
6. CREATING AND USING OBJECTS
***********************/
// Creating objects to represent heroes
let spiderMan = {
    name: "Spider-Man",
    health: 14,
    attack: 3,
    ability: "Web Swing"
};

let ironMan = {
    name: "Iron Man",
    health: 9,
    attack: 2,
    ability: "Repulsor Blast"
};

let captainMarvel = {
    name: "Captain Marvel",
    health: 12,
    attack: 4,
    ability: "Photon Blast"
};

// Accessing object properties
console.log("Spider-Man Ability:", spiderMan.ability);


/***********************
COMBINING OBJECTS + ARRAYS (DATABASE)
***********************/
// Creating a "database" of heroes
let marvelDatabase = [spiderMan, ironMan, captainMarvel];

// Loop through database and print details
for (let i = 0; i < marvelDatabase.length; i++) {
    let hero = marvelDatabase[i];

    console.log("---- HERO DATA ----");
    console.log(`Name: ${hero.name}`);
    console.log(`Health: ${hero.health}`);
    console.log(`Attack: ${hero.attack}`);
    console.log(`Ability: ${hero.ability}`);
}


/***********************
EXTRA: TESTING OUTPUTS
***********************/
// Finding a strong hero using logic + arrays + objects
for (let hero of marvelDatabase) {
    if (hero.attack >= 4) {
        console.log(`${hero.name} is a high attack hero!`);
    }
}
