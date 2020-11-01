import React, { Component } from 'react'
import SearchBar from './SearchBar.js';
import PokemonList from './PokemonList.js';
import fetch from 'superagent';
import './App.css';

export default class PaginationPage extends Component {
    state = {
        pokemon: [],
        searchText: '',
        sortType: '',
        loading: false,
        pageNumber: 1,
        sortDirection: '',
        className: ''
        
      }
    
      componentDidMount = async () => {
        await this.fetchPokemon();
      }
    
      fetchPokemon = async () => {
        const response = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`);
    
        this.setState({ pokemon: response.body.results,
        loading: false,
        count: response.body.count });
      }
    
      handlePokebase = e => {
        this.setState({
          searchText: e.target.value
        })
      }
    
      handleClick = async (e) => {
          e.preventDefault()
          const type = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&page=${this.state.pageNumber}&perPage=20`)
    
          this.setState({ 
              pokemon: type.body.results,
              count: type.body.count })
      }

      handleSortChange = async (e) => {
        await this.setState({
            sortDirection: e.target.value,
            className: e.target.className,
        })
        this.handleSort();
        }

      handleSortType = async (e) => {
        await this.setState({
            sortType: e.target.value,
        })
        this.handleTypeSort();
        console.log(this.state.sortType)
    }
    
      handleSort = async () => {
        if(this.state.sortDirection === "asc" || this.state.sortDirection === "desc"){
          const sorted = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&sort=${this.state.className}&direction=${this.state.sortDirection}&page=${this.state.pageNumber}&perPage=20`)
    
          this.setState({ 
            sort: true,
            pokemon: sorted.body.results,
            count: sorted.body.count
          })
        } else {
          const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.pageNumber}&perPage=20`)
    
          this.setState({ 
              pokemon: items.body.results,
              count: items.body.count })
        }
      }
    
      handleTypeSort = async () => {
        if(this.state.sortType === ''){
          const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&page=${this.state.pageNumber}&perPage=20`)
    
          this.setState({ 
            pokemon: items.body.results,
            count: items.body.count
          })
        } else {
        const type = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.searchText}&type=${this.state.sortType}&page=${this.state.pageNumber}&perPage=20`)

        this.setState({
          pokemon: type.body.results,
          count: type.body.count
        })
        }
      }

      handleIncrement = async () => {
          await this.setState({
              pageNumber: this.state.pageNumber + 1,
          })

          if(this.state.sort === true){
            await this.handleSort();
          } else {
              await this.handleTypeSort();
          }
      }

      handleBeginning = async () => {
          await this.setState({
              pageNumber: 1
          })
          if(this.state.sort === true){
            await this.handleSort();
          } else {
              await this.handleTypeSort();
          }
      }

      handleDecrement = async () => {
          await this.setState({
              pageNumber: this.state.pageNumber - 1,
          })
          if(this.state.sort === true){
            await this.handleSort();
          } else {
              await this.handleTypeSort();
          }
      }

      handleEnd = async () => {
          await this.setState({
              pageNumber: Math.ceil(this.state.count / 20)
          })
          if(this.state.sort === true){
            await this.handleSort();
          } else {
              await this.handleTypeSort();
          }
      }
    
      render() {      
        return (
          <div className="body">
                      <SearchBar 
                        handlePokebase={this.handlePokebase}
                        handleClick={this.handleClick}
                        handleTypeSort={this.handleTypeSort}
                        handleSort={this.handleSort}
                        handleSortChange={this.handleSortChange}
                        handleSortType={this.handleSortType}
                        />
             <div>
                {
                    <button
                        className="beginning"
                        disabled={this.state.pageNumber === 1}
                        onClick={this.handleBeginning}>
                            Beginning
                        </button>
                }
                {
                    <button
                        className="previous"
                        disabled={this.state.pageNumber === 1}
                        onClick={this.handleDecrement}>
                        Previous
                    </button>
                }
                {
                    <button
                    className="next"
                    onClick={this.handleIncrement}
                    disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
                        Next
                    </button>
                }
                {
                    <button
                    className="end"
                    onClick={this.handleEnd}
                    disabled={this.state.pageNumber === Math.ceil(this.state.count / 20)}>
                        End
                    </button>
                }
                    <p className="page-count">Page {this.state.pageNumber} of {Math.ceil(this.state.count / 20)}</p>
             </div>
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
