
      // Import the functions you need from the SDKs you need
      import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
      import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
      import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence, onAuthStateChanged, updateProfile} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
      import { getDatabase, ref, set, get, child, onValue } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
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

            get(child(dbref, "Coupon"))
            .then((snapshot)=>{
                if(snapshot.exists()){
               ///console.log(snapshot.val())





  var tbody = document.getElementById("tbody1");
function AddoneData(brand, dis, price, mail, upi, token, date){///code

let trow = document.createElement("tr");
trow.className="trow";
let td1 = document.createElement("td");
td1.className="td1";

///let td2 = document.createElement("td");
let td3 = document.createElement("td");
td3.className="td3";
let td4 = document.createElement("td");
td4.className="td4";
let td5 = document.createElement("td");
td5.className="td5";
let td6 = document.createElement("td");
td6.className="td6";

///let td6 = document.createElement("td");
///let td7 = document.createElement("td");
///let a = document.createElement("a");
///let link = document.createTextNode("Buy");
///a.appendChild(link);
///a.title = "Buy"; 
///a.href = "payment.html"; 
///a.className = "linkb";



td1.innerHTML = brand;

///td2.innerHTML = code;
td3.innerHTML = dis+"%";
td6.innerHTML = date;
td4.innerHTML = price+"Rs";

td5.innerHTML = token;
///td6.innerHTML = upi;




trow.appendChild(td1);
///trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td6);
trow.appendChild(td4);
trow.appendChild(td5);
///trow.appendChild(td6);
///trow.appendChild(td7);
///td7.appendChild(a);



tbody.appendChild(trow);


}

function AddallData(TheData){

tbody.innerHTML = "";
TheData.forEach(element =>{
  AddoneData(element.brand, element.dis, element.price, element.mail, element.upi, element.token, element.date);///element.code

});

}

//getting all data
function AddallDataonce(){
  const dbref = ref(db);
get(child(dbref,"Coupon"))
.then((snapshot)=>{
  var data = [];
  snapshot.forEach(childSnapshot => {
    data.push(childSnapshot.val());
  });
AddallData(data);
});
}

function AddallDataIRL(){
  const dbref = ref(db,"Coupon");
onValue(dbref,(snapshot)=>{
  var data = [];
  snapshot.forEach(childSnapshot => {
    data.push(childSnapshot.val());
  });
AddallData(data);
})
}
AddallDataonce();



                } else {
                    alert("No Coupons found");
                }
            })
            .catch((error)=>{
                alert(error)
})
    // ...
  } else {
    // User is signed out
    // ...
  }
});


