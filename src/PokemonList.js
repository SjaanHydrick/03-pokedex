import React, { Component } from 'react';
import PokemonItem from './PokemonItem.js';
import { Link } from 'react-router-dom';



export default class PokemonList extends Component {
    
    render() {
        return (
            <div className="pokemon-list">
                <Link className="link-id" to={`/detail/${this.props.pokemon._id}`}>
                    <PokemonItem 
                    pokebase={this.props.pokemon.pokebase}
                    url_image={this.props.pokemon.url_image}
                    id={this.props.pokemon.id}
                    type_1={this.props.pokemon.type_1}
                    type_2={this.props.pokemon.type_2}
                    color_1={this.props.pokemon.color_1}
                    color_2={this.props.pokemon.color_2}
                    />
                </Link>
            </div>
        )
    }
}
