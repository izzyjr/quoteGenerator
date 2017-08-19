var arrQuote = ['“Not how long, but how well you have lived is the main thing.” ~ Seneca',
                '“Life is what happens when you’re busy making other plans.” ~ John Lennon',
                '“Life is ten percent what happens to you and ninety percent how you respond to it.” ~ Charles Swindoll',
                '“Keep calm and carry on.” ~ Winston Churchill',
                '“Life is like a box of chocolates. You never know what you’re going to get.” ~ Forrest Gump',
                '“Where there is love there is life.” ~ Mahatma Ghandi',
                '“Get busy living or get busy dying.” ~ Stephen King',
                '“Go confidently in the direction of your dreams! Live the life you’ve imagined.” ~ Henry David Thoreau',
                '“Maybe that’s what life is… a wink of the eye and winking stars.” ~ Jack Kerouac',
                '“May you live all the days of your life.” ~ Jonathan Swift'];

 function randomize(){
    var number = Math.floor(Math.random() * arrQuote.length);
    return arrQuote[number];
 } 
 
//  1.) We want to get access to the getQuote button
var randomizeButton = document.getElementById('getQuote');
//  2.) We want to run the randomize function when the getQuote button is clicked.
    randomizeButton.addEventListener('click', function(){
       randomize(); 
    });
