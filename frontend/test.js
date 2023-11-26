import * as Keychain from 'react-native-keychain';

// Сохранение токена
const storeToken = async (token) => {
  try {
    await Keychain.setGenericPassword('token', token);
  } catch (error) {
    // Обработка ошибок
  }
};

// Получение токена
const getToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials) {
      return credentials.password;
    }
  } catch (error) {
    // Обработка ошибок
  }
};

// Удаление токена
const removeToken = async () => {
  try {
    await Keychain.resetGenericPassword();
  } catch (error) {
    // Обработка ошибок
  }
};
