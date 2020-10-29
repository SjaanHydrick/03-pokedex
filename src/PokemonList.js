import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        const pokemon = this.props.pokemonArray;
        return (
            <div>
                <PokemonItem 
                pokebase={pokemon.pokebase}
                url_image={pokemon.url_image}
                id={pokemon.id}
                type_1={pokemon.type_1}
                type_2={pokemon.type_2}
                height={pokemon.height}
                weight={pokemon.weight}
                pokedex={pokemon.pokedex}
                />
            </div>
        )
    }
}
