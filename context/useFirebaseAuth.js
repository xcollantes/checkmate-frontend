// /** Custom context for authentication of users.
//  *
//  *  Modeled after
//  *  https://blog.logrocket.com/implementing-authentication-in-next-js-with-firebase/
//  */
//
// import { useState, useEffect } from 'react'
// import firebase from 'firebase/app'
//
//
// const firebaseAuth = firebase.auth()
//
// const formatAuthUser = (user) => ({
//   uid: user.uid,
//   email: user.email
// });
//
// export default function useFirebaseAuth() {
//   const [authUser, setAuthUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//
//   const authStateChanged = async (authState) => {
//     if (!authState) {
//       setAuthUser(null)
//       setLoading(false)
//       return;
//     }
//
//     setLoading(true)
//     var formattedUser = formatAuthUser(authState);
//     setAuthUser(formattedUser);
//     setLoading(false);
//   };
//
//   // listen for Firebase state change
//   useEffect(() => {
//     const unsubscribe = firebaseAuth.onAuthStateChanged(authStateChanged);
//     return () => unsubscribe();
//   }, []);
//
//   return {
//     authUser,
//     loading
//   };
// }