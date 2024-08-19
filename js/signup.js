import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAb1UHB2iZqLrB6-U3ZA_WyydAZ3mzoBBw",
    authDomain: "blog-2ca45.firebaseapp.com",
    projectId: "blog-2ca45",
    storageBucket: "blog-2ca45.appspot.com",
    messagingSenderId: "829250276477",
    appId: "1:829250276477:web:7c45e8b7aa1c736b3f3514"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 

const signup = document.querySelector('#Sbtn');


signup.addEventListener('click',(e)=>{
 e.preventDefault()
 const email = document.getElementById("email").value
 const password = document.getElementById("password").value

 createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
  
  const user = userCredential.user;
  alert("Account created")

  window.location.href="index.html" 
})
 
 
 .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  alert(errorMessage)
});
})