import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  Feather,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LisComponent from "../../components/ListComponent";

export default function ListOverview() {
  const listItems = useSelector((state) => state.shoppingListsReducer);

  const [visible, setVisible] = React.useState(false);
  const [modalItems, setModalItems] = React.useState([]);

  const showModal = (item) => {
    setVisible(true);
    setModalItems(item.items);
    console.log(item);
  };
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  React.useEffect(() => {
    console.log(listItems.lists);
  }, [listItems]);

  return (
    <View style={styles.container}>
      {listItems !== undefined
        ? listItems.lists.map((item) => (
            <LisComponent
              key={item.title}
              style={styles.list}
              name={item.title}
              clicked={() => showModal(item)}
            ></LisComponent>
          ))
        : null}
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            {modalItems.map(modalItem => <Text key={modalItem}>{modalItem}</Text>)}
          </Modal>
        </Portal>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#292b30",
    height: "100%",
    width: "100%",
    height: 75,
    alignItems: "center",
  },
});
