//Create a function that will take the story id and download the text file for the user to view at their convenience
const buttonBack = document.querySelector('#button-back');
const buttonNext = document.querySelector('#button-next');
const listOfCards = document.querySelectorAll('.card');
const cardElement = document.querySelector('.card');
const cardContainer = document.querySelector('.card-container');
let currentCard = 0;

function setScrollTo() {
    const scrollLeft = currentCard * listOfCards[0].offsetWidth;
    cardContainer.scrollTo({left: scrollLeft, behavior: 'smooth'});
}

buttonBack.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
    }
    setScrollTo();
});

buttonNext.addEventListener('click',() => {
    if (currentCard < listOfCards.length -1) {
        currentCard++;
    }
    setScrollTo();
});

listOfCards.forEach((cardElement, index) => {
    cardElement.addEventListener('click', () => {
        currentCard = index;
        const scrollLeft = currentCard * listOfCards[0].offsetWidth;
        cardContainer.scrollTo({left: scrollLeft, behavior: 'smooth' });
    });
});

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

function playAudio(audioUrl) {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioUrl;
    audioPlayer.play();

    audioPlayer.onended = function() {
        window.location.href = '/';
        };
    }  

function stopAudio() {
    var audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    window.location.href ='/';
    }