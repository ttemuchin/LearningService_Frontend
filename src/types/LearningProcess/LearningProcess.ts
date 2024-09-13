import { Card } from "../Card/Card";

export type LearningProcess = {
  cards: Card[];
};

export const moveToLearned = (cards: Card[]): Card[] => {
  return cards.slice(1);
};

export const moveToUnknown = (cards: Card[]): Card[] => {
  const unknownCard: Card = cards[0];
  cards = [...cards.slice(1), unknownCard];
  return cards;
};

export const LearningProcess = { moveToLearned, moveToUnknown };
