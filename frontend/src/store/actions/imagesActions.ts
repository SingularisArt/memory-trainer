import ImagesState from "../types/ImagesType";

export const updateImagesData = (data: Partial<ImagesState>) => {
  return {
    type: "UPDATE_IMAGES_DATA",
    payload: data,
  };
};
