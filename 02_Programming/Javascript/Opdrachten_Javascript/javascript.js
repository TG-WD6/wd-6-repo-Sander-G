// opdracht 5.2.1

// const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

// console.log(dutchSports[0]);
// console.log(dutchSports[1]);
// console.log(dutchSports[2]);


// opdracht 5.2.1
// Loop door het array heen en log de items 1 voor 1 in je console.

// for (let i = 0; i < dutchSports.length; i++){
// console.log(dutchSports [i]);
// }

// opdracht 5.2.2
// hetzelfde met een for...in en een for...of loop

// for (const index in dutchSports){
// console.log(index)
// }

// for (const item of dutchSports){
// console.log(item)

// }

// opdracht 5.2.3
// Maak een for loop die van de getallen 1 t/m 20 de even getallen logt.

const getallenReeks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// for (i=2;i<=getallenReeks.length; i++){
//     if (i%2 == 0){
//         console.log(i);
//     }
// }


// Nu gaan we even oefenen met nested loops. Maak nu een for-loop aan die drie keer draait.

// opdracht 5.2.4 Maak daarbinnen een for-loop die 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 logt.

// for (let i=0; i<= 2; i++) {
// for (let j=1; j <=10; j++){
//     console.log(j);
// }
// }

// opdracht 5.2.5
// Je console.log() toont nu 3x 1,2,3,4,5,6,7,8,9,10. 
// Gebruik nu dezelfde 2 loops om eerst 1, 2,3,4,5,6,7,8,9,10 te loggen, 
// vervolgens 2,4,6,8,10,12,14,16,18,20 en uiteindelijk 3,6,9,12,15,18,21,24,27,30.

// poging 1:
// for (let i=0; i<= 3; i++) {

//     for (let j=1; j <=10; j++){
//         console.log(j);
//     }
//     for (let k=2; k <=20; k++){
//         if (k%2 == 0){
//         console.log(k);
//     }
//     }
//     for (let l=3; l <=20; l++){
//         if (l%2 == 1){
//         console.log(l);
//     }
//     }
// }
// poging 2:

// for (let i=1; i<= 3; i++) {
//     // loop loopt 3 x, eerst met waarde 1, dan 2, dan 3
//     for (let j=1; j <=10; j++){
//         console.log(i*j);
//     }
//     // deze vermenigvuldigd eerst 1*1...1*10, dan 2*1..2*10, dan 3*1...3*10
// }

// opdracht 5.2.6

// let fibonacci = [0,1];

// function listFibonacci(num) {
//     // starting at array index 1, and push current index + previous index to the array
//         for (let i = 1; i < num; i++) {
//             fibonacci.push(fibonacci[i] + fibonacci[i - 1]);
//         }
//         console.log(fibonacci);
//     }
    
//     listFibonacci(50);

// opdracht 5.2.7

// function bubbleSort(items) {
//     let length = items.length;
//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < (length - i -1); j++) {
//             if(items[j] > items[j+1]){
//                 let tmp = items [j];
//                 items [j] = items [j+1];
//                 items [j+1] = tmp;
//             }
//         }
   
   
//     }
// }


// let sortArray = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];
// bubbleSort(sortArray);
// console.log(sortArray);


// opdracht 5.3.1
// Voeg Zeilen en Zwemmen toe aan het einde van het array.

// let dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

// dutchSports.push ("Zeilen", "Zwemmen");
// 'push' voegt items toe aan het einde van de Array.
// console.log(dutchSports);


// opdracht 5.3.2
// Voeg Volleybal toe aan het begin van het array

// dutchSports.unshift ("Volleybal");
// 'unshift' voegt items toe aan het begin van de Array.
// console.log(dutchSports);

// opdracht 5.3.3
// Maak een nieuw array ballSports, met de balsporten uit dutchSports


// const dutchSports = [ "Volleybal", "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ];
// let ballSports = dutchSports.slice(0,3);
// //balsporten op positie 1 tot 3, met slice worden eerste 3 items toegevoegd aan nieuwe array
// console.log(ballSports);

