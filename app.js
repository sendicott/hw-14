/**
 * 1. Build HTML with mustache that looks like Luke's 
 *      example box
 * 2. Make a GET request that displays letters in box
 * 3. Make it so that letters are replaced with each new guess
 * 4. Make a POST request that submits user input
 * 5. Take API response and use it determine display response
 *      for the user
 */

function addScramble() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://harold-jtpegfzoyg.now.sh/scrambled');
    request.addEventListener('load', function() {
        let delivery = JSON.parse(request.responseText);
        let scrambledWord = delivery.scrambled;
        let splitScramble = scrambledWord.split("");
        let parent = document.querySelector('#outerBox');
        let template = document.querySelector('#scramble-template').innerHTML;
        for (let i = 0; i < splitScramble.length; i++) {
            // trying this out below
            let letter = document.createElement('p');
            letter.innerHTML = Mustache.render(template, splitScramble[i]);
            //trying this out above
        }
    });
    request.send();
}

// build a function that populates HTML
// run it once in window event listener
// after that, put the function in a click listener

window.addEventListener('load', function() {
    addScramble();
})