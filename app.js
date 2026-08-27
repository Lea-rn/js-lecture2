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
//// ==> # truthy values

// let x = "";
// let z = null;
// let a = "youssef" * 10;
// console.log(a);
// let t = undefined;
// let h = 1;

// if (a) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

///////// basic boolean logical operators ::
/// AND ==> &&
////  OR ====> ||
//// NOT ==> !

// const hasDrivingLicense = true;
// const hasGoodVision = true;
// const isNotTired = false;

// if (hasDrivingLicense && hasGoodVision && isNotTired) {
//   console.log("sarah able to drive !! ");
// } else if (!hasDrivingLicense || hasGoodVision) {
//   console.log("sarah can drive with some condition ... ");
// } else {
//   console.log("sarah can not drive !! ");
// }

///// challange correction ::
// 1/-

// const scoreDolphins = (97 + 112 + 101) / 3;
// const scorekoalas = (109 + 95 + 106) / 3;

// console.log("dolphins :", scoreDolphins, "koalas :", scorekoalas);

//// 2/-
// if (scoreDolphins > scorekoalas) {
//   console.log("dolphins wins the trophy 🏆");
// } else if (scorekoalas > scoreDolphins) {
//   console.log("koalas wins the trophy 🏆");
// } else if (scoreDolphins === scorekoalas) {
//   console.log("both teams win the trophy !! ");
// }

//// bonus1 && bonus2 :

// if (scoreDolphins > scorekoalas && scoreDolphins >= 100) {
//   console.log("dolphins wins the trophy 🏆");
// } else if (scorekoalas > scoreDolphins && scorekoalas >= 100) {
//   console.log("koalas wins the trophy 🏆");
// } else if (
//   scoreDolphins === scorekoalas &&
//   scoreDolphins >= 100 &&
//   scorekoalas >= 100
// ) {
//   console.log("both teams win the trophy !! ");
// }

// let day = "tuesday";

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("prepare nice exercices");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("write and test code");
// } else if (day === "friday" || day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend");
// } else {
//   console.log("not a valid day");
// }
////// with switch case ::

// let day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("plan course structure");
//     console.log("go to coding meetup");
//     break;

//   case "tuesday":
//     console.log("prepare nice exercices");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write and test code");
//     break;
//   case "friday":
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend");
//     break;

//   default:
//     console.log("not a valid day");
// }

///// normal if statement :
// const age = 18;
// if (age >= 18) {
//   console.log("sarah able to drive");
// } else {
//   console.log("sarah can not drive !! ");
// }
///// ternary operator (esc6) :
//// syntaxe : condition ? true : false

// const message = age >= 18 ? "sarah able to drive" : "sarah can not drive !! ";

// console.log(message);
const age = 17;
///// i'm *** years old so (i can drive) ; (i still a kid)

const result = `i'm ${age} years old so ${age >= 18 ? "i can drive" : "i still a kid"}`;
console.log(result);
