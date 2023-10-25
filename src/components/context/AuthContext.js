import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../../pages/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

//   function signUp(email, password) {
//     createUserWithEmailAndPassword(auth, email, password)
//   }

function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Create a Firestore document for the new user
        const userDocRef = doc(db, "users", user.uid);
        
        // Initialize the "savedShows" array with an empty array
        const userData = {
          savedShows: [],
        };

        // Set the initial user data in Firestore
        setDoc(userDocRef, userData);
      })
      .catch((error) => {
        // Handle any errors that occurred during signup
        console.error("Error creating user:", error);
      });
  }

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}





















// import { createContext, useContext, useEffect, useState } from "react";
// import { auth, db } from "../../pages/firebase";
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";

// const AuthContext = createContext()

// export function AuthContextProvider({children}) {
//     const [user, setUser] = useState({})

//     function signUp(email, password) {
//         createUserWithEmailAndPassword(auth, email, password);
//         addDoc(collection(db, "users", email), {
//             savedShows: []
//         })          
//     }

    

//     function logIn(email, password) {
//         return signInWithEmailAndPassword(auth, email, password)
//     }
//     function logOut() {
//         return signOut(auth)
//     }

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser)
//         })
//         return () => {
//             unsubscribe();
//         }
//     })


    
//     return (
//         <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export function UserAuth() {
//     return useContext(AuthContext)
// }