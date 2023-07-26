import { WordsState } from "../types/WordsType";

export const updateWordsData = (data: Partial<WordsState>) => {
  return {
    type: "UPDATE_WORDS_DATA",
    payload: data,
  };
};
