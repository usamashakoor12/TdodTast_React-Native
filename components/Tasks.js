import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Tasks = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.sequre}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  sequre: {
    width: 24,
    height: 24,
    backgroundColor: "#55B5F6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15
  },
  itemText: {
    maxWidth: "80%"
  },
  circular:{
    width: 12,
    height: 12,
    borderColor: "#55B5F6",
    borderRadius: 5,
    borderWidth: 2,
  }
});

export default Tasks;
