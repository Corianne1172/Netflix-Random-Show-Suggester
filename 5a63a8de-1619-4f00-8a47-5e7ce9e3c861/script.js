/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit",
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender",
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place",
];

function chooseRandomGenre() {
  // Deliverable 1: Your code here 👇
  let genres = ["drama", "comedy", "fantasy"];
  return genres[getRandomNumber(0, 2)];
}

function displayRandomShow(genre) {
  // Deliverable 2: Your code here 👇
  if (genre === "random") {
    genre = chooseRandomGenre();
  }
  let show;
  if (genre === "fantasy") {
    show = fantasyShows[getRandomNumber(0, fantasyShows.length - 1)];
  } else if (genre === "drama") {
    show = dramaShows[getRandomNumber(0, dramaShows.length - 1)];
  } else if (genre === "comedy") {
    show = comedyShows[getRandomNumber(0, comedyShows.length - 1)];
  }

  if (show) {
    displayShow(show);
  }
}
