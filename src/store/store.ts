import { createStore, combineReducers } from "redux";
import cardsReducer from "./reducers/cardsReducer";
import { CardsState } from './types/CardsType';

export type RootState = {
  cards: CardsState;
};

const rootReducer = combineReducers({
  cards: cardsReducer,
});

const store = createStore(rootReducer);

export default store;
