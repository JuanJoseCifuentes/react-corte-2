import { createContext, useContext, useReducer } from "react";
import Pokedex from "pokedex-promise-v2";

const PokemonContext = createContext([]);

export function usePokemon() {
    const context = useContext(PokemonContext);

    if(!context) {
        throw new Error("AHHHHHH");
    }
    return context;
}

const interval = {
    limit: 151,
    offset: 0,
  };

export function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPokemons = useCallback(async () => {
        setLoading(true);
        const pokedex = new Pokedex();
        const response = await pokedex.getPokemonsList({
          ...interval,
          offset: page * interval.limit,
        });
        const urls = response.results.map((pokemon) => pokemon.url);
        const pokemonsResponse = await pokedex.getResource(urls);
        setPokemons(pokemonsResponse);
        setLoading(false);
      }, [page, setPokemons]);
    
      useEffect(() => {
        fetchPokemons();
      }, [fetchPokemons]);

    return (
        <PokemonContext.Provider value={{}}>
            {children}
        </PokemonContext.Provider>
    )
}