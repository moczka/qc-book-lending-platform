/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Search phase where students search and select books.

*/
import { useState } from 'react';
import Button from './Button';

function SearchPhase() {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    

    return (
        <div className="ArticleSection">
            <div class="ApplicationPhase" id="ApplicationSearchPhase">
                <h3 class="ArticleSection-title">Search Course Materials</h3>
                <p class="ArticleSection-paragraph">Find course materials such as books, access codes and other materials using the search bar below. You can search by book name, author, ISBN-13 or 10, course name, course id and course name. Select from the search results the books you would like to reserve.</p>
                <form class="SearchTool">
                    <input class="SearchTool-inputField" value={searchQuery} onChange={(event) => {
                        setSearchQuery(event.currentTarget.value);
                    }} required={true} type="text" placeholder="Search for books"/>
                    <Button onClick={(event) => { 
                        event.preventDefault();
                        // Retrieve books
                          const searchResults = database.searchForBooks(searchQuery);
                          setSearchResults(searchResults);
                    }}>
                        <span class="material-symbols-outlined">search</span> Search
                    </Button>
                </form>
                <fieldset class="SearchTool-results" id="searchResults"></fieldset>
                <Button>Reserve Books</Button>
            </div>
        </div>
    );
}

export default SearchPhase;