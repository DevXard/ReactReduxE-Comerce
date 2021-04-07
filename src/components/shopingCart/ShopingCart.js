import {useSelector} from 'react-redux';
// import ShopingCartCard from './ShopingCartCards';

const ShopingCart = () => {
    const {items, addItem} = useSelector(data => data)
    // console.log(items, addItem)
    const cartList = Object.keys(addItem)
    
    const total = cartList.reduce((acc, item) =>{
        return acc + (items.products[item].price * addItem[item])
    },0)
    console.log(total)
    return( 
        <div >
            <h1 className="absolute top-5 right-5 bg-green-100 px-2 rounded-md">Cart Total: {total}</h1>
            
        </div>
    )
}

export default ShopingCart;

// {cartList.map(item => <ShopingCartCard key={item} data={items.products[item]}/>)}