import firebase from "firebase-admin";

const path = process.cwd() + "/serviceAccount.json";

try {
    /** 
     *@important For Server Running Out Side Google Platform / Firebase
     */
    firebase.initializeApp({ credential: firebase.credential.cert(path) });
    
} catch (error) {

    /** 
   *@important For Server Running Out Side Google Platform / Firebase
   */
    firebase.initializeApp();

}

export type TDoc<T> = firebase.firestore.DocumentSnapshot<T>;

//** fDb ~ firestore database 
export const fDb = firebase.firestore();


