const products = [
    { 
        id: '1', 
        name: 'Guitarra Gibson Les Paul Tribute', 
        price: 2000, 
        category: 'Eléctricas', 
        img:'https://http2.mlstatic.com/D_NQ_NP_879608-MLA46364651503_062021-O.webp', 
        stock: 25, 
        description:'La guitarra Les Paul Tribute captura la vibración, la sensación y el tono de una Les Paul tradicional.'
    },
    { id: '2', name: 'Guitarra criolla clásica Gracia ', price: 2500, category: 'Criollas', img:'https://http2.mlstatic.com/D_NQ_NP_995978-MLA44546834689_012021-O.webp',description:'Con un toque artesanal único plasmado en sus materiales, Gracia acompaña a la historia musical desde el año 1870. Sus guitarras poseen alcance internacional y son utilizadas tantos por principiantes como por grandes referentes de la música.'},
    { id: '3', name: 'Guitarra Electroacustica Taylor Gte Mahogany', price: 2500, category: 'Acústicas', img:'https://http2.mlstatic.com/D_NQ_NP_2X_858013-MLA51618745787_092022-F.webp', description:'La GTe Mahogany es el último modelo que se une a la familia GT (Grand Theatre) de Taylor y ofrece una apariencia fresca con su construcción completamente de caoba y un carácter musical arraigado. Sónicamente, puede esperar un rango medio amaderado con un fuerte enfoque en la nota fundamental y un ataque equilibrado, gracias al efecto de compresión natural de la caoba, especialmente como material superior.'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}