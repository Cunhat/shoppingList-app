import React from "react";

const INITIAL_STATE = {
  lists: [],
};

const ShoppingListsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_NEW_LIST":
      return  { ...state, lists: [...state.lists,  action.newList]} ;
    default:
      return state;
  }
};

export default ShoppingListsReducer;
