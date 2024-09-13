import axios from "axios";
//базовый URL для API
const instance = axios.create({
  baseURL: "http://localhost:5173/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
//типы
export type GroupOfCards = {
  id: string;
  name: string;
  cards: Card[];
};

export type Card = {
  id: string;
  rusWord: string;
  translation: string;
};

export const CardsAPI = {
  // to do - the same with cards
};
export const GroupsAPI = {
  getGroups: async (): Promise<GroupOfCards[]> => {
    const response = await instance.get<GroupOfCards[]>("/groups");
    return response.data;
  },
  getGroupById: async (groupId: string): Promise<GroupOfCards> => {
    const response = await instance.get<GroupOfCards>(`/groups/${groupId}`);
    return response.data;
  },
  createGroup: async (groupData: Omit<GroupOfCards, "id">): Promise<GroupOfCards> => {
    const response = await instance.post<GroupOfCards>("/groups", groupData);
    return response.data;
  },
  updateGroup: async (groupId: string, groupData: Omit<GroupOfCards, "id">): Promise<GroupOfCards> => {
    const response = await instance.put<GroupOfCards>(`/groups/${groupId}`, groupData);
    return response.data;
  },
  deleteGroup: async (groupId: string): Promise<void> => {
    await instance.delete(`/groups/${groupId}`);
  },
};
