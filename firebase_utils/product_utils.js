/**
 * Functions for handling interactions with Firebase storage of product data.
 */

import { collection, getDocs } from 'firebase/firestore'
import { firebaseStorage } from '../firebaseApp'

import config from "../config.json"

const firestoreDbName = config.FIREBASE_PRODUCTS_DATABASE_NAME

/**
 * Call on Firebase storage to get entire catalog of products.
 */
export async function getAllProducts() {
    console.debug("API CALL: product utils.Get full catalog of products")
    const products = await getDocs(
        collection(firebaseStorage, firestoreDbName)
    )
    let productArray = []
    products.forEach(productDoc => {
        productArray.push(productDoc.data())
    })
    return productArray
}

/**
 * Get all possible categories used in product database.
 * @param {} productList Products with categories to be extracted.
 * @returns Array of categories given a list of products.
 */
export function getCategories(productList) {
    console.debug("API CALL: product utils. getcategories")
    const categories = productList?.map(product => product.category)
    const categorySet = new Set(categories)
    return categorySet
}

/**
 * Convert text to proper case. 
 * @param {String} text To convert. 
 */
export function toProperCase(text) {
    if (text == null || typeof text == "undefined") {
        return ""
    }
    const result = text.toLowerCase()
    const firstLetter = result.charAt(0).toUpperCase()
    return firstLetter.concat(result.slice(1, result.length))
}