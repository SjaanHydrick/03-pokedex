import React, { Component } from 'react'
import PokemonItem from './PokemonItem.js'

export default class PokemonList extends Component {
    render() {
        return (
            <div className="pokemon-list">
                <PokemonItem 
                pokebase={this.props.pokemon.pokebase}
                url_image={this.props.pokemon.url_image}
                id={this.props.pokemon.id}
                type_1={this.props.pokemon.type_1}
                type_2={this.props.pokemon.type_2}
                hp={this.props.pokemon.hp}
                attack={this.props.pokemon.attack}
                defense={this.props.pokemon.defense}
                speed={this.props.pokemon.speed}
                color_1={this.props.pokemon.color_1}
                color_2={this.props.pokemon.color_2}
                />
            </div>
        )
    }
}
