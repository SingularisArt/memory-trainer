export interface CardsState {
  numberOfCards: number;
  cards: string[];
  groups: number;
  cardSpacing: string;
  maxMemorizationTime: number;
  maxRecallTime: number;
  preparationTime: number;
  preparationBeforeRecallTime: number;
  finishedMemorizationTime: number;
}
