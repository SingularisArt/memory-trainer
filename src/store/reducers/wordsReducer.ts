import { WordsState } from "../types/WordsType";

export const initialState: WordsState = {
  numberOfWords: 100,
  words: [],
  groups: 3,
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
  preparationBeforeRecallTime: 20,
  finishedMemorizationTime: 0,
};

const wordsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_WORDS_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default wordsReducer;
