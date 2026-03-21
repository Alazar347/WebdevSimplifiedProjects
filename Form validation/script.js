const form = document.querySelector('#form')
const username = document.querySelector('#username')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#password-confirmation')
const terms = document.querySelector("#terms")
const errorElement = document.querySelector('.errors')
const errorListElement = document.querySelector('.errors-list')

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

    
 


form.addEventListener('submit', (e)=> {
     const errorList = []
    clearErrors()
   if(username.value.length < 6) {
     errorList.push("Username Must be 6 Characters")

   }

   if(password.value.length < 10) {
    errorList.push("Password Must be 10 Characters")
   }

   if(password.value != passwordConfirmation.value) {
      errorList.push("Password Must Match")
   }

  if(!terms.checked) {
      errorList.push("Agree To Terms and Conditions")
   
  }

   if(errorList.length > 0) {
      showErrors(errorList)
      e.preventDefault()
   
   }

   

   


})
// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
   while(errorListElement.children[0] != null) {
        errorListElement.removeChild(errorListElement.children[0])
   }

   errorElement.classList.remove('show')

}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
   errorMessages.forEach(element => {
      const li = document.createElement('li')
      li.innerText = element
      errorListElement.append(li)
   });

   errorElement.classList.add('show')
}
