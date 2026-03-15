// Example for a Node.js serverless function
async function handler(req, res) {
  const apiKey = "AIzaSyDBBBLdU6T0me66qborCmUL7TUjxbl0-C0";
  const placeId = "ChIJG2ynEABZrAcRE0WvmWTIAgk";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data.result.reviews);
}
// process.env.VITE_GOOGLE_PLACES_API_KEY;