import React from "react";
import styles from "../Pages/MainPage.module.scss";
import { GroupOfCards } from "../../types/GroupOfCards/GroupOfCards";
import useStore from "../../useStore";
import { v4 as uuidv4 } from "uuid";

const GroupList: React.FC = () => {
  const groups = useStore((state) => state.app.groups);
  const addGroup = useStore((state) => state.addGroup);
  const deleteGroup = useStore((state) => state.deleteGroup);

  const handleAddGroup = () => {
    const newGroup: GroupOfCards = {
      id: uuidv4(),
      name: "new group",
      cards: [],
    };
    addGroup(newGroup);
  };
  const handleDeleteGroup = () => {
    const id = groups[groups.length - 1].id;
    deleteGroup(id);
  };

  return (
    <div className="content">
      <h3>Your groups:</h3>
      <div>
        <ul>
          {groups.map((group: GroupOfCards) => (
            <li key={group.id}>{group.name}</li>
          ))}
        </ul>
        <div className={styles.buttonContainer}>
          <button className={styles.addNew} onClick={handleAddGroup}>
            Add new one
          </button>
          <button className={styles.addNew} onClick={handleDeleteGroup}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupList;
