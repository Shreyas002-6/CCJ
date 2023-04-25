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
            
document.getElementById("purc").addEventListener("click", function() {
const db = getDatabase();

const dbref = ref(db);
const cid = document.getElementById("cid");

localStorage.setItem("cid", cid.value);
console.log(localStorage.getItem("cid"));
get(child(dbref, "Coupon/"+cid.value)).then((snapshot)=>{
            if(snapshot.exists()){
               console.log(snapshot.val())
               
var dis = document.getElementById("dis");
var pri = document.getElementById("pri");
var bran = document.getElementById("bran");
var seller = document.getElementById("seller");

dis.innerHTML = "Discount - "+snapshot.val().dis+"%";
pri.innerHTML = "Price - "+snapshot.val().price+"Rs";
bran.innerHTML = "Brand - "+snapshot.val().brand;
seller.innerHTML = "Seller - "+snapshot.val().mail;

let a = document.createElement("a");
let link = document.createTextNode("Buy");
a.appendChild(link);
a.title = "Buy"; 
a.href = "./gateway/pay.html"; 
but.appendChild(a);
a.className = "linkb";
but.appendChild(a);

/*function AddoneData(brand, dis, price, mail, upi, token){///code
console.log(dis);
}
function AddallData(TheData){
TheData.forEach(element =>{
  AddoneData(element.brand, element.dis, element.price, element.mail, element.upi, element.token);///element.code
});
}*/
}
else{
alert("No Coupons found");
}
})
.catch((error)=>
{
alert(error)
})
});

