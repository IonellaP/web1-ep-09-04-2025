const object = [
    {
        name: 'Alice',
        age: 25
    },
    {
        city: "New York",
        country: "USA",
    }
];

function ObjectToArray(obj) {
    const array = obj.map(item => Object.values(item));
    console.log(array);
}

ObjectToArray(object);
