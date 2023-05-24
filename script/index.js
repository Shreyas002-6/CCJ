import { initializeApp} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
      const auth = getAuth();
      console.log(app);

      

      //----- New Registration code start     
      document.getElementById("register").addEventListener("click", function() {
          var email =  document.getElementById("Email").value;
          var password = document.getElementById("password").value;
          //For new registration
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;   
            console.log(user);
            ///user.displayName = "shreyas";
            alert("Registration successfull!");
            location = 'login.html'
            document.getElementById("reg").reset();
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            alert(error);
          });            
      });
      
        


/*     const db = getDatabase();
        var regBtn = document.querySelector("#register");
        var email = document.querySelector("#Email");
        var password = document.querySelector("#password");
        var username = document.querySelector("#Username");

        function InsertData() {
            set(ref(db, "User/"+ username.value),{
                ID: username.value,
                Mail: email.value,
            })
            .then(()=>{
                alert("Data added successfully");
            })
            .catch((error)=>{
                alert(error);
            });
        }

        regBtn.addEventListener('click', InsertData);*/

