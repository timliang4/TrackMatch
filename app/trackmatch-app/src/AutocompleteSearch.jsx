// AutocompleteSearch.js
import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import './index.css';

async function getSearchData(search) {
  try {
      const response = await fetch(`https://trackmatchapi.com/track?search=${search}`);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      return result["tracksFound"]
  } catch (error) {
      console.error(error.message);
  }
}

const AutocompleteSearch = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

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
    input: 'autocomplete-input'
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};

export default AutocompleteSearch;