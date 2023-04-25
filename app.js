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
    //console.log(books);
    return books;
  }

  //addbook  method
  static addBook(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    //console.log(books);
  }
  //removeBook method
  static removeBook(author) {
    const books = Book.getBooks();

    books.forEach((book, index) => {
      if (book.author === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
  //addbook to list method
  static addBookToList(book) {
    const list = document.querySelector('#bookOfList');

    const listItem = document.createElement('div');

    listItem.innerHTML = `
    <p>"${book.title}"</p>
        <p>by</p>
        <p>${book.author}</p>
        
    <button type="submit" class="remove">Remove</button>`;

    list.appendChild(listItem);
  }

  // displayBook method
  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => Book.addBookToList(book));
  }
  //deleteBook method
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
