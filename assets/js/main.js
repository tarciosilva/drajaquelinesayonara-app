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

const rating = await getData();
const userContainer = document.getElementById("user-container");

rating?.reviews
  ? rating.reviews.map((review) => {
      userContainer.innerHTML += `
    
                    <div class="user-container">
                        <img class="user-photo" src=${
                          review?.authorAttribution?.photoUri
                        } alt="user photo">
                        <div class="user-description">
                            <span>${
                              review?.authorAttribution?.displayName
                            }</span>
                            <div class="rating-stars">
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                                <span class="star">★</span>
                            </div>
                            <p>${review?.originalText?.text || ""}</p>
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
