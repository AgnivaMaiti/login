firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('content').style.display = 'block';
  } else {
    // User is signed out.
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('content').style.display = 'none';
  }
});

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById('error-message').innerText = errorMessage;
    });
}
