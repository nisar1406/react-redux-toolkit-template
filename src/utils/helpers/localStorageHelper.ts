import { IData } from '../../hooks/useApiRequest';

// Function to save data to local storage with a specific key
export const saveDataToLocalStorage = (keyName: string, data: IData): void => {
  try {
    window.localStorage.setItem(keyName, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving data to local storage:', error);
  }
};

// Function to retrieve data from local storage using a specific key
export const getDataFromLocalStorage = (keyName: string): IData | null => {
  try {
    const data = window.localStorage.getItem(keyName);
    if (data) {
      return JSON.parse(data) as IData;
    }
    return null;
  } catch (error) {
    console.error('Error retrieving data from local storage:', error);
    return null;
  }
};

// Function to delete data from local storage using a specific key
export const deleteDataFromLocalStorage = (keyName: string): void => {
  try {
    window.localStorage.removeItem(keyName);
  } catch (error) {
    console.error('Error deleting data from local storage:', error);
  }
};

// Function to delete all data from local storage
export const clearLocalStorage = (): void => {
  try {
    window.localStorage.clear();
  } catch (error) {
    console.error('Error clearing local storage:', error);
  }
};
