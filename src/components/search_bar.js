import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: "" };
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this._onInputChange} >
            <input className="book-search" type="text" />
            <button className="btn" type="submit">Search</button>
        </form>
      </div>
        );
    }

    _onInputChange(e) {
      e.preventDefault(e);
      let query = e.target.children[0].value;
      this.setState({query});
    }
}

export default SearchBar;