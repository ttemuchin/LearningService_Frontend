import { Card } from "../Card/Card";

export type GroupOfCards = {
  id: string;
  name: string;
  cards: Card[];
};

export const createGroup = (cardId: string, cardName: string, selectedCards: Card[]): GroupOfCards | undefined => {
  if (cardId !== "" && cardName !== "") {
    return { id: cardId, name: cardName, cards: selectedCards };
  }
  return undefined;
};

export const addGroupToList = (groups: GroupOfCards[], group: GroupOfCards): GroupOfCards[] => {
  //groups = [...groups, group];
  groups.push(group);
  return groups;
};

export const editGroup = (group: GroupOfCards, rename: string): GroupOfCards => {
  if (rename === "") {
    return group;
  }
  return {
    ...group,
    name: rename,
  };
};

export const chooseCards = (dictionary: Card[], selectedCards: string[], group: GroupOfCards): GroupOfCards => {
  group.cards = dictionary.filter((card) => selectedCards.includes(card.id));

  return group;
};

export const deleteGroup = (groups: GroupOfCards[], id: string): GroupOfCards[] => {
  return groups.filter((group) => group.id !== id);
};

export const getGroupById = (groups: GroupOfCards[], id: string): GroupOfCards | undefined => {
  return groups.find((group) => group.id === id);
};

export const GroupOfCards = { createGroup, addGroupToList, editGroup, deleteGroup, getGroupById, chooseCards };
