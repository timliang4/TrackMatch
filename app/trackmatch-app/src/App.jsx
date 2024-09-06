// App.js
import React from 'react';
import AutocompleteSearch from './AutocompleteSearch';

const App = () => {
  return (
    <div id="all">
      <div id="search-container">
        <h1>TrackMatch</h1>

        <a href="https://github.com/timliang4/TrackMatch" target="_blank" className="un">Github</a> / <a href="https://www.kaggle.com/datasets/himanshuwagh/spotify-million" target="_blank" className="un">Playlist Dataset</a>

        <p>Get recommendations for your favorite tracks with this graph-based search
        tool, trained on 10,000+ popular playlists. Explore over 116,000 songs up
        to 2017.</p>
        <AutocompleteSearch />
      </div>
    </div>
  );
};

export default App;