import NumbersState from "../types/NumbersType";

export const updateNumbersData = (data: Partial<NumbersState>) => {
  return {
    type: "UPDATE_NUMBERS_DATA",
    payload: data,
  };
};
