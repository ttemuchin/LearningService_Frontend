import { FormEvent, useState } from "react";
import { Card } from "../types/Card/Card";
//import { v4 as uuidv4 } from "uuid";

type Mode = "list" | "creating";

const defaultCard = (): Card => ({
  //id: uuidv4(),
  id: "1",
  rusWord: "давать",
  translation: "geben",
});

//const getBodyType = (value: string) => (Car.isBodyType(value) ? value : undefined);

const Form = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [mode, setMode] = useState<Mode>("list");
  const [newCard, setNewCard] = useState<Card>(defaultCard());
  const updateNewCard = (card: Partial<Card>) => {
    setNewCard({ ...newCard, ...card });
  };
  const openForm = () => {
    setMode("creating");
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCards(Card.createCard(cards, newCard));
    setNewCard(defaultCard());
    setMode("list");
  };

  return mode === "list" ? (
    <>
      <button onClick={openForm}>Add card</button>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Cards list</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((item) => (
            <tr key={item.id} data-testid="table-row">
              <td>{item.rusWord}</td>
              <td>{item.translation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <title>New card</title>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={newCard.rusWord}
          onChange={(event) => {
            updateNewCard({ rusWord: event.target.value });
          }}
        />
        <label htmlFor="bodyType">Body type:</label>
        <input
          id="name"
          type="text"
          value={newCard.translation}
          onChange={(event) => {
            updateNewCard({ translation: event.target.value });
          }}
        />
        <select></select>
        <button type="submit">Save</button>
      </fieldset>
    </form>
  );
};

export default Form;

{
  /* <label htmlFor="bodyType">Body type:</label>
        <select
          id="bodyType"
          value={newCard.gerWord}
          onChange={(event) => {
            updateNewCard({ gerWord: event.target.value });
          }}
        >
          {Car.bodyTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
        </select> */
}
//import { useState } from "react";
//const [count, setCount] = useState(0);
{
  /*       
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button> */
}
