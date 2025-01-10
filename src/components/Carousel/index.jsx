import { Card } from "../Rating/Card";

export const Carousel = ({ id, elements }) => {
  let count = 0;
  return (
    <>
      <div id={id} className="carousel carousel-dark slide" data-bs-ride="carousel">
        
        <div className="carousel-inner">
          {elements.map((element) => (
            <div
              className={`carousel-item ${element.active}`}
              key={element.key}
            >
              {element?.photo ? (
                <img
                  src={element.photo}
                  className="d-block w-100"
                  alt={element.alt}
                />
              ) : (
                <div className="container-sm text-center">
                  <Card
                    photo={element.photoURI}
                    name={element.name}
                    ratingDescription={element.ratingDescription}
                    rating={element.rate}
                  />
                </div>
              )}
              <div className="carousel-caption d-none d-md-block">
                <h5>{element.title}</h5>
                <p>{element.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
