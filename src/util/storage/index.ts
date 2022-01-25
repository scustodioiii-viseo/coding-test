import AsyncStorage from '@react-native-async-storage/async-storage';

const keys = {
  user: 'User',
};

const save = (key: string, value: string): Promise<void> =>
  AsyncStorage.setItem(key, value);

const saveObject = <T>(key: string, value: T): Promise<void> =>
  save(key, JSON.stringify(value));

const getValueFor = (key: string): Promise<string | null> =>
  AsyncStorage.getItem(key);

const getObjectFor = async <T>(key: string): Promise<T | null> => {
  try {
    const value = await getValueFor(key);
    if (value !== null) {
      return JSON.parse(value) as T;
    } else {
      return null;
    }
  } catch {
    return null;
  }
};

const deleteObject = (key: string): Promise<void> =>
  AsyncStorage.removeItem(key);

export default {
  keys,
  saveObject,
  getObjectFor,
  deleteObject,
};
