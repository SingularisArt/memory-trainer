import NumbersState from "../types/NumbersType";

export const initialState: NumbersState = {
  numberOfNumbers: 100,
  numbers: [],
  groups: 3,
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
  preparationBeforeRecallTime: 20,
  finishedMemorizationTime: 0,
};

const numbersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_NUMBERS_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default numbersReducer;
