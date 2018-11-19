/* eslint-disable no-console */
// Disabling 'no-console' as it's reasonable for this file to do some logging.

import React from 'react';
import debounce from 'lodash/debounce';

import SearchResult from '../SearchResult';
import Article from '../Article';
import './SearchResults.css'

export default class SearchResults extends React.Component {
  state = {
    articles: [],
    query: '',
    loading: true,
    errored: false
  }

  componentWillMount() {
    this.search();
  }

  search() {
    console.log('fetching results...');
    this.setState({
      loading: true
    });

    const searchUrl = `http://localhost:4000/api/news?q=${this.state.query}`;

    fetch(searchUrl)
      .then(response => response.json())
      .then(results => {
        this.setState({
          articles: results,
          loading: false
        });
      })
      .catch((e) => {
        this.setState({
          errored: true,
          loading: false,
        });
        console.error(e);
      });
  }

  debouncedSearch = debounce(this.search, 500);

  handleSearch = (event) => {
    this.setState(
      {query: event.target.value }, 
      this.debouncedSearch()
    );
  }

  toggleArticle = article => {
    this.setState({showArticle: article})
  }

  render() {
    return (
      <div className="search-results">
        <form className="search-form">
          <label className="search-form__label">Search</label>
          <input className="search-form__field" type="search" onChange={this.handleSearch} value={this.state.query}/>
        </form>
        {!this.state.articles.length && !this.state.loading && <p className="search-message">No Results</p>}
        {this.state.loading ?
          <p className="search-message">Loading results ...</p> :
          <ul className="search-results__list">
            {this.state.articles.map(article => <SearchResult article={article} key={article.url} toggleArticle={this.toggleArticle} />)}
          </ul>
        }

        {this.state.showArticle && <Article article={this.state.showArticle} close={() => this.toggleArticle(null)} />}
      </div>
    );
  }
}
