import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react'
import ShopingCartCard from './ShopingCartCards'
import {total} from '../../helpers/helpers';

// THis is the page for the standalone Shoping Cart
const ShopingCartPage = () => {
    const dispatch = useDispatch();
    const {items, addItem, discount} = useSelector(data => data)
    const [formData, setFormData] = useState('')
    

    const handleChange = (e) => {
        e.preventDefault();
        setFormData(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        dispatch({type: formData, payload: totalCost})
    }

    const cartList = Object.keys(addItem)

    const totalCost = total(items, addItem)
    


    return (
        <div>
            {totalCost > 0 ? <h1 className="flex justify-center text-2xl">Total Cost: {totalCost}</h1>: null} 
            {discount <= 0 || totalCost === 0 ? 
            <div className="flex m-2 justify-center">
            <form onSubmit={onSubmit}>
                <input
                onChange={handleChange}
                value={formData}
                className='bg-gray-100 p-1 outline-none rounded-md' type="text" placeholder="Discount Code"/>
                <button className='bg-green-200 p-1 rounded-md m-1' >Submit</button>
            </form>
        </div> :
        <div className="flex justify-center">
            <h1 className=" p-1 rounded-xl text-black m-1 bg-yellow-200 ">Code: {discount.code} </h1>
            
            <h1 className=" p-1 rounded-xl text-black m-1 bg-green-500 "> Price is : {totalCost - (totalCost * discount.percent)}</h1>
        </div>
        
    }
            
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-4 lg:grid-cols-3  gap-4 p-5 ">
                {cartList.length === 0 ? 
                    <h1 className="text-3xl col-start-1 col-span-5 text-center ">Cart is empty</h1> 
                    :
                    cartList.map(item => <ShopingCartCard key={item} id={item} quantity={addItem[item]} data={items.products[item]}/>)}
            </div>
            
        </div>
    )
}

export default ShopingCartPage;

// {totalCost > 0 ? <h1 className="flex justify-center text-2xl">Discounted Cost: {totalCost - (totalCost * 0.2)}</h1>: null}