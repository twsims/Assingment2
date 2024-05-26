function downloadBook(bookId){
    //Get the book content by using the book id for that book.
    var bookContent = document.getElementById(bookId).innerText;
    //Create a new blob object that will contain the book content
    var blob = new Blob([bookContent], {type: "text/plain"});
    //Create a new URL link object that will contain the blob object
    var link = document.createElement("a");
    // set the link's href attribute to the URL object that contains the blob object
    link.href = URL.createObjectURL(blob);
    // set the links download attribute to the title of the book
    link.download = bookId + ".txt";
    // Now let's progamitically click the link to download the book.
    // notice the download the book as a text file, the user is not dowing this manually
    link.click();
    }