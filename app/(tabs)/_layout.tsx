import React from "react";
import { Tabs } from 'expo-router';
import { Image} from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{ 
          title: 'Обо мне',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={ require("../../assets/images/profile.png") }
              />
            );
          }
        }} />
      <Tabs.Screen
        name="myExperience"
        options={{ 
          title: 'Мой опыт',
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={ require("../../assets/images/portfolio.png") }
              />
            );
          }
        }} />
    </Tabs>
  );
}
