const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function getGames() {

  try {
    const response = await fetch(url);
    const results  = await response.json();
    // console.log(results)
    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      const numberOfTags = facts[i].tags.length;

      resultsContainer.innerHTML += `<div class="result">
        <p>Name: <b>${facts[i].name}</b></p>
        <p>Rating: <b>${facts[i].rating}</b></p>
        <p>Number of Tags: <b>${numberOfTags}</b></p>
        </div>`
    }
  }
  catch(error) {
    // console.log("An error occured");
    resultsContainer.innerHTML =  displayError("An error occured when calling for API");
  }
  
}

getGames()