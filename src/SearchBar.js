import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {

        return (
            <div>
                <form 
                onSubmit={this.props.handleClick}
                >
                    <input className="searchbar"
                    type="text"
                    onChange={this.props.handlePokebase} 
                    />
                    <button>Search</button>
                </form>

                <div className="dropdowns">

                    <select className="sort-name" 
                    onChange={this.props.handleNameSort}>
                        <option>Sort by Name</option>
                        <option value="asc">Sort A - Z</option>
                        <option value="desc">Sort Z - A</option>
                    </select>

                    <select className="sort-type"
                    onChange={this.props.handleTypeSort}>
                        <option value=''>Sort by Type</option>
                        <option value="bug">Bug</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="grass">Grass</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="water">Water</option>
                        <option></option>
                    </select>

                    <select className="sort-health" 
                    onChange={this.props.handleHealth}>
                        <option>Sort by Health</option>
                        <option value="asc">Sort High to Low</option>
                        <option value="desc">Sort Low to High</option>
                    </select>
                    
                    <select className="sort-attack"
                     onChange={this.props.handleAttack}>
                        <option>Sort by Attack</option>
                        <option value="desc">Sort High to Low</option>
                        <option value="asc">Sort Low to High</option>
                    </select>

                </div>
            </div>
        )
    }
}
