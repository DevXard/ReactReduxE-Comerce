import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {total} from '../../helpers/helpers';


const ShopingCart = () => {
    const {items, addItem} = useSelector(data => data)
    
    const totalCost = total(items, addItem)
    
    return( 
        <div >
            <Link to='/cart'>
                <h1 className="absolute top-5 right-5 bg-green-100 px-2 rounded-md">Cart Total: {totalCost}</h1>
            </Link>   
        </div>
    )
}

export default ShopingCart;

