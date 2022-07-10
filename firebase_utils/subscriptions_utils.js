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
    subs.add(productId)
    try {
        await updateDoc(doc(firebaseStorage, firestoreDbName, userId), {
            subscriptions: Array.from(subs)
        })
    } catch (e) {
        console.error("ERROR: Could not add product: ", productId, " ", e)
    }
}

export async function deleteSub() { }

/**
 * Get subscriptions list for one user.
 *
 * @param {String} userId Unique user Firebase ID.
 * @returns User subscriptions list of product ID's as Set 
 * to avoid duplicates.
 */
export async function getSubs(userId) {
    const userProfile = await getUserProfile(userId)
    return new Set(userProfile.subscriptions)
}

export async function getProduct() { }

