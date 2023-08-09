export const FormatSeconds = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const randomDeckOfCards = (cards: number): string[] => {
  const suits = ["H", "C", "D", "S"];
  const ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "J",
    "Q",
    "K",
    "A",
  ];

  const generateRandomCardUrl = (): string => {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];

    return `https://deckofcardsapi.com/static/img/${rank}${suit}.png`;
  };

  const deck: string[] = [];
  const usedCards: Set<string> = new Set();

  while (deck.length < cards) {
    const cardUrl = generateRandomCardUrl();

    if (!usedCards.has(cardUrl)) {
      usedCards.add(cardUrl);
      deck.push(cardUrl);
    }
  }

  return deck;
};
