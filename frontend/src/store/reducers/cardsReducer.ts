import CardsState from "../types/CardsType";

export const initialState: CardsState = {
  item: "Cards",
  numberOfDecks: 1,
  numberOfCards: 52,
  decks: {
    0: [],
  },
  memorizedDecks: {
    0: [],
  },
  groups: 2,
  cardSpacing: "regular",
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
  preparationBeforeRecallTime: 20,
  finishedMemorizationTime: 0,
  correctCards: 0,
  incorrectCards: 0,
  score: 0,
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
