// *****Exercices: Data Types --> Level00 [6, 7, 8, 9, 10]*****
var uno = "";
var dos = "";
var tres = "";
var quatro = "";
console.log(tres);

var un = "toto",
  deux = "tata",
  trois = "tutu",
  quatre = "titi";
console.log(quatre);

var prenom = "Gregory",
  nom = "DAMOUR",
  statut = "Celibataire",
  pays = "France",
  age = 31;
console.log(prenom + " " + nom + " " + statut + " " + pays + " " + age);

var myAge = 26;
var yourAge = 30;
console.log(
  "J'ai " + myAge + "ans." + "\r\n" + "Vous avez " + yourAge + " ans."
);
// le "\r\n" permet un retour a la ligne sur le console log

//Data Types --> Level01

var defi = "Pratiquer les algorithmes en JavaScript";
console.log(defi);
console.log(defi.length);

console.log(defi.toUpperCase());
console.log(defi.toLowerCase());
console.log(defi.substring(9));

var day = "10 jours en JavaScript";
console.log(day.substring(2));
console.log(day.includes("Script")); //
console.log(day.split());
console.log(day.split(" "));

var social = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(social.split(","));

console.log(day.replace("JavaScript", "PHP")); //12
console.log(day.charAt(15)); //13
console.log(day.charCodeAt("J")); //14
console.log(day.indexOf("a")); //15
console.log(day.lastIndexOf("a")); //16

var test17 =
  "Vous ne pouvez pas terminer une phrase avec parceque parceque c'est une conjonction";
console.log(test17.indexOf("parceque")); //17
console.log(test17.lastIndexOf("parceque")); //18
console.log(test17.search("parceque"));
console.log(day.trim(" ")); //20
console.log(day.startsWith(10));
console.log(day.endsWith("t")); //22
console.log(day.match("a"));
var exo24 = "10 Jours en";
var exo24_2 = "Javascript";
console.log(exo24.concat(" " + exo24_2)); //24
console.log(day.repeat(2));
var phase2 =
  "The quote" +
  "'There is no exercise better for the heart than reaching down and lifting people up.'" +
  " by John Holmes teaches us to help one another.";

console.log(phase2);
var phase2_2 =
  "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"";
console.log(phase2_2); //LVL02 2

console.log(typeof "10" === 10);
console.log(parseInt("10") === 10); //03

console.log(parseFloat("9.8") === 10);
console.log(parseFloat("9.8") + 0.2 === 10); //04
var phase2_5 = "python and jargon";
console.log(phase2_5.includes("on")); //05

var phase2_6 = "I hope this course is not full of jargon.";
console.log(phase2_6.includes("jargon"));

console.log(Math.floor(Math.random() * 101)); //7
// return Math.floor(Math.random() * (max - min + 1)) + min;

console.log(Math.floor(Math.random() * (100 - 50 + 1))) + 50; //8
console.log(Math.floor(Math.random() * 256)); //9

var phase2_10 =
  "You cannot end a sentence with because because because is a conjunction";
console.log(phase2_10.substr(31, 24));

// ### Boolean & Dates --> Level01
var firstName = "Greg",
  lastName = "DAMOUR",
  country = "France",
  city = "Saint-Denis",
  age = 31,
  isMarried = "Non",
  year = 2022;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);
//2
console.log(typeof "10" === 10);
//3
console.log(parseInt("9.8", 10) === 10); //false
//4.1
console.log(age === 31);
console.log(Boolean(true));
console.log(firstName.length === 4);
// 4.2
console.log("test" == 1);
console.log(age === 32);
console.log(city.length === 4);

//5
//5.1 4>3 =true
console.log(4 > 3);
//5.2 4>=3 true
console.log(4 >= 3);
//5.3 4<3 false
console.log(4 < 3);
//5.4 4<=3 false
console.log(4 <= 3);
//5.5 4==4 (true)
console.log(4 == 4);
//5.6 4===4 true
console.log(4 === 4);
//5.7 4!=4 false
console.log(4 != 4);
//5.8 4 !==4 false
console.log(4 !== 4);
//5.9 4 !='4' false
console.log(4 != "4");
//5.10 4 =='4' true
console.log(4 == "4");
//5.10 4 ==='4' false
console.log(4 === "4");
var python = "python";
var jargon = "jargon";
console.log(python.length);
console.log(jargon.length);
console.log(python.length == jargon.length + 1);

