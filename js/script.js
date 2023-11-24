let random_num = Math.floor(Math.random()*100)

let user_number = document.getElementById('user_number')
let result = document.getElementById('result')

document.addEventListener('input' , random_number)

function random_number(){
    if (user_number.value == random_num){
        alert ('Ви перемогли!')
        location.reload()
    } else if (user_number.value < random_num){
        result.textContent =(`Число більше ніж ${user_number.value}`)
    }else if (user_number.value > random_num){
        result.textContent =(`Число меньше ніж ${user_number.value}`)
    }
}