import { ImagesState } from "../types/ImagesType";

export const initialState: ImagesState = {
  numberOfImages: 30,
  images: [],
  groups: 3,
  imageSpacing: "regular",
  maxMemorizationTime: 60,
  maxRecallTime: 240,
  preparationTime: 20,
  preparationBeforeRecallTime: 20,
  finishedMemorizationTime: 0,
};

const imagesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_IMAGES_DATA":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default imagesReducer;
