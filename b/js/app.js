function randomIntBetweenOneAndHundred() {
    return Math.floor(Math.random() * 100) + 1;
}

function findRootsOfQuadratic(a, b, c) {    
    const root_part = Math.sqrt(b * b - 4 * a * c);

    const denom = 2 * a;

    const root1 = ( -b + root_part ) / denom;
    const root2 = ( -b - root_part ) / denom;
    
    return {root1, root2}
}

function namesToJson(names) {
    return names.split(',');
}