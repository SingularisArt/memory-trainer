import NamesState from "../types/NamesType";

export const updateNamesData = (data: Partial<NamesState>) => {
  return {
    type: "UPDATE_NAMES_DATA",
    payload: data,
  };
};
