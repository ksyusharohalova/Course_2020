const root = document.getElementById('root');
let books;
const BOOKS_KEY = 'books';
let booksFromStorage = localStorage.getItem(BOOKS_KEY);
if (booksFromStorage) {
    books = JSON.parse(booksFromStorage);
}
createList(books);

let dynamicSection = document.createElement('div');
dynamicSection.setAttribute('class', 'dynamicSection');
root.appendChild(dynamicSection);

const urlParams = new URLSearchParams(location.search);
let content = '';
if (location.hash === '#preview') {
    content = preview(urlParams.get('id'));
} else if (location.hash === '#edit') {
    content = createForm(books[urlParams.get('id')]);
} else if (location.hash === '#add') {
    content = createForm();
}

const showPreview = document.getElementsByClassName('textSpan');
for (let i = 0; i < showPreview.length; i++) {
    showPreview[i].addEventListener('click', function() {
        const button = this.parentElement.querySelector('.editButton');
        location.assign(location.pathname + `?id=${button.id}#preview`);
    });
}

const buttons = document.getElementsByClassName('editButton');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        createForm(books[buttons[i].id]);
        location.assign(location.pathname + `?id=${buttons[i].id}#edit`);
        location.reload();
    });
}

const showForm = document.getElementById('addingButton');
showForm.addEventListener('click', function() {
    createForm();
    location.assign(location.pathname + `#add`);
});

function createList(books) {
    let booksList = document.createElement('div');
    booksList.setAttribute('class', 'booksList');
    root.appendChild(booksList);
    let list = document.createElement('ul');
    list.setAttribute('class', 'list');
    booksList.appendChild(list);
    for (let id in books) {
        if (books.hasOwnProperty(id)) {
            let item = document.createElement('li');
            item.setAttribute('class', 'item');
            item.setAttribute('id', id);
            list.appendChild(item);
            let span = document.createElement('span');
            span.setAttribute('class', 'textSpan');
            span.textContent = books[id].name;
            item.appendChild(span);
            let buttonEdit = document.createElement('button');
            buttonEdit.setAttribute('class', 'editButton');
            buttonEdit.setAttribute('id', id);
            buttonEdit.textContent = 'Edit';
            item.appendChild(buttonEdit);
        }
    }
    let addingButton = document.createElement('button');
    addingButton.setAttribute('id','addingButton');
    addingButton.textContent = 'Add';
    booksList.appendChild(addingButton);
    return booksList;
}

function createForm(object = {}) {
    let form = document.createElement('form');
    dynamicSection.appendChild(form);
    let inputUrl = createInputUrl(object,form);
    let inputName = createTextInput(object, 'name',form);
    let inputAuthor = createTextInput(object, 'author',form);
    let area = createTextAreaPlot(object,form);

    brTag(form);
    let buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('class', 'buttonContainer');
    form.appendChild(buttonContainer);
    let savingButton = document.createElement('button');
    savingButton.setAttribute('class', 'savingButton');
    savingButton.setAttribute('type','submit');
    savingButton.textContent = 'Save';

    buttonContainer.appendChild(savingButton);
    let cancelingButton = document.createElement('button');
    cancelingButton.setAttribute('class', 'cancelingButton');
    cancelingButton.setAttribute('type','reset');
    cancelingButton.textContent= 'Reset all';
    buttonContainer.appendChild(cancelingButton);

    cancelingButton.addEventListener('click',function () {
        let message = confirm('Discard changes?');
        if (message){
            history.back();
        }
    });

    form.addEventListener('submit', function (event) {
            if (location.hash === '#add') {
                books[Object.keys(books).length + 1] = {
                    image: inputUrl.value,
                    name: inputName.value,
                    author: inputAuthor.value,
                    plot: area.value
                };
                console.log(Object.keys(books).length);
                localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
                location.reload();
            } else {
                event.preventDefault();
                let currentBook = books[urlParams.get('id')];
                currentBook.image = inputUrl.value;
                currentBook.name = inputName.value;
                currentBook.author = inputAuthor.value;
                currentBook.plot = area.value;
                const currentId = urlParams.get('id');
                books[currentId] = currentBook;
                localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
                console.log(location.pathname + `?id=${currentId}#preview`);
                location.assign(location.pathname + `?id=${currentId}#preview`);
                location.reload();
                alert('Book successfully updated');
            }
    })



}

function brTag(form) {
    let br = document.createElement('br');
    form.appendChild(br);
}
function createRequiredInput(propertyName,form) {
    let label = document.createElement('label');
    label.setAttribute('for', propertyName);
    label.textContent = propertyName.toUpperCase() + ':';

    let input = document.createElement('input');
    input.setAttribute('required', '');

    form.appendChild(label);
    form.appendChild(input);

    return input;
}

function createTextInput(object, propertyName,form) {
    const input = createRequiredInput(propertyName,form);
    brTag(form);
    input.setAttribute('id', propertyName);
    input.setAttribute('type', 'text');
    input.setAttribute('name', propertyName);
    let value = object[propertyName] ? object[propertyName] : '';
    input.setAttribute('value', value);
    brTag(form);
    return input;
}

function createTextAreaPlot(object,form) {
    let area = document.createElement('textarea');
    area.setAttribute('name', 'plot');
    area.setAttribute('placeholder', 'Input plot...');
    area.setAttribute('required', '');
    area.innerText = object.plot ? object.plot : '';
    form.appendChild(area);
    return area;
}

function createInputUrl(object, form) {
    const inputUrl = createRequiredInput('url',form);
    brTag(form);
    inputUrl.setAttribute('type', 'url');
    inputUrl.setAttribute('id', 'url');
    let urlValue = object.image ? object.image : '';
    inputUrl.setAttribute('value', urlValue);
    brTag(form);
    return inputUrl;
}

function preview(id) {
    const book = books[id];
    for (let prop in book){
        if (book.hasOwnProperty(prop)) {
            if (prop === 'image') {
                let imagePreview =document.createElement('img');
                imagePreview.setAttribute('src',book.image);
                dynamicSection.appendChild(imagePreview);
            } else {
                let container = document.createElement('div');
                container.setAttribute('class', 'keyValue');
                dynamicSection.appendChild(container);

                let keyName = document.createElement('span');
                keyName.textContent = prop + ':';
                container.appendChild(keyName);

                let valueName = document.createElement('p');
                valueName.textContent = book[prop];
                container.appendChild(valueName);
            }
        }
    }
    return dynamicSection;
}