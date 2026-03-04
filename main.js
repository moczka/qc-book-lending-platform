/*
  Filename: main.js

  Author:   Javier S. Guerrero

  Date:     02/28/26
  Quincy College Book Lending Platform

*/

window.addEventListener('load', handleLoad, false);

const applicationState = {
  selectedBooks: {},
  studentDetails: {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    studentId: ""
  }
};
const MAX_NUM_BOOKS_PER_STUDENT = 4;
let searchPhase, registrationPhase, confirmationPhase;

function handleLoad() {
  // Add click listener to application buttons
  const searchButton = document.getElementById("SearchTool-submitBtn");
  const reserveBooksButton = document.getElementById("reserveBooksBtn");
  const resultToResultsButton = document.getElementById("previousStep");
  // Add click handler to search tool interactive elements
  searchButton.addEventListener('click', handleSearchButtonClick, false);
  reserveBooksButton.addEventListener('click', handleReserveBooksButtonClick, false);
  // Retrieve references to all application phases
  searchPhase = document.getElementById("ApplicationSearchPhase");
  registrationPhase = document.getElementById("ApplicationRegistrationPhase");
  confirmationPhase = document.getElementById("ApplicationConfirmationPhase");
  // Enable first phase: Search phase
  searchPhase.style.display = "block";
  // Add click handlers to return to result button
  resultToResultsButton.addEventListener('click', handleReturnToResultsButtonClick, false);
}

function handleSearchButtonClick(e) {
  e.preventDefault();
  // clear any previous messages
  printMessage("");
  // retrieve books by search query
  const searchQuery = document.getElementById('SearchTool-inputField')?.value?.toLowerCase() || "";
  // do nothing when no search query has been typed
  if (searchQuery == "") return;
  // Clear previous search results
  const searchResults = database.searchForBooks(searchQuery);
  // Update search results
  renderSearchResults(searchResults);
}

function handleCourseMaterialCardClick({checked, value}) {
  // clear any previous messages
  printMessage("");
  if (checked)
    applicationState.selectedBooks[value] = true;
  else
    delete applicationState.selectedBooks[value];
}

function handleReserveBooksButtonClick(e) {
  // clear any previous messages
  printMessage("");
  const selectedBooks = Object.keys(applicationState.selectedBooks);
  if (selectedBooks.length == 0) {
    printMessage("Must select at least one book.", "error");
    return;
  }
  // Hide search phase
  searchPhase.style.display = "none";
  // display registration phase
  registrationPhase.style.display = "block";
}

function handleReturnToResultsButtonClick(e) {
  // clear any previous messages
  printMessage("");
  // Hide registration phase
  registrationPhase.style.display = "none";
  // Show search results phase
  searchPhase.style.display = "block";
}

function handleRegistrationFormSubmit(e) {
  // clear any previous messages
  printMessage("");
  e.preventDefault();
  const data = new FormData(e.target);
  // Update application state with student details
  data.forEach((value, field) => {
    applicationState.studentDetails[field] = value;
  });
  // Submit order for books
  const result = processOrder({...applicationState.studentDetails, selectedBooks: applicationState.selectedBooks});
  // Print failure message if order failed
  if (result.status == "fail") {
    printMessage(result.message, "error")
  } else {
    renderOrderConfirmation();
  }
}

function processOrder({firstName, lastName, studentId, phone, email, selectedBooks}) {
    // retrieve active reservations
    const activeReservations = database.retrieveStudentReservations(studentId);
    // Prevent additional reservations if limit has been exceeded.
    if (activeReservations.length > MAX_NUM_BOOKS_PER_STUDENT) {
      return {
        status: "fail",
        message: "You have received your maximum number of reservation for the semester. Please return any pending books."
      }
    } else if (Object.keys(selectedBooks).length > MAX_NUM_BOOKS_PER_STUDENT) {
      return {
        status: "fail",
        message: `You can only select up to ${MAX_NUM_BOOKS_PER_STUDENT - activeReservations.length} book(s). Return to book selection and try again.`
      }
    }
    // Reserve books
    Object.keys(selectedBooks).forEach(bookId => {
      database.addReservation({studentId, firstName, lastName, email, phone, id: bookId});
    });
    return {
      status: "success"
    };
}


function renderSearchResults(results) {
  const searchResultsDOMHolder = document.getElementById("searchResults");
  // Print message if no results were found
  if (results.length == 0) {
    printMessage("No results were found, try a different search");
    searchResultsDOMHolder.replaceChildren();
    return;
  }
  // Clear any previous 
  const courseMaterialCards = results.map((result) => {
    const resultDOMObject = document.createElement('div');
    // Create selectable cards for each course material in the search result
    resultDOMObject.innerHTML = CourseMaterialCard(result);
    return resultDOMObject;
  });
  searchResultsDOMHolder.replaceChildren(...courseMaterialCards);
  console.log("Search concluded");
}

function renderOrderConfirmation() {
    // Hide registration phase
    registrationPhase.style.display = "none";
    // show confirmation phase
    confirmationPhase.style.display = "block";
    // Print out reserved books
    const list = document.getElementById('ConfirmationPhase-details');
    Object.keys(applicationState.selectedBooks).forEach(selectedBookId => {
        const bookDescription = document.createElement('p');
        const book = database.retrieveBookById(selectedBookId)[0];
        bookDescription.innerHTML = `
            ${book.title}
        `;
        list.appendChild(bookDescription);
    });
}

// Prints application wide messages.
function printMessage(message, type) {
  const parentDOMObject = document.getElementById('applicationMessage');
  if (type == "error") {
    parentDOMObject.classList.add('is--error');
    parentDOMObject.scrollIntoView({behavior: "smooth", block: "start"});
  } else {
    parentDOMObject.classList.remove('is--error');
  }
  parentDOMObject.innerHTML = `${message}`;
}

function CourseMaterialCard({id, title, edition, author, quantity, reserved, course_id, course_name, isbn_13}) {
  const isOutOfStock = quantity == reserved;
  const bookStatus = isOutOfStock ? "Out of Stock" : `${reserved} out of ${quantity}`;
  return (`
      <div class="CourseMaterialCard ${isOutOfStock ? "is-outOfStock" : "" }">
          <input ${applicationState.selectedBooks[id] ? "checked" : ""} class="CourseMaterialCard-input" type="checkbox" ${isOutOfStock? "disabled" : ""} id="${isbn_13}" onclick="handleCourseMaterialCardClick(this)" name="selection" value="${id}">
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

