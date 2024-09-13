/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { create } from "zustand";
import { GroupOfCards } from "./types/GroupOfCards/GroupOfCards";
import { Card } from "./types/Card/Card";
import { createJSONStorage, persist } from "zustand/middleware";
// import { immer } from "zustand/middleware/immer";
import { produce } from "immer";
import { AppManager } from "./types/AppManager/AppManager";

type Store = {
  app: AppManager;

  addGroup: (group: GroupOfCards) => void;
  addCardToGroup: (groupId: string, card: Card) => void;
  deleteGroup: (groupId: string) => void;
  setChoosedGroup: (groupId: string) => void;
  getChoosedGroup: () => GroupOfCards | undefined;

  addCard: (card: Card) => void;
  deleteCard: (id: string) => void;
};

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      app: {
        groups: [
          {
            id: "1",
            name: "Time of day",
            cards: [
              { id: "1", rusWord: "День", translation: "Tag" },
              { id: "2", rusWord: "Ночь", translation: "Nacht" },
              { id: "3", rusWord: "Вечер", translation: "Abend" },
              { id: "4", rusWord: "Утро", translation: "Morgen" },
            ],
          },
          {
            id: "2",
            name: "Favorites",
            cards: [
              { id: "5", rusWord: "Работать", translation: "Arbeiten" },
              { id: "6", rusWord: "Подрабатывать", translation: "Jobben" },
            ],
          },
          {
            id: "3",
            name: "Base",
            cards: [
              { id: "10", rusWord: "Общаться", translation: "Kommunizieren" },
              { id: "11", rusWord: "Любить", translation: "Lieben" },
            ],
          },
        ],
        dictionary: [
          { id: "1", rusWord: "День", translation: "Tag" },
          { id: "2", rusWord: "Ночь", translation: "Nacht" },
          { id: "3", rusWord: "Вечер", translation: "Abend" },
          { id: "4", rusWord: "Утро", translation: "Morgen" },
          { id: "5", rusWord: "Работать", translation: "Arbeiten" },
          { id: "6", rusWord: "Подрабатывать", translation: "Jobben" },
          { id: "7", rusWord: "Батрачить", translation: "Tagelöhnern" },
          { id: "8", rusWord: "Пахать", translation: "Pflügen" },
          { id: "9", rusWord: "Ходить", translation: "Gehen" },
          { id: "10", rusWord: "Общаться", translation: "Kommunizieren" },
          { id: "11", rusWord: "Любить", translation: "Lieben" },
          { id: "12", rusWord: "Играть", translation: "Spielen" },
        ],
        choosedGroup: { id: "1", name: "Time of day", cards: [] },
      },

      addGroup: (group: GroupOfCards) => {
        set((state) =>
          produce(state, (draft: Store) => {
            draft.app.groups.push(group);
          }),
        );
      },
      addCardToGroup: (groupId: string, card: Card) => {
        set((state) =>
          produce(state, (draft: Store) => {
            const group = draft.app.groups.find((group) => group.id === groupId);
            if (group) {
              group.cards.push(card);
            }
          }),
        );
      },

      deleteGroup: (groupId: string) => {
        set((state) =>
          produce(state, (draft: Store) => {
            draft.app.groups = draft.app.groups.filter((group) => group.id !== groupId);
          }),
        );
      },
      setChoosedGroup: (groupId: string) => {
        set((state) =>
          produce(state, (draft: Store) => {
            draft.app.choosedGroup = draft.app.groups.find((group) => group.id === groupId);
          }),
        );
      },

      getChoosedGroup: () => get().app.choosedGroup,
      addCard: (card: Card) => {
        set((state) =>
          produce(state, (draft: Store) => {
            draft.app.dictionary.push(card);
          }),
        );
      },
      deleteCard: (id: string) => {
        set((state) =>
          produce(state, (draft: Store) => {
            draft.app.dictionary = draft.app.dictionary.filter((card) => card.id !== id);
          }),
        );
      },
    }),
    {
      name: "Store",
      version: 1,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useStore;
// function produce(state: Store, arg1: (draft: Store) => void): Store | Partial<Store> {
//   throw new Error("Function not implemented.");
// }
