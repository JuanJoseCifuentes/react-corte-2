export const actions = {
  SET_POKEMONS: "SET_POKEMONS",
  SET_LOADING: "SET_LOADING",
  SET_POKEMON: "SET_POKEMON",
  SET_ERROR: "SET_ERROR",
};

export const initialState = {
  pokemons: [],
  loading: false,
  pokemon: null,
  error: null,
};

export const pokemonReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case actions.SET_LOADING:
      return { ...state, loading: action.payload };
    case actions.SET_POKEMON:
      return { ...state, pokemon: action.payload };
    case actions.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
