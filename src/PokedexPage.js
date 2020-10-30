/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Header from './Header.js';
import SearchBar from './SearchBar.js';
import PokemonList from './PokemonList.js';
import fetch from 'superagent';
import './App.css';

export default class PokedexPage extends Component {
  state = {
    pokemon: [],
    searchText: '',
    sortType: ''
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
      const type = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}`)

      this.setState({ pokemon: type.body.results })
  }

  handleNameSort = async (e) => {
    if(e.target.value === "asc"){
      const nameAsc = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=pokemon&direction=asc`)

      this.setState({ 
        pokemon: nameAsc.body.results 
      })
    } else if(e.target.value === "desc"){
      const nameDesc = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=pokemon&direction=desc`)
      this.setState({
        pokemon: nameDesc.body.results
      })
    } else {
      const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}`)

      this.setState({ pokemon: items.body.results })
    }
    }

  handleTypeSort = async (e) => {
    if(e.target.value === ''){
      const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}`)

      this.setState({ 
        pokemon: items.body.results 
      })
    }
    else{
    const type = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&type=${e.target.value}
    `)
    this.setState({
      pokemon: type.body.results
    })
    }
  }

  handleAttack = async (e) => {
    if(e.target.value === "asc"){
      const attackAsc = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=attack&direction=asc`)

      this.setState({ 
        pokemon: attackAsc.body.results 
      })
    } else if(e.target.value === "desc"){
      const attackDesc = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=attack&direction=desc`)
      this.setState({
        pokemon: attackDesc.body.results
      })
    } else {
      const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}`)

      this.setState({ pokemon: items.body.results })
    }
  }

  handleHealth = async (e) => {
    if(e.target.value === "asc"){
      const healthAsc = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=hp&direction=asc`)

      this.setState({ 
        pokemon: healthAsc.body.results 
      })
    } else if(e.target.value === "desc"){
      const healthDesc = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=hp&direction=desc`)
      this.setState({
        pokemon: healthDesc.body.results
      })
    } else {
      const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}`)

      this.setState({ pokemon: items.body.results })
    }
  }

  render() {      
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
          this.state.pokemon.length === 0
          ? <img className="loading" src="/poke-gif.gif" alt="loading..." />

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
