import axios from 'axios';
// базовый URL для API
const instance = axios.create({
  baseURL: "http://localhost:8091/",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

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

export const WordsAPI = {
  getAllWords: async (): Promise<Card[]> => {
    try {
      const response = await instance.get<Card[]>("/api/dict/");
      return response.data;
    } catch (error) {
      console.error('Error fetching words:', error);
      throw error;
    }
  },
  getWordById: async (id: string): Promise<Card> => {
    try {
      const response = await instance.get<Card>(`/api/dict/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching word with id ${id}:`, error);
      throw error;
    }
  },
  createWord: async (word: Card): Promise<Card> => {
    try {
      const response = await instance.post<Card>("/api/dict/", word);
      return response.data;
    } catch (error) {
      console.error('Error creating word:', error);
      throw error;
    }
  },
  updateWord: async (word: Card): Promise<Card> => {
    try {
      const response = await instance.put<Card>("/api/dict/", word);
      return response.data;
    } catch (error) {
      console.error('Error updating word:', error);
      throw error;
    }
  }
}

export const GroupsAPI = {
  getGroups: async (): Promise<GroupOfCards[]> => {
    const response = await instance.get<GroupOfCards[]>("/api/groups/all");
    return response.data;
  },
  getGroupById: async (groupId: string): Promise<GroupOfCards> => {
    const response = await instance.get<GroupOfCards>(`/api/groups/${groupId}`);
    return response.data;
  },
  createGroup: async (groupData: Omit<GroupOfCards, "id">): Promise<GroupOfCards> => {
    const response = await instance.post<GroupOfCards>("/api/groups/", groupData);
    return response.data;
  },
  updateGroup: async (groupId: string, groupData: Omit<GroupOfCards, "id">): Promise<GroupOfCards> => {
    const response = await instance.put<GroupOfCards>(`/api/groups/${groupId}`, groupData);
    return response.data;
  },
  deleteGroup: async (groupId: string): Promise<void> => {
    await instance.delete(`/api/groups/${groupId}`);
  },
};
