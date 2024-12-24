/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import React, { useState } from 'react';
import { WordsAPI } from "../../api/api";
import styles from "./MainPage.module.scss";
import { Card, editCard, createCard } from "../../types/Card/Card";

const WordForm: React.FC = () => {
    const [wordName, setWordName] = useState('');
    const [translationName, setTranslationName] = useState('');
    const [error, setError] = useState('');

  const cards1: Card[] = createCard([], {
    id: 'id32',
    rusWord: 'Пятница',
    translation: 'pp' 
    })
  createCard(cards1, {
        id: 'id345d',
        rusWord: 'Вторник',
        translation: 'vv' 
        })

  const handleCreateWord = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newWord = await WordsAPI.createWord(cards1[0]);
      console.log('Word created:', newWord);
      setWordName('');
    } catch (error) {
        console.log(error)
        setError('fail');
    }
  };
//   id, editedCard
  const handleUpdateWord = async (id: string) => {
    try {
      const updatedWord = editCard({ id, rusWord: wordName, translation: translationName }, wordName, translationName);
      const response = await WordsAPI.updateWord(updatedWord);
      
      console.log('Word updated:', response);
      setWordName('');
      setTranslationName('');
    } catch (error) {
      console.log(error);
      setError('fail');
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateWord}>
        {/* <input
          type="text"
          value={wordName}
          onChange={(e) => setWordName(e.target.value)}
          placeholder="Введите слово"
          required
        /> */}
        <button className={styles.mainButtons} type="submit">Создать слово</button>
      </form>
      
      <div>Обновить слово</div>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleUpdateWord("id32"); 
      }}>
        <input
          type="text"
          value={wordName}
          onChange={(e) => setWordName(e.target.value)}
          placeholder="ru"
          required
        />
        <input
          type="text"
          value={translationName}
          onChange={(e) => setTranslationName(e.target.value)}
          placeholder="ger"
          required
        />
        <button className={styles.mainButtons} type="submit">Обновить слово</button>
      </form>

      {error && <div>{error}</div>}
    </div>
  );
};

export default WordForm;