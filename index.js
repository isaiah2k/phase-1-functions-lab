const hqLocation = 42
// Function to calculate the distance in blocks from HQ
function distanceFromHqInBlocks(someValue) {
    const distance = someValue - hqLocation
    return distance >= 0 ? distance : -distance
}
// Function to calculate the distance in feet from HQ
function distanceFromHqInFeet (someValue) {
    const blockLenghtInFeet = 264
    return distanceFromHqInBlocks (someValue) * blockLenghtInFeet
}
// Function to calculate the distance traveled in feet between two blocks
function distanceTravelledInFeet (start, destination) {
    const blockLenghtInFeet = 264
    const distanceInBlocks = start >= destination ? start - destination : destination - start
    return distanceInBlocks * blockLenghtInFeet
}
// Function to calculate the fare price based on the distance traveled
function calculatesFarePrice (start, destination) {
    // Calculates the distance traveled in feet
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        // Free ride for distances <= 400 feet
        return 0
    } 
    // $0.02 per foot for distances between 401 and 2000 feet
    else if (distance <= 2000) {
        return (distance - 400) * 0.02
    } 
    // Flat fare of $25 for distances between 2001 and 2500 feet
    else if (distance <= 2500) {
        return 25
    } 
    // No service for distances greater than 2500 feet
    else {
        return 'cannot travel that far'
    }
  }
