import { firebaseApp, firebaseAuth, firebaseStorage } from '../firebaseApp'
import { UserContext } from '../contexts/user'
import { addDoc, collection, getCollection, doc, query, where, FieldPath, FieldValue, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore'
import config from '../config.json'

const firestoreDbName = config.FIREBASE_USERS_DATABASE_NAME

const defaultUserProfile = {
    first_name: "",
    last_name: "",
    age: null,
    user_profile_created: Timestamp.fromDate(new Date()),
    birthdate: null,
    subscriptions: {},
    location: null,
    private_data: {
        last_loggedin: null,
    }
}

/**
 * Create data for new user after using Firebase Authentication. 
 * 
 * Firebase Authentication does not store more than displayName, 
 * email, and UID. Store data about user settings, subscriptions,
 * and other in Firestore.  
 * 
 * @param {object} user Firebase Authentication user object
 * containing user information.
 */
export async function createNewUserProfile(user) {
    try {
        await setDoc(doc(firebaseStorage, firestoreDbName, user.uid), defaultUserProfile)
    } catch (e) {
        console.error("ERROR: Could not create new user profile. ", e)
    }
}

/**
 * Check to see if user profile exists. 
 * 
 * @param {object} user See createNewUserProfile(). 
 * @return {boolean} True if user profile exists, else False. 
 */
export async function uidProfileExists(user) {
    const userDataRef = doc(firebaseStorage, firestoreDbName, user.uid)
    const docSnap = await getDoc(userDataRef)
    return docSnap.exists()
}

/**
 * Query Firebase user data not already with the login provider. 
 * 
 * @param user {} see createNewUserProfile(). 
 */
export async function getUserData(user) {
    const userFirebaseRef = doc(firebaseStorage, firestoreDbName, user.uid)
    const docSnapshot = await getDoc(userFirebaseRef)
    const userData = docSnapshot.data()
    return userData
}