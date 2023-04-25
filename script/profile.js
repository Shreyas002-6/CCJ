
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
    ///alert("Welcome "+user.email)
    console.log(user)
    var findmail = document.querySelector("#findmail");
    findmail.innerHTML = user.email;
    const db = getDatabase();

    const dbref = ref(db);

            get(child(dbref, "User/" + uid))
            .then((snapshot)=>{
                if(snapshot.exists()){
                  var finduser = document.querySelector("#finduser");
                    finduser.innerHTML = snapshot.val().username;
                } else {
                    alert("No data found");
                }
            })
            .catch((error)=>{
                alert(error)
            })



    document.getElementById("edit").addEventListener("click", function() {
    const db = getDatabase();
    let username = prompt("Enter your username")
    set(ref(db, "User/"+ uid),{
                username : username
            })
            .then(()=>{
                alert("Username changed successfully!");
                var finduser = document.querySelector("#finduser");
                finduser.innerHTML = username;

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
      

        