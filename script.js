
    let name = prompt('Введите свое имя')
    let age = +prompt('Введите год рождения')
    let year = +prompt('Введите  нынешний год')
    
    function sym() {
        return year - age
    }
    alert(`Вас зовут: ${name}`+ '. Вам ' + sym() + ' лет')
    
let how = +prompt('Введите количество примеров');
    
function random(min, max) { 
        return Math.floor(Math.random() * (max - min) + min)
}
     
function mathrandom() {
        return Math.floor(Math.random() * (5 - 1) + 1)
}
     
for(let i = 0; i < how; i++) {
        let randomnum1 = random(1,10);
        let randomnum2 = random(1,10);
        let randomnum3 = mathrandom();
    
    if(randomnum3 == 1) {
        randomnum1 + randomnum2
        var answer = randomnum1 + randomnum2
        randomnum3 = '+'
    }else if(randomnum3 == 2) {
        randomnum1 - randomnum2
        var answer = randomnum1 - randomnum2
        randomnum3 = '-'
    }else if(randomnum3 == 3) {
        randomnum1 * randomnum2
        var answer = randomnum1 * randomnum2
        randomnum3 = '*'
    }else if(randomnum3 == 4) {
        randomnum1 / randomnum2
        var answer = randomnum1 / randomnum2
        randomnum3 = '/'
    }
    
    let teg = +prompt(`${randomnum1} ${randomnum3}  ${randomnum2}`)
    
    alert(answer == teg ? 'Ваш ответ верный ' + teg : ' Ваш ответ не верный ' + teg + ' Верный ответ ' + answer);
}
    
     
     
    
    