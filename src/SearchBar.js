import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {

        return (
            <div>
                <form 
                onSubmit={this.props.handleClick}>
                    <input className="searchbar"
                    type="text"
                    onChange={this.props.handlePokebase} 
                    />
                    <button className="search">Search</button>
                </form>

                <div className="dropdowns">
                    <select className="pokemon" 
                    onChange={this.props.handleSortChange}>
                        <option value="none">Sort by Name</option>
                        <option value="asc">Sort A - Z</option>
                        <option value="desc">Sort Z - A</option>
                    </select>

                    <select className="type"
                    onChange={this.props.handleSortType}>
                        <option value=''>Sort by Type</option>
                        <option value="bug">Bug</option>
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="electric">Electric</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="ghost">Ghost</option>
                        <option value="grass">Grass</option>
                        <option value="ground">Ground</option>
                        <option value="ice">Ice</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option>
                        <option value="water">Water</option>
                        <option></option>
                    </select>

                    <select className="hp" 
                    onChange={this.props.handleSortChange}>
                        <option>Sort by Health</option>
                        <option value="asc">Sort High to Low</option>
                        <option value="desc">Sort Low to High</option>
                    </select>
                    
                    <select className="attack"
                     onChange={this.props.handleSortChange}>
                        <option>Sort by Attack</option>
                        <option value="desc">Sort High to Low</option>
                        <option value="asc">Sort Low to High</option>
                    </select>

                </div>
            </div>
        )
    }
}
