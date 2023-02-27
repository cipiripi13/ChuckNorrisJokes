var main = document.querySelector('.main');
console.log(main);

var button = document.querySelector('.btn');
console.log(button);

fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((data) =>  console.log(data.value));

  function newJoke(){
    return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) =>{
        main.textContent = data.value;
    })
  }

  button.addEventListener('click', newJoke);