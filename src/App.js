import React, { Component } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import PokemonList from './PokemonList.js';
import { pokemonArray } from './pokemon.js';

export default class App extends Component {
  state = {
    pokebase: '',
    searchText: '',
    sortName: '',
    sortType: ''
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

  render() {
    const filteredPokemon = pokemonArray.filter((pokemon) => {
      if (!this.state.pokebase) return true;
      if (pokemon.pokebase.toLowerCase().includes(this.state.pokebase.toLowerCase()))
      return true;
      if (this.state.sortType === pokemon.type_1){
        return true;
      }
      if (this.state.sortType === pokemon.type_2){
        return true;
      }
      return false;
      })
      .sort((a, b) => {
        if (this.state.sortName === "asc"){
            return a.pokebase.localeCompare(b.pokebase); 
        } else if (this.state.sortName === "desc") {
            return b.pokebase.localeCompare(a.pokebase)}
          })
      .sort((a, b) => {
          return a.type_1 - b.type_1
        }
      )
      .sort((a, b) => {
          return a.type_2 - b.type_2
      })  

    return (
      <div className="body">
        <Header />
        <SearchBar 
        handlePokebase={this.handlePokebase}
        handleClick={this.handleClick}
        handleNameSort={this.handleNameSort}
        handleTypeSort={this.handleTypeSort} />
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
