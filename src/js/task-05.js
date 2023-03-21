const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', oninput);
function oninput(event) {
   event.preventDefault();
   nameOutput.textContent = event.target.value;
   if (event.target.value === "") {
        nameOutput.textContent = "Anonymous";
   }
   return nameOutput.textContent;
 }