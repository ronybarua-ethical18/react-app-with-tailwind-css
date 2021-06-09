import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import Home from './Components/Home/Home';
function App() {
   // initialize firebase
   if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
}
  return (
    <div className="App">
        <Home></Home>
    </div>
  );
}

export default App;
