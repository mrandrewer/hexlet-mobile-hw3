import React from "react";
import { Tabs } from 'expo-router';
import { Image} from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{ 
          title: 'Обо мне',
          tabBarIcon: ({size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size, opacity: focused ? 1 : 0.5 }}
                source={ require("../../assets/images/profile.png") }
              />
            );
          }
        }} />
      <Tabs.Screen
        name="myExperience"
        options={{ 
          title: 'Мой опыт',
          tabBarIcon: ({size, focused }) => {
            return (
              <Image
                style={{ width: size, height: size, opacity: focused ? 1 : 0.5 }}
                source={ require("../../assets/images/portfolio.png") }
              />
            );
          }
        }} />
    </Tabs>
  );
}
