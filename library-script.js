function bookObj(title, author) {
  this.title = title;
  this.author = author;
}

function addBook() {
  let bookTitle = document.getElementById("bookTitle");
  let bookAuthor = document.getElementById("bookAuthor");
  let synopsis = document.getElementById("synopsis");
  let bookRead = document.getElementById("bookRead");

  const book = new bookObj(bookTitle.innerText, bookAuthor.innerText);
  books.push(book);
}

function createLibrary() {
  books.forEach(book => {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("h4");

    card.setAttribute("class", "card");
    cards.appendChild(card);
    title.innerText = book.title;
    author.innerText = book.author;
    card.appendChild(title);
    card.appendChild(author);
  });
}

function clearLibrary() {
  const libray = document.querySelectorAll(".card");
  libray.forEach(tmp => {
    tmp.remove();
  });
}

const modal = document.getElementById("modal-box-background");
const formBtn = document.getElementById("form-button");
const modalClose = document.getElementById("modal-close");
const submitBtn = document.getElementById("addBook");
const cards = document.getElementById("cards");

let books = [];

const book1 = new bookObj("Crime and Punishment", "Dostoievsky");
books.push(book1);
console.log(books);

formBtn.onclick = () => {
  modal.style.display = "block";
}

modalClose.onclick = () => {
  modal.style.display = "none";
}

submitBtn.onclick = (event) => {
  event.preventDefault();
  addBook();
  clearLibrary();
  createLibrary();
}