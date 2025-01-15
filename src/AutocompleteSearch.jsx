// AutocompleteSearch.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './index.css';

async function getSearchData(search) {
  try {
      const response = await fetch(`http://trackmatch-env.eba-psasxwk3.us-east-1.elasticbeanstalk.com/track?search=${search}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result["tracksFound"]
  } catch (error) {
      console.error(error.message);
  }
}

async function getRecommendations(search) {
  try {
      const response = await fetch(`http://trackmatch-env.eba-psasxwk3.us-east-1.elasticbeanstalk.com/music?track=${search}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result["recommendations"]
  } catch (error) {
      console.error(error.message);
  }
}

const AutocompleteSearch = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onSuggestionsFetchRequested = ({ value }) => {
    getSearchData(value)
      .then((arr) => {
        setSuggestions(arr)
      })
      .catch((e) => {
        setSuggestions([]);
      })
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const getSuggestionValue = (suggestion) => suggestion.name_and_artist

  const renderSuggestion = (suggestion) => <div>{suggestion.name_and_artist}</div>;

  const inputProps = {
    placeholder: 'Type to search...',
    value,
    onChange
  };

  const theme = {
    container: 'autocomplete-container',
    suggestionsContainer: 'suggestions-container',
    suggestion: 'suggestion',
    suggestionHighlighted: 'suggestion-highlighted',
    input: 'autocomplete-input',
    suggestionsList: 'suggestions-list'
  };

  return (
    <>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={theme}
      />
      <button id="submit" onClick={() => 
      {setIsLoading(true); getRecommendations(value).then((data) => {setResult(data); setIsLoading(false)}).catch((e) => {console.log(e); setResult([])})}}>Submit</button>
      {(isLoading) ? <div id="loader"></div> : results.map(result => 
        <div key={result.uri} className="recommendation-list">
          Recommendations for by <a href={`https://open.spotify.com/track/${result.uri}`} target="_blank">{result.name} by {result.artist}</a>
          {result.recommendations.map(song => <div key={song.uri} className="recommendation">{song.frequency} Connections: <a href={`https://open.spotify.com/track/${song.uri}`} target="_blank">{song.name} by {song.artist}</a></div>)}
        </div>)}
    </>
  );
};

export default AutocompleteSearch;
