/*
notes
    console.log('library.js is in the house');
    https://www.theodinproject.com/lessons/node-path-javascript-library
    forcing myself to use vanilla js and not jquery
*/
const myLib = []; // a new array

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author){
    myLib.push(new Book(title,author));
}

function addSomeBooks(){
    addBookToLibrary('The Hobbit','J.R.R. Tolkien');
    addBookToLibrary('To Kill A Mockingbird','Harper Lee');
    writeLibraryToScreen(myLib,'whatever');
}

function clearForm(){
    console.log('blarg');
    var title_field = document.getElementById('title');
    var author_field = document.getElementById('author');
    title_field.value = '';
    author_field.value = '';
}

function initListeners(){
    var blarg = document.getElementById("add").addEventListener("click", onAddBookClick);
}

function onAddBookClick(){
    var title = document.getElementById('title').value.trim();
    var author = document.getElementById('author').value.trim();
    if(formIsValid()){
        addBookToLibrary(title,author);
        writeLibraryToScreen();
        clearForm();
    }
}

function formIsValid(){
    var title = document.getElementById('title').value.trim();
    var author = document.getElementById('author').value.trim();
    var formIsValid = title != '' && author != '';
    return formIsValid;
}

function writeLibraryToScreen(){    
    console.log('library.js fn writeLibraryToScreen');
    var book_list_items = '';
    var the_id = '#books';
    myLib.forEach(function(value,i){
        let thisBookString = `${value.title} by ${value.author}`;
        book_list_items += `<li>${thisBookString}</li>`;
    });
    document.querySelector(the_id).innerHTML = book_list_items;
}

document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        initListeners();
        addSomeBooks();
    }
}