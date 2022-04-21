let assocArr = {"name": "Zaphod", "type": "Pokemon"}

function invertHash(assocArr) {
    let newObj = {};
    for(key in assocArr) {
        newObj[assocArr[key]] = key;
    }

    return newObj;
}

console.log(invertHash(assocArr));