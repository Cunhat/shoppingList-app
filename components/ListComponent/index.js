import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";

export default function ListComponent({ ...props }) {
  return (
    <LinearGradient
      colors={[
        "#fdbd5b",
        "#fe955b",
        "#e55063",
        "#bd3559",
        "#bd1b6e",
        "#ae1b6c",
      ]}
      style={styles.listBox}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <TouchableOpacity style={styles.insideContainer} onPress={props.clicked}>
        <MaterialCommunityIcons name="apps" size={30} color="#FFF" />
        <Text style={styles.title}>{props.name}</Text>
        <Text style={styles.counter}>10/20</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  listBox: {
    marginVertical: 10,
    width: "90%",
    height: 75,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  insideContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 20,
  },
  counter: {
    color: "#FFF",
    fontSize: 20,
  },
});
