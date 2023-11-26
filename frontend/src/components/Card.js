import React from "react";
import { Card, Text } from "@rneui/themed";
import { StyleSheet } from "react-native";

export default function Card({route}) {
    const {result} = route.params
  return (
    <Card containerStyle={{ marginTop: 15, borderRadius: 15 }}>
      <View style={{ margin: "auto" }}>
        <AcceptedImg />
        <Text style={{ textAlign: "center" }}>Дата: 21.12.2023</Text>
        <Text style={{ textAlign: "center" }}>Статус: Одобрена</Text>
      </View>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("InfoApplication")}
      >
        Подробнее
      </Button>
    </Card>
  );
}
