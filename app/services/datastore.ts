import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: string, authData: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(authData));
};

const getData = async (key: string) => {
  const value: any = await AsyncStorage.getItem(key);

  const data = JSON.parse(value);

  if (!data) null;

  return data;
};

export default {
  storeData,
  getData,
};
