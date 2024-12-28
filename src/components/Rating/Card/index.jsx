import * as S from "./style";
import ReactStars from "react-rating-stars-component";

export const Card = ({photo, name, ratingDescription, rating}) => {
  return (
    <>
      <S.ContainerCard>
        <S.Photo src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" />
        <S.ContainerContent>
          <span>Profile Name</span>
          <ReactStars
            count={5}
            size={24}
            activeColor="#ffd700"
            classNames="StarRating"
            isHalf
            value={5}
            edit={false}
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </S.ContainerContent>
      </S.ContainerCard>
    </>
  );
};
