/*
  copyrights to Vaibhavi Hole
  modified by tsilva.dev
*/

import * as S from "./style";

export const StarRating = ({ value, size }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <S.Star
            key={star}
            className="start"
            value={value}
            rating={star}
            size={size}
          >
            {" "}
            ★{" "}
          </S.Star>
        );
      })}
    </>
  );
};
