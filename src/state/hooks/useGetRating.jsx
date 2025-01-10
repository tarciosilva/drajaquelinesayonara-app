import { useRecoilValue } from "recoil";
import { rating } from "../../state/atom";

export const useGetRating = () => {
  return useRecoilValue(rating);
};
