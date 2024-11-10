import React from "react";
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Обо мне' }} />
      <Tabs.Screen name="myExperience" options={{ title: 'Мой опыт' }} />
    </Tabs>
  );
}
