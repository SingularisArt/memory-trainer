export default interface CardsState {
  item: string;
  numberOfDecks: number;
  numberOfCards: number;
  decks: {
    [deckId: number]: string[];
  };
  memorizedDecks: {
    [deckId: number]: string[];
  };
  groups: number;
  cardSpacing: string;
  maxMemorizationTime: number;
  maxRecallTime: number;
  preparationTime: number;
  preparationBeforeRecallTime: number;
  finishedMemorizationTime: number;
  correctCards: number;
  incorrectCards: number;
}
