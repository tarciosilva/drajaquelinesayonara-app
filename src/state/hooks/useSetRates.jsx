import getRating from "../../service/get_rating";
import { rating } from "../atom";
import { useSetRecoilState } from "recoil";

const reviews = await getRating();

export const useSetRates = () => {
  const setRating = useSetRecoilState(rating);
  setRating(reviews);
};
