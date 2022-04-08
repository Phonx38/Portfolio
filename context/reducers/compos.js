export function compo(state, action) {
  switch (action.type) {
    case "ABOUT_ME":
      return { ...state, compo: action.payload };
    default:
      return state;
  }
}
