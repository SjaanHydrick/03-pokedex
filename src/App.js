/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import PokemonList from './PokemonList.js';
import { pokemonArray } from './pokemon.js';
import './App.css';

export default class App extends Component {
  state = {
    pokebase: '',
    searchText: '',
    sortName: '',
    sortType: '',
    sortAttack: '',
    sortHealth: ''
  }

  handlePokebase = e => {
    e.preventDefault()
    this.setState({
      pokebase: this.state.searchText
    })
  }

  handleClick = e => {
    this.setState({
      searchText: e.target.value  
    })
  }

  handleNameSort = e => {
    this.setState({
      sortName: e.target.value
    })
  }

  handleTypeSort = e => {
    this.setState({
      sortType: e.target.value
    })
  }

  handleAttack = e => {
    this.setState({
      sortAttack: e.target.value
    })
  }

  handleHealth = e => {
    this.setState({
      sortHealth: e.target.value
    })
  }

  render() {
    const filteredPokemon = pokemonArray.filter((pokemon) => {
      if (!this.state.pokebase) return true;
      if (pokemon.pokebase.toLowerCase().includes(this.state.pokebase.toLowerCase()))
      return true;
      return false;
      })
      .filter((pokemon) => {
        if (!this.state.sortType) return true;
        if (pokemon.type_1 === this.state.sortType) return true;
        if (pokemon.type_2 === this.state.sortType)
        return true;
        return false;
      })
      .sort((a, b) => {
        if (this.state.sortName === "asc"){
            return a.pokebase.localeCompare(b.pokebase); 
        } else if (this.state.sortName === "desc") {
            return b.pokebase.localeCompare(a.pokebase)}
          })
      .sort((a, b) => {
        if (this.state.sortAttack === "asc"){
          return b.attack - a.attack;
        } else if (this.state.sortAttack === "desc"){
          return a.attack - b.attack;
        }
      })
      .sort((a, b) => {
        if (this.state.sortHealth === "asc"){
          return b.hp - a.hp;
        } else if (this.state.sortHealth === "desc"){
          return a.hp - b.hp;
        }
      })
      
    return (
      <div className="body">
        <Header />
        <SearchBar 
        handlePokebase={this.handlePokebase}
        handleClick={this.handleClick}
        handleNameSort={this.handleNameSort}
        handleTypeSort={this.handleTypeSort}
        handleAttack={this.handleAttack}
        handleHealth={this.handleHealth}
         />
        <div className="pokemon-display">
        {
          filteredPokemon.map((pokemonArray, i) =>  
        <PokemonList 
        key={i}
        pokemonArray={pokemonArray}/>
          )}
        </div>
      </div>
    )
  }
}
