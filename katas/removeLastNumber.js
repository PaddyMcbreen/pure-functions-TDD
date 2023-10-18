function removeLastNumber (arr){
    if (arr.length === 0) return []

    const clonedArr = arr.slice(0, 3)
    console.log(arr)
    console.log(clonedArr)

    return clonedArr
}


module.exports = removeLastNumber;
