import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { SignIn  } from "./components/signin";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "../store/atoms/user";
import { Topbar } from "./components/topbar";
import { Card } from "./components/card";
import SubmissionActivity from "./components/submission";
import { Leaderboard } from "./components/leaderboard";

const firebaseConfig = {
  apiKey: "AIzaSyDzOxSVa3JjtKd4jZmqiVuFHmv11XOItGw",
  authDomain: "leetcode-cl-9c630.firebaseapp.com",
  projectId: "leetcode-cl-9c630",
  storageBucket: "leetcode-cl-9c630.appspot.com",
  messagingSenderId: "591775072336",
  appId: "1:591775072336:web:3dbdcdb624105fd7c09155",
  measurementId: "G-G7LC6RSP5P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
   return <RecoilRoot>
    <StoreApp/>
   </RecoilRoot>
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
      } else {
        setUser({
          loading: false,
        });
        // No user is signed in.
        console.log("There is no logged in user");
      }
    });
  }, []);

  if (user.loading) {
    return <div>loading ...</div>;
  }

  if (!user.user) {
    return (
      <div>
        <Signin />
      </div>
    );
  }

  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Topbar />
        <Leaderboard />
      </div>
    </div>
  );
}

export default App;