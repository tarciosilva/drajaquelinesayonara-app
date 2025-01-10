import * as S from "./style";
import ReactStars from "react-rating-stars-component";

export const Card = ({photo, name, ratingDescription, rating}) => {
  return (
    <>
      <S.ContainerCard>
        <S.Photo src={photo} />
        <S.ContainerContent>
          <span>{name}</span>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            classNames="StarRating"
            isHalf
            value={rating}
            edit={false}
          />
          <p>
            {ratingDescription}
          </p>
        </S.ContainerContent>
      </S.ContainerCard>
    </>
  );
};
