import InternationalNamesState from "../types/InternationalNamesType";

export const initialState: InternationalNamesState = {
  numberOfInternationalNames: 30,
  internationalNames: {
    faces: [],
    names: [],
  },
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
  preparationBeforeRecallTime: 20,
  finishedMemorizationTime: 0,
};

const internationalNamesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_INTERNATIONAL_NAMES_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default internationalNamesReducer;
