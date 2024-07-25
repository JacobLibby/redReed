import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";
import classes from "./Search.module.css";

function Search(props) {
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState(false);

  return (
    <div className={classes.outer}>
      <div className={classes.inputwrapper}>
        <div className={classes.searchbarcontainer}>
          <SearchBar setResults={setResults} setFocus={setFocus}/>
        </div>
      </div>
      {focus && <SearchResultsList results={results}/>}
    </div>
  );
}

export default Search;
