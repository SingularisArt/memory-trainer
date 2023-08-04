import CardsState from "../types/CardsType";

export const updateCardsData = (data: Partial<CardsState>) => {
  return {
    type: "UPDATE_CARDS_DATA",
    payload: data,
  };
};
