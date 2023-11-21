//type of Guard
function triple (value: number | string) {
    if (typeof value === 'string') {
        return value.repeat(3)
    }
    return value *3
}
//Truthiness Guards
const el = document.getElementById("idk")
if(el){
    el
} else {
    el
}

const printLetters = (word?: string) => {
    if(word) {
        for(let char of word){
            console.log(char);
        }
    }
    else {
        word
        console.log("YOU DID NOT PASS IN A WORD");
    }
};

// Equality Narrowing
function someDemo (x: string | number, y: string | boolean){
    if (x === y){
        x.toUpperCase()
    }
}
someDemo(3, "3");

// Narrowing with the In Operator
interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

function getRunTime (media: Movie | TVShow){
    if ("numEpisodes" in media){
        return media.numEpisodes * media.episodeDuration
    }
    return media.duration;
}

getRunTime ({title: "Amadeus", duration: 140});
getRunTime ({title: "Spongebob", numEpisodes: 80, episodeDuration:80});

// instanceof Narrowing
function printFullDate (date: string | Date){
    if (date instanceof Date){
        console.log (date.toISOString());
    }
    else {
        console.log(new Date (date).toUTCString());
    }
}

class User {
    constructor(public username: string) {}
}
class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company){
    if (entity instanceof User) {
        entity
    }
    else {
        entity
    }
}