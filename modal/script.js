/*
  TODO: 2. Select the elements with the following IDs
    * modal
    * open-modal-btn
    * close-modal-btn
    * BONUS: overlay



*/

const openModal = document.querySelector('#open-modal-btn')
const overlay = document.querySelector('#overlay')
const divModal = document.querySelector("#modal")
const closeModal = document.querySelector("#close-modal-btn")

// TODO: 3. Create a click event listener for the open-modal-btn that adds the class "open" to the modal
// BONUS: Also add the class "open" to the overlay

openModal.addEventListener('click', ()=> {
     overlay.classList.add('open')
     divModal.classList.add('open')
})

// TODO: 4. Create a click event listener for the close-modal-btn that removes the class "open" from the modal
// BONUS: Also remove the class "open" from the overlay

closeModal.addEventListener('click', closeOverlay)
// BONUS: Add a click event listener to the overlay that removes the class "open" from the modal and the overlay

overlay.addEventListener('click', closeOverlay)

function closeOverlay () {
  overlay.classList.remove('open')
  divModal.classList.remove('open')
}