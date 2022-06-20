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






