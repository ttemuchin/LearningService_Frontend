/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { useState } from 'react';
import { WordsAPI } from "../../api/api";
import styles from "./MainPage.module.scss";
import { Card, createCard } from "../../types/Card/Card";

const WordForm: React.FC = () => {

//   const cards1: Card[] = createCard([], {
//     id: 'id32',
//     rusWord: 'Пятница',
//     translation: 'pp' 
//     })
//   createCard(cards1, {
//         id: 'id345d',
//         rusWord: 'Вторник',
//         translation: 'vv' 
//         })

//   const handleCreateWord = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const newWord = await WordsAPI.createWord(cards1[0]);
//       console.log('Word created:', newWord);
//       setWordName('');
//     } catch (error) {
//         console.log(error)
//         setError('Не удалось создать слово');
//     }
//   };
///

const [rusWord, setRusWord] = useState('');
const [translation, setTranslation] = useState('');
const [error, setError] = useState<string | null>(null);
const [successMessage, setSuccessMessage] = useState<string | null>(null);

const handleCreateWord = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const newCard: Card = {
      id: `id_1`,
      rusWord,
      translation,
    };

    const newWord = await WordsAPI.createWord(newCard);
    console.log('Word created:', newWord);
    setSuccessMessage('success');
    setRusWord('');
    setTranslation('');
    setError(null);
  } catch (error) {
    console.log(error);
    setError('fail');
    setSuccessMessage(null);
  }
};

  return (
    <div>
      <form onSubmit={handleCreateWord}>
        <input
          type="text"
          value={rusWord}
          onChange={(e) => setRusWord(e.target.value)}
          placeholder="ru"
          required
        />
        <input
          type="text"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          placeholder="ger"
          required
        />
        <button className={styles.mainButtons} type="submit">Добавить</button>
      </form>
      {error && <div className={styles.error}>{error}</div>}
      {successMessage && <div className={styles.success}>{successMessage}</div>}
    </div>
  );
};

export default WordForm;