async function getRating() {
  const { Place } = await google.maps.importLibrary("places");
  const place = new Place({
    id: "ChIJG2ynEABZrAcRE0WvmWTIAgk"
  });

  await place.fetchFields({
    fields: ["reviews"]
  });
  return place.reviews;
}

export default getRating;
