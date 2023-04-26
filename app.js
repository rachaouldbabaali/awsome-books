// module-2 week-1 - 24 April 2023

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // getbook  method
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    // console.log(books);
    return books;
  }

  // addbook  method
  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    // console.log(books);
  }

  // removeBook method
  static removeBook(author) {
    const books = Book.getBooks();

    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  // addbook to list method
  static addBookToList(book) {
    const list = document.querySelector('#bookOfList');

    const listItem = document.createElement('div');

    listItem.innerHTML = `<p>"${book.title}" by</p><p>${book.author}</p>
          <button type="submit" class="remove">Remove</button>`;

    list.appendChild(listItem);
  }

  // displayBook method
  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => Book.addBookToList(book));
  }

  // deleteBook method
  static deleteBook(eliminate) {
    if (eliminate.classList.contains('remove')) {
      eliminate.parentElement.remove();
    }
  }
}
document.addEventListener('DOMContentLoaded', Book.displayBooks());

const form = document.querySelector('#bookForm');

form.addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Book.addBookToList(book);
  Book.addBook(book);
});

document.querySelector('#bookOfList').addEventListener('click', (e) => {
  Book.deleteBook(e.target);
  Book.removeBook(e.target.previousElementSibling.textContent);
});


 // Get current date and display it in the footer
var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
var currentTime = new Date().toLocaleString('en-US', options);
 document.getElementById("date").innerHTML = currentTime ;

//  navigation 

var bookListSection = document.getElementById("booklist");
var addNewBookSection = document.getElementById("addnewbook");
var contactSection = document.getElementById("contact");

var sections = document.querySelectorAll('section');
var links = document.querySelectorAll('a[href^="#"]');

// Set the default link and section
var defaultLink = document.querySelector('#booklist-link');
var defaultSection = document.querySelector('#booklist');

// Remove the hide class from the default section
defaultSection.classList.remove('hide');

// Trigger the click event on the default link
var event = new MouseEvent('click');
defaultLink.dispatchEvent(event);

links.forEach(function(link) {
  link.addEventListener("click", function(event) {
      // Prevent default link behavior
      event.preventDefault();

      // Toggle the hide class for each section
      sections.forEach(function(section) {
          if (section.id === link.getAttribute('href').substring(1)) {
              section.classList.remove("hide");
          } else {
              section.classList.add("hide");
          }
      });
  });
});

