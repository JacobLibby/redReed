import classes from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import SearchDropdown from "./SearchDropdown";

function SearchBar({ setResults, setFocus }) {
  const [input, setInput] = useState("");
  const [dropdown, setDropdown] = useState("All");

  const fetchData = (value) => {
    let results = [];
    let searchFilterDrDict = {
      Author: "/authors",
    };
    let searchFilterDict = {
      // All: "",
      Title: "title=",
      // Author: "/authors",
      // Text: "/texts",
      // Subject: "/subjects",
      // Advanced: "",
    };

    // IMPLEMENT PREDICTIVE SEARCH RESULTS
    //

    var e = document.getElementById("searchFilter");
    var dropdownVal = e.value;
    console.log(dropdownVal);
    let httpString = ""
    if (dropdownVal in searchFilterDict) {
      httpString =
        "https://openlibrary.org/search.json?" +
        searchFilterDict[dropdownVal] +
        `*${value.replace(" ", "+")}*` +
        "&limit=5";
    } else if (dropdownVal in searchFilterDrDict) {
      httpString =
        "https://openlibrary.org/search" +
        searchFilterDrDict[dropdownVal] +
        ".json?q=*" +
        value.replace(" ", "+") +
        "*&limit=5";
    } else {
      httpString="ERROR ON SEARCH FILTERING LINE 44ish"
      console.log("SOMETHING IS VERY WRONG, UNKNOWN SEARCH FILTER");
    }
    console.log(value);
    console.log(httpString);
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
            results.push(entry.title);
          }
          console.log(json);
          setResults(results);
        });
    } else {
      setResults([]);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSubmit = (value) => {
    console.log("SUBMITTING SEARCH OF: ", value);
  };

  const handleFocus = (value) => {
    console.log("SETTING FOCUS TO", value);
    setFocus(value);
  };

  const handleDropdown = (value) => {
    console.log(value);
  };

  return (
    <div className={classes.outer}>
      <div className={classes.inputwrapper}>
        <div className={classes.searchbarcontainer}>
          <FaSearch
            id={classes.searchicon}
            onClick={(e) => handleSubmit(input)}
          />
          <SearchDropdown
            setDropdown={setDropdown}
            onBlur={(e) => handleDropdown(e.target.value)}
          />
          <input
            id="searchBarInput"
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onSubmit={(e) => handleSubmit(e.target.value)}
            onBlur={(e) => handleFocus(false)}
            onFocus={(e) => handleFocus(true)}
          />
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
