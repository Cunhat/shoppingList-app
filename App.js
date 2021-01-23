import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import LisComponent from "./components/ListComponent";
import { BottomNavigation, Dialog, Portal } from "react-native-paper";
import { AntDesign, Fontisto, FontAwesome   } from "@expo/vector-icons";
import CreateNewList from "./pages/CreateNewList";
import store from './store';
import { Provider } from "react-redux";
import ListOverview from "./pages/ListOverview";






const shoppingLists = () => (
  <ListOverview style={{backgroundColor: "#292b30", height: "100%", width: "100%", alignItems: "center"}}>
  
  </ListOverview>
);

const addLIst = () => (
  <View style={{backgroundColor: "#292b30", height: "100%", alignItems: "center"}}>
    <CreateNewList />
  </View>

);

const RecentsRoute = () => <Text>Recents</Text>;

export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "list", title: "List" , icon: () => <FontAwesome name="list-ul" size={24} color="white" /> },
    { key: "newList", title: "New List", icon: () => <AntDesign name="pluscircle" size={24} color={ index===1 ? "#e55063":"white"} /> },
    { key: "settings", title: "Settings", icon: () => <Fontisto name="player-settings" size={24} color={ index===2 ? "#e55063":"white"} /> },
  ]);

 



  const renderScene = BottomNavigation.SceneMap({
    list: shoppingLists,
    newList: addLIst,
    settings: RecentsRoute,
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar hidden />
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          inactiveColor={"#FFF"}
          activeColor={"#e55063"}
          barStyle={{ backgroundColor: "#292b30" }}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#292b30",
    height: "100%",
  }
});
