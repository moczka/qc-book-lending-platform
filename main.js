/*
  Filename: main.js

  Author:   Javier S. Guerrero
  Reserve Course Materials Page:
  Date:     02/28/26
  Quincy College Book Lending Platform

  NOTE ON DUMMY RECORDS:
    Each book record has the following fields:
      "author"
      "title"
      "edition"
      "publisher"
      "isbn_10"
      "isbn_13"
      "course_name"
      "course_id"
      "quantity"
      "reserved"
      "format_type"
*/

window.addEventListener('load', handleLoad, false);

let booksDatabase;

function handleLoad() {
  // Dummy data for a databse of books
  booksDatabase = JSON.parse('[{"title":"Campbell Biology","author":"Urry, et al.","edition":"12th","publisher":"Pearson","isbn_13":"978-0135188743","isbn_10":"135188741","format_type":"Hardcover","course_name":"General Biology I","course_id":"BIO101","quantity":2,"reserved":1},{"title":"Intro to Algorithms","author":"Cormen, et al.","edition":"4th","publisher":"MIT Press","isbn_13":"978-0262046305","isbn_10":"026204630X","format_type":"Hardcover","course_name":"Data Structures and Algorithms","course_id":"CSI237","quantity":2,"reserved":1},{"title":"Organic Chemistry","author":"Paula Y. Bruice","edition":"8th","publisher":"Pearson","isbn_13":"978-0134042282","isbn_10":"013404228X","format_type":"Hardcover","course_name":"Organic Chemistry I","course_id":"CHE101","quantity":2,"reserved":1},{"title":"University Physics","author":"Young & Freedman","edition":"15th","publisher":"Pearson","isbn_13":"978-0135159552","isbn_10":"135159555","format_type":"Hardcover","course_name":"Physics for Scientists and Engineers","course_id":"PHY220","quantity":4,"reserved":1},{"title":"Calculus","author":"James Stewart","edition":"9th","publisher":"Cengage","isbn_13":"978-0357113516","isbn_10":"357113519","format_type":"Hardcover","course_name":"Calculus I","course_id":"MAT201","quantity":3,"reserved":1},{"title":"Microbiology","author":"Tortora, et al.","edition":"13th","publisher":"Pearson","isbn_13":"978-0134605180","isbn_10":"134605187","format_type":"Hardcover","course_name":"Microbiology for Health Sciences","course_id":"BIO210","quantity":4,"reserved":1},{"title":"Principles of Microeconomics","author":"N. Gregory Mankiw","edition":"9th","publisher":"Cengage","isbn_13":"978-0357133484","isbn_10":"035713348X","format_type":"Paperback","course_name":"Principles of Microeconomics","course_id":"ECO101","quantity":3,"reserved":1},{"title":"Financial Accounting","author":"Harrison, et al.","edition":"12th","publisher":"Pearson","isbn_13":"978-0134725987","isbn_10":"134725989","format_type":"Hardcover","course_name":"Intro to Financial Accounting","course_id":"FIN122","quantity":2,"reserved":1},{"title":"Leadership: Theory/Practice","author":"Peter G. Northouse","edition":"9th","publisher":"SAGE","isbn_13":"978-1544397566","isbn_10":"1544397569","format_type":"Paperback","course_name":"Organizational Leadership","course_id":"LED232","quantity":1,"reserved":1},{"title":"Macroeconomics","author":"Paul Krugman","edition":"6th","publisher":"Worth","isbn_13":"978-1319245580","isbn_10":"1319245580","format_type":"Paperback","course_name":"Principles of Macroeconomics","course_id":"ECO125","quantity":2,"reserved":1},{"title":"Marketing","author":"Hunt & Mello","edition":"3rd","publisher":"McGraw Hill","isbn_13":"978-1260088878","isbn_10":"1260088871","format_type":"Hardcover","course_name":"Principles of Marketing","course_id":"MAR122","quantity":1,"reserved":1},{"title":"Psychology","author":"Myers & DeWall","edition":"13th","publisher":"Worth","isbn_13":"978-1319132101","isbn_10":"1319132107","format_type":"Hardcover","course_name":"Introductory Psychology","course_id":"PSY101","quantity":1,"reserved":1},{"title":"Publication Manual of APA","author":"APA","edition":"7th","publisher":"APA","isbn_13":"978-1433832161","isbn_10":"143383216X","format_type":"Paperback","course_name":"Research Methods in Social Sciences","course_id":"SOC342","quantity":1,"reserved":1},{"title":"The Sociological Imagination","author":"C. Wright Mills","edition":"40th Anniv.","publisher":"Oxford","isbn_13":"978-0195133752","isbn_10":"195133751","format_type":"Paperback","course_name":"Intro to Sociology","course_id":"SOC101","quantity":2,"reserved":1},{"title":"Guns Germs and Steel","author":"Jared Diamond","edition":"Reprint","publisher":"Norton","isbn_13":"978-0393354324","isbn_10":"393354320","format_type":"Paperback","course_name":"World History","course_id":"HIS210","quantity":3,"reserved":1},{"title":"Essentials of Abnormal Psych","author":"Durand & Barlow","edition":"8th","publisher":"Cengage","isbn_13":"978-1337619370","isbn_10":"133761937X","format_type":"Hardcover","course_name":"Abnormal Psychology","course_id":"PSY230","quantity":3,"reserved":1},{"title":"The Elements of Style","author":"Strunk & White","edition":"4th","publisher":"Pearson","isbn_13":"978-0205309023","isbn_10":"020530902X","format_type":"Paperback","course_name":"English Composition 101","course_id":"ENG101","quantity":4,"reserved":1},{"title":"The Great Gatsby","author":"F. Scott Fitzgerald","edition":"Series","publisher":"Scribner","isbn_13":"978-0743273565","isbn_10":"743273567","format_type":"Paperback","course_name":"American Literature","course_id":"AME220","quantity":2,"reserved":1},{"title":"The Republic","author":"Plato","edition":"Trans. Bloom","publisher":"Basic Books","isbn_13":"978-0465069347","isbn_10":"465069347","format_type":"Paperback","course_name":"Intro to Philosophy","course_id":"PHI101","quantity":1,"reserved":1},{"title":"To Kill a Mockingbird","author":"Harper Lee","edition":"50th Anniv.","publisher":"Harper","isbn_13":"978-0060935467","isbn_10":"60935464","format_type":"Paperback","course_name":"Modern American Fiction","course_id":"MIS120","quantity":2,"reserved":1},{"title":"The Prince","author":"Niccolò Machiavelli","edition":"2nd","publisher":"Chicago","isbn_13":"978-0226500447","isbn_10":"226500448","format_type":"Paperback","course_name":"Political Theory","course_id":"POL219","quantity":3,"reserved":1},{"title":"Frankenstein","author":"Mary Shelley","edition":"Norton Crit.","publisher":"Norton","isbn_13":"978-0393927900","isbn_10":"393927903","format_type":"Paperback","course_name":"British Literature","course_id":"ENG283","quantity":4,"reserved":1},{"title":"The Norton Anthology (Lit)","author":"Puchner, et al.","edition":"4th","publisher":"Norton","isbn_13":"978-0393602814","isbn_10":"393602818","format_type":"Paperback","course_name":"World Literature Survey","course_id":"ENG302","quantity":1,"reserved":1},{"title":"Beloved","author":"Toni Morrison","edition":"Reprint","publisher":"Vintage","isbn_13":"978-1400033416","isbn_10":"1400033411","format_type":"Paperback","course_name":"African American Literature","course_id":"AAS210","quantity":3,"reserved":1},{"title":"The Art of Public Speaking","author":"Stephen Lucas","edition":"13th","publisher":"McGraw Hill","isbn_13":"978-1259924620","isbn_10":"1259924622","format_type":"Hardcover","course_name":"Public Speaking","course_id":"SPE223","quantity":1,"reserved":1}]');
  // Search tool event listeners
  const searchButton = document.getElementById("SearchTool-submitBtn");
  searchButton.addEventListener('click', handleSearchButtonClick, false);

}

