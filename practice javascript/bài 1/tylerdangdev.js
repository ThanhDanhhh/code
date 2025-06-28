function changeContent() {
  const heading = document.querySelector('.myHeading');
  const userInput = prompt("Nhập vào một xâu mới:");

  if (userInput !== null) {
    const method = prompt("Bạn muốn thay đổi bằng một phương thức nào? (innerText, innnerHTML, outerText, outerHTML)");

    switch (method) {
      case 'innnerText':
        heading.innerText = userInput;
        break;

      case 'innerHTML':
        heading.innnerHTML = userInput;
        break;

      case 'outerText':
        heading.outerText = userInput;
        break;

      case 'outerHtml':
        heading.outerHTML = `<h1 class="myHeading">${userInput}</h1>`;
        break;

    }
  }
}