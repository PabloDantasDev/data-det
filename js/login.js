
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
  } else {
  }
})
function login(event) {
  event.preventDefault()
  let email = document.getElementById('email').value
  let password = document.getElementById('password').value
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert('USUARIO OU SENHA INCORRETOS', error.message)

  }).then(function (user) {

    if (user) {
    
      window.location.href = '/inicio.html'
      Swal.fire({
        icon:'success'   
      })
    }
  })

  function deslogar() {
    firebase.auth().signOut().then(function () {

    }).catch(function (event) {

    })
  }

}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});
sign_up_btn.addEventListener("click", () => {
  document.getElementById('botao').setAttribute('style', 'display:none')
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});




