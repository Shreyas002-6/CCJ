import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDT-cMPDoSonnxSXX0ZkSI_Tgd7FiU9yMo",
    authDomain: "coupawn-91a8b.firebaseapp.com",
    databaseURL: "https://coupawn-91a8b-default-rtdb.firebaseio.com",
    projectId: "coupawn-91a8b",
    storageBucket: "coupawn-91a8b.appspot.com",
    messagingSenderId: "567276970002",
    appId: "1:567276970002:web:81c7985843462ff1c4f8cb",
    measurementId: "G-Z7MYJDC73R"
  };

const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const auth = getAuth();
      console.log(app);

document.getElementById("reset").addEventListener("click", function() {
          var username =  document.getElementById("username").value;
       
       sendPasswordResetEmail(auth, username)
  .then(() => {
    // Password reset email sent!
    alert("Link has been sent!");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
	alert(errorMessage);
  });
});
