// Звпись даных в LocalSTORANGE

//setItem принимает два параметра ключ и значение 

localStorage.setItem("key", "text")

//получить данные на локальное хранилище
//getItem принимает один параметор: ключ
let str = localStorage.getItem("key")
console.log(str)

localStorage.setItem("numbers1", 1)
localStorage.setItem("numbers2", 2)
localStorage.setItem("numbers3", 3)

let numbers1 = localStorage.getItem('numbers1')
let numbers2 = localStorage.getItem('numbers2')
let numbers3 = localStorage.getItem('numbers3')
//суммирование 
console.log(+numbers1 + +numbers2 + +numbers3)


const btn2 = document.querySelector('#btn2')

btn2.addEventListener('click', () => {
    localStorage.clear();
})

//удалить конкретный ключ 
localStorage.removeItem('kay')

//Перезабись данных в LocalStorage
localStorage.setItem('num1', 100)


/*localStorage.setItem('i', '1')
let i1 = localStorage.getItem('i')
console.log(i1)
if (i < 1, i++) {
    console.log(i)
}*/

//1. Получить текущее значение счетчика на LS
let count = localStorage.getItem('reloadCount')
console.log(count);
//2. если значения нет (первый заход)- то устанавливаем 0
if (count === null || count == 10) {
    count = 0;
} else {
    //3. если такой ключь есть то его значение приобразуем число и записываем в переменую 
    count = +count
}

//4. увеличиваем счетчик на 1 
count = count + 1;

//5. сохраняем новое значение в localStroge
localStorage.setItem('reloadCount', count)

//6.вывод сначение на страницу
document.querySelector('#conter').textContent = count;

//Количиство записей в LS
console.log("количество записей в ls", localStorage.length)


//получение ключа по индексу
console.log(localStorage.key(0))


//Перебор хранилища по индексам
for (let i = 0; i < localStorage.length; i++) {
    //В переменную key  записываем ключ по индексу
    let key = localStorage.key(i)
    // В переменную value  записывает значение по полученному ключу
    let value = localStorage.getItem(key)
    console.log(value)
}

// Массивы ключей и значений LS
// получить все ключи из LS
console.log(Object.keys(localStorage))
// получить все значение из LS 

console.log(Object.values(localStorage))


//вывести вывод всех значений ls в консоль используя цикл
let values = Object.values(localStorage)



for (let value of values) {
    console.log(value)
}


//хранили структуры в LS
let arr = [1, 2, 3, 4, 5]
//преврощаем массив в json и записываем в локальное хранилище
localStorage.setItem('arr', JSON.stringify(arr))

//получаем данные из локального хранилища в переменую strofarr
let strofarr = localStorage.getItem('arr')
console.log(strofarr)

//Приобразуем json в структуру данных
let res = JSON.parse(strofarr)
console.log(res)

//получить список полей ввода и кнопку
//колекция inputs
let inputs = document.querySelectorAll('.input')
//кнопка
let writeToLS = document.querySelector(".writeToLS")

let arrayofInputs
//обработка клика по кнопке
writeToLS.addEventListener('click', function () {
    //Записываем в созданую ранее переменую пустой массив 
    arrayofInputs = []
    //преобразоваем все поля ввода
    for (let input of inputs) {
        //данные поля ввода записываем в массив
        arrayofInputs.push(input.value)
        //отчистка поля вода
        input.value = "";
    }

    console.log(arrayofInputs)

})
localStorage.setItem('arrayofInputs', JSON.stringify(arrayofInputs))

//преобразовать получившейся массив в json
let inputsStr = JSON.stringify(arrayofInputs)

//Записать полученый Json в локальное хранилище
localStorage.setItem('iputs', inputsStr)





inputsOfLS = localStorage.getItem('inputs');

if (inputsOfLS != null) {
    inputsOfLS = JSON.parse(inputsOfLS)
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = inputsOfLS[i]
    }
}