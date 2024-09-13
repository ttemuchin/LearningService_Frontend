import { GroupOfCards } from "../GroupOfCards/GroupOfCards";
import { Card } from "../Card/Card";

export type AppManager = {
  groups: GroupOfCards[];
  dictionary: Card[];
  choosedGroup: GroupOfCards | undefined;
};

export const displayDictionary = (dict: Card[]) => {
  dict.map((card) => {
    console.log(card.rusWord, card.translation);
  });
};
export const showGroups = (groups: GroupOfCards[]) => {
  groups.map((group) => {
    console.log(group.id, group.name);
  });
};

export const chooseGroup = (appManager: AppManager, groupId: string): AppManager => {
  const choosedGroup: GroupOfCards | undefined = appManager.groups.find((g) => g.id === groupId);

  if (choosedGroup) {
    return {
      ...appManager,
      choosedGroup,
    };
  } else {
    console.error(`Group with ID ${groupId.toString()} not found`);
    return appManager;
  }
};

export const AppManager = { displayDictionary, showGroups, chooseGroup };
