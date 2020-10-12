import React from "react";
import axios from 'axios';
import SearchBar from "./SearchBar";


class App extends React.Component {
  onSearchSubmit(term){
    axios.get('https://api.unsplash.com/search/photos',{
      params:{query: term},
      headers:{
        Authorization: 'Client-ID R5TJfC3kcdNB6Kn__BqQxGfmusimKp316XHeWXRKirg' 
      }
    });
  }
  render() {
    return (
      <div className="ui container" style={{marginTop:'10px'}} >
        <SearchBar onSubmitSearch= {this.onSearchSubmit} />
      </div>
    );
  }
}

export default App



