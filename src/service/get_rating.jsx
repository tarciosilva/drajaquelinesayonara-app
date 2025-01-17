import axios from "axios";

const API_KEY = import.meta.env.VITE_MAPS_API_KEY;

async function getRating() {
  const Rates  = axios({
    method: "get",
    url: `https://places.googleapis.com/v1/places/ChIJG2ynEABZrAcRE0WvmWTIAgk?fields=reviews,displayName&key=${API_KEY}`
  }).then(function (response) {
    return response.data.reviews;
  });

  return Rates;

}

export default getRating;

