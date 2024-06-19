const hqLocation = 42
function distanceFromHqInBlocks(someValue) {
    const distance = someValue - hqLocation
    return distance >= 0 ? distance : -distance
}
function distanceFromHqInFeet (someValue) {
    const blockLenghtInFeet = 264
    return distanceFromHqInBlocks (someValue) * blockLenghtInFeet
}
function distanceTravelledInFeet (start, destination) {
    const blockLenghtInFeet = 264
    const distanceInBlocks = start >= destination ? start - destination : destination - start
    return distanceInBlocks * blockLenghtInFeet
}
function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance <= 400) {
        return 0
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02
    } else if (distance <= 2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
  }
