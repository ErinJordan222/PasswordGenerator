const result = document.getElementById('result');
const copyButton = document.getElementById('clipboard');
let finalPassword = [];

// random uppercase function
function getRandomUpper() {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

// random lowercase function
function getRandomLower() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    return lowercase[Math.floor(Math.random() * lowercase.length)];
}

// random number function
function getRandomNumber() {
    const numbers = "0123456789";
    return numbers[Math.floor(Math.random() * numbers.length)];
}
// random symbol function
function getRandomSymbol() {
    const symbols = "~!@#$%^&*()_+`-=<>?';:[]{}";
    return symbols[Math.floor(Math.random() * symbols.length)];
}
// randomized section
let lowercase = getRandomLower();
let uppercase = getRandomUpper();
let number = getRandomNumber();
let symbol = getRandomSymbol();

// randomized functions
function randomize() {
    finalPassword = [];
  
    let desiredLength = prompt(`Choose the Password's Length`);
    let desiredUpper = confirm(`Uppercase Letters?`);
    let desiredNumber = confirm(`Numbers?`);
    let desiredSymbol = confirm(`Symbols?`);
    // length function
    if (isNaN(desiredLength)) {
        desiredLength = prompt('Length must be a number from 8-128.');
        if (isNaN(desiredLength)) {
            desiredLength = prompt('Last try! Length MUST be a number from 8-128.');
        }
    }
    // checks length is less than 8
    if (desiredLength < 8 || desiredLength > 128) {
        desiredLength = prompt('Please choose a length between 8-128.');
        if (desiredLength < 8) {
            desiredLength = prompt('Password must be a length of between 8-128.');
            if (desiredLength < 8) {
                alert('Apassword is too short and is not secure. Try again.');
                return;
            }
        }
    }
    // checks lengths is more than 128
    if (desiredLength > 128) {
        desiredLength = prompt('Password must be between 8 and 128 characters');
        if (desiredLength > 128) {
            alert('Apassword is too long. Try again.');
            return;
        }
    }
    // desired length section
    for (let i = 0; i < desiredLength; i++) {
        // Lowercase
        if (lowercase) {
            finalPassword.push(getRandomLower());
        }
        // If click check uppercase
        if (desiredUpper) {
          const finalUpper = getRandomUpper()
          finalPassword.push(finalUpper);
      }
        // If click check number
        if (desiredNumber) {
            const finalNumber = getRandomNumber()
            finalPassword.push(finalNumber);
        }
        // If click check symbol
        if (desiredSymbol) {
            const finalSymbol = getRandomSymbol()
            finalPassword.push(finalSymbol);
        }
        // randomize order of array
        function shuffleArray(array) {
            let curId = array.length;
            while (0 !== curId) {
                let randId = Math.floor(Math.random() * curId);
                curId -= 1;
                let tmp = array[curId];
                array[curId] = array[randId];
                array[randId] = tmp;
            }
            return array;
        }
        shuffleArray(finalPassword);
    }
    // slices to defined length 
    let x = finalPassword.slice(0, desiredLength);
    // insert final password into html
    result.innerText = x.join('');

} /* End of randomize() Function */

// copy password to clipboard
function copy() {
    navigator.clipboard.writeText(result.innerHTML)
        .then(function() {
            alert('Password Successfully Copied')
        }, function() {
            alert('Unable to Copy Password');
        });
}
