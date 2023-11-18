import cart from './assets/carrito1.png'
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useCart()

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/cart')}>
         <img src={cart} className='btn btn-danger' style={{ width: 50}}/>
        
            {totalQuantity}
        </button>
    )
}

export default CartWidget