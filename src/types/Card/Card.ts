export type Card = {
  id: string;
  rusWord: string;
  translation: string;
};

export const createCard = (dictionary: Card[], newCard: Card): Card[] => {
  const cardAlreadyExist: boolean =
    dictionary.some((c) => c.rusWord === newCard.rusWord) &&
    dictionary.some((c) => c.translation === newCard.translation);

  if (newCard.rusWord === "" || newCard.translation === "" || cardAlreadyExist) {
    return [...dictionary];
  }

  return [...dictionary, newCard];
};

export const dropCard = (dictionary: Card[], cardId: string): Card[] => {
  return dictionary.filter((card) => card.id !== cardId);
};

export const getCardById = (dictionary: Card[], cardId: string): Card | undefined => {
  return dictionary.find((card) => card.id === cardId);
};

export const editCard = (card: Card, newRus: string, newTranslation: string): Card => {
  if (newRus === "" || newTranslation === "") {
    return card;
  }

  return {
    ...card,
    rusWord: newRus,
    translation: newTranslation,
  };
};

export const Card = { createCard, dropCard, getCardById, editCard };
