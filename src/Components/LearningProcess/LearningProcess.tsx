import React, { useState } from "react";
import Card from "../Card/Card";
import { Card as CardType } from "../../types/Card/Card";
import { LearningProcess as LP } from "../../types/LearningProcess/LearningProcess";
import "./LearningProcess.scss";

const LearningProcess: React.FC<{ cards: CardType[] }> = ({ cards }) => {
  const [currentCards, setCurrentCards] = useState(cards);
  const [showTranslation, setShowTranslation] = useState(false); // перенесли остояние из кард

  const handleKnow = async (): Promise<void> => {
    await showTranslationAndExecute(LP.moveToLearned);
  };
  const handleToUnknown = async (): Promise<void> => {
    await showTranslationAndExecute(LP.moveToUnknown);
  };

  const showTranslationAndExecute = async (moveTo_X: (group: CardType[]) => CardType[]) => {
    setShowTranslation(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setShowTranslation(false);
    setCurrentCards(moveTo_X(currentCards));
  };

  return (
    <div className="learning-process">
      {currentCards.length > 0 && <Card card={currentCards[0]} showTranslation={showTranslation} />}
      <div className="lp-buttons">
        <button onClick={() => void handleKnow()} className="know-button">
          Знаю
        </button>
        <button onClick={() => void handleToUnknown()} className="unknown-button">
          Не знаю
        </button>
      </div>
    </div>
  );
};

export default LearningProcess;
