
let contentString;

async function initMap() {
  const { Place, Review } = await google.maps.importLibrary("places");
  const place = new Place({
    id: "ChIJG2ynEABZrAcRE0WvmWTIAgk" // Faneuil Hall Marketplace, Boston, MA
  });

  // Call fetchFields, passing 'reviews' and other needed fields.
  await place.fetchFields({
    fields: ["displayName", "formattedAddress", "location", "reviews"]
  });

  // If there are any reviews display the first one.
  if (place.reviews && place.reviews.length > 0) {
    // Get info for the first review.
    let reviewRating = place.reviews[0].rating;
    let reviewText = place.reviews[0].text;
    let authorName = place.reviews[0].authorAttribution?.displayName;
    let authorUri = place.reviews[0].authorAttribution?.uri;

    // Format the review using HTML.
    contentString = `
            <div id="title"><b>${place.displayName}</b></div>
            <div id="address">${place.formattedAddress}</div>
            <a href="${authorUri}" target="_blank">Author: ${authorName}</a>
            <div id="rating">Rating: ${reviewRating} stars</div>
            <div id="rating"><p>Review: ${reviewText}</p></div>`;

    console.log(place.reviews[4].authorAttribution?.photoURI);
  } else {
    contentString = "No reviews were found for " + place.displayName + ".";
  }

}

initMap();
export {};
