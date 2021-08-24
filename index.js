const addBtn = document.getElementById('add-btn');
const bookList = document.getElementById('book-list');

addBtn.addEventListener('click', function() {

    const title = document.getElementById('inputTitle');
    const author = document.getElementById('inputAuthor');
    const year = document.getElementById('inputYear');
    if (title.value == '' && author.value == '' && year.value == '') {
        alert('please fill up the list');
    } else {
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('th');
        newTitle.innerText = title.value;
        newRow.appendChild(newTitle);
        title.value = '';

        const newAuthor = document.createElement('th');
        newAuthor.innerText = author.value;
        newRow.appendChild(newAuthor);
        author.value = '';

        const newYear = document.createElement('th');
        newYear.innerText = year.value;
        newRow.appendChild(newYear);
        year.value = '';

        bookList.appendChild(newRow);
    }
})