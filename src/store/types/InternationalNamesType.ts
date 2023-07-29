export default interface InternationalNamesState {
  numberOfInternationalNames: number;
  internationalNames: {
    faces: string[];
    names: string[];
  };
  maxMemorizationTime: number;
  maxRecallTime: number;
  preparationTime: number;
  preparationBeforeRecallTime: number;
  finishedMemorizationTime: number;
}
