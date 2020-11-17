// Code your solution here
function findMatching(drivers, string){
    let arr1 = drivers.filter(driver => driver.toUpperCase() == string.toUpperCase())
    return arr1
}

function fuzzyMatch(drivers, string){
    let arr1 = drivers.filter(driver => driver[0] == string[0])
    return arr1
}

function matchName(drivers, string){
    let arr1 = drivers.filter(driver => driver.name == string)
    return arr1
}