// opdracht 5.3.4
// Verwijder die items uit dutchSports

// const dutchSports = [ "Volleybal", "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ];
// const deleted = dutchSports.splice(0,3);
// // met splice worden de items op positie 1 t/m 3 verwijderd.
// console.log(dutchSports);

// opdracht 5.3.5
// Sorteer het dutchSports array.

// const dutchSports = [ "Volleybal", "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ];
// dutchSports.sort();
// console.log(dutchSports);

// opdracht 5.3.6
// Log elk item in de console.

// console.log(dutchSports);
// ["Hockey", "Schaatsen", "Voetbal", "Volleybal", "Zeilen", "Zwemmen"]



// opdracht 5.3.7
// Maak een nieuw array sportsLength, met daarin de lengte van elk item in het dutchSports array.

// const dutchSports = [ "Volleybal", "Voetbal", "Hockey", "Schaatsen", "Zeilen", "Zwemmen" ];
// let sportsLength = dutchSports.map(getLength);
// // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// function getLength(i){
//     return i.length;
// }
// console.log(sportsLength);







// An array-like is an object.

// Has indexed access to the elements and a non-negative length property to know the number of elements in it. 
// These are the only similarities it has with an array.

// Doesn't have any of the Array methods like push, pop, join, map, etc.



// opdracht 5.4.1

// let arrayLike = document.querySelectorAll('div')
// console.log(arrayLike) //Toont een nodeList! Dat is een soort DOM Object

// output: Nodelist [<div>,<div>]

// Gebruik Array.from() om er een nieuw array van te maken.

// const realArray = Array.from(arrayLike);
// console.log(realArray);

// output: Array [<div>,<div>]



// opdracht 5.4.2. Onderzoek de volgende array methods en maak voor elke een voorbeeld:
// 1. filter() - voorbeeld

// function isBigEnough(value) {
//     return value >= 10
//   };
  
//   let filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
//   console.log(filtered);
 // filtered is [12, 130, 44]

// 2. find() - voorbeeld

// const inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
//   ];
  
//   function isCherries(fruit) {
//     return fruit.name === 'cherries';
//   }
  
//   console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }



// 3. some()
// const array = [1, 2, 3, 7, 5];
// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true



// 4. every()

// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // expected output: true

// 5. includes()

// const array1 = [1, 2, 3];

// console.log(array1.includes(2));
// // expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// // expected output: true

// console.log(pets.includes('at'));
// // expected output: false





// Opdracht 6 - Objects
// Opdracht 6.1
// We oefenen met het aanmaken van Objects.
// Maak meerdere objects Pet met een naam en een soort. Maak een ander dier met elk van de 5 soorten constructor uit de voorbeelden en log deze in de console. Kijk bij elke ook naar de prototype - kan je een verschil ontdekken?

//Object Constructor:

// let firstPet = new Object();

// firstPet.name = "Chico" ;
// firstPet.kind = "Dog" ;
// firstPet.breed = "Chiuahua" ;
// firstPet.age = 13 ;

// console.log(firstPet);

// Literal Constructor:

// let secondPet = { 
//     name : "poekie",
//     kind : "Cat",
//     breed : "Maine Coon",
//     age: 12,
//     }
// console.log(secondPet);

// Function Constructor:

// function ThirdPet(name, kind, breed, age) {
//     this.name = name
//     this.kind = kind
//     this.breed = breed
//     this.age = age
//     }

//     let newPet = new ThirdPet("master splinter", "Rat", "Dumbo Sphynx", 3 );

// console.log(newPet);


// Singleton Constructor:

// let FourthPet = new function() {
//     this.name = "Nijn",
//     this.kind = "Konijn",
//     this.breed = "Vlaamse reus",
//     this.age = 3
// }
// console.log(FourthPet);


// Class-based Constructor:

