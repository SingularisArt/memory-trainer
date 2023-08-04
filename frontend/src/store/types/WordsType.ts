export default interface WordsState {
  numberOfWords: number;
  words: string[];
  groups: number;
  maxMemorizationTime: number;
  maxRecallTime: number;
  preparationTime: number;
  preparationBeforeRecallTime: number;
  finishedMemorizationTime: number;
}
