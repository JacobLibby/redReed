import React from "react";
import classes from "./SearchResult.module.css";

export const SearchResult = ({ result }) => {


  return <div className={classes.searchresult} onClick={(e) => alert(`You clicked on ${result}`)}>{result}</div>;
};

export default SearchResult;
