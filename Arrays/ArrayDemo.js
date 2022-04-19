let origDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("Americal Curl", "Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack Function (LIFO) push and Pop
let pushDog = dogs.push("Golden Retriver");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and remove from First
let addFirst = dogs.unshift("Golden  Retriever");
let shiftDog = dogs.shift();

//automatic add and remove elememts(where , how many to remove , element list)
dogs.splice(2,1,"pug", "Boxer");

//Array function - Contact, Slice and sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();

function scanArray([first,second]) {
    console.log("scan" +first+ " " +second);
}
scanArray(animals);
let joinAnimal = animals.join(" ");
let allAnimals = " ";
for(let animal of animals) allAnimals +=  animal + " ";

console.log("Animals:" +allAnimals);
