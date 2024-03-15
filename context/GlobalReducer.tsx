export default (state: any, action: any) => {
    switch (action.type) {
      case "SET_MENU":
        return {
          ...state,
          currentMenu: action.payload,
        };
      case "SET_WIDTH":
        return {
          ...state,
          currentWidth: action.payload,
        };
      case "SET_HEIGHT":
        return {
          ...state,
          currentHeight: action.payload,
        };
       default:
        return state;
    }
  };