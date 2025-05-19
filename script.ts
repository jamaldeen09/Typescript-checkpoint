// const mul = (x:number, y: number) => x * y;

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

import PromptSync from "prompt-sync";
const prompt = PromptSync();

abstract class Player {
  public name: string;
  public health: number;
  public level: number;
  public weapon: string;
  public classChosen: string;
  public alive: boolean;
  public money: number;

  static TrackPlayers = 0;

  constructor(
    name: string,
    health: number,
    level: number,
    weapon: string,
    classChosen: string,
    alive: boolean,
    money: number
  ) {
    this.name = name;
    this.health = health;
    this.level = level;
    this.weapon = weapon;
    this.classChosen = classChosen;
    this.alive = alive;
    this.money = money;

    Player.TrackPlayers++;
  }

  abstract attack(): void;
  abstract heal(): void;
  abstract isAlive(): void;
  abstract takeDamage(): void;


  set = (newHealth: number, newLevel: number, alive: boolean) => {
    this.health = newHealth;
    this.level = newLevel;
    this.alive = alive;
  };

  viewStatus = () => {
    console.log(
      `---- Status ---- \nPlayer Name: ${this.name}\nHealth: ${this.health}\nLevel: ${this.level}\nWeapon Equipped: ${this.weapon}\nClass: ${this.classChosen}`
    );
  };

  viewMoney = () => {
    console.log(`Money: $${this.money}`);
  };

  updateMoney = (newAmount: number) => {
    this.money = newAmount;
  };
}

abstract class Enemy {
  public name: string;
  public health: number;
  public damage: number;
  public isAlive: boolean;

  constructor(name: string, health: number, damage: number, isAlive: boolean) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.isAlive = isAlive;
  }

  abstract attack(): void;
  abstract defend(): void;

  noLongerAlive = (newIsAlive: boolean): void => {
    this.isAlive = newIsAlive;
  };
  takeDamage = (): void => {
    console.log("ARGHH");

    this.health = this.health - 10;
  };

  get = () => {
    return `Health: ${this.health}`;
  };

  set = (newHealth: number) => {
    this.health = newHealth;
  };
}

class Inventory<T> {
  public _inventory: T[] = [];

  constructor(inventory: T[]) {
    this._inventory = inventory;
  }

  addItem = (itemToAdd: T): void => {
    this._inventory.push(itemToAdd);
  };

  removeItem = (indexToRemove: number): void => {
    this._inventory = this._inventory.filter(
      (_, index) => index !== indexToRemove
    );
  };

  viewInventory = (): void => {
    console.log(`---- Inventory ----\n`);
    for (let i = 0; i < this._inventory.length; i++) {
      console.log(`${JSON.stringify(this._inventory[i], null, 2)}}`);
    }
  };
}

interface inventoryItem {
  weapons: WeaponInfo[];
  potions: string[];
  extras: string[];
}

interface WeaponInfo {
  rarity: string;
  totalDamage: number;
  weaponHealth: number;
  weaponName: string;
}

class Berserker extends Player {
  attack = (): void => {
    console.log("RAGING BULL!!");
  };

  defend = (): void => {
    console.log("PARRY!");
  };
  heal = (): void => {
    console.log("Healing Flames!");
  };
  isAlive = () => {};
  takeDamage = (): void => {
    console.log("ARGH!");
  };
}

class Mage extends Player {
  attack = (): void => {
    console.log("WATER MAGIC: OCEONOVA");
  };

  defend = (): void => {
    console.log("WIND SHIELD");
  };
  heal = (): void => {
    console.log("Blessing of the faries");
  };
  isAlive = () => {
    return true;
  };
  takeDamage = (): void => {
    console.log("OUCH!");
  };
}

class Warrior extends Player {
  attack = (): void => {
    console.log("NORTH BLADE: STAB OF THE WIND");
  };

  defend = (): void => {
    console.log("FLASH STEP!");
  };
  heal = (): void => {
    console.log("NORTH BLADE: COCOON");
  };
  isAlive = () => {
    return true;
  };
  takeDamage = (): void => {
    console.log("RAAARGHH!");
  };
}

class Paladin extends Player {
  attack = (): void => {
    console.log("HOLY STAB");
  };

  defend = (): void => {
    console.log("SHIELD!!");
  };
  heal = (): void => {
    console.log("WHITE SPIRIT: HEAL!");
  };
  isAlive = () => {
    return true;
  };
  takeDamage = (): void => {
    console.log("AAAAAHHH!");
  };
}

