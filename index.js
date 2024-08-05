document.addEventListener("DOMContentLoaded", fetchBooks())
function fetchBooks() {
    // Fetch data from the Game of Thrones API
    return fetch("https://anapioficeandfire.com/api/books")
      .then((resp) => resp.json()) // Convert response to JSON
      .then((json) => {
        renderBooks(json); // Call renderBooks() with JSON data
      });
  }
  
  function renderBooks(books) {
    const main = document.querySelector('main');
    
    // Iterate through each book in the array
    books.forEach(book => {
      const h2 = document.createElement('h2');
      h2.innerText = book.name; 
      main.appendChild(h2); 
    });
  }

  
  