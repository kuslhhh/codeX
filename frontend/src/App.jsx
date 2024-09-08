import './App.css'
import { Landing } from './components/landing'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDzOxSVa3JjtKd4jZmqiVuFHmv11XOItGw",
  authDomain: "leetcode-cl-9c630.firebaseapp.com",
  projectId: "leetcode-cl-9c630",
  storageBucket: "leetcode-cl-9c630.appspot.com",
  messagingSenderId: "591775072336",
  appId: "1:591775072336:web:3dbdcdb624105fd7c09155",
  measurementId: "G-G7LC6RSP5P"
};

const app = initializeApp(firebaseConfig);
function App() {

  return (
    <>
      <div>
        <Landing/>
      </div>
    </>
  )
}

export default App
