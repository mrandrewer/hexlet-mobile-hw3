import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, FlatList } from "react-native";
import LangInfo from "../langInfo";

const data = [
  {
    id: "1",
    name: "C#",
    desc: "Я знаком с .Net Framework с 2005 года. Начинал на версии 1.1 и Visual Basic.Net, " +
      "а с версии 2.0 перешел на c#. Это мой основной язык на работе, " + 
      "где я разрабатываю решения для кровавого энтерпрайза",
    img: require("../../assets/images/csharp.png"),
  },
  {
    id: "2",
    name: "SQL#",
    desc: "Язык SQL со мной с 2008 года, я впервые познакомился с ним в институте, диалект T-SQL. " +
      "Сейчас я знаю больше диалектов, но основными БД остаются MS SQL Server и Postrgresql. " + 
      "Это мой второй основной язык на работе, где я разрабатываю решения для кровавого энтерпрайза",
    img: require("../../assets/images/sql.png"),
  },
  {
    id: "3",
    name: "javascript",
    desc: "В том или ином виде я работаю с js с 2008 года. " +
      "На первой работе использовал для написания модулей на SharePoint. " +
      "Интенсивнее начал заниматься фронтэндом в 2019 году, когда на работе платформа стала переезжать веб, " +
      "но по факту плотно работаю с вебом только с 2022 года.",
    img: require("../../assets/images/javascript.png"),
  },
  {
    id: "4",
    name: "C\\C++",
    desc: "Учил в институте, то что учил к современному C++ имеет мало отношения. " +
      "По работе не пользуюсь, изредка использую C для программирования " + 
      "STM микроконтроллеров как хобби.",
    img: require("../../assets/images/cplusplus.png"),
  },
];

export default function MyExperienceScreen() {
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <LangInfo name={item.name} desc={item.desc} img={item.img}/>}
        keyExtractor={({id}) => id}
        style={styles.scrollView}
        refreshing={isRefreshing}
        onRefresh={()=>{
          setIsRefreshing(true);
          setTimeout(() => {
            setIsRefreshing(false);
          }, 500);
        }}
        />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    alignContent: "center",
    alignItems: "center",
  },
  scrollView: {
    marginHorizontal: 20,
    maxWidth: 300
  },
});