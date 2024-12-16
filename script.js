const container = document.getElementById("book-container");

books.forEach((book, index) => {
  const cardHTML = `
    <div class="card-wrapper">
      <div class="card">
        <div class="number">${index + 1}</div>
        <div class="sub">${book.sub}</div>
        <div class="title">${book.title}</div>
        <div class="text">${book.text}</div>
      </div>
      <button class="read-more">read more</button>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", cardHTML);
});
