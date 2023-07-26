import { NamesState } from "../types/NamesType";

export const initialState: NamesState = {
  numberOfNames: 30,
  names: {
    faces: [],
    names: [],
  },
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
  preparationBeforeRecallTime: 20,
  finishedMemorizationTime: 0,
};

const namesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_NAMES_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default namesReducer;
