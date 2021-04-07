import {useSelector} from 'react-redux';
import ShopingCartCard from './ShopingCartCards'
const ShopingCartPage = () => {
    const {items, addItem} = useSelector(data => data)
    const cartList = Object.keys(addItem)
    return (
        <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-4 lg:grid-cols-3  gap-4 p-5 ">
                {cartList.length === 0 ? 
                    <h1 className="text-3xl col-start-1 col-span-5 text-center ">Cart is empty</h1> :
                    cartList.map(item => <ShopingCartCard key={item} id={item} quantity={addItem[item]} data={items.products[item]}/>)}
            </div>
            
        </div>
    )
}

export default ShopingCartPage;