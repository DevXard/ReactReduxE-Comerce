import {useSelector} from 'react-redux';
import Item from './Item';

const ItemsList = () => {
    const items = useSelector(data => data.items.products)
    const keys = Object.keys(items)
    
    
    return (
        <div className="p-10 bg-gray-100">
            
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 gap-4 lg:grid-cols-3  gap-4 p-5 ">
            {keys.map(key => <Item key={key} data={items[key]} id={key}></Item>)}
            </div>
            
        </div>
    )
}

export default ItemsList;

// {data.map(item => <Item >{item.name}</Item>)}