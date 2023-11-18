import { useEffect, useState } from "react"
// import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
// import { getDoc, doc } from "firebase/firestore"
// import { db } from "../../services/firebase/firebaseConfig"
import { getProductById } from "../../services/firebase/firestore/products"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        // getDoc(productRef)
        //     .then(documentSnapshot => {
        //         const fields = documentSnapshot.data()
        //         const productAdapted = { id: documentSnapshot.id, ...fields }
        //         setProduct(productAdapted)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
        //     .finally(() => {
        //         setLoading(false)
        //     })
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    if(loading) {
        return <h1>Cargando Producto</h1>
    }

    if(!product) {
        return <h1>El producto no existe</h1>
    }

    return (
        <main style={{ background: 'white'}}>
            <h1>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer