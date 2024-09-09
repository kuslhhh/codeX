import { getAuth, signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { app } from '../../utils/firebase';

const provider = new GoogleAuthProvider();

export const SignIn = () => {
  const auth = getAuth(app);

  async function onSignIn() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        // The signed-in user info
        const user = result.user;
        console.log(user);  // Log the user info if necessary

        // Handle token or any additional data you may need from the result
        // const token = credential.accessToken;

      }).catch((error) => {
        // Handle Errors here.
        console.error("Error during sign-in:", error.message);
        // Log or handle the error as needed, without using unused variables
      });
  }

  return (
    <div>
      <button onClick={onSignIn}>
        Login with Google 
      </button>
    </div>
  );
};
