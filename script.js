// NASA API
const count = 10;
const apiKey = "DEMO_KEY";
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// Get 10 images from NASA APOD API
async function getNasaPictures() {
  try {
    const res = await fetch(apiURL);
    resultsArray = await res.json();
    console.log(resultsArray);
  } catch (error) {
    // Catch Error Here
  }
}
// On Load
getNasaPictures();
