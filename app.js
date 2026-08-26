// //// data types : string , number , boolean ,
// /// "" ==> double cotattion
// //// '' ===> simple cotation
//// ``  ==> backticks

// console.log("ranim");

// //// variable (mutable) :

// let age = 20; /// asign
// var x = 1000;
// console.log(age);
// age = 50; //// reasign

// console.log(age);

// ////constant (imutable) :
// const nom = "ranim";

// console.log(typeof nom);

///// operators > ; < ; >= ;<= :

// let now = 2026;

// const peterYearOfBearth = 1993;
// const maxYearOfBearth = 1990;

// const age1 = now - peterYearOfBearth;
// const age2 = now - maxYearOfBearth;

// console.log("peter age :", age1, "||", "max age :", age2);

// const result = age1 > age2;
// console.log(result, typeof result);

////// concatination :::

// let firstName = "jhon";
// let lastName = "kennedy";
// const now = 2026;
// let bearthYear = 1993;
// let job = " full stack web developper ";

//// before Esc6 (before 2015) :

// let information =
//   "i'm" +
//   " " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "i'm" +
//   " " +
//   (now - bearthYear) +
//   " " +
//   "years old" +
//   " " +
//   "i work as" +
//   " " +
//   job;

// console.log(information);
///// after Esc6 ::
//// ==> template literals
// let inforamation = `i'm ${firstName} ${lastName} i'm ${now - bearthYear} years old i work as ${job} `;

// console.log(inforamation);

//// multiple lines :
///// before Esc6 ::
// let sentence = "hello \n salem \n aslema ";

//// after Esc6 ::
// let sentence = `asma
// mohamed
// youssef`;

// console.log(sentence);

///// conversion ::
// let year = "2026";
// console.log("before conversion :", typeof year);

// let yearAfterConvertion = Number(year);
// console.log("after conversion ", typeof yearAfterConvertion);

// const z = 200;
// console.log(typeof z);
// console.log(typeof String(z));

///// play guess the number ::

// let n = 10 + 5;
// console.log(n);
// let z = "5" - "2" + "10";
// console.log(z);

/////// equality operators (== loose (value) ; === strict(value + type)) :

// let age = "18"; /// string

// if (Number(age) == "18") {
//   console.log("you can drive !!");
// }

// const favorite = prompt("what is your favorite number !! ");

// if (favorite == 13) {
//   console.log("13 is a great number !! ");
// }

///// 5 falsy values : 0; "" ; undefined ; null ; NaN (not a number )
//// ==> truthy values

let x = "";
let z = null;
let a = "youssef" * 10;
console.log(a);
let t = undefined;

if (t) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}
