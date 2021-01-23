import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Feather, SimpleLineIcons, MaterialCommunityIcons   } from "@expo/vector-icons";
import { TextInput, Button, Chip   } from 'react-native-paper';
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import LisComponent from "../../components/ListComponent"



export default function ListOverview() {
    const listItems = useSelector((state) => state.shoppingListsReducer);

    React.useEffect(() => {
        console.log(listItems.lists)
      },[listItems])

        return (
            <View style={styles.container}>
             {listItems !== undefined ? listItems.lists.map((item) =>  <LisComponent key={item.title} style={styles.list} name={item.title}></LisComponent> ) :null}
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
        alignItems: "center"
        
      },
      textInput:{
        backgroundColor: "#292b30",
      },
      list:{
        
      }
});