import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {

  let secondLineText = "Home Second Line";
  return <View>
    <Text style={styles.text}>
      HomeScreen
    </Text>
    <Text style={styles.subHeaderStyle}>
      {secondLineText}
    </Text>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  subHeaderStyle:{
    fontSize: 20
  }
});

export default HomeScreen;
