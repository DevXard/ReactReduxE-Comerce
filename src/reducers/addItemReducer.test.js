import addItemReducer from './addItemReducer';



describe("test addItem", function () {
    test("add Item id as key and count as value", function () {
        const action = {type: "ADD_ITEM", payload: "abc"}
        const addItemState = addItemReducer({}, action)
        expect(addItemState).toEqual({ abc: 1 })
    })

    test("remove item", function () {
        
        const removeAction = {type: "REMOVE_ITEM", payload: "abc"}
        const removeItemState = addItemReducer({ abc: 1 }, removeAction)
        expect(removeItemState).toEqual({})
    })
})