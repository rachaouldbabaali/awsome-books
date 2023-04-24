// Initialize book collection from localStorage or create a new one
let books = JSON.parse(localStorage.getItem('books')) || [];
// Get DOM elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('add-btn');
const bookList = document.getElementById('book-list');
// Function to add a new book to the collection
function addBook(title, author) {
 const book = { title, author };
 books.push(book);
 localStorage.setItem('books', JSON.stringify(books));
 return book;
}
// Function to remove a book from the collection
function removeBook(title, author) {
 books = books.filter(book => book.title !== title || book.author !== author);
 localStorage.setItem('books', JSON.stringify(books));
}
// Function to display all books in the collection
function displayBooks() {
 bookList.innerHTML = '';
 books.forEach(book => {
  const li = document.createElement('li');
  li.textContent = `${book.title} by ${book.author}`;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
   removeBook(book.title, book.author);
   li.remove();
  });
  li.appendChild(removeBtn);
  bookList.appendChild(li);
 });
}
// Add event listener to the "Add" button
addBtn.addEventListener('click', () => {
 const title = titleInput.value.trim();
 const author = authorInput.value.trim();
 if (title && author) {
  const book = addBook(title, author);
  const li = document.createElement('li');
  li.textContent = `${book.title} by ${book.author}`;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
   removeBook(book.title, book.author);
   li.remove();
  });
  li.appendChild(removeBtn);
  bookList.appendChild(li);
  titleInput.value = '';
  authorInput.value = '';
 }
});
// Display all books on page load
displayBooks();