function handleSearchButtonClick(e) {
  e.preventDefault();
  // retrieve search query
  const searchQuery = document.getElementById('SearchTool-inputField')?.value?.toLowerCase() || "";
  // do nothing when no search query has been typed
  if (searchQuery == "") return;
  // Clear previous search results
  const searchResults = [];
  booksDatabase.forEach((record, recordIndex) => {
    // Compare record field values with query prompt to find matches
    const recordValues = Object.values(record);
    const recordMatches = recordValues.findIndex(value => String(value).toLowerCase().includes(searchQuery));
    if (recordMatches != -1) {
      searchResults.push(recordIndex);
    }
  });
  // Update search results
  renderSearchResults(searchResults);
}

function renderSearchResults(results) {
  const searchResultsDOMHolder = document.getElementById("searchResults");

  // Print message if no results were found
  if (results.length == 0) {
    searchResultsDOMHolder.innerHTML = `
      <p>No results were found, try a different search</p>
    `;
    return;
  }
  // Clear any previous 
  const courseMaterialCards = results.map((recordIndex) => {
    const resultDOMObject = document.createElement('div');
    // Create selectable cards for each course material in the search result
    resultDOMObject.innerHTML = CourseMaterialCard(booksDatabase[recordIndex]);
    return resultDOMObject;
  });

  searchResultsDOMHolder.replaceChildren(...courseMaterialCards);
  console.log("Search concluded");
}

function CourseMaterialCard({title, edition, author, quantity, reserved, course_id, course_name, isbn_13}) {
  const isOutOfStock = quantity == reserved;
  const bookStatus = isOutOfStock ? "Out of Stock" : `${reserved} out of ${quantity}`;
  return (`
      <div class="CourseMaterialCard ${isOutOfStock ? "is-outOfStock" : "" }">
          <input class="CourseMaterialCard-input" type="checkbox" ${isOutOfStock? "disabled" : ""} id="${isbn_13}" name="selection" value="option1">
          <label for="${isbn_13}" class="CourseMaterialCard-wrapper">
              <div class="CourseMaterialCard-image">
                  <img class="CourseMaterialCard-bookImage" src="media/book-thumbnail-placeholder.jpg"/>
              </div>
              <div class="CourseMaterialCard-content">
                  <div class="CourseMaterialCard-description">
                      <p><span class="CourseMaterialCard-label">Title:</span>${title}</p>
                      <p><span class="CourseMaterialCard-label">Edition:</span>${edition}</p>
                      <p><span class="CourseMaterialCard-label">Authors:</span>${author}</p>
                  </div>
                  <div class="CourseMaterialCard-status">${bookStatus}</div>
                  <div class="CourseMaterialCard-courseLabel">${course_id}</div>
                  <div class="CourseMaterialCard-additionalInfo">${course_name}</div>
              </div>
          </label>
      </div>
    `);
}

