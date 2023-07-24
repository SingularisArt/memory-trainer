import { useSelector, useDispatch } from "react-redux";

import { RootState } from '../store/store';

type CardsDataProps = {};

export const CardsData: CardsDataProps = () => {
  const cardsData = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();

  return { cardsData, dispatch };
};
