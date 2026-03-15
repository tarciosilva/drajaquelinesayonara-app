const apiKey = "AIzaSyDBBBLdU6T0me66qborCmUL7TUjxbl0-C0";
const placeId = "ChIJG2ynEABZrAcRE0WvmWTIAgk";

async function getData() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}