import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLoginState = async (isLoggedIn) => {
  try {
    await AsyncStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
  } catch (error) {
    console.log('Error saving login state:', error);
  }
};

export const getLoginState = async () => {
  try {
    const value = await AsyncStorage.getItem('isLoggedIn');
    return value !== null ? JSON.parse(value) : false;
  } catch (error) {
    console.log('Error getting login state:', error);
    return false;
  }
};

export const clearLoginState = async () => {
  try {
    await AsyncStorage.removeItem('isLoggedIn');
  } catch (error) {
    console.log('Error clearing login state:', error);
  }
};