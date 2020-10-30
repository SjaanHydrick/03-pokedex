/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import PokemonList from './PokemonList.js';
import fetch from 'superagent';
import './App.css';

export default class App extends Component {
  state = {
    pokemon: [],
    searchText: ''
  }

  componentDidMount = async () => {
    await this.fetchPokemon();
  }

  fetchPokemon = async () => {
    const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)

    this.setState({ pokemon: response.body.results });
  }

  handlePokebase = e => {
    this.setState({
      searchText: e.target.value
    })
  }

  handleClick = async (e) => {
      e.preventDefault()
      const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}`)

      this.setState({ pokemon: items.body.results })
  }

  // handleNameSort = e => {
  //   this.setState({
  //     sortName: e.target.value
  //   })
  // }

  // handleTypeSort = e => {
  //   this.setState({
  //     sortType: e.target.value
  //   })
  // }

  // handleAttack = e => {
  //   this.setState({
  //     sortAttack: e.target.value
  //   })
  // }

  // handleHealth = e => {
  //   this.setState({
  //     sortHealth: e.target.value
  //   })
  // }

  render() {
    //   .sort((a, b) => {
    //     if (this.state.sortName === "asc"){
    //         return a.pokebase.localeCompare(b.pokebase); 
    //     } else if (this.state.sortName === "desc") {
    //         return b.pokebase.localeCompare(a.pokebase)}
    //       })
    //   .sort((a, b) => {
    //     if (this.state.sortAttack === "asc"){
    //       return b.attack - a.attack;
    //     } else if (this.state.sortAttack === "desc"){
    //       return a.attack - b.attack;
    //     }
    //   })
    //   .sort((a, b) => {
    //     if (this.state.sortHealth === "asc"){
    //       return b.hp - a.hp;
    //     } else if (this.state.sortHealth === "desc"){
    //       return a.hp - b.hp;
    //     }
    //   })
      
    return (
      <div className="body">
        <Header />
        <SearchBar 
        handlePokebase={this.handlePokebase}
        handleClick={this.handleClick}
        // handleNameSort={this.handleNameSort}
        // handleTypeSort={this.handleTypeSort}
        // handleAttack={this.handleAttack}
        // handleHealth={this.handleHealth}
         />
         <div className="pokemon-display">
        {
          this.state.pokemon.length === 0
          ? <img src="/poke-gif.gif" alt="loading..." />

          : this.state.pokemon.map(pokemon =>  
            <div key={pokemon.pokemon}>
            <PokemonList 
              pokemon={pokemon}/>
          </div>
          )}
        </div>
      </div>
    )
  }
}
