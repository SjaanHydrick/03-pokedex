import React, { Component } from 'react'

export default class PokemonItem extends Component {
    render() {
        return (
            <div className={this.props.pokebase}>
                <p className="info-bar">Info</p>
                <img className="pokemon-image" src={this.props.url_image} alt={this.props.pokebase} />
                <h1>{this.props.id} {this.props.pokebase}</h1>
                <div className="types">
                    <p className="type1">{this.props.type_1}</p>
                    <p className="type2">{this.props.type_2}</p>
                </div>
                <div className="height-weight">
                    <p className="height">
                        {this.props.height} feet
                    </p>
                    <p className="weight">
                        {this.props.weight} lbs
                    </p>
                </div> 
                <p className="description">{this.props.pokedex}</p>
            </div>
        )
    }
}
