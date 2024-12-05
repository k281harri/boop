//a Q+A
//1  you can assign by using var let or const
//2 you can use var
//3 use the existing parameter and set it to new variable
//4 declare:does it exist? assign:sets value of variable define: combo of declare and assign
//5 helps see steps you want to take
//6 65% planning, 35% typing



// STRINGS

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Kayla";
// let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4; 
// const b = 53; 
// const c = 57; 
// const d = 16; 
// const e = 'Kevin';

// console.log(a < b); 
// console.log(c > d); 
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false); 
// console.log(false && false && false && false && false || true); 
// console.log(false === false) 
// console.log(e == 'Kevin'); 
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations) 
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');


//the Farm
let animal = "cow";

const moo = (a) => {
   return a.toLowerCase === "cow"? "mooooo" : "Hey, You're not a cow"

} 

console.log(moo(animal));
//Driver's Ed
let personAge = 15; // must be under 16

if (personAge >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

//LOOPS
//The Basics
//1
for (let i = 0; i <= 10; i++) {
   console.log(i);
 }
//2
 for (let i = 10; i <= 400; i++) {
   console.log(i);
 }
//3
 for (let i = 12; i <= 4000; i += 3) 
   console.log(i);

//Get Even
//1
for (let i = 1; i <= 100; i++) {
   console.log(i);
 }
//2
for (let i = 1; i <= 100; i++) {
   if (i % 2 === 0) {
     console.log(i + " <-- is an even number");
   } else {
     console.log(i);
   }
 }
//Give Me 5
//1
for (let i = 1; i <= 100; i++) 
   if (i % 2 === 0) {
     console.log(i + " <-- is an even number");
   } else {
     console.log(i);
   }

//2
for (let i = 0; i <= 100; i++) {
   if (i % 5 === 0) {
     console.log("I found a number. High five!");
   }
 }
//3
for (let i = 0; i <= 100; i++) {
   if (i % 5 === 0) {
     console.log("I found a number. High five!");
   }
   if (i % 3 === 0) {
     console.log("I found a number. Three is a crowd");
   }
 }
//Savings Account
//1
let bank_account = 0;

for (let i = 1; i <= 10; i++) {
  bank_account += i;  
}

console.log(bank_account);  
//2
let bank_accountN = 0;

for (let i = 1; i <= 10; i++) {
  bank_accountN += i; 
}

console.log(bank_accountN);  

/// aRRAYS AND CONTROL FLOW
let bank_accountMN = 0;

for (let i = 1; i <= 100; i++) {
  bank_accountMN += i * 2; 
}

console.log(bank_accountMN);

// EASY DOES IT
let quotes = [
   "I CAN -NAS",
   "JUST DO IT -NIKE",
   "I CAN DO IT -KAYLA"
 ];
 
 console.log(quotes); 
 
 //Accessing elements

//1
console.log(RANDOMTHINGS[0])

//2
const randomThings = [1, 10, "Hello", true];

// Change the value at index 2
randomThings[2] = "World";

console.log(randomThings);  

/// CHANGE VALUES
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//1 Access the 3rd element
console.log(ourClass[2]);  // This will output: "Sardine"

//2 Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";

//3 Add  "Cloud City"
ourClass.push("Cloud City");

console.log(ourClass);  // This will output: ["Salty", "Zoom", "Sardine", "Slack", "Octocat", "Cloud City"]

///MIX IT UP
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Octocat", "Cloud City"];

// 1. Add "Aegon" to the end
ourClass.push("Aegon");

// 2. Add another string TO END
ourClass.push("Zebra");

// 3. Remove the first element (5 from the beginning)
ourClass.shift(); 

// 4. "Bob Marley" 
ourClass.unshift("Bob Marley");

// 5. Remove a string 
ourClass.pop();  // This removes "Zebra"

// 6. Reverse the array 
const reversedArray = ourClass.reverse();

console.log(ourClass);  
console.log(reversedArray); 

///BIGGIE SMALLS
//1
let num = 45; 

if (num < 100) {
  console.log("little number");
} else {
   //2
  console.log("big number");
}



///MONKEY IN THE MIDDLE
let num = 7; 
//1
if (num < 5) {
  console.log("little number");
  //2
} else if (num > 10) 
   {
  console.log("big number");
} else {
   //3
  console.log("monkey");
}
///WHATS IN YOUR CLOSET
//1
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//2
kristynsCloset.splice(kristynsCloset.indexOf("yellow knit hat") + 1, 0, "raybans");
//3
kristynsCloset[kristynsCloset.indexOf("yellow knit hat")] = "stained knit hat";
//4
const thomsCloset.shirts = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up" ]
let fshirt = thomsCloset.shirts[0] ;
console.log(firstshirt)
//5
thomsCloset.pants[1];
//6
thomsCloset.accessories[1];
//7
let thomOutfit = "Thom is looking good in this outfit!";
console.log(thomOutfit);

//8
thomsCloset.pants[0] = "Footie Pajamas";



///FUNCTIONS

//A
//B
function printCool(name) {
   console.log(name + " is cool!");
 }
//C
function calculateCube(sideLength) {
   let volume = sideLength ** 3; // Volume of a cube = side^3
   console.log("The volume of the cube is: " + volume);
 }

//D
function isVowel(char) {
   // Convert the character to lowercase to simplify the check
   char = char.toLowerCase();
   // Check if the character is one of the vowels
   return ['a', 'e', 'i', 'o', 'u'].includes(char);
 }
 
 // Test the function on every vowel (both uppercase and lowercase)
 console.log(isVowel('a')); // true
 console.log(isVowel('A')); // true
 console.log(isVowel('e')); // true
 console.log(isVowel('E')); // true
 console.log(isVowel('i')); // true
 console.log(isVowel('I')); // true
 console.log(isVowel('o')); // true
 console.log(isVowel('O')); // true
 console.log(isVowel('u')); // true
 console.log(isVowel('U')); // true
 
 // Test with non-vowels
 console.log(isVowel('b')); // false
 console.log(isVowel('B')); // false
 console.log(isVowel('z')); // false
 console.log(isVowel('Z')); // false
 
//E
function getTwoLengths(str1, str2) {
   // Return an array with the lengths of both strings
   return [str1.length, str2.length];
 }
 
 // Test the function with some example strings
 console.log(getTwoLengths("hello", "world")); // [5, 5]
 console.log(getTwoLengths("apple", "banana")); // [5, 6]
 console.log(getTwoLengths("a", "test")); // [1, 4] 

//F
function getMultipleLengths(arr) {
   // Map over the array and return an array of string lengths
   return arr.map(str => str.length);
 }
 
 // Test the function with an array of strings
 console.log(getMultipleLengths(["hello", "world", "apple", "banana"])); // [5, 5, 5, 6]
 console.log(getMultipleLengths(["a", "test", "array", "function"])); // [1, 4, 5, 8] 

//G
function maxOfThree(num1, num2, num3) {
   // Use Math.max to return the largest number
   return Math.max(num1, num2, num3);
 }
 
 // Test the function with some examples
 console.log(maxOfThree(10, 20, 30)); // 30
 console.log(maxOfThree(100, 50, 75)); // 100
 console.log(maxOfThree(1000, 1000, 1000)); // 1000
 console.log(maxOfThree(7, 8, 8)); // 8
 console.log(maxOfThree(1, 1, 1)); // 1 

//H
function printLongestWord(arr) {
   // Use the reduce method to find the longest word in the array
   return arr.reduce((longest, currentWord) => {
     // Compare the lengths of the current word and the longest word so far
     return currentWord.length > longest.length ? currentWord : longest;
   }, "");
 }
 
 // Test the function with an array of strings
 console.log(printLongestWord(["apple", "banana", "kiwi", "grapefruit"])); // "grapefruit"
 console.log(printLongestWord(["dog", "cat", "elephant", "mouse"])); // "elephant"
 console.log(printLongestWord(["a", "I", "the", "and", "it"])); // "the"
 
///objects

//a
let user = {
   name: "papi",
   email: "chulo@eapple.com",
   age: 21,
   purchased: []
 };
 
//b
   //1
let updatedUser = { 
   ...user,  
   email, "the@grape.com":  
   //2
   age: user.age++  
 };
 
 console.log(updatedUser);
 
//c
let updatedUserWithLocation = {
   ...user, 
   location: "Somewhere, USA"  
 };
 
 console.log(updatedUserWithLocation);
//d

// Add items to the 'purchased' array without modifying the original user object
let updatedUserWithPurchases = {
   ...user,  // Spread the original user object
   purchased: [...user.purchased]  // Make a copy of the original 'purchased' array
 };
 
 // Add items to the 'purchased' array using .push()
 updatedUserWithPurchases.purchased.push("carbohydrates");
 updatedUserWithPurchases.purchased.push("peace of mind");
 updatedUserWithPurchases.purchased.push("Merino jodhpurs");
 
 // Log just "Merino jodhpurs" from the purchased array
 console.log(updatedUserWithPurchases.purchased[2]);
 
//e
// Create the user object with a friend object inside it
let user = {
   name: "John Doe",
   email: "johndoe@example.com",
   age: 30,
   purchased: [],
   friend: {
     name: "Jane Smith",
     age: 30,
     location: "New York, USA",
     purchased: []
   }
 };
 
 // Console log just the friend's name
 console.log(user.friend.name);  // This will log: "Jane Smith"
 
 // Console log just the friend's location
 console.log(user.friend.location);  // This will log: "New York, USA"
 
 // Change the friend's age to 55
 user.friend.age = 55;
 
 // The friend has purchased "The One Ring"
 user.friend.purchased.push("The One Ring");
 
 // The friend has purchased "A latte"
 user.friend.purchased.push("A latte");
 
 // Console log just "A latte" from the friend's purchased array
 console.log(user.friend.purchased[1]);  // This will log: "A latte"
 

//f
// User object with a purchased array
let user = {
   name: "John Doe",
   email: "johndoe@example.com",
   age: 30,
   purchased: ["carbohydrates", "peace of mind", "Merino jodhpurs"],
   friend: {
     name: "Jane Smith",
     age: 55,
     location: "New York, USA",
     purchased: ["The One Ring", "A latte"]
   }
 };
 
 //1
 console.log("User's purchases:");
 for (let i = 0; i < user.purchased.length; i++) {
   console.log(user.purchased[i]);
 }
 //2
 console.log("\nFriend's purchases:");
 for (let i = 0; i < user.friend.purchased.length; i++) {
   console.log(user.friend.purchased[i]);
 }
//g
function updateUser() {
   user.age++;  
   user.name = user.name.toUpperCase(); 
 }
 
 // Example usage
 let user = {
   name: "John Doe",
   email: "johndoe@example.com",
   age: 30,
   purchased: []
 };
 
 updateUser();  
 console.log(user.name);  
 console.log(user.age);   
 


///cat combo
//1
let cat1 = {
   name: "Whiskers",
   breed: "Siamese",
   age: 3
 };
 
 console.log(cat1.age);  

 console.log(cat1.breed);  
//2
let cat2 = {
   name: "Whiskers",
   breed: "Siamese",
   age: 4
 };
//3
// Define the cat1 and cat2 objects
let catii1 = {
   name: "Whiskers",
   breed: "Siamese",
   age: 3
 };
 let catii2 = {
   name: "Shadow",
   breed: "Persian",
   age: 2
 };
 
 function combineCats(mama, papa) {
   console.log(mama);
   console.log(papa);
 }
 combineCats(cat1, cat2);

//4

// Define the cat objects
let cati1 = {
   name: "Whiskers",
   breed: "Siamese",
   age: 3
 };
 
 let cati2 = {
   name: "Shadow",
   breed: "Persian",
   age: 2
 };
 
 let cat3 = {
   name: "Mittens",
   breed: "Bengal",
   age: 1
 };
 
 let cat4 = {
   name: "Simba",
   breed: "Maine Coon",
   age: 4
 };
 
 let cat5 = {
   name: "Luna",
   breed: "British Shorthair",
   age: 5
 };
 
 let cat6 = {
   name: "Leo",
   breed: "Sphynx",
   age: 6
 };
 
 // Define the combineCats function
 function combineCats(mama, papa) {
   console.log(mama);
   console.log(papa);
 }
 
 // Call combineCats three levels deep
 combineCats(
   combineCats(
     combineCats(cati1, cati2),  // Level 1
     combineCats(cat3, cat4)   // Level 2
   ),
   combineCats(
     combineCats(cat5, cat6),  // Level 2
     combineCats(cati1, cat4)   // Level 2
   )  // Level 1
 );
 