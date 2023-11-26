import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import { Card, Text } from "@rneui/themed";
import Header from "../components/Header";
import AcceptedImg from "../components/AcceptedImg";
import NotAcceptedImg from "../components/NotAcceptedImg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function ListApplication({ navigation }) {
  async function GetRequest(token) {
    try {
      // Попытка входа
      const GetResponse = await axios.get(
        "http://localhost:8000/credit/get_requests",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(GetResponse.data);

      // Возвращаем данные из второго запроса (входа), если все успешно
      return GetResponse.data;
    } catch (error) {
      console.error("Ошибка:", error);
      throw error; // Вы можете обработать ошибку здесь или прокинуть её дальше, если необходимо
    }
  }

  const getToken = async () => {
    try {
      const userToken = await AsyncStorage.getItem("userToken");
      return userToken;
    } catch (e) {
      // обработка возможных ошибок
      console.log("Loading token failed", e);
    }
  };

  getToken()
    .then((userToken) => {
      GetRequest(userToken);
    })
    .catch((e) => {
      console.log("Unable to retrieve the token", e);
    });
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header>Ваши заявки</Header>
          <Text style={styles.text}>У вас еще не было заявок. Создайте её сейчас!</Text>
          <Button
            mode="outlined"
            onPress={() => navigation.navigate("FormCreateApplication")}
          >
            Создать заявку
          </Button>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  }
});
