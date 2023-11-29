// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let heartList = document.querySelectorAll(".like-glyph")
heartList.forEach((heart) => {
  heart.addEventListener("click", (e) => mimicServerCall(e)
  .then(() => {
    if (heart.textContent === EMPTY_HEART) {
      heart.textContent = FULL_HEART
      heart.classList.add("activated-heart")
      
    } else if (heart.textContent === FULL_HEART) {
      heart.textContent = EMPTY_HEART
      heart.classList.remove("activated-heart")
      
    }
  })
  .catch(() => {
    const modal = document.querySelector("#modal")
    modal.classList.remove("hidden")
    document.querySelector("#modal-message").textContent = "There is something wrong!"
    setTimeout(() => {
      modal.classList.add("hidden")
    }, 3000)
  })
  )})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
