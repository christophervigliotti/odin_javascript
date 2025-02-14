// resume on 3 https://www.theodinproject.com/lessons/node-path-javascript-library
const myLib = []; // a new array

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title, author){
    myLib.push(new Book(title,author));
}

function writeLibraryToScreen(lib,div){
    console.log('Muh Library...');
    var html = '';
    lib.forEach(function(value,i){
        let thisBookString = `${value.title} by ${value.author}`;
        console.log(thisBookString);
        html += `<li>${thisBookString}</li>`;
    });
    // document.getElementById(div).html(html);
}

addBookToLibrary('The Hobbit','J.R.R. Tolkien');
writeLibraryToScreen(myLib,'whatever');