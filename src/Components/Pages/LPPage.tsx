import React from "react";
import "./LPPage.scss";
import LearningProcess from "../LearningProcess/LearningProcess";
// import { Card as CardType } from "../../types/Card/Card";
import { GroupOfCards } from "../../types/GroupOfCards/GroupOfCards";

const group1: GroupOfCards = {
  id: "1",
  name: "Время суток",
  cards: [
    { id: "1", rusWord: "День", translation: "Tag" },
    { id: "2", rusWord: "Ночь", translation: "Nacht" },
    { id: "3", rusWord: "Вечер", translation: "Abend" },
    { id: "4", rusWord: "Утро", translation: "Morgen" },
  ],
};

const LPPage: React.FC = () => {
  return (
    <>
      <div className="lp-page">
        <LearningProcess cards={group1.cards} />
      </div>
    </>
  );
};

export default LPPage;
