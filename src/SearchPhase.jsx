/* 
  Author:   Javier S. Guerrero
  Date:     02/28/26

  Search phase where students search and select books.

*/
import { useState } from 'react';
import database from './data/database';
import { REGISTRATION_PHASE } from './constants';
import CourseMaterialCard from './CourseMaterialCard';

import Button from './Button';

function SearchPhase({selectedBooks, onBookSelection, onComplete}) {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    

    return (
        <div className="ArticleSection">
            <div className="ApplicationPhase" id="ApplicationSearchPhase">
                <h3 className="ArticleSection-title">Search Course Materials</h3>
                <p className="ArticleSection-paragraph">Find course materials such as books, access codes and other materials using the search bar below. You can search by book name, author, ISBN-13 or 10, course name, course id and course name. Select from the search results the books you would like to reserve.</p>
                <form className="SearchTool">
                    <input className="SearchTool-inputField" value={searchQuery} onChange={(event) => {
                        setSearchQuery(event.currentTarget.value);
                    }} required={true} type="text" placeholder="Search for books"/>
                    <Button onClick={(event) => { 
                        event.preventDefault();
                        // Retrieve books
                        const searchResults = database.searchForBooks(searchQuery);
                        setSearchResults(searchResults);
                    }}>
                        <span className="material-symbols-outlined">search</span> Search
                    </Button>
                </form>
                <fieldset className="SearchTool-results" id="searchResults">
                    {searchResults.length > 0 && searchResults.map(result => {
                        return (
                            <CourseMaterialCard 
                                key={result.isbn_13}
                                id={result.id}
                                isSelected={!!selectedBooks[result.id]}
                                title={result.title} 
                                edition={result.edition} 
                                author={result.author}
                                quantity={result.quantity}
                                reserved={result.reserved}
                                courseId={result.course_id} 
                                courseName={result.course_name}
                                isbnNumber={result.isbn_13}
                                onClick={() => {
                                    onBookSelection(result.id, !!selectedBooks[result.id]);
                                }}
                            />
                        );
                    })}
                </fieldset>
                {searchResults.length > 0 && (
                    <Button onClick={() => {
                        onComplete(REGISTRATION_PHASE);
                    }}>Reserve Books</Button>
                )}
            </div>
        </div>
    );
}

export default SearchPhase;