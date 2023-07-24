import { CardsState } from '../types/CardsType';

export const initialState: CardsState = {
  numberOfCards: 52,
  groups: 3,
  cardSpacing: "regular",
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
};

const cardsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_CARDS_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default cardsReducer;
