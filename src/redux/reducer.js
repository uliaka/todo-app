import Types from "./types";
import { arrowFunctionExpression } from "@babel/types";

const initialState = {
  items: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_ITEM: {
      return {
        ...state,
        items: state.items.concat([action.payload])
      };
    }
    case Types.DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.payload.id)
      }
    }
    case Types.ADD_COMMENT: {
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.payload.itemId ? {
            ...item,
            comments: item.comments.concat([{ text: action.payload.text }])
          } : item;
        })
      };
    }
    default:
      return state;
  }
};

export default todoReducer;