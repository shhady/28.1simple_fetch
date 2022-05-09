// Instructions
// Lets do an simple ajax call with fetch using this url “https://
// api.jokes.one/jod”.
// Create a button that will fetch the joke of the day. Display
// to the screen the jokes title and the joke itself

const btn = document.querySelector("button");
let div = document.createElement("div");
document.body.appendChild(div);

const randomJoke = () => {
  fetch("https://api.jokes.one/jod")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let jokeOfTheDay = data.contents.jokes[0].joke;
      document.querySelector("div").innerHTML = `<h2>${jokeOfTheDay.title}</h2>
      <p>${jokeOfTheDay.text}</p>`;
    })
    .catch((err) => console.log(error));
};
btn.addEventListener("click", randomJoke);
