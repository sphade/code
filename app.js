const name = 'lawal adebola'
const obj ={
    name:'lawal',
    age:19,
    height:'199mm',
    race:'black',
    eyeColor:'black',
    handsomeRating:'9.9',
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}
console.log(obj)
