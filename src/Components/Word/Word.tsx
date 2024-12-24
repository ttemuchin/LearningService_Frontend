import React, { useState } from "react";
import "./Word.scss";
import { WordsAPI } from "../../api/api";
import { Card } from "../../types/Card/Card";

type WordProps = {
  card: Card;
  onEdit: (updatedCard: Card) => void;
  onDelete: (cardId: string) => void;
  updateWord: (word: Card) => Promise<Card>;
};

const Word: React.FC<WordProps> = ({ card, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [rusWord, setRusWord] = useState(card.rusWord);
  const [translation, setTranslation] = useState(card.translation);

  const [error, setError] = useState<string | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowButtons(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setTimeout(() => {}, 2500);
    setTimeout(() => {
      if (!isEditing) {
        setShowButtons(false);
      }
    }, 3000);
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowButtons(true);
  };

  const handleDelete = () => {
    onDelete(card.id);
  };

  const handleSubmit = async () => {
    if (rusWord && translation) {
      try {
        
        const updatedCard = await WordsAPI.updateWord({ id: card.id, rusWord, translation });
        onEdit(updatedCard); 
        setIsEditing(false);
        setShowButtons(false);
        setError(null); 
      } catch (error) {
        console.error(error);
        setError('Не удалось обновить слово');
      }
      // onEdit({ id: card.id, rusWord, translation });
      // setIsEditing(false);
      // //исходные значения полей в компонент
      // setShowButtons(false);
    }
  };

  return (
    <div
      className={`word-container ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="word-fields">
        <input
          type="text"
          value={rusWord}
          onChange={(e) => {
            setRusWord(e.target.value);
          }}
          readOnly={!isEditing}
          placeholder="Слово на русском"
        />
        <input
          type="text"
          value={translation}
          onChange={(e) => {
            setTranslation(e.target.value);
          }}
          readOnly={!isEditing}
          placeholder="Перевод"
        />
      </div>
      {showButtons && (
        <div className="word-buttons">
          {!isEditing && (
            <>
              <button className="functional-button" onClick={handleEdit}>
                Edit
              </button>
              <button className="functional-button" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
          {isEditing && (
            <>
              <button className="functional-button" onClick={handleSubmit}>
                Submit
              </button>
              <button className="functional-button" onClick={handleDelete}>
                Delete
              </button>
            </>
          )}
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Word;
