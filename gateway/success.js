// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged, updateProfile} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getDatabase, ref, set, get, child, onValue, remove } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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
    var mail = document.querySelector("#findmail");
    findmail.innerHTML = user.email;
    ///console.log(user)

const db = getDatabase();
    const dbref = ref(db);
    const coid = localStorage.getItem("cid");
    console.log(coid)
   
get(child(dbref, "Coupon/"+coid)).then((snapshot)=>{
            if(snapshot.exists()){
              console.log("peeeeee"); 
               console.log(snapshot.val())
               
var code = document.getElementById("codel");

code.innerHTML = snapshot.val().code;

const tasksRef = ref(db, "Coupon/"+coid);

remove(tasksRef).then(() => {
  console.log("location removed");
});

}
else{
alert("No Coupons found");

}

})
.catch((error)=>
{
alert(error)
})
}
});

      

    
      
