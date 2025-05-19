"use strict";
// const mul = (x:number, y: number) => x * y;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const div = (x:number, y: number) => x / y;
// const applyFunc = (funcs: ((a: number, b: number) => number)[], values: [number, number][]): number[] => {
//     const results: number[] = [];
//     for (let i = 0; i < funcs.length; i++){
//         for (let y = 0; y < values.length; y++){
//             const generatedNum = funcs[i]( values[y][0], values[y][1] );
//             results.push(generatedNum);
//         }
//     }
//     return results
// }
// const arrayGenerated = applyFunc (
//     [mul, div], [[1, 2], [4, 5]]
// )
// console.log(Math.floor(arrayGenerated.reduce((a, b) => a + b)))
// function  getItemLength (name:string ):number;
// function  getItemLength ( names:t[]):number;
// function getItemLength ( nameOrNames: unknown): unknown {
//     if (typeof nameOrNames === "string") {
//         return nameOrNames.length
//     }
//     else if (Array.isArray(nameOrNames)){
//         return nameOrNames.length
//     }
//     return 0
// }
// getItemLength("Jamal")
// INTERFACES
// interface Person {
//     name:t,
//     age: number,
//     hello: () => void,
//     isFat: boolean
// }
// interface Bunmi {
//     traits:t[]
// }
// interface ChildPerson extends Person, Bunmi {
//     gender:t,
// }
// const getPerson = (p: Person) => {
//     return {
//         name: "Tim",
//         age: 23
//     }
// }
// class Person {
//     private name:t; // it means this property can only be accessed within the class when private is removed by default its going to be public
//     constructor (name:t) {
//         this.name = name;
//     }
//     greet () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
//     getName(){
//         if (this.name.length < 2) return ""
//         return this.name
//     }
//     setName(name:t){
//         return (name.length < 5) ? "" : this.name = name   // getters and setters
//     }
// }
// const p1 = new Person("Tim");
// console.log(p1.getName());
// class Person {
//     protected name:t; // what this means is that outside you STILL CANT access the naem BUTT any class inheriting from this class can access its name thats the difference between protected and private
//     constructor (name:t) {
//         this.name = name;
//     }
//     greet () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// class Employee extends Person {
//     callMe(){
//         console.log(this.name)
//     }
// }
// const pq = new Employee("Jamaldeen");
// console.log(pq.greet())
// Abstract classes
// abstract class Animal { // what this means is that we cannot create an instance of the animal class/ we can use it extend it but cannot create an instance of it
//     abstract makeSound(duration: number): void; // abstract method - anything that is inheriting from this class MUST have this method
//     move(duration: number){
//         this.makeSound(duration)
//     }
// }
// // const animal = new Animal() // error
// class Dog extends Animal { // Non-abstract class 'Dog' does not implement inherited abstract member makeSound from class 'Animal'.
//     makeSound (duration: number){
//         console.log("Woof Wood")
//     }
// }
// const dog = new Dog();
// console.log(dog.move(10));
//
// interface Animal {
//     speak: () => void,
//     verb:t,
// }
// class Dog implements Animal{ // basically when you want to inherit the properties and methods of an interface you use the keyword implements
//     private _name:t;
//     private _color:t;
//     public verb:t;
//     constructor (name:t, color:t, verb:t) {
//         this._name = name;
//         this._color = color;
//         this.verb = verb
//     }
//     public speak() {
//         console.log`I am ${this._name} and I am ${this._color}`
//     }
//     public test () {
//         return 1
//     }
// }
// // const dog: Animal = new Dog ("Bum Bum", "orange")
// // dog.test() // reason why this dosent work is because we are typing the dog as An ANIMAL which is an interface that only have the method speak therefore we cant access
// // the test method since it soely belongs to the class
// const dog = new Dog ("Bum Bum", "orange","Dancing")
// dog.test()
// dog.speak()
// class Dog {
//     static instanceCount: number = 0;  // make a static attribute whenever something is purely belonging to the class
//     name:t;
//     constructor (name:t){
//         Dog.instanceCount++;
//         this.name = name
//     }
//     static DecreaseCount (){  // static methods works the same only the class can access this method not instances of the class
//         Dog.instanceCount--;
//     }
// }
// const dog1 = new Dog("Ibrahim");
// console.log(Dog.instanceCount)
// const dog2 = new Dog ("Samad");
// console.log(Dog.instanceCount)
// Dog.DecreaseCount()
// console.log(Dog.instanceCount)
// GENERICS
// class DataStore<T>{
//     private _items:T[] = [];
//     addItem = (item:T): void => {
//         this._items.push(item)
//     }
//     removeItem = (indexToRemove: number): void => {
//         this._items = this._items.filter((_, index) => index !==  indexToRemove);
//     }
//     getItem = (index: number) => {
//         return this._items[index];
//     }
//     getAllItems = ():T[] => {
//         return this._items
//     }
// }
// interface User {
//     name: string,
//     id: number,
// }
// const data = new DataStore<User>();
// const getValue = <K, V>(key: K, value1: V, value2: V): V => {
//     if (key){
//         return value1
//     }
//     return value2
// }
// getValue("Hello", 1, 2);
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
class Player {
    constructor(name, health, level, weapon, classChosen, alive, money) {
        this.set = (newHealth, newLevel, alive) => {
            this.health = newHealth;
            this.level = newLevel;
            this.alive = alive;
        };
        this.viewStatus = () => {
            console.log(`---- Status ---- \nPlayer Name: ${this.name}\nHealth: ${this.health}\nLevel: ${this.level}\nWeapon Equipped: ${this.weapon}\nClass: ${this.classChosen}`);
        };
        this.viewMoney = () => {
            console.log(`Money: $${this.money}`);
        };
        this.updateMoney = (newAmount) => {
            this.money = newAmount;
        };
        this.name = name;
        this.health = health;
        this.level = level;
        this.weapon = weapon;
        this.classChosen = classChosen;
        this.alive = alive;
        this.money = money;
        Player.TrackPlayers++;
    }
}
Player.TrackPlayers = 0;
class Enemy {
    constructor(name, health, damage, isAlive) {
        this.noLongerAlive = (newIsAlive) => {
            this.isAlive = newIsAlive;
        };
        this.takeDamage = () => {
            console.log("ARGHH");
            this.health = this.health - 10;
        };
        this.get = () => {
            return `Health: ${this.health}`;
        };
        this.set = (newHealth) => {
            this.health = newHealth;
        };
        this.name = name;
        this.health = health;
        this.damage = damage;
        this.isAlive = isAlive;
    }
}
class Inventory {
    constructor(inventory) {
        this._inventory = [];
        this.addItem = (itemToAdd) => {
            this._inventory.push(itemToAdd);
        };
        this.removeItem = (indexToRemove) => {
            this._inventory = this._inventory.filter((_, index) => index !== indexToRemove);
        };
        this.viewInventory = () => {
            console.log(`---- Inventory ----\n`);
            for (let i = 0; i < this._inventory.length; i++) {
                console.log(`${JSON.stringify(this._inventory[i], null, 2)}}`);
            }
        };
        this._inventory = inventory;
    }
}
class Berserker extends Player {
    constructor() {
        super(...arguments);
        this.attack = () => {
            console.log("RAGING BULL!!");
        };
        this.defend = () => {
            console.log("PARRY!");
        };
        this.heal = () => {
            console.log("Healing Flames!");
        };
        this.isAlive = () => { };
        this.takeDamage = () => {
            console.log("ARGH!");
        };
    }
}
class Mage extends Player {
    constructor() {
        super(...arguments);
        this.attack = () => {
            console.log("WATER MAGIC: OCEONOVA");
        };
        this.defend = () => {
            console.log("WIND SHIELD");
        };
        this.heal = () => {
            console.log("Blessing of the faries");
        };
        this.isAlive = () => {
            return true;
        };
        this.takeDamage = () => {
            console.log("OUCH!");
        };
    }
}
class Warrior extends Player {
    constructor() {
        super(...arguments);
        this.attack = () => {
            console.log("NORTH BLADE: STAB OF THE WIND");
        };
        this.defend = () => {
            console.log("FLASH STEP!");
        };
        this.heal = () => {
            console.log("NORTH BLADE: COCOON");
        };
        this.isAlive = () => {
            return true;
        };
        this.takeDamage = () => {
            console.log("RAAARGHH!");
        };
    }
}
class Paladin extends Player {
    constructor() {
        super(...arguments);
        this.attack = () => {
            console.log("HOLY STAB");
        };
        this.defend = () => {
            console.log("SHIELD!!");
        };
        this.heal = () => {
            console.log("WHITE SPIRIT: HEAL!");
        };
        this.isAlive = () => {
            return true;
        };
        this.takeDamage = () => {
            console.log("AAAAAHHH!");
        };
    }
}
const nameCreation = () => {
    let trigger = true;
    while (trigger) {
        const username = prompt("Enter a username: ");
        if (!username) {
            console.log("Username cannot me empty.");
        }
        else if (username.length <= 1) {
            console.log("Username must be at leat 2 characters");
        }
        else {
            trigger = false;
            return username;
        }
    }
};
const classSelection = () => {
    let trigger = true;
    while (trigger) {
        const selectedClass = prompt("---- Pick a class ----\n1. Berserker\n2. Warrior\n3. Mage\n4. Paladin\nChoose: ");
        if (!selectedClass) {
            const randomizing = ["Berserker", "Warrior", "Mage", "Paladin"];
            console.log("Choosing a random class....");
            const randomizedIndex = Math.floor(Math.random() * randomizing.length);
            const randomClass = randomizing[randomizedIndex];
            console.log(`----- Class Chosen: ${randomClass} -----`);
            trigger = false;
            return randomClass;
        }
        else if (selectedClass === "1") {
            console.log("----- Class Chosen: Berserker -----");
            trigger = false;
            return "Berserker";
        }
        else if (selectedClass === "2") {
            console.log("----- Class Chosen: Warrior -----");
            trigger = false;
            return "Warrior";
        }
        else if (selectedClass === "3") {
            console.log("------ Class Chosen: Mage -----");
            trigger = false;
            return "Mage";
        }
        else if (selectedClass === "4") {
            console.log("----- Class Chosen: Paladin -----");
            trigger = false;
            return "Paladin";
        }
        else {
            console.log("----- Invalid Class -----");
        }
    }
};
class Stats {
    constructor(strength, speed, magicalPower, stamina, magicType, buffs) {
        this.set = (newStrength, newSpeed, newMagicalPower, newStamina) => {
            this.strength = newStrength;
            this.speed = newSpeed;
            this.magicalPower = newMagicalPower;
            this.stamina = newStamina;
        };
        this.viewStats = () => {
            console.log(`---- Stats ----\nStrength: ${this.strength}\nSpeed: ${this.speed}\nMagical Power: ${this.magicalPower}\nMagic: ${this.magicType}\nStamina: ${this.stamina}`);
        };
        this.strength = strength;
        this.speed = speed;
        this.magicalPower = magicalPower;
        this.stamina = stamina;
        this.magicType = magicType;
        this.buffs = buffs;
    }
}
class Equipped {
    constructor(slots, equipped) {
        this.set = (newEquipped) => {
            this.equipped = newEquipped;
        };
        this.viewEquippedItem = () => {
            console.log(`Equipped Item: ${this.equipped}`);
        };
        this.slots = slots;
        this.equipped = equipped;
    }
}
const characterCreation = () => {
    const username = nameCreation();
    const className = classSelection();
    if (className === "Berserker") {
        const newUser = new Berserker(username === undefined ? "User" : username, 105, 1, "Axe", "Berserker", true, 100);
        const newInventory = new Inventory([
            {
                weapons: [
                    {
                        rarity: "Common",
                        totalDamage: 1,
                        weaponHealth: 100,
                        weaponName: "Stone",
                    },
                ],
                potions: ["Healing Potion (+1% health)"],
                extras: [
                    "Leather Jacket (+0.4% endurance)",
                    "Leather Boot (+0.1% speed)",
                ],
            },
        ]);
        const buffs = [
            "+10% Strength",
            "+1% Speed",
            "+0.5% Stamina",
            "+2% Magical Power",
            "+5% Health",
        ];
        const playersStats = new Stats(110, 10, 12, 10, "Fire Magic", buffs);
        const slots = ["Axe"];
        const slotsAndEquippedItem = new Equipped(slots, "Axe");
        const playerInformation = {
            usersInfo: newUser,
            inventoryInfo: newInventory,
            statsInfo: playersStats,
            slots: slotsAndEquippedItem,
        };
        return playerInformation;
    }
    if (className === "Warrior") {
        const newUser = new Warrior(username === undefined ? "User" : username, 105, 1, "Long Sword", "Warrior", true, 100);
        const newInventory = new Inventory([
            {
                weapons: [
                    {
                        rarity: "Common",
                        totalDamage: 4,
                        weaponHealth: 100,
                        weaponName: "Wooden Sord",
                    },
                ],
                potions: ["Healing Potion (+1% health)"],
                extras: ["iron ingot"],
            },
        ]);
        const buffs = [
            "+10% Strength",
            "+5% Speed",
            "+0.2% Stamina",
            "+1% Magical Power",
            "+5% Health",
        ];
        const playersStats = new Stats(110, 15, 11, 10, "Wind Magic", buffs);
        const slots = ["Long Sword"];
        const slotsAndEquippedItem = new Equipped(slots, "Long Sword");
        const playerInformation = {
            usersInfo: newUser,
            inventoryInfo: newInventory,
            statsInfo: playersStats,
            slots: slotsAndEquippedItem,
        };
        return playerInformation;
    }
    if (className === "Mage") {
        const newUser = new Mage(username === undefined ? "User" : username, 102, 1, "Staff", "Mage", true, 100);
        const newInventory = new Inventory([
            {
                weapons: [
                    {
                        rarity: "Epic",
                        totalDamage: 25,
                        weaponHealth: 100,
                        weaponName: "Fire Spell",
                    },
                ],
                potions: ["Healing Potion (+1% health)"],
                extras: ["Ruby"],
            },
        ]);
        const buffs = [
            "+2% Strength",
            "+8% Speed",
            "+5% Stamina",
            "+10% Magical Power",
            "+2% Health",
        ];
        const playersStats = new Stats(102, 18, 15, 20, "Water Magic", buffs);
        const slots = ["Staff"];
        const slotsAndEquippedItem = new Equipped(slots, "Staff");
        const playerInformation = {
            usersInfo: newUser,
            inventoryInfo: newInventory,
            statsInfo: playersStats,
            slots: slotsAndEquippedItem,
        };
        return playerInformation;
    }
    if (className === "Paladin") {
        const newUser = new Paladin(username === undefined ? "User" : username, 110, 1, "Sword and Shield", "Paladin", true, 100);
        const newInventory = new Inventory([
            {
                weapons: [
                    {
                        rarity: "Common",
                        totalDamage: 2,
                        weaponHealth: 100,
                        weaponName: "Elphrems Shield",
                    },
                ],
                potions: ["Holy Potion (+5% health)"],
                extras: ["Knife"],
            },
        ]);
        const buffs = [
            "+6% Strength",
            "+5% Speed",
            "+4% Stamina",
            "+4% Magical Power",
            "+10% Health",
        ];
        const playersStats = new Stats(106, 15, 14, 14, "Holy Magic", buffs);
        const slots = ["Sword and Shield"];
        const slotsAndEquippedItem = new Equipped(slots, "Sword and Shield");
        const playerInformation = {
            usersInfo: newUser,
            inventoryInfo: newInventory,
            statsInfo: playersStats,
            slots: slotsAndEquippedItem,
        };
        return playerInformation;
    }
};
const gamePlay = () => {
    console.log("---- Wistoria Wands and Sword ----");
    const ingameCharInfo = characterCreation();
    console.log("-- Youn Have Spawned --");
    let trigger = true;
    let mainLoop = true;
    while (mainLoop) {
        mainLoop = true;
        const choice = prompt(`1. Go outside to hunt\n2. Menu\n3. Shop\nPick a choice:  `);
        if (choice === "2") {
            trigger = true;
            while (trigger) {
                const usersPick = prompt("--- Menu ---\n1. View Stats\n2.View Information\n3. View Inventory\n4. Go Back\nPick a Choice:");
                if (usersPick === "1") {
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.statsInfo.viewStats();
                    trigger = false;
                }
                else if (usersPick === "2") {
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.viewStatus();
                    trigger = false;
                }
                else if (usersPick === "3") {
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo.viewInventory();
                    let outerLoop = true;
                    let itemTypeHandler = true;
                    while (outerLoop) {
                        const interactingWithInventory = prompt("1. Add Item\n2. Remove Item\n3.Go Back\nPick a choice:");
                        if (interactingWithInventory === "1") {
                            const itemToAdd = prompt("Enter Item To Add:");
                            let innerWhile = true;
                            innerWhile = true;
                            while (innerWhile) {
                                const itemType = prompt("1. weapon\n2. potion\n3. extras\nPick the items type: ");
                                if (itemType === "1") {
                                    let seperateTrig = true;
                                    seperateTrig = true;
                                    while (seperateTrig) {
                                        const itemRarity = prompt("--- Enter Weapon's Rarity ---\n1. common\n2. uncommon\n3. Epic\n4.Legendary\nPick a choice: ");
                                        if (itemRarity === "1") {
                                            const weaponToPush = {
                                                rarity: "common",
                                                totalDamage: 10,
                                                weaponHealth: 100,
                                                weaponName: itemToAdd,
                                            };
                                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                                type.weapons.push(weaponToPush);
                                            });
                                            console.log("Weapon Added");
                                            seperateTrig = false;
                                            innerWhile = false;
                                        }
                                        else if (itemRarity === "2") {
                                            const weaponToPush = {
                                                rarity: "uncommon",
                                                totalDamage: 14,
                                                weaponHealth: 100,
                                                weaponName: itemToAdd,
                                            };
                                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                                type.weapons.push(weaponToPush);
                                            });
                                            console.log("Weapon Added");
                                            seperateTrig = false;
                                            innerWhile = false;
                                        }
                                        else if (itemRarity === "3") {
                                            const weaponToPush = {
                                                rarity: "Epic",
                                                totalDamage: 20,
                                                weaponHealth: 100,
                                                weaponName: itemToAdd,
                                            };
                                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                                type.weapons.push(weaponToPush);
                                            });
                                            console.log("Weapon Added");
                                            seperateTrig = false;
                                            innerWhile = false;
                                        }
                                        else if (itemRarity === "4") {
                                            const weaponToPush = {
                                                rarity: "Legendary",
                                                totalDamage: 50,
                                                weaponHealth: 100,
                                                weaponName: itemToAdd,
                                            };
                                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                                type.weapons.push(weaponToPush);
                                            });
                                            console.log("Weapon Added");
                                            seperateTrig = false;
                                            innerWhile = false;
                                        }
                                        else {
                                            console.log("Invalid Rarity");
                                        }
                                    }
                                }
                                else if (itemType === "2") {
                                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                        type.potions.push(itemToAdd);
                                    });
                                    console.log("Potion added");
                                    innerWhile = false;
                                }
                                else if (itemType === "3") {
                                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                        type.extras.push(itemToAdd);
                                    });
                                    console.log("Extra added");
                                    innerWhile = false;
                                }
                                else {
                                    console.log("Invalid item type");
                                }
                            }
                        }
                        else if (interactingWithInventory === "2") {
                            let removeTrigger = true;
                            removeTrigger = true;
                            let itemsIndex = prompt("Enter the items Index: ");
                            const converted = parseInt(itemsIndex);
                            while (removeTrigger) {
                                const itemTypeToRemove = prompt("1. Weapon\n2. Potion\n3. Extra\nPick The Items Type: ");
                                if (itemTypeToRemove === "1") {
                                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                        type.weapons = type.weapons.filter((_, index) => index !== converted);
                                    });
                                    console.log("Weapon Removed");
                                    removeTrigger = false;
                                }
                                else if (itemTypeToRemove === "2") {
                                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                        type.potions = type.potions.filter((_, index) => index !== converted);
                                    });
                                    console.log("Potion Removed");
                                    removeTrigger = false;
                                }
                                else if (itemTypeToRemove === "3") {
                                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                        type.extras = type.extras.filter((_, index) => index !== converted);
                                    });
                                    console.log("Extra Removed");
                                    removeTrigger = false;
                                }
                                else {
                                    console.log("Invalid Item Type");
                                }
                            }
                        }
                        else if (interactingWithInventory === "3") {
                            outerLoop = false;
                        }
                    }
                }
                else if (usersPick === "4") {
                    trigger = false;
                }
                else {
                    console.log("Invalid Choice");
                }
            }
        }
        else if (choice === "3") {
            console.log(`--- Welcome to the store ---`);
            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.viewMoney();
            const currStore = [
                [
                    {
                        itemName: "Miljnor",
                        itemCost: 20000,
                        itemBuffs: ["+15% Strength", "+10% Endurance"],
                        itemRarity: "Legendary",
                        itemType: "Weapon",
                        itemDamage: 79,
                    },
                    {
                        itemName: "Meat",
                        itemCost: 12,
                        itemBuffs: ["+0.2% Strength"],
                        itemRarity: "common",
                        itemType: "Extra",
                        itemDamage: 0,
                    },
                    {
                        itemName: "Cocoon",
                        itemCost: 2000,
                        itemBuffs: ["+10% Health", "+9% Endurance"],
                        itemRarity: "Epic",
                        itemType: "Weapon",
                        itemDamage: 50,
                    },
                ],
                // second store
                [
                    {
                        itemName: "Wooden Sword",
                        itemCost: 20,
                        itemBuffs: ["+1% Strength"],
                        itemRarity: "common",
                        itemType: "Weapon",
                        itemDamage: 10,
                    },
                    {
                        itemName: "Potato",
                        itemCost: 12,
                        itemBuffs: ["+0.4% Strength"],
                        itemRarity: "common",
                        itemType: "Extra",
                        itemDamage: 0,
                    },
                    {
                        itemName: "Arthurs Sword",
                        itemCost: 20000,
                        itemBuffs: ["+22% Strength"],
                        itemRarity: "Legendary",
                        itemType: "Weapon",
                        itemDamage: 90,
                    },
                ],
                //  third store
                [
                    {
                        itemName: "Katana",
                        itemCost: 500,
                        itemBuffs: ["+5% Strength", "+5% Endurance"],
                        itemRarity: "Uncommon",
                        itemType: "Weapon",
                        itemDamage: 25,
                    },
                    {
                        itemName: "Chicken",
                        itemCost: 15,
                        itemBuffs: ["+0.9% Strength"],
                        itemRarity: "common",
                        itemType: "Extra",
                        itemDamage: 0,
                    },
                    {
                        itemName: "Net",
                        itemCost: 2,
                        itemBuffs: ["0.1% health"],
                        itemRarity: "common",
                        itemType: "Weapon",
                        itemDamage: 0,
                    },
                ],
            ];
            const randomShop = Math.floor(Math.random() * currStore.length);
            const randomStore = currStore[randomShop];
            let storeInteractor = true;
            storeInteractor = true;
            for (let i = 0; i < randomStore.length; i++) {
                console.log(`${i + 1}. ${JSON.stringify(randomStore[i], null, 2)}`);
            }
            while (storeInteractor) {
                const buying = prompt("What would you like to buy(1 - 3): ");
                if (buying === "1") {
                    if (randomStore[0].itemCost >
                        ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money) === undefined
                            ? 0
                            : ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money)) {
                        console.log(`You currently have: $${ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money}, You cant afford it.`);
                    }
                    else {
                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.updateMoney((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money) - randomStore[0].itemCost);
                        if (randomStore[0].itemType === "Weapon") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                const weaponInfo = {
                                    rarity: randomStore[0].itemRarity,
                                    totalDamage: randomStore[0].itemDamage,
                                    weaponHealth: 100,
                                    weaponName: randomStore[0].itemName,
                                };
                                type.weapons.push(weaponInfo);
                            });
                        }
                        else if (randomStore[0].itemType === "Extra") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.extras.push(randomStore[0].itemName);
                            });
                        }
                        else {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.potions.push(randomStore[0].itemName);
                            });
                        }
                        console.log(`${randomStore[1].itemName} has been bought`);
                        storeInteractor = false;
                    }
                }
                else if (buying === "2") {
                    if (randomStore[1].itemCost >
                        ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money) === undefined
                            ? 0
                            : ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money)) {
                        console.log(`You currently have: $${ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money}, You cant afford it.`);
                    }
                    else {
                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.updateMoney((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money) - randomStore[1].itemCost);
                        console.log(`${randomStore[1].itemName} has been bought`);
                        if (randomStore[1].itemType === "Weapon") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                const weaponInfo = {
                                    rarity: randomStore[1].itemRarity,
                                    totalDamage: randomStore[1].itemDamage,
                                    weaponHealth: 100,
                                    weaponName: randomStore[1].itemName,
                                };
                                type.weapons.push(weaponInfo);
                            });
                        }
                        else if (randomStore[1].itemType === "Extra") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.extras.push(randomStore[1].itemName);
                            });
                        }
                        else {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.potions.push(randomStore[1].itemName);
                            });
                        }
                        storeInteractor = false;
                    }
                }
                else if (buying === "3") {
                    if (randomStore[2].itemCost >
                        ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money) === undefined
                            ? 0
                            : ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money)) {
                        console.log(`You currently have: $${ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money}, You cant afford it.`);
                    }
                    else {
                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.updateMoney((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.money) - randomStore[2].itemCost);
                        console.log(`${randomStore[2].itemName} has been bought`);
                        if (randomStore[2].itemType === "Weapon") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                const weaponInfo = {
                                    rarity: randomStore[2].itemRarity,
                                    totalDamage: randomStore[2].itemDamage,
                                    weaponHealth: 100,
                                    weaponName: randomStore[2].itemName,
                                };
                                type.weapons.push(weaponInfo);
                            });
                        }
                        else if (randomStore[2].itemType === "Extra") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.extras.push(randomStore[2].itemName);
                            });
                        }
                        else {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.potions.push(randomStore[2].itemName);
                            });
                        }
                        storeInteractor = false;
                    }
                }
                else {
                    console.log("Invalid Store");
                }
            }
        }
        else if (choice === "1") {
            console.log("Walking......");
            console.log("---- YOU'VE COME ACROSS AN ORC ---- ");
            const orc = new Orc("Gargule The Orc", 30, 10, true);
            let orcEncounter = true;
            let otherStory = true;
            while (orcEncounter) {
                orcEncounter = true;
                const doSomething = prompt("1.Attack\n2.Run Away\nWhat will you do?: ");
                if (doSomething === "1") {
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.attack();
                    orc.takeDamage(); // minus 10 from health and Arghh
                    orc.attack();
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.defend();
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.attack();
                    orc.set(0);
                    if (orc.health === 0) {
                        orc.noLongerAlive(false);
                    }
                    console.log("You Have defeated the orc!");
                    console.log("You have gained a level!");
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.set(100 + 1, (ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.level) + 1, true);
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.heal();
                    console.log("You have healed!");
                    console.log(`Current Health: ${ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.health}`);
                    console.log("Loot Dropped: orc tooth (Extra)");
                    let pickingLoot = true;
                    // loot picking
                    while (pickingLoot) {
                        const pickedLoot = prompt("Would You like to pick up the orc tooth?(y/n): ");
                        if (pickedLoot.toLowerCase() === "y") {
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                type.extras.push("orc tooth");
                            });
                            console.log("Loot was added to your inventory");
                            pickingLoot = false;
                        }
                        else if (pickedLoot.toLowerCase() === "n") {
                            console.log("Loot has not been added to your inventory");
                            pickingLoot = false;
                            otherStory = true;
                        }
                        else {
                            console.log("Invalid Choice");
                        }
                    }
                    orcEncounter = false;
                }
                else if (doSomething === "2") {
                    console.log("You Ran Away.......");
                    console.log("You Encounter A dragon....");
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.set(0, 0, false);
                    console.log("You have died.......");
                    orcEncounter = false;
                    mainLoop = false;
                    otherStory = false;
                }
                else {
                    console.log("Invalid option pick (1 or 2)");
                }
            }
            while (otherStory) {
                console.log("You keep walking.....");
                console.log("...... You Discover a Massive Dungeon.....");
                const dungeonDecision = prompt("1. Enter the Dungeon\n2. Ignore it\nPick a choice: ");
                if (dungeonDecision === "2") {
                    console.log("You have chosen to ignore it.......");
                    console.log("Walking...");
                    console.log("You have come across a beast..");
                    console.log("It eats and digests you...");
                    console.log("You have died");
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.set(0, 0, false);
                    otherStory = false;
                    mainLoop = false;
                }
                else if (dungeonDecision === "1") {
                    console.log("You Decided to enter....");
                    console.log("Walking...");
                    console.log("You have come across a mysterious chest...");
                    console.log("---- OH NO A DARK MANTIS ATTACKS YOU FROM BEHIND");
                    const darkMantis = new DarkMantis("Dark Mantis", 50, 20, true);
                    darkMantis === null || darkMantis === void 0 ? void 0 : darkMantis.attack();
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.takeDamage();
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.set(80, 101, true);
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.attack();
                    darkMantis.takeDamage();
                    darkMantis.takeDamage();
                    darkMantis.takeDamage();
                    darkMantis.attack();
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.defend();
                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.attack();
                    darkMantis.takeDamage();
                    darkMantis.takeDamage();
                    if (darkMantis.health === 0) {
                        console.log("You have defeated the dark mantis");
                        console.log("No loot was dropped...");
                    }
                    console.log("The Chest is still there");
                    let mysteriousChest = true;
                    while (mysteriousChest) {
                        const open = prompt("Would you like to open the chest?(y/n): ");
                        if (open.toLowerCase() === "n") {
                            console.log("A stronger dark mantis appeared");
                            console.log("It digests and eats you");
                            console.log("You have died");
                            ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.set(0, 0, false);
                            mainLoop = false;
                            mysteriousChest = false;
                            otherStory = false;
                        }
                        else if (open.toLowerCase() === "y") {
                            console.log("You Have discovered a Legendary sword");
                            console.log("You Have picked the sword...");
                            const arthursSword = {
                                rarity: "Legendary",
                                totalDamage: 180,
                                weaponHealth: 100,
                                weaponName: "Arthurs Sword"
                            };
                            let shallEquip = true;
                            while (shallEquip) {
                                const equip = prompt("Would you like to equip it(y/n): ");
                                if (equip === "n") {
                                    console.log("Weapon Has been stored in your inventory safely");
                                    ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                        type.weapons.push(arthursSword);
                                    });
                                    shallEquip = false;
                                    mysteriousChest = false;
                                    otherStory = false;
                                }
                                else if (equip === "y") {
                                    if ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.classChosen) === "Berserker") {
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.slots.set("Arthurs Sword");
                                        const axe = {
                                            rarity: "common",
                                            weaponName: "Axe",
                                            weaponHealth: 80,
                                            totalDamage: 20,
                                        };
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                            type.weapons.push(axe);
                                        });
                                        console.log("Weapon Axe has been stored");
                                        shallEquip = false;
                                        mysteriousChest = false;
                                        otherStory = false;
                                    }
                                    if ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.classChosen) === "Mage") {
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.slots.set("Arthurs Sword");
                                        const staff = {
                                            rarity: "common",
                                            weaponName: "Staff",
                                            weaponHealth: 80,
                                            totalDamage: 20,
                                        };
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                            type.weapons.push(staff);
                                        });
                                        console.log("Weapon Staff has been stored");
                                        shallEquip = false;
                                        mysteriousChest = false;
                                        otherStory = false;
                                    }
                                    if ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.classChosen) === "Warrior") {
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.slots.set("Arthurs Sword");
                                        const longSword = {
                                            rarity: "common",
                                            weaponName: "Long Sword",
                                            weaponHealth: 80,
                                            totalDamage: 20,
                                        };
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                            type.weapons.push(longSword);
                                        });
                                        console.log("Weapon Long Sword has been stored");
                                        shallEquip = false;
                                        mysteriousChest = false;
                                        otherStory = false;
                                    }
                                    if ((ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.usersInfo.classChosen) === "Paladin") {
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.slots.set("Arthurs Sword");
                                        const paladinsWeapon = {
                                            rarity: "common",
                                            weaponName: "Sword and Shield",
                                            weaponHealth: 80,
                                            totalDamage: 20,
                                        };
                                        ingameCharInfo === null || ingameCharInfo === void 0 ? void 0 : ingameCharInfo.inventoryInfo._inventory.forEach((type) => {
                                            type.weapons.push(paladinsWeapon);
                                        });
                                        console.log("Weapon Sword and Shield has been stored");
                                        shallEquip = false;
                                        mysteriousChest = false;
                                        otherStory = false;
                                    }
                                }
                            }
                        }
                        else {
                            console.log("Invalid Choice....");
                        }
                    }
                }
                else {
                    console.log("Invalid Choice");
                }
            }
            if (otherStory === false) {
                console.log("THE END IM GOING TO MAKE BETTER THAN THIS WHEN I LEARN REACT ");
            }
        }
    }
};
class Orc extends Enemy {
    constructor() {
        super(...arguments);
        this.attack = () => {
            console.log("BOOM!");
        };
        this.defend = () => {
            console.log("ARGHH ROARRR!");
        };
    }
}
class DarkMantis extends Enemy {
    constructor() {
        super(...arguments);
        this.attack = () => {
            console.log("SCREEEECHHHH");
        };
        this.defend = () => {
            console.log("YAAAARRRRRRR");
        };
    }
}
gamePlay();
