import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { SignIn } from "./components/signin";
import { RecoilRoot, useRecoilState } from "recoil";
import { userAtom } from "../store/atoms/user";
import { Topbar } from "./components/topbar";

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
    onAuthStateChanged(auth, (user) => {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          }
        })
        console.log('This is the user', user);
      } else {
        setUser({
          loading: false,
        })
        console.log('There is no logged in user');
        
      }
  });
  }, []);

  if (user.loading) {
    return <div className="text-center">loading...</div>;
  }

  if (!user.user) {
    return <div className="text-center"> <SignIn /> </div>;
  }


  return (
    <>
      <Topbar />
    </>
  );
}

export default App;
