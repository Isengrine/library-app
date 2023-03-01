function bookObj(title, author, synopsis, read) {
  this.title = title;
  this.author = author;
  this.synopsis = synopsis;
  this.read = read;
}

function addBook() {
  let bookTitle = document.getElementById("bookTitle").value;
  let bookAuthor = document.getElementById("bookAuthor").value;
  let synopsis = document.getElementById("synopsis").value;
  let bookRead = document.getElementById("bookRead").checked;

  const book = new bookObj(bookTitle, bookAuthor, synopsis, bookRead);
  books.push(book);
}

function createLibrary() {
  books.forEach(book => {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let author = document.createElement("h4");
    let synopsis = document.createElement("p");
    let cardRead = document.createElement("div");
    let readText = document.createElement("p");
    let readCheck = document.createElement("label");
    let checkbox = document.createElement("input");
    let toggle = document.createElement("span");

    cards.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(synopsis);
    card.appendChild(cardRead);
    cardRead.appendChild(readText);
    cardRead.appendChild(readCheck);
    readCheck.appendChild(checkbox);
    readCheck.appendChild(toggle);

    card.setAttribute("class", "card");
    cardRead.setAttribute("class", "card-read");
    readCheck.setAttribute("class", "read-check");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    toggle.setAttribute("class", "slider");

    title.innerText = book.title;
    author.innerText = book.author;
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
const formBtn = document.getElementById("form-button");
const modalClose = document.getElementById("modal-close");
const submitBtn = document.getElementById("addBook");
const cards = document.getElementById("cards");

const book1 = new bookObj("Crime and Punishment", "Dostoievsky", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum id maiores ipsam dolor, animi accusantium maxime derpaderp");
books.push(book1);
console.log(books);

formBtn.onclick = () => {
  modal.style.display = "block";
}

modalClose.onclick = () => {
  modal.style.display = "none";
}

submitBtn.onclick = () => {
  addBook();
  clearLibrary();
  createLibrary();
}