import ItemsReducer from './itemsReducer'
import data from '../data.json'

describe("Items reducer Data", function () {
    test("data", function () {
        const itemsData = ItemsReducer()
        
        expect(itemsData).toEqual(data)
    })
})