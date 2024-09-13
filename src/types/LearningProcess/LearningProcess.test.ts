import { LearningProcess } from "./LearningProcess";
import { Card } from "../Card/Card";
import { v4 as uuidv4 } from "uuid";

const id1 = uuidv4();
const id2 = uuidv4();

const word1: Card = { id: id1, rusWord: "работать", translation: "arbeiten" };
const word2: Card = { id: id2, rusWord: "учиться", translation: "studieren" };

describe("LearningProcess", () => {
  describe("moveToLearned", () => {
    const group: Card[] = [word1, word2];

    it("removes first card", () => {
      const group1 = LearningProcess.moveToLearned(group);
      expect(group1).toEqual([word2]);
    });
    it("removes all cards", () => {
      let group1 = LearningProcess.moveToLearned(group);
      group1 = LearningProcess.moveToLearned(group1);
      expect(group1).toEqual([]);
      const group2 = LearningProcess.moveToLearned(group1);
      expect(group2).toEqual([]);
    });
  });

  describe("moveToUnknown", () => {
    const group: Card[] = [word1, word2];

    it("places the first card to the end of group", () => {
      const group1 = LearningProcess.moveToUnknown(group);
      expect(group1).toEqual([word2, word1]);
    });

    it("should return original list", () => {
      let group1 = LearningProcess.moveToUnknown(group);
      group1 = LearningProcess.moveToUnknown(group1);
      expect(group1).toEqual(group);
    });
  });
});
