import {useSelector} from 'react-redux';
import ShopingCartCard from './ShopingCartCards'
const ShopingCartPage = () => {
    const {items, addItem} = useSelector(data => data)
    const cartList = Object.keys(addItem)
    return (
        <div>
            <h1>ShopingCart</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-4 lg:grid-cols-3  gap-4 p-5 ">
                {cartList.map(item => <ShopingCartCard key={item} quantity={addItem[item]} data={items.products[item]}/>)}
            </div>
            
        </div>
    )
}

export default ShopingCartPage;