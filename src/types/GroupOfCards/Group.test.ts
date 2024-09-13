import { Card } from "../Card/Card";
import { GroupOfCards } from "./GroupOfCards";

describe("", () => {
  describe("addGroupToList", () => {
    const group1: GroupOfCards = { id: "1", name: "favorites", cards: [] };
    const group2: GroupOfCards = { id: "2", name: "start learning german", cards: [] };

    const allGroups: GroupOfCards[] = [group1, group2];

    it("creates new group", () => {
      expect(GroupOfCards.addGroupToList(allGroups, { id: "3", name: "new one", cards: [] })).toContainEqual({
        id: "3",
        name: "new one",
        cards: [],
      });
    });
  });

  describe("create group", () => {
    const group: GroupOfCards = { id: "3", name: "new one", cards: [] };

    it("doesnt create a group with empty id or name", () => {
      expect(GroupOfCards.createGroup("", "new one", [])).toEqual(undefined);
      expect(GroupOfCards.createGroup("3", "", [])).toEqual(undefined);
    });
    it("just returns a group", () => {
      expect(GroupOfCards.createGroup("3", "new one", [])).toEqual(group);
    });
  });

  describe("getGroupById", () => {
    const group1: GroupOfCards = { id: "1", name: "favorites", cards: [] };
    const group2: GroupOfCards = { id: "2", name: "start learning german", cards: [] };
    const allGroups: GroupOfCards[] = [group1, group2];

    it("returns 2nd group", () => {
      expect(GroupOfCards.getGroupById(allGroups, "2")).toEqual(group2);
    });
    it("returns undefined", () => {
      expect(GroupOfCards.getGroupById(allGroups, "3")).toEqual(undefined);
    });
  });

  describe("chooseCards", () => {
    const word1: Card = { id: "1", rusWord: "работать", translation: "arbeiten" };
    const word2: Card = { id: "2", rusWord: "учиться", translation: "studieren" };
    const word3: Card = { id: "3", rusWord: "говорить", translation: "sprechen" };
    const dict: Card[] = [word1, word2, word3];
    const cardsId: string[] = ["1", "3"];
    const group: GroupOfCards = { id: "3", name: "firstGroup", cards: [] };

    it("places cards in the group", () => {
      expect(GroupOfCards.chooseCards(dict, cardsId, group)).toEqual({
        id: "3",
        name: "firstGroup",
        cards: [word1, word3],
      });
    });
  });
});