// class FifthPet {
//     constructor(name, kind, breed, age) {
//         this.name = name
//         this.kind = kind
//         this.breed = breed
//         this.age = age
//     }

// }
// let Yertle = new FifthPet("Yertle", "Turtle", "Roodwang", 73 );
// console.log(Yertle)



// De laatste veelgebruikte manier om Objecten aan te maken is met Object.create()
// Opdracht 6.1.2: 
// Gebruik Object.create() om een Object aan te maken. 
//Doe dit voor elke Pet die je in de vorige opdracht hebt gemaakt, en log ze in de console. 
//Valt er iets op aan de prototype?

// let dog = Object.create(firstPet);
// console.log(dog);

// let cat = Object.create(secondPet);
// console.log(cat);

// let rat = Object.create(newPet);
// console.log(rat);

// let rabbit = Object.create(FourthPet);
// console.log(rabbit);

// let turtle = Object.create(Yertle);
// console.log(turtle);

//  in geval van class based en function constructor wordt de class resp. functienaam weergegeven.
// de pet objecten zijn het prototype van de soort waartoe ze behoren.



// Opdracht 6.1.3: 

// let personObjects = [ 
//     {name: "Sander", age: 43},
//     {name: "Marko", age: 12},
//     {name: "Junier", age: 18},
//     {name: "Bart", age: 33},
//     {name: "Szymon", age: 26},
//     {name: "Alex", age: 33},
//     {name: "Jens", age: 28},
//     {name: "Alexander", age: 25},
//     {name: "Joost", age: 35},
//     {name: "Ruben", age: 33},
//     {name: "Santa", age: 200},                
//     ];

// // console.log(personObjects);


// personObjects.sort(function (x,y) {
//     return x.age - y.age;
// });

// console.table(personObjects); // console geeft een table bij .table ipv basic log
// console.log(personObjects);


// Opdracht 6.2.1
// We oefenen met nested Objects.
// Maak een Club class die het volgende bijhoudt:
// Naam
// Type club
// Aantal :Leden


class Club {
    constructor(naam, type, ledenAantal) {
        this.naam = naam
        this.type = type
        this.ledenAantal = ledenAantal
        this.contactInfo = new this.contactInfo(adres, contactTel, contactPersoon)
  
    }
}

// Opdracht 6.2.2
// Maak een Contactinformatie class aan en voeg die toe aan de Club class. De Contactinformatie houdt het volgende bij:
// Adres
// Telefoonnummer
// Contactpersoon


class ContactInfo {
    constructor(adres, contactTel, contactPersoon){
        this.adres = adres
        this.contactTel = contactTel
        this.contactPersoon = contactPersoon
    }

}
// Opdracht 6.3
// Maak een array met 5 verschillende Clubs aan. Itereer door het array heen en log voor elke Club de naam,
// het telefoonnummer en de contactpersoon.

let clubArray = [
    {naam: "Ajax", type: "voetbal", ledenaantal: 20123, contactTel: 0612341234, contactPersoon: "Johan"},
    {naam: "PSV", type: "voetbal", ledenaantal: 20122, contactTel: 0612341233, contactPersoon: "Willem"},
    {naam: "Vitesse", type: "voetbal", ledenaantal: 20121, contactTel: 0612341232, contactPersoon: "Jan"},
    {naam: "Bloemendaal", type: "hockey", ledenaantal: 6123, contactTel: 0612341231, contactPersoon: "Pieter"},
    {naam: "SGS", type: "cricket", ledenaantal: 543, contactTel: 0612341230, contactPersoon: "Henk"},
    ]

    for(let item in clubArray){
        console.log(`Sportclub: ${clubArray[item].naam}, Telefoonnummer: ${clubArray[item].contactTel}, Contactpersoon: ${clubArray[item].contactPersoon}`);
     }

// Opdracht 6.4

// Geef 2 clubs dezelfde contactpersoon, en verander iets aan deze contactpersoon bij 1 van de 2.
// Log vervolgens de contactpersoon van de andere club.





