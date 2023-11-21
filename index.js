"use strict";
//type of Guard
function triple(value) {
    if (typeof value === 'string') {
        return value.repeat(3);
    }
    return value * 3;
}
//Truthiness Guards
const el = document.getElementById("idk");
if (el) {
    el;
}
else {
    el;
}
const printLetters = (word) => {
    if (word) {
        for (let char of word) {
            console.log(char);
        }
    }
    else {
        word;
        console.log("YOU DID NOT PASS IN A WORD");
    }
};
// Equality Narrowing
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
someDemo(3, "3");
function getRunTime(media) {
    if ("numEpisodes" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
getRunTime({ title: "Amadeus", duration: 140 });
getRunTime({ title: "Spongebob", numEpisodes: 80, episodeDuration: 80 });
// instanceof Narrowing
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toISOString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
class User {
    constructor(username) {
        this.username = username;
    }
}
class Company {
    constructor(name) {
        this.name = name;
    }
}
function printName(entity) {
    if (entity instanceof User) {
        entity;
    }
    else {
        entity;
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        animal;
        return "Meow";
    }
    else {
        animal;
    }
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "rooster":
            return "Cockadudadoo!";
        case "cow":
            return "Moooo!";
    }
}
const stevie = {
    name: "Stevie Chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};
console.log(getFarmAnimalSound(stevie));
