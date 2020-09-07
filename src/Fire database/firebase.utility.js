import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD4PVOfjNunq870lSKNQNSLpv8SxhRWvoc",
  authDomain: "crwn-clothes-db-835db.firebaseapp.com",
  databaseURL: "https://crwn-clothes-db-835db.firebaseio.com",
  projectId: "crwn-clothes-db-835db",
  storageBucket: "crwn-clothes-db-835db.appspot.com",
  messagingSenderId: "121266326446",
  appId: "1:121266326446:web:4c091d366ba4186684d63f",
  measurementId: "G-R6K1BCZY6H",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const fireStore = firebase.firestore();

export const creatingUserDataInDatabase = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = fireStore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    try {
      const displayName = userAuth.displayName;
      const email = userAuth.email;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error in creating the user", error);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const doGoogleAuthenticate = () => auth.signInWithPopup(provider);
export default firebase;
