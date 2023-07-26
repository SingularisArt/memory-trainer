import { InternationalNamesState } from "../types/InternationalNamesType";

export const updateInternationalNamesData = (data: Partial<InternationalNamesState>) => {
  return {
    type: "UPDATE_INTERNATIONAL_NAMES_DATA",
    payload: data,
  };
};
