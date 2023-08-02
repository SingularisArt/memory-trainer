export default interface CardsState {
  item: string;
  numberOfDecks: number;
  numberOfCards: number;
  decks: {
    [deckId: number]: string[];
  };
  guessedDecks: {
    [deckId: number]: string[];
  };
  groups: number;
  cardSpacing: string;
  maxMemorizationTime: number;
  maxRecallTime: number;
  preparationTime: number;
  preparationBeforeRecallTime: number;
  finishedMemorizationTime: number;
}
