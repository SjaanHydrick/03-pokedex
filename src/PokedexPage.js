/* eslint-disable array-callback-return */
import React, { Component } from 'react';
import Header from './Header.js';
import PaginationPage from './PaginationPage.js';
import './App.css';

export default class PokedexPage extends Component {
  state = {
    pokemon: [],
    searchText: '',
    sortType: ''
  }

  render() {      
    return (
      <div className="body">
        <Header />
        <PaginationPage />
      </div>
    )
  }
}
