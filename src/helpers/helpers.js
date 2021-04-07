//it calculates the total cost of the items in the cart
export function total(itemsList, items ){
    const cartList = Object.keys(items)
    
    const total = cartList.reduce((acc, item) =>{
        return acc + (itemsList.products[item].price * items[item])
    },0)
    return total
}