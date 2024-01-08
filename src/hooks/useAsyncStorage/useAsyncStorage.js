import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../../utils/methods/utils";

const useAsyncStorage = () => {
  const getDataByKey = async (key) => {
    const storedData = await AsyncStorage.getItem(key).catch((err) =>
      console.error(err)
    );

    const parsedData = JSON.parse(storedData);
    if (parsedData && parsedData.length === 0) return null;
    return parsedData;
  };

  const existDataForKey = async (key, itemId) => {
    let existingArray = [];
    const storedData = await AsyncStorage.getItem(key);
    if (storedData) existingArray = JSON.parse(storedData);
    const existingIndex = existingArray.findIndex((id) => id.id === itemId);
    return existingIndex !== -1;
  };

  const addDataByKey = async (key, value, itemId) => {
    let existingArray = [];
    const storedData = await AsyncStorage.getItem(key);
    if (storedData) existingArray = JSON.parse(storedData);
    const existingIndex = existingArray.findIndex((id) => id.id === itemId);
    if (existingIndex !== -1) {
      existingArray.splice(existingIndex, 1);
      AsyncStorage.setItem(key, JSON.stringify(existingArray));
      showToast("You have successfully deleted it.");
    } else {
      existingArray.push(value);
    }

    const result = AsyncStorage.setItem(key, JSON.stringify(existingArray));
    if (result) showToast("You have successfully added.");
  };

  const clearByKey = async (key) => {
    await AsyncStorage.removeItem(key);
  };

  return { getDataByKey, existDataForKey, addDataByKey, clearByKey };
};

export default useAsyncStorage;
