const hamburgerButton = document.getElementById("hamburger-button");
const offCanva = document.getElementById("offcanva");

hamburgerButton.addEventListener("click", toggleNav);

const navLinks = document.querySelectorAll(".offcanva-nav--link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", toggleNav);
});

function toggleNav() {
  const isActive = hamburgerButton.classList.contains("is-active");

  if (isActive) {
    hamburgerButton.classList.remove("is-active");
    offCanva.style.left = "-120%";
  } else {
    hamburgerButton.classList.add("is-active");
    offCanva.style.left = "0";
  }
}

const getRating = async () => {
  const response = await fetch("/api/get-reviews.js");
  const reviews = await response.json();

  return reviews;
};

const rating = await getRating();

console.log(rating);

const userContainer = document.getElementById("user-container");

rating.length > 0
  ? rating.map((review) => {
      userContainer.innerHTML += `
    
                    <div class="user-container">
                        <img class="user-photo" src=${
                          review?.profile_photo_url
                        } alt="user photo">
                        <div class="user-description">
                            <span><strong>${review?.author_name}</strong></span>
                            <div class="rating-stars">
                                ${[...Array((Number(review.rating))).keys()]
                                  .map((i) => {
                                    return '<span class="star">★</span>'
                                  })
                                  .join("")}
                            </div>
                            <p>${review?.text || ""}</p>
                        </div>
                    </div>
  
  `;
    })
  : [1, 2, 3].map((element) => {
      userContainer.innerHTML += `<div class="skeleton">
                        <img />
                        <div>
                            <div class="skeleton-name">
                            </div>
                            <div>
                                <div class="skeleton-stars"></div>
                            </div>
                            <div class="skeleton-description"></div>
                        </div>
                    </div>`;
    });
