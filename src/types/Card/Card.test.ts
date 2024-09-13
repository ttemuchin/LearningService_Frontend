import { Card } from "./Card";

describe("", () => {
  describe("createCard", () => {
    const word1: Card = { id: "1", rusWord: "работать", translation: "arbeiten" };

    it("returns collection with added Card element", () => {
      expect(Card.createCard([], word1)).toEqual([word1]);
    });
    it("returns new collection", () => {
      const collection: Card[] = [];
      expect(Card.createCard(collection, word1)).not.toBe(collection);
    });
    it("does not add card which is already exist", () => {
      const dict = [word1];
      expect(Card.createCard(dict, { ...word1 })).toEqual([word1]);
    });
    it("can not append a card with empty values", () => {
      expect(Card.createCard([], { ...word1, rusWord: "" })).toEqual([]);
      expect(Card.createCard([], { ...word1, translation: "" })).toEqual([]);
    });
  });
});
