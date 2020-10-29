import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handlePokebase}>
                    <input className="searchbar"
                    type="text"
                    onChange={this.props.handleClick} />
                    <button>Submit</button>
                </form>

                <div className="dropdowns">
                    <select className="sort-name" onChange={this.props.handleNameSort}>
                        <option>Sort by Name</option>
                        <option value="asc">Sort A - Z</option>
                        <option value="desc">Sort Z - A</option>
                    </select>

                    <select className="sort-type"
                    onChange={this.props.handleTypeSort}>
                        <option>Sort by Type</option>
                        <option value="bug">Bug</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="grass">Grass</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="water">Water</option>
                        <option></option>
                    </select>
                </div>
            </div>
        )
    }
}
