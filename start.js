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
let checkboxStatus = true
let flexRow = document.querySelector('.flex-row').style

let articleSecondUser = document.getElementById('articleSecondUser')

const output = document.getElementById('section-output-text')

document.getElementById('show-result').addEventListener('click', () => {
    let result = null

    if (checkboxStatus) {
        firstUser.name = String(document.getElementById("firstUser").value)
        firstUser.height = Number(document.getElementById("heightFirstUser").value)
        firstUser.mass = Number(document.getElementById("weightFirstUser").value)

        result = firstUser.mass / ((firstUser.height/100)**2)

        result = result.toFixed(1)

        return output.innerText = `${firstUser.name} при росте: ${firstUser.height}см., и массе ${firstUser.mass}кг., ваш индекс массы тела составляет ${result}`
    } else {
        firstUser.name = String(document.getElementById("firstUser").value)
        firstUser.height = Number(document.getElementById("heightFirstUser").value)
        firstUser.mass = Number(document.getElementById("weightFirstUser").value)

        lastUser.name = String(document.getElementById("secondUser").value)
        lastUser.height = Number(document.getElementById("heightSecondUser").value)
        lastUser.mass = Number(document.getElementById("weightSecondUser").value)

        let userOne = Number(firstUser.mass / ((firstUser.height/100)**2)).toFixed(1)
        let userTwo = Number(lastUser.mass / ((lastUser.height/100)**2)).toFixed(1)

        if (userOne > userTwo) {
            return output.innerText = `${firstUser.name} с ростом: ${firstUser.height}см., весом: ${firstUser.mass}кг., и BMI: ${userOne}, имеет больший индекс массы тела, чем ${lastUser.name} с ростом: ${lastUser.height}см., весом: ${lastUser.mass}кг., и BMI: ${userTwo}`
        } else {
            return output.innerText = `${lastUser.name} с ростом: ${lastUser.height}см., весом: ${lastUser.mass}кг., и BMI: ${userTwo}, имеет больший индекс массы тела, чем ${firstUser.name} с ростом: ${firstUser.height}см., весом: ${firstUser.mass}кг., и BMI: ${userOne}`
        }
    }
})

document.getElementById('checkboxSecondUser').addEventListener('click', () => {
    if (checkboxStatus) {
        articleSecondUser.innerHTML = '<h3 class="section-parameters-subtitle display-none">Введите имя</h3> ' +
            '<input type="text" placeholder="Введите имя" min="0" class="input display-none" id="secondUser">' +
            '<h3 class="section-parameters-subtitle">Введите рост</h3>\n' +
            '<input type="number" placeholder="В сантиметрах" min="0" class="input" id="heightSecondUser">\n' +
            '<h3 class="section-parameters-subtitle">Введите вес</h3>\n' +
            '<input type="number" placeholder="В кг." min="0" class="input" id="weightSecondUser">'

        flexRow.cssText = `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center; 
        `
        document.getElementById('articleFirstUser').style.cssText = `margin-right: 10px`

        checkboxStatus = false
    } else {
        articleSecondUser.textContent = ''
        flexRow.cssText = ``

        checkboxStatus = true
    }
})
