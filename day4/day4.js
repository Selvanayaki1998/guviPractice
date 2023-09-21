// class Movie{
//    constructor MovieDetails(title, studio, rating) {
//     this.title = title,
//     this.studio = studio,
//     this.rating = rating
//    }
// };
//  let movie = new movie('asd','Sathiya',10);

// class Movie {
//   constructor(title, studio, rating) {
//     this.title = title;
//     this.studio = studio;
//     this.rating = rating || "PG";
//     this.getPG = function () {};
//   }
// }

// let movie1 = new Movie("asd", "Sathiya", 10);
// let movie2 = new Movie("asd", "Sathiya", 10 + "PG");
// let movie3 = new Movie("asd", "Sathiya", 20 + "PG");
// let movie4 = new Movie("asd", "Sathiya");
// console.log(movie);

const jsonData = {
  name: "Selvi",
  age: 25,
  city: "New York",
};

const jsonArray = [
  { name: "Abi", age: 20 },
  { name: "Rohith", age: 22 },
  { name: "Stalin", age: 28 },
];

// for
let forLoopValue = "";
for (let i = 0; i < jsonArray.length; i++) {
  forLoopValue += jsonArray[i].name + " " + "<br>";
}

document.getElementById("result").innerText = `${forLoopValue}`;
console.log(forLoopValue);
