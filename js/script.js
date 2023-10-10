const myLibrary = [];

function Book(author, title, pages) {
    
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = false;

}

let shelf = document.querySelector(".shelf");

function addBookToLibrary(Book) {

    myLibrary.push(Book);

}

function bookToDisplay(Book) {

    let newBook = document.createElement("div");
    newBook.setAttribute("class","book");
    let title = document.createElement("div");
    title.setAttribute("class", "title");
    let subtitle = document.createElement("div");
    subtitle.setAttribute("class", "sub-title");
    let author = document.createElement("div");
    author.setAttribute("class", "author");
    let pages = document.createElement("div");
    pages.setAttribute("class", "pages");
    let isRead = document.createElement("div");
    isRead.setAttribute("class", "is-read");

    title.innerText = Book.title;
    author.innerText = Book.author;
    pages.innerText = Book.pages;
    isRead.innerText = Book.isRead;

    subtitle.appendChild(author);
    subtitle.appendChild(pages);
    subtitle.appendChild(isRead);

    newBook.appendChild(title);
    newBook.appendChild(subtitle);

    shelf.appendChild(newBook);

}

let newBookButton = document.querySelector("#new-book");
let confirmBookButton = document.querySelector("#confirm-book");
let goBackButton = document.querySelector("#back");

let infoBox = document.querySelector(".info-box");

newBookButton.addEventListener("click", () => {

    newBookButton.classList.add("hide");
    confirmBookButton.classList.remove("hide");
    goBackButton.classList.remove("hide");

    infoBox.classList.remove("hide");

})

// let book1 = new Book("Aone", "Tone", 40);
// let book2 = new Book("Atwo", "Ttwo", 50);
// let book3 = new Book("Athree", "Tthree", 60);

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

// for (let i = 0; i < myLibrary.length; i++) {

//     bookToDisplay(myLibrary[i]);
    
// }