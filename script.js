const input = prompt('enter a number')

function checkNumber(num) {
    if (isNaN(num)) {
        alert('enter a number')
    }else{
        if (num > 50) {
            alert('this number bigger than 50')
        }else{
            alert('this number smaller than 50')
        }
    }
}

checkNumber(input)