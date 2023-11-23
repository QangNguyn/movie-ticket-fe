export const initialState = {
  movies: [
    {
      id: 1,
      name: "Tây du ký",
    },
  ],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "movies/add":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};
