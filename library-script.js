function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${read}.`;
  }
}

const modal = document.getElementById("modal-box-background");
const formBtn = document.getElementById("form-button");
const modalClose = document.getElementById("modal-close");

const book1 = new Book("Crime and Punishment", "Dostoievsky", "300", "not read");
console.log(book1.info());

formBtn.onclick = () => {
  modal.style.display = "block";
}

modalClose.onclick = () => {
  modal.style.display = "none";
}