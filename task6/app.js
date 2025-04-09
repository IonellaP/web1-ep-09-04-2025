function mergeObjects(object1, object2) {
    return Object.assign({}, object1, object2);
}

console.log(mergeObjects({a: 1, b: 2}, {b: 3, c: 4}));