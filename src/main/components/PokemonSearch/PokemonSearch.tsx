import * as React from "react";
import "/PokemonSearch.css";

export interface IPokemonSearchProps {
  name: string;
  numberOfPokemons?: number;
}

export interface SearchState {
  error: boolean;
  pokemon: Pokemon;
}

export interface Pokemon {
  name: string;
  numberOfAbilities: number;
  baseExperience: number;
  imageUrl: string;
}

export default class PokemonSearch extends React.Component<
  IPokemonSearchProps,
  SearchState
> {
  pokemonRef: React.RefObject<HTMLInputElement>;
  constructor(props: IPokemonSearchProps) {
    super(props);
    this.state = {
      error: false,
      pokemon: null
    };
    this.pokemonRef = React.createRef();
  }

  onSearchClick = () => {
    const inputValue = this.pokemonRef.current.value;
    console.log(inputValue);
    if (inputValue) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`).then(res => {
        if (res.status !== 200) {
          this.setState({ error: true });
          return;
        }
        res.json().then(data => {
          console.log(data);
          this.setState({
            error: false,
            pokemon: {
              name: data.name,
              numberOfAbilities: data.abilities.length,
              baseExperience: data.base_experience,
              imageUrl: data.sprites.front_default
            }
          });
        });
      });
    } else {
      this.setState({ error: true });
    }
  };
  public render() {
    const { name: userName, numberOfPokemons } = this.props;
    const { error, pokemon } = this.state;

    let resultMarkup;
    if (error) {
      resultMarkup = (
        <p className="error-description">Pokemon not found, please try again</p>
      );
    } else if (this.state.pokemon) {
      resultMarkup = (
        <div className="pokemon-card">
          <img className="pokemon-img" src={pokemon.imageUrl} alt="nada" />
          <p className="pokemon-description">
            {pokemon.name} has {pokemon.numberOfAbilities} abilities and{" "}
            {pokemon.baseExperience} base experience points{" "}
          </p>
        </div>
      );
    }
    return (
      <div className="pokemon-screen">
        <p className="user-data">
          User {userName}{" "}
          {numberOfPokemons && <span>has {numberOfPokemons} Pokemons</span>}
        </p>
        <div className="input-field">
          <input className="input-pokemon" type="text" ref={this.pokemonRef} />
          <button className="button-pokemon" onClick={this.onSearchClick}>
            {" "}
            Search{" "}
          </button>
        </div>
        {resultMarkup}
      </div>
    );
  }
}
