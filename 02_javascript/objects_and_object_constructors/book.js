function Book(title, author, page_count, was_read){
    this.title = title;
    this.author = author;
    this.page_count = page_count;
    this.was_read = was_read;
    this.info = function() {
        var was_read_string = (this.was_read) ? 'read it and wept' : 'not read yet';
        return (
            title 
            + ' by ' 
            + author
            + ', '
            + page_count
            + ' pages, '
            + was_read_string
        );
    }
}

hobbit = new Book('The Hobbit', 'J R R Tolkien', 295, true);
console.log(hobbit.info());

// prototype fun
console.log([
    'Object.getPrototypeOf(hobbit) === Book.prototype returns...',
    Object.getPrototypeOf(hobbit) === Book.prototype
]);
console.log([
    'Object.getPrototypeOf(hobbit) returns...',
    Object.getPrototypeOf(hobbit)
]);
console.log([
    hobbit.valueOf(),
    hobbit.hasOwnProperty('valueOf'),
    Object.prototype.hasOwnProperty('valueOf'),
    'we can grok that hasOwnProperty is a "parent method", eh?'
]);