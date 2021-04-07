import {useDispatch} from 'react-redux';

const ShopingCartCard = ({quantity, data, id}) => {
    const dispatch = useDispatch();
    const removeItem = () => dispatch({type:"REMOVE_ITEM", payload: id})

    return(
        <div className="flex flex-col justify-between bg-contain bg-center bg-no-repeat   w-72 sm:w-96 h-96 bg-white text-gray-800 shadow-md overflow-hidden  rounded-md" style={{backgroundImage: `url(${data.image_url})`}}>
          <div className="flex justify-between items-center ml-4 pt-2 pr-8">
            <p 
            className="bg-green-600 text-white bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded">Quantity: {quantity}</p>

            <button 
            onClick={removeItem}
            className="bg-red-600  shadow bg-opacity-95 flex flex-col-reverse px-2 py-1 text-center items-center font-bold text-xs text-white rounded ">Remove</button>
          </div>
          
            <div className="bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8 cursor-pointer">
                <h3 className="text-xl font-bold pb-2">{data.name}</h3>
                <p className=" text-gray-500 text-sm overflow-scroll overflow-x-auto overflow-y-auto ">{data.description}</p>
                
                <span className="text-black-400 ">Price: ${data.price}.</span>
                
            </div>
         
        </div>
    )
}

export default ShopingCartCard;