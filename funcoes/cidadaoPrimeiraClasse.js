function fun1(){ }

const  fun2 = function (){}

const array = [function(a, b){return a + b}, fun2]
console.log(array[0](2, 3))

const obj = {}
obj.falar = function () {return 'Opa'}

function run(fun){
    fun()
}
