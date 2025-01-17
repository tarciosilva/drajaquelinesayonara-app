import * as S from "./style";
import skeletonIMG from "./img/profile.webp";
import { useState } from "react";
import { StarRating } from "../StarRating";

export const Card = ({ photo, name, ratingDescription, rating, skeleton }) => {
  const [imageLoaded, setImageLoaded] = useState(skeletonIMG);

  return (
    <>
      <S.ContainerCard $skeleton={skeleton}>
        <S.Photo
          src={imageLoaded}
          $skeleton={skeleton}
          onLoad={() => setImageLoaded(photo || skeletonIMG)}
        />
        <S.ContainerContent $skeleton={skeleton}>
          <span>
            {name || <S.SkeletonText $height={"15px"} $width={"100px"} />}
          </span>
          <S.ContainerStars>
            <StarRating 
              size={"24px"}
              value={rating || 0}
            />
          </S.ContainerStars>
          {name ? (
            <p>{ratingDescription}</p>
          ) : (
            <S.SkeletonText $height={"30px"} $width={"200px"} />
          )}
        </S.ContainerContent>
      </S.ContainerCard>
    </>
  );
};
