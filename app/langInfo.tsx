import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";

const styles = StyleSheet.create({
  outContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#EAEAEA"
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  logo: {
    width: 48,
    height: 48,
  },
  header: {
    fontSize: 32,
    fontWeight: "400",
    marginStart: 10
  }
});

interface LangInfoProps {
  name: string,
  desc: string,
  img: any,
};

const LangInfo = ({ name, desc, img}: LangInfoProps) => {
  return(
    <View style={styles.outContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={img}></Image>
        <Text style={styles.header}>{name}</Text>
      </View>
      <Text>{desc}</Text>
    </View>
  );
};

export default LangInfo;