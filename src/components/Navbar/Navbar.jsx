import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <nav className={classes.container}>
            <h1 onClick={() => navigate('/')}>Guitarras Dino Menichini</h1>
            <section>
                <NavLink to='/category/Criollas' className={({ isActive }) => isActive ? classes.active : ''}>Criollas</NavLink>
                <NavLink to='/category/Acústicas' className={({ isActive }) => isActive ? classes.active : ''}>Acústicas</NavLink>
                <NavLink to='/category/Eléctricas' className={({ isActive }) => isActive ? classes.active : ''}>Eléctricas</NavLink>
            </section>
            <CartWidget />
        </nav>
    )
} 

export default Navbar