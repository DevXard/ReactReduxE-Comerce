import {total} from './helpers';
import data from '../data.json';

describe('Total', function () {
    test('should test total amount of cart items', function () {
        const items = {
        "3fdd689a-02cc-4ae7-903b-f6d2776ff3b9": 2,
        "47314fa1-ae56-4eae-80be-af6691145951": 1
        }
        const itmsList = data
        
        const totalCost = total(itmsList, items);
        expect(totalCost).toEqual(419.99)
        
    })
})
