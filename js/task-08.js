 const form = document.querySelector(".login-form");
 form.addEventListener("submit", handleSubmit);
 function handleSubmit(event) {
   event.preventDefault();
   const {
     elements: { email, password },
   } = event.currentTarget;
   if (email.value === "" || password.value === "") {
     alert("Please fill in all the fields!");
     return;
   }
   console.log(`Email: ${email.value}, Password: ${password.value}`);
  form.reset();
 };
