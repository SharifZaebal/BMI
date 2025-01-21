/* ЗАДАЧА:

1. - Вам нужно создать калькулятор индекса массы тела (BMI).

2. - Индекс массы тела рассчитывается по формуле: 
вес в Кг / Рост в квадрате.

Например, масса человека = 74 кг, рост = 172 см. Следовательно, индекс массы тела в этом случае равен:
ИМТ = 74кг / 1,722м² ≈ 25,01 кг/м²

3. Сравнить массы тел двух людей (данные ниже), и вывести в консоль сравнения двух результатов в булевом значении (true / false).

ДАННЫЕ:

    Петр: Вес: 72кг рост: 1.88м
    Денис: Вес: 82кг рост: 1.73м

4. У кого индекс BMI больше?

*/

let firstUser = {
    name: null,
    height: null,
    mass: null,
}
let lastUser = {
    name: null,
    height: null,
    mass: null,
}
let checkboxStatus = false

const output = document.getElementById('section-output-text')

document.getElementById('show-result').addEventListener('click', () => {
    let result

    firstUser.name = String(document.getElementById("firstUser").value)
    firstUser.height = Number(document.getElementById("heightFirstUser").value)
    firstUser.mass = Number(document.getElementById("weightFirstUser").value)

    result = firstUser.mass / ((firstUser.height/100)**2)

    result = result.toFixed(1)

    return output.innerText = `${firstUser.name} при росте: ${firstUser.height}см., и массе ${firstUser.mass}кг., ваш индекс массы тела составляет ${result}`
})

document.getElementById('checkboxSecondUser').addEventListener('click', () => {
    if (checkboxStatus) {
        checkboxStatus = false
        console.log(checkboxStatus)
    } else {
        checkboxStatus = true
        console.log(checkboxStatus)
    }
})

// document.getElementById("firstUser").value,
// document.getElementById("heightFirstUser").value,
// document.getElementById("weightFirstUser").value,

// document.getElementById("lastUser").value,
// document.getElementById("heightLastUser").value,
// document.getElementById("weightLastUser").value,