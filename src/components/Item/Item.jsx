import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {
    // const navigate = useNavigate()

    const handleClick = (e) => {
        e.stopPropagation()
        console.log('click en item')
    }

    return (
        <div onClick={handleClick} style={{ marginBottom: 50}}>
            <h1>{name}</h1>
            <img src={img} style={{ width: 200}}/>
            <h2>${price}</h2>
            {/* <button onClick={() => navigate('/item')}>Ver detalle</button> */}
            <Link to={`/item/${id}`}>Ver detalle</Link>
        </div>
    )
}

export default Item