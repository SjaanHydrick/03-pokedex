import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        const pokemon = this.props.pokemonArray;
        return (
            <div className="pokemon-list">
                <PokemonItem 
                pokebase={pokemon.pokebase}
                url_image={pokemon.url_image}
                id={pokemon.id}
                type_1={pokemon.type_1}
                type_2={pokemon.type_2}
                height={pokemon.height}
                weight={pokemon.weight}
                pokedex={pokemon.pokedex}
                color_1={pokemon.color_1}
                color_2={pokemon.color_2}
                />
            </div>
        )
    }
}
