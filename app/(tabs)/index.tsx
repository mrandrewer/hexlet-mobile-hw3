import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#85c1e9",
      }}
    >
      <Text style={{color: "white"}}>Привет! Меня зовут Андрей Бельский!</Text>
    </View>
  );
}
