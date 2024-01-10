import { getAuth, sendSignInLinkToEmail , GoogleAuthProvider ,signInWithPopup} from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDSWJ224i9Ko75WaB9MRJXHyaq9dEh7S9M",
  authDomain: "leetcode-clone-62db8.firebaseapp.com",
  projectId: "leetcode-clone-62db8",
  storageBucket: "leetcode-clone-62db8.appspot.com",
  messagingSenderId: "568258221618",
  appId: "1:568258221618:web:9a344d4a592357eebb0e2b",
  measurementId: "G-291723JMXT"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider() 


export default function Auth() {


    const googleSignin = async () =>{


        await signInWithPopup(auth, provider)
    .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        
       


    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
    });


    }

  return (
    <div>
        
      <button onClick={googleSignin}  className="block">
        Sign In With Google
      </button>
    </div>
  )
}
