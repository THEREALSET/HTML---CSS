let num = document.getElementById('num')
let num2 = document.getElementById('num2')
let text = document.getElementById('text')
function segue() {

    if (num.value.length == 0) {
      alert('[ERRO] digite um número no primeiro bloco') 
      text.innerHTML = '' 
    } else  if(num2.value.length == 0){
        alert('[ERRO] digite um número no segundo bloco')
        text.innerHTML = ''
    } else {
        alert('tudo ok por enquanto')
    }
    let soma = Number(num.value + num2.value)
    let sub = Number(num.value - num2.value)
    let div = Number(num.value / num2.value)
    let mult = Number(num.value * num2.value)
    let pot = Number(num.value ** num2.value)
    text.innerHTML += `<br>A soma dos dois números é ${soma}<br>`
    text.innerHTML += `A subtração dos dois números é ${sub}<br>`
    text.innerHTML += `A divisão dos dois números é ${div}<br>`
    text.innerHTML += `A multiplicação dos dois números é ${mult}<br>`
    text.innerHTML += `A potenciação dos dois números é ${pot}<br>`
    let xave = typeof soma
}