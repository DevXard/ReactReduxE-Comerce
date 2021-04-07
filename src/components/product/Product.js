import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const Product = () => {
    const {id} = useParams()
    const {products} = useSelector(data => data.items)
    const {description, name, image_url, price} = products[id]

    const dispatch = useDispatch();

    const addItem = () => dispatch({type:"ADD_ITEM", payload: id})
    const removeItem = () => dispatch({type:"REMOVE_ITEM", payload: id})

    return(
        <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img src={image_url} class="w-full relative z-10" alt=""/>
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10">
                    <h1 class="font-bold uppercase text-2xl mb-5">{name} </h1>
                    <p class="text-sm">{description}</p>
                </div>
                <div>
                    <div class="inline-block align-bottom mr-5">
                        <span class="font-bold text-5xl leading-none align-baseline">${price}</span>
                    </div>
                    <div class="inline-block align-bottom">
                        <button 
                        onClick={addItem}
                        class="bg-green-300 opacity-75 m-2 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> Add to cart</button>
                        <button 
                        onClick={removeItem}
                        class="bg-green-300 opacity-75 m-2 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> Remove </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Product;