function bookObj(title, author, synopsis, read) {
  this.title = title;
  this.author = author;
  this.synopsis = synopsis;
  this.read = read;
}

function addBook() {
  const book = new bookObj(bookTitle.value, bookAuthor.value, synopsis.value, bookRead.checked);
  books.push(book);
}

function clearForm() {
  bookTitle.value = "";
  bookAuthor.value = "";
  synopsis.value = "";
  bookRead.checked = false;
}

function createLibrary() {
  books.forEach(book => {
    let card = document.createElement("div");
    let cardTop = document.createElement("div");
    let deleteBtn = document.createElement("span");
    let title = document.createElement("h2");
    let author = document.createElement("h4");
    let synopsis = document.createElement("p");
    let cardRead = document.createElement("div");
    let readText = document.createElement("p");
    let readCheck = document.createElement("label");
    let checkbox = document.createElement("input");
    let toggle = document.createElement("span");

    cards.appendChild(card);
    card.appendChild(cardTop);
    cardTop.appendChild(deleteBtn);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(synopsis);
    card.appendChild(cardRead);
    cardRead.appendChild(readText);
    cardRead.appendChild(readCheck);
    readCheck.appendChild(checkbox);
    readCheck.appendChild(toggle);

    card.setAttribute("class", "card");
    card.setAttribute("id", `${books.indexOf(book)}`);
    deleteBtn.setAttribute("class", "delete-card");
    cardRead.setAttribute("class", "card-read");
    readCheck.setAttribute("class", "read-check");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    toggle.setAttribute("class", "slider");

    if (book.read) {
      checkbox.setAttribute("checked", "");
    }

    deleteBtn.innerHTML = "&times;";
    title.innerText = book.title;
    author.innerText = `By: ${book.author}`;
    synopsis.innerText = book.synopsis;
    readText.innerText = "Read:";
  });
}

function clearLibrary() {
  const libray = document.querySelectorAll(".card");
  libray.forEach(tmp => {
    tmp.remove();
  });
}

let books = [];

const modal = document.getElementById("modal-box-background");
const form = document.getElementById("form");
const formBtn = document.getElementById("form-button");
const modalClose = document.getElementById("modal-close");
const submitBtn = document.getElementById("addBook");
const cards = document.getElementById("cards");

let bookTitle = document.getElementById("bookTitle");
let bookAuthor = document.getElementById("bookAuthor");
let synopsis = document.getElementById("synopsis");
let bookRead = document.getElementById("checkbox");

const book1 = new bookObj("Crime and Punishment", "Dostoievsky", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum id maiores ipsam dolor, animi accusantium maxime derpaderp", false);
books.push(book1);
console.log(books);

formBtn.onclick = () => {
  modal.style.display = "block";
}

modalClose.onclick = () => {
  modal.style.display = "none";
}

submitBtn.onclick = (event) => {
  if (form.checkValidity()) {
    addBook();
    clearLibrary();
    createLibrary();
    clearForm();
    modal.style.display = "none";
  }
}