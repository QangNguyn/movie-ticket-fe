import { legacy_createStore as createStore } from "redux";

const initialState = {
  movies: [
    {
      id: 1,
      name: "Tây du ký",
    },
  ],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
