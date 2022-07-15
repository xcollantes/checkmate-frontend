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
    console.debug("API CALL: Get full catalog of products")
    const products = await getDocs(
        collection(firebaseStorage, firestoreDbName)
    )

    // const productSet = new Set()
    const productSet = []
    products.forEach(productDoc => {
        productSet.push(productDoc.data())
    })
    // productSet.forEach(x => console.log("SET: ", x.product_name))

    console.log("FULL: ", productSet)
    return productSet
}