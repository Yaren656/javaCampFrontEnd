let sayi1 = 10;
sayi1 = "Yaren Yuvka";
let student = {id:1, name:"Yaren"};
//console.log(student);


function save(puan=10, ogrenci) {
    //console.log(ogrenci.name + " : " + puan)
}

save(undefined, student)

let students = ["Yaren Yuvka", "Özgül Özcan", "Fırat Çelik", "Akile Oday"]

//console.log(students)

let students2 = [student, {id:2, name:"Yaren"}, "Ankara", 
{city:"İstanbul"}]
//console.log(students2)

//rest
//params : C#
//varArgs : Java
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeofshowProducts()) 
//showProducts(10, ["Elma", "Armut", "Karpuz"])

let points = [1,2,3,4,50,4,60,14]

console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG","H")

//Destructuring
let populations = [10000, 20000, 30000, [40000,100000]]
let [small, medium, high, [veryHigh, maximum]] = populations //small = 10000, medium = 20000 gibi sıralı atama yapar
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)

let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id, name} = category
console.log(id)
//console.log(name)




