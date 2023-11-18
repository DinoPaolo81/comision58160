import { db } from "../firebaseConfig"

import { getDocs, collection, query, where, getDoc, doc } from "firebase/firestore"

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productsRef = categoryId 
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')

        getDocs(productsRef)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(documentSnapshot => {
                    const fields = documentSnapshot.data()
                    
                    return {
                        id: documentSnapshot.id,
                        ...fields
                    }
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    }) 
}

export const getProductById = (itemId) => {
    const productRef = doc(db, 'products', itemId)

    return getDoc(productRef)
                .then(documentSnapshot => {
                    const fields = documentSnapshot.data()
                    const productAdapted = { id: documentSnapshot.id, ...fields }
                    return productAdapted
                })
                .catch(error => {
                    return error
                })
}