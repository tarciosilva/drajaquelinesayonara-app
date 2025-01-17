import * as S from "./style";
import { Carousel } from "../Carousel";
import { v4 as uuidv4 } from "uuid";
import { Title } from "../Title";
import { Card } from "./Card";
import { useEffect, useState } from "react";
import getRating from "../../service/get_rating";

const rates = await getRating();

export const Rating = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(( ) => {
    setReviews(rates);
  }, []);

  const rating =
    reviews.length !== 0
      ? reviews.map((review) => ({
        key: uuidv4(),
        active: "",
        card: (
          <Card
            photo={review?.authorAttribution?.photoUri}
            name={review?.authorAttribution?.displayName}
            ratingDescription={review?.text?.text}
            rating={review?.rating}
            skeleton={""}
          />
        )
      }))
      : [
        {
          key: uuidv4(),
          active: "active",
          card: <Card skeleton={"true"} />
        }
      ];

  rating[0].active = "active";

  return (
    <>
      <S.Wrapper>
        <Title padding={"2rem"}>Avaliações</Title>
        <Carousel id={uuidv4()} elements={rating} />
      </S.Wrapper>
    </>
  );
};
