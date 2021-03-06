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
        let theID = delivery.id;
        let splitScramble = scrambledWord.split("");
        let parent = document.querySelector('#outerBox');
        let template = document.querySelector('#scramble-template').innerHTML;
        let section = document.createElement('section');
        section.innerHTML = Mustache.render(template, { splitScramble: splitScramble });
        parent.appendChild(section);

        let submitBtn = document.querySelector('#submit');
        submitBtn.addEventListener('click', function() {
            let request = new XMLHttpRequest();
            request.open('POST', 'https://harold-jtpegfzoyg.now.sh/scrambled');
            request.addEventListener('load', function () {
                let response = JSON.parse(request.responseText); 
                if (response === )
            });
            let input = document.querySelector('#input').value;
            let guess = {
                id: theID,
                guess: input
            }
            let splitGuess = input.split("");
            if (splitGuess.length === scrambledWord.length) {
                if (splitGuess.sort() === scrambledWord.sort()) {
                    request.send(JSON.stringify(input));
                }
            }
        });
    
    });
    request.send();
}


window.addEventListener('load', function() {
    addScramble();

})