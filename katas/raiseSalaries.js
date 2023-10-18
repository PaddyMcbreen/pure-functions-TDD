function raiseSalaries(arr, raise) {

    if (arr.length === 0) {
        return [];
        
    } else {
        return updatedArr = arr.map((salaryObj) => {
            return ({name:salaryObj.name, salary:(salaryObj.salary / 100)* (100 + raise)});
        });
    }
}

module.exports = raiseSalaries;