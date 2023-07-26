export interface NamesState {
  numberOfNames: number;
  names: {
    faces: string[];
    names: string[];
  };
  maxMemorizationTime: number;
  maxRecallTime: number;
  preparationTime: number;
  preparationBeforeRecallTime: number;
  finishedMemorizationTime: number;
}
