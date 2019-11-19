import Types from "./types";

const initialState = {
  items: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_ITEM: {
      return {
        ...state,
        items: state.items.concat([{
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          ...action.payload
        }])
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
            comments: (item.comments || []).concat([{ text: action.payload.text }])
          } : item;
        })
      };
    }
    case Types.ACTIVE_ITEM: {
      return {
        ...state,
        activeItem: action.payload
      }
    }
    default:
      return state;
  }
};

export default todoReducer;