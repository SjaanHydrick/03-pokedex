import React, { Component } from 'react'

export default class PokemonItem extends Component {
    render() {

        return (
            <div className={this.props.pokebase}>
                <img className="pokemon-image" src={this.props.url_image} alt={this.props.pokebase} />
                <p className="id">{this.props.id}</p>
                <h2>{this.props.pokebase}</h2>
                <div>
                    <span className="type1" style={{ backgroundColor: this.props.color_1}}>{this.props.type_1}</span>
                    <span className="type2" style={{ backgroundColor: this.props.color_2}}>{this.props.type_2}</span>
                </div>
                <p className="hp">HP: {this.props.attack}
                </p>
                <div className="attack-defense">
                    <span className="attack">
                        Attack: {this.props.attack}
                    </span>
                    <span className="defense">
                        Defense: {this.props.defense}
                    </span>
                    <span className="speed">
                        Speed: {this.props.speed}
                    </span>
                </div> 
            </div>
        )
    }
}
