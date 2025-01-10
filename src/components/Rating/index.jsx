import * as S from "./style";
import { Carousel } from "../Carousel";
import { v4 as uuidv4 } from "uuid";
import { useSetRates } from "../../state/hooks/useSetRates";
import { useGetRating } from "../../state/hooks/useGetRating";
import { Title } from "../Title";

export const Rating = () => {
  useSetRates();
  const reviews = useGetRating();

  const rating = reviews.map((review) => ({
    key: uuidv4(),
    photoURI: review?.authorAttribution?.photoURI,
    active: "active",
    name: review?.authorAttribution?.displayName,
    rate: review?.rating,
    ratingDescription: review?.text
  }));

  console.log(rating);

  return (
    <>
      <S.Wrapper>
        <Title padding={"2rem"}>
          Avaliações
        </Title>
        <Carousel id={uuidv4()} elements={rating} />
      </S.Wrapper>
    </>
  );
};
