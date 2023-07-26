import { useSelector, useDispatch } from "react-redux";

import { RootState } from '../store/store';

export const CardsData = () => {
  const cardsData = useSelector((state: RootState) => state.cards);
  const dispatch = useDispatch();

  return { cardsData, dispatch };
};

export const ImagesData = () => {
  const imagesData = useSelector((state: RootState) => state.images);
  const dispatch = useDispatch();

  return { imagesData, dispatch };
};

export const InternationalNamesData = () => {
  const internationalNamesData = useSelector((state: RootState) => state.internationalNames);
  const dispatch = useDispatch();

  return { internationalNamesData, dispatch };
};

export const NamesData = () => {
  const namesData = useSelector((state: RootState) => state.names);
  const dispatch = useDispatch();

  return { namesData, dispatch };
};

export const NumbersData = () => {
  const numbersData = useSelector((state: RootState) => state.numbers);
  const dispatch = useDispatch();

  return { numbersData, dispatch };
};

export const WordsData = () => {
  const wordsData = useSelector((state: RootState) => state.words);
  const dispatch = useDispatch();

  return { wordsData, dispatch };
};
