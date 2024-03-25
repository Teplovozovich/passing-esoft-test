function deepCopy(obj, hash = new WeakMap()) {
    if (Object(obj) !== obj) {
        return obj;
    }

    if (hash.has(obj)) {
        return hash.get(obj);
    }

    let result = Array.isArray(obj) ? [] : {};

    hash.set(obj, result);

    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            result[key] = deepCopy(obj[key], hash);
        } else {
            result[key] = obj[key];
        }
    });

    return result;
}

// const originalObject = {
//     a: 1,
//     b: { c: 2 },
//     d: [3, 4],
// };

// const copiedObject = deepCopy(originalObject);

// console.log('Original Object:', originalObject);
// console.log('Copied Object:', copiedObject);