//6.4 > 3 && 10 < 12     true
console.log(4 > 3 && 10 < 12);
//6.2.  4 > 3 && 10 > 12 false
console.log(4 > 3 && 10 > 12);
//6.3 4 > 3 || 10 < 12  true
console.log(4 > 3 || 10 < 12);
//6. 4. 4 > 3 || 10 > 12 true   "|| affecte la valeur de l'opérande droit uniquement si l'opérande gauche est false"
console.log(4 > 3 || 10 > 12);
//6.5 !expr  Renvoie false si son unique opérande peut être converti en true, sinon il renvoie true.
//.5   !(4 > 3) false
console.log(!(4 > 3));
//6.6. !(4 < 3) true
console.log(!(4 < 3));
//6.7. !(false) true
console.log(!false);
var test10 = !false;
console.log(typeof test10);
//6.8 !(4 > 3 && 10 < 12) false
console.log(!(4 > 3 && 10 < 12));
//6.9 !(4 > 3 && 10 > 12) true
console.log(!(4 > 3 && 10 > 12));
//6.10. !(4 === '4') true
console.log(!(4 === "4"));
//6.11 There is no 'on' in both dragon and python
var dragon = "dragon",
  python = "python";
console.log((dragon + python).includes("on"));
//7.
// 1. Quelle est l'année aujourd'hui?
var datedujour = new Date();
console.log(datedujour.getFullYear());
// 2. Quel est le mois aujourd'hui en nombre?
console.log(datedujour.getMonth() + 1);
//  3. Quelle est la date aujourd'hui?
console.log(datedujour.getDate());
//  4. Quel est le jour aujourd'hui en nombre?
console.log(datedujour.getDay());
//  5. Quelles sont les heures maintenant?
console.log(datedujour.getHours());
//  6. Quel est le minutes maintenant?
console.log(datedujour.getMinutes());
console.log(datedujour.getHours() + ":" + datedujour.getMinutes());

//  7. Découvrez le nombre de secondes écoulées entre le 1er janvier 1970 et aujourd'hui.
console.log(Date.now());

// ### Exercices Aléatoires --> Level02
//1
let monAge = 250;
let tonAge = 25;
console.log("J'ai " + (monAge - tonAge) + "ans de plus que toi");

// PROMPT !!
// var reponse = prompt("Quel âge avez vous ? ", "<Entrez ici votre âge>");
// var jeuneot = 18 - reponse;
// if (reponse >= 18) {
//   alert("Vous avez " + reponse + "ans. Vous êtes autorisé de conduire. ");
// } else {
//   alert(
//     "Vous avez " +
//       prompt +
//       "ans. Vous serez autorisé à conduire après" +
//       jeuneot +
//       "ans."
//   );
// }

// PROMPT 2
var annees = prompt(
  "Saisir un nombre d'année",
  "<Entrez ici un nombre d'année>"
);
var secs = annees * 31536000;
if (annees == null) {
  alert("Vous n'avez rien saisi");
} else {
  alert("Vous avez vécu " + secs + " secs.");
}

//LvL2.4
var YYYY = datedujour.getFullYear();
var MM = datedujour.getMonth() + 1;
var DD = datedujour.getDay();
var HH = datedujour.getHours();
var mm = datedujour.getMinutes();
// 1. YYYY-MM-DD HH:mm
console.log(YYYY + "-" + MM + "-" + DD + "  " + HH + ":" + mm);
// 2. DD-MM-YYYY HH:mm
console.log(DD + "-" + MM + "-" + YYYY + "  " + HH + ":" + mm);
// 3. DD/MM/YYYY HH:mm
console.log(DD + "-" + MM + "-" + YYYY + "  " + HH + ":" + mm);

// ### Exercices Aléatoires --> Level03
