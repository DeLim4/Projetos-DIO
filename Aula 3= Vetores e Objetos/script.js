let array = ['string', 1, true, ['array1'],['array1', true,1],['array1'],['array1']]
console.log(array[1])

//foEach
array.forEach(function (item, index) {
    console.log(item, index)
})

//push

let novoArray = array.splice(0, 3)
console.log(novoArray)

let object = { string: 'string', number: 1, Boolean: true, array: ['array'], objectInterno: { objectInterno: 'objeto interno' } };

console.log(object.objectInterno)

var guga = object.number
console.log(guga)

var { string, Boolean, objectInterno } = object

console.log(string, Boolean, objectInterno)