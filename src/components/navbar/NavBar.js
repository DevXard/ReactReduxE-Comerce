import ShopingCart from '../shopingCart/ShopingCart';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="flex justify-end h-16 shadow-md bg-white text-black relative font-mono">
            <Link className="absolute left-5 top-4 text-2xl" to='/'>Home</Link>
            
            <ShopingCart />
        </nav>
    )
}

export default NavBar;