const nameCreation = () => {
  let trigger = true;

  while (trigger) {
    const username: string = prompt("Enter a username: ");

    if (!username) {
      console.log("Username cannot me empty.");
    } else if (username.length <= 1) {
      console.log("Username must be at leat 2 characters");
    } else {
      trigger = false;
      return username;
    }
  }
};

const classSelection = () => {
  let trigger = true;

  while (trigger) {
    const selectedClass: string = prompt(
      "---- Pick a class ----\n1. Berserker\n2. Warrior\n3. Mage\n4. Paladin\nChoose: "
    );

    if (!selectedClass) {
      const randomizing: string[] = ["Berserker", "Warrior", "Mage", "Paladin"];

      console.log("Choosing a random class....");

      const randomizedIndex: number = Math.floor(
        Math.random() * randomizing.length
      );

      const randomClass: string = randomizing[randomizedIndex];

      console.log(`----- Class Chosen: ${randomClass} -----`);
      trigger = false;
      return randomClass;
    } else if (selectedClass === "1") {
      console.log("----- Class Chosen: Berserker -----");
      trigger = false;
      return "Berserker";
    } else if (selectedClass === "2") {
      console.log("----- Class Chosen: Warrior -----");
      trigger = false;
      return "Warrior";
    } else if (selectedClass === "3") {
      console.log("------ Class Chosen: Mage -----");
      trigger = false;
      return "Mage";
    } else if (selectedClass === "4") {
      console.log("----- Class Chosen: Paladin -----");
      trigger = false;
      return "Paladin";
    } else {
      console.log("----- Invalid Class -----");
    }
  }
};

class Stats {
  protected strength: number;
  protected speed: number;
  protected magicalPower: number;
  protected stamina: number;
  protected magicType: string;
  protected buffs: string[];

  constructor(
    strength: number,
    speed: number,
    magicalPower: number,
    stamina: number,
    magicType: string,
    buffs: string[]
  ) {
    this.strength = strength;
    this.speed = speed;
    this.magicalPower = magicalPower;
    this.stamina = stamina;
    this.magicType = magicType;
    this.buffs = buffs;
  }

  set = (
    newStrength: number,
    newSpeed: number,
    newMagicalPower: number,
    newStamina: number
  ): void => {
    this.strength = newStrength;
    this.speed = newSpeed;
    this.magicalPower = newMagicalPower;
    this.stamina = newStamina;
  };

  viewStats = () => {
    console.log(
      `---- Stats ----\nStrength: ${this.strength}\nSpeed: ${this.speed}\nMagical Power: ${this.magicalPower}\nMagic: ${this.magicType}\nStamina: ${this.stamina}`
    );
  };
}

class Equipped {
  slots: string[];
  equipped: string;

  constructor(slots: string[], equipped: string) {
    this.slots = slots;
    this.equipped = equipped;
  }

  set = (newEquipped: string) => {
    this.equipped = newEquipped;
  };

  viewEquippedItem = (): void => {
    console.log(`Equipped Item: ${this.equipped}`);
  };
}

