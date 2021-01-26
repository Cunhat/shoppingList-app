import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { TextInput, Button, Chip } from "react-native-paper";
import { useDispatch } from "react-redux";
import LinearGradient from "react-native-linear-gradient";

export default function CreateNewList() {
  const [text, setText] = React.useState("");
  const [item, setItem] = React.useState("");
  const [itemList, setItemList] = React.useState([]);
  const [save, setSave] = React.useState(true);
  const dispatch = useDispatch();

  function handleSave() {
    const newList = {
      title: text,
      items: itemList,
    };
    dispatch({ type: "SET_NEW_LIST", newList });
    setItemList([]);
    setText("");
    setItem("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="List Name"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="outlined"
        style={styles.textInput}
        theme={{
          colors: {
            placeholder: "white",
            text: "white",
            background: "#003489",
          },
        }}
      />

      <TextInput
        label="New Item"
        value={item}
        onChangeText={(newItem) => setItem(newItem)}
        mode="outlined"
        style={styles.textInput}
        theme={{
          colors: {
            placeholder: "white",
            text: "white",
            background: "#003489",
          },
        }}
      />
      <View style={styles.generalButtonContainer}>
        <Button
          icon="plus"
          mode="contained"
          onPress={() => {
            setItemList([...itemList, item]);
            setItem("");
          }}
          style={styles.button}
          disabled={ item.length > 0 ? false : true}
        >
          Add Item
        </Button>
        <Button
          icon="save"
          mode="contained"
          onPress={() => handleSave()}
          style={styles.button}
          disabled={text.length > 0 && itemList.length > 0 ? false : true}
        >
          Save List
        </Button>
      </View>

      <View style={styles.chipsContainer}>
        {itemList.map((item) => (
          <View key={item} style={styles.buttonContainer}>
            <LinearGradient
              colors={["#673AB7", "#512DA8"]}
              style={styles.buttonView}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.listItems}>{item}</Text>
            </LinearGradient>
          </View>
        ))}
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#292b30",
    height: "100%",
    marginVertical: 10,
    width: "90%",
    height: 75,
    borderRadius: 15,
  },
  textInput: {
    marginVertical: 10,
    backgroundColor: "#292b30",
  },
  button: {
    marginVertical: 20,
    height: 45,
    justifyContent: "center",
    width: 170,
  },
  chipsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  chips: {
    marginVertical: 5,
    height: 40,
    alignItems: "center",
  },
  buttonView: {
    backgroundColor: "#FFF",
    alignItems: "center",
    height: 40,
    width: 300,
    justifyContent: "center",
    borderRadius: 5,
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: 5,
  },
  generalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  listItems: {
    color: "#FFF",
    fontSize: 18,
  },
});
