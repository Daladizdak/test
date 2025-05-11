// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// Add SDKs for Firebase products that you want to use
import { Firestore,
getFirestore,
onSnapshot,
query,
collection,
orderBy,
addDoc } from 'https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js'
// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDzDHpsWpGbIxXc6boCFiXJa6ZTAiRIlcI",
authDomain: "amir5cs022.firebaseapp.com",
projectId: "amir5cs022",
storageBucket: "amir5cs022.firebasestorage.app",
messagingSenderId: "762490470175",
appId: "1:762490470175:web:b793b64be078c531be3a2a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a live data snapshot (i.e. auto-refresh) of our Reviews collection
const q = query(collection(db, "Reviews"), orderBy("book_name"));
const unsubscribe = onSnapshot(q, (snapshot) => {
// Empty HTML table
$('#reviewList').empty();
// Loop through snapshot data and add to HTML table
var tableRows = '';
snapshot.forEach((doc) => {
tableRows += '<tr>';
tableRows += '<td>' + doc.data().book_name + '</td>';
tableRows += '<td>' + doc.data().book_rating + '/5</td>';
tableRows += '</tr>';
});
$('#reviewList').append(tableRows);
// Display review count
$('#mainTitle').html(snapshot.size + " book reviews in the list");
});
