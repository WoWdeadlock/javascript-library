let shelf = document.querySelector(".shelf");

const myLibrary = [];

function Book(author, title, pages) {
    
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = false;

}

function addBookToLibrary(Book) {

    myLibrary.push(Book);
    displayBooks();
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

    addBookToLibrary(newBook);
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

});

goBackButton.addEventListener("click", () => {

    newBookButton.classList.remove("hide");
    confirmBookButton.classList.add("hide");
    goBackButton.classList.add("hide");

    infoBox.classList.add("hide");

});

confirmBookButton.addEventListener("click", () => {

    let inputs = document.querySelectorAll(".input-box");

    let book = new Book(inputs[1].value, inputs[0].value, inputs[2].value);
    
    bookToDisplay(book);

});

function displayBooks() {

    shelf.innerHTML = "";

    myLibrary.forEach((book, index) => {

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "DELETE";
        deleteButton.addEventListener("click", () => removeBook(index));

        const newBook = book.cloneNode(true);
        newBook.appendChild(deleteButton);
        shelf.appendChild(newBook);
    })
}

function removeBook(index) {
    
    myLibrary.splice(index,1);
    displayBooks();
}