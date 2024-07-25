import React from "react";

function SearchDropdown ({ setDropdown }){
    return (
        <select name="searchFilter" id="searchFilter">
            {/* <option value="All">All</option> */}
            <option value="Title">Title</option>
            <option value="Author">Author</option>
            <option value="Text">Text</option>
            <option value="Subject">Subject</option>
            <option value="Advanced">Advanced</option>
        </select>
    )
}
export default SearchDropdown