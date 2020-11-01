import React, { Component } from 'react'
import Header from './Header.js';
import fetch from 'superagent';
import { Link } from 'react-router-dom';

export default class Detail extends Component {
    state = {
        id: [],
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({
            loading: true
        })
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params.id}`);

        this.setState ({
            id: response.body
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Link to="/pokemon">
                    <button className="back-button">Back</button></Link>
            {
                this.state.id.length === 0
                ? <img className="loading" src="/poke-gif.gif" alt="loading..." />
                :
                <div className="pokemon-detail">
                    <img className="detail-img" src={this.state.id.url_image} alt="pokemon" />
                    <h1 className="detail-id">{this.state.id.id}</h1>
                    <h2 className="detail-name">{this.state.id.pokemon}</h2>
                    <div className="detail-types">
                        <span className="type1" style={{ backgroundColor: this.state.id.color_1 }}>{this.state.id.type_1}</span>
                        <span className="type2" style={{ backgroundColor: this.state.id.color_2 }}>{this.state.id.type_2}</span>
                    </div>
                    <p className="detail-hp">HP: {this.state.id.hp}</p>
                    <p className="detail-height">Height: {this.state.id.height}</p>
                    <p className="detail-weight">Weight: {this.state.id.weight}</p>
                    <p className="detail-attack">Attack: {this.state.id.attack}</p>
                    <p className="detail-defense">Defense: {this.state.id.defense}</p>
                    <p className="detail-speed">Speed: {this.state.id.speed}</p>
                    <p className="ability-1">Ability 1: {this.state.id.ability_1}</p>
                    <p className="ability-2">Ability 2: {this.state.id.ability_2}</p>
                    <p className="ability-hidden">Hidden Ability: {this.state.id.ability_hidden}</p>
                </div>
            }
            </div>
        )
    }
}
