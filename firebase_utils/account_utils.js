import { firebaseStorage } from '../firebaseApp'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import config from '../config.json'

const firestoreDbName = config.FIREBASE_USERS_DATABASE_NAME

const defaultUserProfile = {
    first_name: "",
    last_name: "",
    age: null,
    birthdate: null,
    light_mode: true,
    language: null,
    subscriptions: {},
    location: {
        country: null,
        city: null,
        state: null
    },
    sending_preferences: {
        email: true,
        sms: true
    },
    alternate_email: null,
    sms_number: null,
    private_data: {
        user_profile_created: Timestamp.fromDate(new Date()),
        last_loggedin: null,
        customer_status: null,
        ip_address: null
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
        await setDoc(doc(firebaseStorage, firestoreDbName, user.uid),
            defaultUserProfile)
    } catch (e) {
        console.error("ERROR: Could not create new user profile. ", e)
    }
}

/**
 * Get Firebase Document which is the user profile.
 * 
 * In Firebase, you currently cannot get a field per call, you must 
 * get the entire Document.
 * @param {String} userId Unique user Firebase ID.
 * @returns User profile Firebase Document data as JSON.
 */
export async function getUserProfile(userId) {
    console.log("GET PROFILE")
    const subsList = await getDoc(
        doc(firebaseStorage, firestoreDbName, userId)
    )
    return subsList.data()
}

/**
 * Check to see if user profile exists. 
 * 
 * @param {object} id See createNewUserProfile(). 
 * @return {boolean} True if user profile exists, else False. 
 */
export async function uidProfileExists(id) {
    const userDataRef = doc(firebaseStorage, firestoreDbName, id)
    const docSnap = await getDoc(userDataRef)
    return docSnap.exists()
}

/**
 * Query Firebase user data not already with the login provider. 
 * 
 * @param user {} see createNewUserProfile(). 
 */
export async function updateProfileContext(user) {
    const docSnapshot = await getDoc(
        doc(firebaseStorage, firestoreDbName, user.uid)
    )
    return docSnapshot.data()
}



// /**
//  * Query Firebase user data not already with the login provider. 
//  * 
//  * @param user {} see createNewUserProfile(). 
//  * @returns User profile data as JSON.
//  */
// export async function getUserData(user) {
//     const docSnapshot = await getDoc(
//         doc(firebaseStorage, firestoreDbName, user.uid)
//     )
//     return docSnapshot.data()

// }