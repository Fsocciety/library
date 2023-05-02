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
}

let btn = document.querySelector('button');



btn.addEventListener("click", function() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;

  if (title === '' || author === '' || pages === '') {
    return;
  }  
  const knjiga = new Book(title, author, pages); 
  myLibrary.push(knjiga);
  console.log(myLibrary);

  myLibrary.forEach((e) => {
    console.log(e);
  });
});




