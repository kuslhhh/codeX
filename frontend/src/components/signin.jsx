import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

export const SignIn = () => {
  const auth = getAuth();

    async function onSignIn() {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem("emailForSignIn", email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ...
        });
    }

  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
};
