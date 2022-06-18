// opdracht 5.2.1

const dutchSports = ["Voetbal", "Hockey", "Schaatsen"];

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


let sortArray = [2, 7, 5, 10, 4, 9, 3, 1, 8, 6];







