let myLibrary = [
  {
    title: "Watch Out, William!",
    author: "Kady MacDonald Denton",
    pages: "48",
  },
  {
    title: "Keys to the Demon Prison",
    author: "Brandon Mull",
    pages: "592",
  },
];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

let btn = document.querySelector('.add');

btn.addEventListener("click", function() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;

  if (title === "" || author === "" || pages === "") {
    return;
  }  
  const knjiga = new Book(title, author, pages);
  myLibrary.push(knjiga);
  showBook(knjiga); 
  console.log(myLibrary);
});

const showBook = book => {
    let books = document.querySelector(".books");
    books.innerHTML += `
        <div id="${myLibrary.indexOf(book)}" class="grid-item">
            <h1 class="book-title">${book.title}</h1>
            <h2 class="book-author">${book.author}</h2>
            <h2 class="book-pages">Pages: ${book.pages}</h2>
            <img class="book-img" src="/img/${myLibrary.indexOf(book)}.jpg">
            <div class="read">Read?<input type="checkbox"></div>
            <button id="${myLibrary.indexOf(book)}" class="remove-btn">Remove</button>
        </div>`;
};

let gridItem = document.querySelectorAll('.grid-item');
let remove = document.querySelectorAll('.remove-btn');

myLibrary.forEach((e) => showBook(e));

remove.forEach(remove => {
  remove.addEventListener('click', () => {
    console.log("radi");
    gridItem.forEach((item) => {
      let index = parseInt(remove.id);
      if (item.id === remove.id) {
        myLibrary.splice(index, 1);
        let element = document.getElementById(index);
        element.parentNode.removeChild(element);
        console.log(element);
      }
    });
  });
});
console.log(myLibrary);




