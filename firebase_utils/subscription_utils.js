/**
 * Interact with Firebase database to manipulate user subscriptions. 
 */

import {
    doc, getDoc, setDoc,
    Timestamp, updateDoc
} from 'firebase/firestore'
import { firebaseStorage } from '../firebaseApp'
import config from '../config.json'
import { getUserProfile } from './account_utils'

const firestoreDbName = config.FIREBASE_USERS_DATABASE_NAME

/**
 * Add one product subscription for one user.
 * 
 * Note: Use `updateDoc()` to change existing doc; using `setDoc()` will 
 * override entire entry.
 * @param {String} productId Is the unique identifier for a product
 * in Firebase database.
 * @param {String} userId Is the unique identifier for a user 
 * in Firebase database.
 */
export async function addSub(productId, userId) {
    const subs = await getSubs(userId)
    subs.push(productId)
    try {
        await updateDoc(doc(firebaseStorage, firestoreDbName, userId), {
            subscriptions: Array.from(subs)
        })
    } catch (e) {
        console.error("ERROR: Could not add product: ", productId, " ", e)
    }
}

/**
 * Remove one user subscription from one user.
 * 
 * Requires the client side state of subscriptions list for a user to 
 * avoid calling on database for user's subscription list. 
 * 
 * @param {} userId
 * @param {String} removeProductId Product ID as listed in Firebase `products`.
 * @param {Array} currentSubs User subscription list before removal of the 
 * product.  Client side list of products is used in order to save another 
 * call to Firebase. 
 */
export async function deleteSub(userId, removeProductId, currentSubs) {
    const newSubs = currentSubs.filter(sub => sub != removeProductId)
    try {
        await updateDoc(doc(firebaseStorage, firestoreDbName, userId), {
            subscriptions: Array.from(newSubs)
        })
    } catch (e) {
        console.error("ERROR: Could not remove subscription: ",
            removeProductId, " ", e)
    }
}

/**
 * Get subscriptions list for one user.
 *
 * @param {String} userId Unique user Firebase ID.
 * @returns User subscriptions list of product ID's as Set 
 * to avoid duplicates.
 */
export async function getSubs(userId) {
    const userProfile = await getUserProfile(userId)
    console.log("SUBS in SUB: ", userProfile.subscriptions)
    // const subsSet = new Set(userProfile.subscriptions)
    if (userProfile.subscriptions) {
        // return subsSet
        return userProfile.subscriptions
    } else {
        return []
    }
}

export async function getProduct() { }

