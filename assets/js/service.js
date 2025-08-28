const API_KEY = "AIzaSyDBBBLdU6T0me66qborCmUL7TUjxbl0-C0";

async function getData() {
  const url = `https://places.googleapis.com/v1/places/ChIJG2ynEABZrAcRE0WvmWTIAgk?fields=reviews,displayName&key=${API_KEY}`;
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