const removeLastNumber = require("../katas/removeLastNumber")

describe("A set of tests to check the functionality of the removeLastNumber function", function(){
    test("Ckeck if when passed an empty array, we return an empty array", function(){
        expect(removeLastNumber([])).toEqual([])
    })

    test("Check if the new array removes the last number", function(){
        expect(removeLastNumber([1, 2, 3, 4])).toEqual([1, 2, 3])
    })

    test("Check if the original array is unchanged / not been mutated", function(){
        // arrange
        const arr = [1, 2, 3, 4]
        const clonedArr = [1, 2, 3, 4]
        // act
        removeLastNumber(arr)
        // assert
        expect(arr).toEqual(clonedArr)
    })
})