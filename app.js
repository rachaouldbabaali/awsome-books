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
     books.splice(index , 1);
      }});
    localStorage.setItem('books', JSON.stringify(books));
            }

}