const characterCreation = () => {
  const username = nameCreation();
  const className = classSelection();

  if (className === "Berserker") {
    const newUser = new Berserker(
      username === undefined ? "User" : username,
      105,
      1,
      "Axe",
      "Berserker",
      true,
      100
    );

    const newInventory = new Inventory<inventoryItem>([
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

    const buffs: string[] = [
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
    const newUser = new Warrior(
      username === undefined ? "User" : username,
      105,
      1,
      "Long Sword",
      "Warrior",
      true,
      100
    );

    const newInventory = new Inventory<inventoryItem>([
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

    const buffs: string[] = [
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
    const newUser = new Mage(
      username === undefined ? "User" : username,
      102,
      1,
      "Staff",
      "Mage",
      true,
      100
    );

    const newInventory = new Inventory<inventoryItem>([
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

    const buffs: string[] = [
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
    const newUser = new Paladin(
      username === undefined ? "User" : username,
      110,
      1,
      "Sword and Shield",
      "Paladin",
      true,
      100
    );

    const newInventory = new Inventory<inventoryItem>([
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

    const buffs: string[] = [
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
    const choice: string = prompt(
      `1. Go outside to hunt\n2. Menu\n3. Shop\nPick a choice:  `
    );

    if (choice === "2") {
      trigger = true;
      while (trigger) {
        const usersPick: string = prompt(
          "--- Menu ---\n1. View Stats\n2.View Information\n3. View Inventory\n4. Go Back\nPick a Choice:"
        );

        if (usersPick === "1") {
          ingameCharInfo?.statsInfo.viewStats();
          trigger = false;
        } else if (usersPick === "2") {
          ingameCharInfo?.usersInfo.viewStatus();
          trigger = false;
        } else if (usersPick === "3") {
          ingameCharInfo?.inventoryInfo.viewInventory();
          let outerLoop = true;
          let itemTypeHandler = true;

          while (outerLoop) {
            const interactingWithInventory = prompt(
              "1. Add Item\n2. Remove Item\n3.Go Back\nPick a choice:"
            );

            if (interactingWithInventory === "1") {
              const itemToAdd: string = prompt("Enter Item To Add:");

              let innerWhile = true;
              innerWhile = true;
              while (innerWhile) {
                const itemType = prompt(
                  "1. weapon\n2. potion\n3. extras\nPick the items type: "
                );

                if (itemType === "1") {
                  let seperateTrig = true;
                  seperateTrig = true;
                  while (seperateTrig) {
                    const itemRarity = prompt(
                      "--- Enter Weapon's Rarity ---\n1. common\n2. uncommon\n3. Epic\n4.Legendary\nPick a choice: "
                    );
                    if (itemRarity === "1") {
                      const weaponToPush: WeaponInfo = {
                        rarity: "common",
                        totalDamage: 10,
                        weaponHealth: 100,
                        weaponName: itemToAdd,
                      };

                      ingameCharInfo?.inventoryInfo._inventory.forEach(
                        (type) => {
                          type.weapons.push(weaponToPush);
                        }
                      );
                      console.log("Weapon Added");
                      seperateTrig = false;
                      innerWhile = false;
                    } else if (itemRarity === "2") {
                      const weaponToPush: WeaponInfo = {
                        rarity: "uncommon",
                        totalDamage: 14,
                        weaponHealth: 100,
                        weaponName: itemToAdd,
                      };

                      ingameCharInfo?.inventoryInfo._inventory.forEach(
                        (type) => {
                          type.weapons.push(weaponToPush);
                        }
                      );

                      console.log("Weapon Added");
                      seperateTrig = false;
                      innerWhile = false;
                    } else if (itemRarity === "3") {
                      const weaponToPush: WeaponInfo = {
                        rarity: "Epic",
                        totalDamage: 20,
                        weaponHealth: 100,
                        weaponName: itemToAdd,
                      };

                      ingameCharInfo?.inventoryInfo._inventory.forEach(
                        (type) => {
                          type.weapons.push(weaponToPush);
                        }
                      );
                      console.log("Weapon Added");
                      seperateTrig = false;
                      innerWhile = false;
                    } else if (itemRarity === "4") {
                      const weaponToPush: WeaponInfo = {
                        rarity: "Legendary",
                        totalDamage: 50,
                        weaponHealth: 100,
                        weaponName: itemToAdd,
                      };

                      ingameCharInfo?.inventoryInfo._inventory.forEach(
                        (type) => {
                          type.weapons.push(weaponToPush);
                        }
                      );
                      console.log("Weapon Added");
                      seperateTrig = false;
                      innerWhile = false;
                    } else {
                      console.log("Invalid Rarity");
                    }
                  }
                } else if (itemType === "2") {
                  ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                    type.potions.push(itemToAdd);
                  });
                  console.log("Potion added");
                  innerWhile = false;
                } else if (itemType === "3") {
                  ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                    type.extras.push(itemToAdd);
                  });
                  console.log("Extra added");
                  innerWhile = false;
                } else {
                  console.log("Invalid item type");
                }
              }
            } else if (interactingWithInventory === "2") {
              let removeTrigger = true;
              removeTrigger = true;
              let itemsIndex = prompt("Enter the items Index: ");
              const converted: number = parseInt(itemsIndex);

              while (removeTrigger) {
                const itemTypeToRemove: string = prompt(
                  "1. Weapon\n2. Potion\n3. Extra\nPick The Items Type: "
                );

                if (itemTypeToRemove === "1") {
                  ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                    type.weapons = type.weapons.filter(
                      (_, index) => index !== converted
                    );
                  });
                  console.log("Weapon Removed");
                  removeTrigger = false;
                } else if (itemTypeToRemove === "2") {
                  ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                    type.potions = type.potions.filter(
                      (_, index) => index !== converted
                    );
                  });
                  console.log("Potion Removed");
                  removeTrigger = false;
                } else if (itemTypeToRemove === "3") {
                  ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                    type.extras = type.extras.filter(
                      (_, index) => index !== converted
                    );
                  });
                  console.log("Extra Removed");
                  removeTrigger = false;
                } else {
                  console.log("Invalid Item Type");
                }
              }
            } else if (interactingWithInventory === "3") {
              outerLoop = false;
            }
          }
        } else if (usersPick === "4") {
          trigger = false;
        } else {
          console.log("Invalid Choice");
        }
      }
    } else if (choice === "3") {
      console.log(`--- Welcome to the store ---`);
      ingameCharInfo?.usersInfo.viewMoney();
      const currStore: Store[][] = [
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
      const randomShop: number = Math.floor(Math.random() * currStore.length);

      const randomStore: Store[] = currStore[randomShop];

      let storeInteractor = true;
      storeInteractor = true;
      for (let i = 0; i < randomStore.length; i++) {
        console.log(`${i + 1}. ${JSON.stringify(randomStore[i], null, 2)}`);
      }

      while (storeInteractor) {
        const buying: string = prompt("What would you like to buy(1 - 3): ");

        if (buying === "1") {
          if (
            randomStore[0].itemCost >
            (ingameCharInfo?.usersInfo.money === undefined
              ? 0
              : ingameCharInfo?.usersInfo.money)
          ) {
            console.log(
              `You currently have: $${ingameCharInfo?.usersInfo.money}, You cant afford it.`
            );
          } else {
            ingameCharInfo?.usersInfo.updateMoney(
              ingameCharInfo?.usersInfo.money - randomStore[0].itemCost
            );

            if (randomStore[0].itemType === "Weapon") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                const weaponInfo: WeaponInfo = {
                  rarity: randomStore[0].itemRarity,
                  totalDamage: randomStore[0].itemDamage,
                  weaponHealth: 100,
                  weaponName: randomStore[0].itemName,
                };
                type.weapons.push(weaponInfo);
              });
            } else if (randomStore[0].itemType === "Extra") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.extras.push(randomStore[0].itemName);
              });
            } else {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.potions.push(randomStore[0].itemName);
              });
            }
            console.log(`${randomStore[1].itemName} has been bought`);
            storeInteractor = false;
          }
        } else if (buying === "2") {
          if (
            randomStore[1].itemCost >
            (ingameCharInfo?.usersInfo.money === undefined
              ? 0
              : ingameCharInfo?.usersInfo.money)
          ) {
            console.log(
              `You currently have: $${ingameCharInfo?.usersInfo.money}, You cant afford it.`
            );
          } else {
            ingameCharInfo?.usersInfo.updateMoney(
              ingameCharInfo?.usersInfo.money - randomStore[1].itemCost
            );
            console.log(`${randomStore[1].itemName} has been bought`);
            if (randomStore[1].itemType === "Weapon") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                const weaponInfo: WeaponInfo = {
                  rarity: randomStore[1].itemRarity,
                  totalDamage: randomStore[1].itemDamage,
                  weaponHealth: 100,
                  weaponName: randomStore[1].itemName,
                };
                type.weapons.push(weaponInfo);
              });
            } else if (randomStore[1].itemType === "Extra") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.extras.push(randomStore[1].itemName);
              });
            } else {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.potions.push(randomStore[1].itemName);
              });
            }
            storeInteractor = false;
          }
        } else if (buying === "3") {
          if (
            randomStore[2].itemCost >
            (ingameCharInfo?.usersInfo.money === undefined
              ? 0
              : ingameCharInfo?.usersInfo.money)
          ) {
            console.log(
              `You currently have: $${ingameCharInfo?.usersInfo.money}, You cant afford it.`
            );
          } else {
            ingameCharInfo?.usersInfo.updateMoney(
              ingameCharInfo?.usersInfo.money - randomStore[2].itemCost
            );
            console.log(`${randomStore[2].itemName} has been bought`);
            if (randomStore[2].itemType === "Weapon") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                const weaponInfo: WeaponInfo = {
                  rarity: randomStore[2].itemRarity,
                  totalDamage: randomStore[2].itemDamage,
                  weaponHealth: 100,
                  weaponName: randomStore[2].itemName,
                };
                type.weapons.push(weaponInfo);
              });
            } else if (randomStore[2].itemType === "Extra") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.extras.push(randomStore[2].itemName);
              });
            } else {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.potions.push(randomStore[2].itemName);
              });
            }
            storeInteractor = false;
          }
        } else {
          console.log("Invalid Store");
        }
      }
    } else if (choice === "1") {
      console.log("Walking......");

      console.log("---- YOU'VE COME ACROSS AN ORC ---- ");

      const orc = new Orc("Gargule The Orc", 30, 10, true);
      let orcEncounter = true;
      let otherStory: boolean = true
      while (orcEncounter) {
        orcEncounter = true;
        const doSomething = prompt("1.Attack\n2.Run Away\nWhat will you do?: ");
        if (doSomething === "1") {
          ingameCharInfo?.usersInfo.attack();
          orc.takeDamage(); // minus 10 from health and Arghh
          orc.attack();
          ingameCharInfo?.usersInfo.defend();
          ingameCharInfo?.usersInfo.attack();

          orc.set(0);
          if (orc.health === 0) {
            orc.noLongerAlive(false);
          }
          console.log("You Have defeated the orc!");
          console.log("You have gained a level!")
      
          ingameCharInfo?.usersInfo.set(100 + 1,ingameCharInfo?.usersInfo.level + 1,true);
          ingameCharInfo?.usersInfo.heal();
          console.log("You have healed!")
          console.log(`Current Health: ${ingameCharInfo?.usersInfo.health}`);
          console.log("Loot Dropped: orc tooth (Extra)");
          let pickingLoot: boolean = true;
          

          // loot picking
          while (pickingLoot) {
            const pickedLoot = prompt(
              "Would You like to pick up the orc tooth?(y/n): "
            );

            if (pickedLoot.toLowerCase() === "y") {
              ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                type.extras.push("orc tooth");
              });
              console.log("Loot was added to your inventory");
              pickingLoot = false;
            } else if (pickedLoot.toLowerCase() === "n") {
              console.log("Loot has not been added to your inventory");
              pickingLoot = false;
              otherStory = true;
            } else {
              console.log("Invalid Choice");
            }
          }

          orcEncounter = false;
        } else if (doSomething === "2") {
          console.log("You Ran Away.......");

          console.log("You Encounter A dragon....");

          ingameCharInfo?.usersInfo.set(0, 0, false);
          console.log("You have died.......");
          orcEncounter = false;
          mainLoop = false;
          otherStory = false
        } else {
          console.log("Invalid option pick (1 or 2)");
        }
      }

      while (otherStory){
        console.log("You keep walking.....");
        console.log("...... You Discover a Massive Dungeon.....");

        const dungeonDecision = prompt(
          "1. Enter the Dungeon\n2. Ignore it\nPick a choice: "
        )

        if (dungeonDecision === "2"){
          console.log("You have chosen to ignore it.......");

          console.log("Walking...")
          console.log("You have come across a beast..")

          console.log("It eats and digests you...");
          console.log("You have died");
          ingameCharInfo?.usersInfo.set(0,0,false);
          otherStory = false;
          mainLoop = false
        } else if (dungeonDecision === "1"){
          console.log("You Decided to enter....");
          console.log("Walking...");
          console.log("You have come across a mysterious chest...");

          console.log("---- OH NO A DARK MANTIS ATTACKS YOU FROM BEHIND");
          const darkMantis = new DarkMantis ("Dark Mantis",50,20,true);

          darkMantis?.attack();
          ingameCharInfo?.usersInfo.takeDamage();
          ingameCharInfo?.usersInfo.set(80,101,true);
          ingameCharInfo?.usersInfo.attack();
          darkMantis.takeDamage()
          darkMantis.takeDamage()
          darkMantis.takeDamage()

          darkMantis.attack();
          ingameCharInfo?.usersInfo.defend();
          ingameCharInfo?.usersInfo.attack();
          darkMantis.takeDamage()
          darkMantis.takeDamage()

          if (darkMantis.health === 0){
            console.log("You have defeated the dark mantis")
            console.log("No loot was dropped...");
          }

          console.log("The Chest is still there");

          let mysteriousChest = true;
          while (mysteriousChest){
            const open = prompt(
              "Would you like to open the chest?(y/n): "
            )

            if (open.toLowerCase() === "n"){
              console.log("A stronger dark mantis appeared");
              console.log("It digests and eats you");
              console.log("You have died");

              ingameCharInfo?.usersInfo.set(0, 0, false);
              mainLoop = false;
              mysteriousChest = false;
              otherStory = false;
            }
            else if (open.toLowerCase() === "y"){
              console.log("You Have discovered a Legendary sword");

              console.log("You Have picked the sword...");

              const arthursSword: WeaponInfo = {
                rarity: "Legendary",
                totalDamage: 180,
                weaponHealth: 100,
                weaponName: "Arthurs Sword"
              }

              
              let shallEquip = true;
              while(shallEquip){
                const equip = prompt(
                  "Would you like to equip it(y/n): "
                )
                if (equip === "n"){
                  console.log("Weapon Has been stored in your inventory safely");
                  ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                    type.weapons.push(arthursSword);
                  })
                  shallEquip = false
                  mysteriousChest = false
                  otherStory = false;
                  mainLoop = false
                }
                else if (equip === "y"){
                  
                  if (ingameCharInfo?.usersInfo.classChosen === "Berserker"){
                    ingameCharInfo?.slots.set("Arthurs Sword");
                    const axe:WeaponInfo = {
                      rarity: "common",
                      weaponName: "Axe",
                      weaponHealth: 80,
                      totalDamage: 20,
                    }
                    ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                      type.weapons.push(axe);
                    })
                    console.log("Weapon Axe has been stored");
                    shallEquip = false;
                    mysteriousChest = false;
                    otherStory = false
                    mainLoop = false
                  }
                  if (ingameCharInfo?.usersInfo.classChosen === "Mage"){
                    ingameCharInfo?.slots.set("Arthurs Sword");
                    const staff:WeaponInfo = {
                      rarity: "common",
                      weaponName: "Staff",
                      weaponHealth: 80,
                      totalDamage: 20,
                    }
                    ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                      type.weapons.push(staff);
                    })
                    console.log("Weapon Staff has been stored");
                    shallEquip = false;
                    mysteriousChest = false;
                    otherStory = false
                    mainLoop = false
                  }
                  if (ingameCharInfo?.usersInfo.classChosen === "Warrior"){
                    ingameCharInfo?.slots.set("Arthurs Sword");
                    const longSword:WeaponInfo = {
                      rarity: "common",
                      weaponName: "Long Sword",
                      weaponHealth: 80,
                      totalDamage: 20,
                    }
                    ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                      type.weapons.push(longSword);
                    })
                    console.log("Weapon Long Sword has been stored");
                    shallEquip = false;
                    mysteriousChest = false;
                    otherStory = false
                    mainLoop = false
                  }
                  if (ingameCharInfo?.usersInfo.classChosen === "Paladin"){
                    ingameCharInfo?.slots.set("Arthurs Sword");
                    const paladinsWeapon:WeaponInfo = {
                      rarity: "common",
                      weaponName: "Sword and Shield",
                      weaponHealth: 80,
                      totalDamage: 20,
                    }
                    ingameCharInfo?.inventoryInfo._inventory.forEach((type) => {
                      type.weapons.push(paladinsWeapon);
                    })
                    console.log("Weapon Sword and Shield has been stored");
                    
                    shallEquip = false;
                    mysteriousChest = false;
                    otherStory = false
                    mainLoop = false
                  }
                }
              }
            } else {
              console.log("Invalid Choice....")
            }

          }
        } else {
          console.log("Invalid Choice")
        }
      }

      if (otherStory === false){
        console.log("THE END IM GOING TO MAKE BETTER THAN THIS WHEN I LEARN REACT TYPESCRIPT")
      }
    }
  }
};
class Orc extends Enemy {
  attack = (): void => {
    console.log("BOOM!");
  };
  defend = (): void => {
    console.log("ARGHH ROARRR!");
  };
}

class DarkMantis extends Enemy {
  attack = (): void => {
    console.log("SCREEEECHHHH")
  }
  defend = (): void => {
    console.log("YAAAARRRRRRR");
  }
}
// interface WeaponInfo {
//     rarity: string,
//     totalDamage: number,
//     weaponHealth: number,
//     weaponName: string,
// }

interface Store {
  itemName: string;
  itemCost: number;
  itemBuffs: string[];
  itemRarity: string;
  itemType: string;
  itemDamage: number;
}
gamePlay();
