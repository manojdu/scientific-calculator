let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll('button');
let helpButton = document.getElementById('help');
let modal = document.getElementById('helpModal');
let closeModal = document.querySelector('.close');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonId = e.target.id;

        if (buttonId == 'equals') {
            try {
                string = eval(string) || ""; // Evaluate the expression
            } catch (error) {
                string = "Error"; // Handle errors in evaluation
            }
            input.value = string;
        } else if (buttonId == 'all-clear') {
            string = "";
            input.value = string;
        } else if (buttonId == 'delete') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (buttonId == 'sin' || buttonId == 'cos' || buttonId == 'tan') {
            try {
                const angle = eval(string);
                let result = 0;
                if (buttonId == 'sin') result = Math.sin(angle * Math.PI / 180).toString();
                if (buttonId == 'cos') result = Math.cos(angle * Math.PI / 180).toString();
                if (buttonId == 'tan') result = Math.tan(angle * Math.PI / 180).toString();
                string = result;
            } catch (error) {
                string = "Error"; // Handle errors in evaluation
            }
            input.value = string;
        } else if (buttonId == 'sqrt') {
            try {
                string = Math.sqrt(eval(string)).toString();
            } catch (error) {
                string = "Error"; // Handle errors in evaluation
            }
            input.value = string;
        } else if (buttonId == 'log') {
            try {
                string = Math.log10(eval(string)).toString();
            } catch (error) {
                string = "Error"; // Handle errors in evaluation
            }
            input.value = string;
        } else if (buttonId == 'ln') {
            try {
                string = Math.log(eval(string)).toString();
            } catch (error) {
                string = "Error"; // Handle errors in evaluation
            }
            input.value = string;
        } else if (buttonId == 'exp') {
            try {
                string = Math.exp(eval(string)).toString();
            } catch (error) {
                string = "Error"; // Handle errors in evaluation
            }
            input.value = string;
        } else if (buttonId == 'pow') {
            string += "**";
            input.value = string;
        } else if (buttonId == 'open-bracket') {
            string += "(";
            input.value = string;
        } else if (buttonId == 'close-bracket') {
            string += ")";
            input.value = string;
        } else {
            // Prevent adding multiple consecutive operators
            if (["+", "-", "*", "/", "%"].includes(e.target.innerHTML) && ["+", "-", "*", "/", "%"].includes(string.slice(-1))) {
                string = string.slice(0, -1) + e.target.innerHTML; // Replace the last operator with the new one
            } else {
                string += e.target.innerHTML;
            }
            input.value = string;
        }
    });
});

// Prevent direct input to the text box
input.addEventListener('keydown', (e) => {
    e.preventDefault();
});

// Help modal functionality
helpButton.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
