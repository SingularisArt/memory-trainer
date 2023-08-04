import { createStore, combineReducers } from "redux";

import cardsReducer from "./reducers/cardsReducer";
import imagesReducer from "./reducers/imagesReducer";
import internationalNamesReducer from "./reducers/internationalNamesReducer";
import namesReducer from "./reducers/namesReducer";
import numbersReducer from "./reducers/numbersReducer";
import wordsReducer from "./reducers/wordsReducer";

import { CardsState } from "./types/CardsType";
import { ImagesState } from "./types/ImagesType";
import { InternationalNamesState } from "./types/InternationalNamesType";
import { NamesState } from "./types/NamesType";
import { NumbersState } from "./types/NumbersType";
import { WordsState } from "./types/WordsType";

export type RootState = {
  cards: CardsState;
  images: ImagesState;
  internationalNames: InternationalNamesState;
  names: NamesState;
  numbers: NumbersState;
  words: WordsState;
};

const rootReducer = combineReducers({
  cards: cardsReducer,
  images: imagesReducer,
  internationalNames: internationalNamesReducer,
  names: namesReducer,
  numbers: numbersReducer,
  words: wordsReducer,
});

const store = createStore(rootReducer);

export default store;
