import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    let results=[]
    const httpString =
      "https://openlibrary.org/search.json?q=" +
      value.replace(" ", "+") +
      "&limit=5";
    if (value.length > 5) {
      fetch(httpString)
        .then((response) => response.json())
        .then((json) => {
          for (const [index, entry] of Object.entries(json.docs)) {
          //   for (const [key, value] of Object.entries(entry)) {
          //       console.log(key, value)
          //     if (key === "title") {
          //       console.log(key, value);
          //     }
          //   }
            // console.log(entry.title)
            results.push(entry.title)
          }
          console.log(json)
          setResults(results)
        });
    }
    else {setResults([])}
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSubmit = (value) => {
    console.log("SUBMITTING SEARCH OF: ", value);
  };

  return (
    <div className={classes.outer}>
      <div className={classes.inputwrapper}>
        <div className={classes.searchbarcontainer}>
          <FaSearch
            id={classes.searchicon}
            onClick={(e) => handleSubmit(input)}
          />
          <input
            id="searchBarInput"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onSubmit={(e) => handleSubmit(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
