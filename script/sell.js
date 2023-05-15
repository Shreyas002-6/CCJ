
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
      import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged, updateProfile} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
      import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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
      const user = auth.currentUser;


      onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid)
var findmail = document.querySelector("#findmail");
                    findmail.innerHTML = user.email;

    console.log(user)
const brand = document.getElementById("brand")
const code = document.getElementById("code")
const price = document.getElementById("price")
const dis = document.getElementById("dis")
const upi = document.getElementById("upi")
const date = document.getElementById("date")

var rand = function() {
    return Math.random().toString(36).substr(2); // remove `0.`
};

var token = function() {
    return rand() + rand(); // to make it longer
};




document.getElementById("sell").addEventListener("click", function() {
  const db = getDatabase();
//set(ref(db, "Coupon/"+uid+"/"),{
  var token1 = token();
  set(ref(db, "Coupon/"+token1+"/"),{
                mail : user.email,
                brand : brand.value,
                price : price.value,
                dis : dis.value,
                code : code.value,
                upi : upi.value,
                token : token1,
                date : date.value
            })
            .then(()=>{
                alert("Coupon added successfully");
                document.getElementById("sellout").reset();

                localStorage.setItem("token", token1);
                console.log(localStorage.getItem("token"));

            })
            .catch((error)=>{
                alert(error);
            });


});






    // ...
  } else {
    // User is signed out
    // ...
  }
});
      

