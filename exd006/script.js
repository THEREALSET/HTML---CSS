let val = document.getElementById('val')
let nai = document.getElementById('num')
let res = document.getElementById('res')
let valore = []

function Verina(n, b)  {
    if (b.indexOf(Number(n)) != -1) { //vai buscar em qual posisão esta o parâmetro "n"(que é o número adicionado), e depois vai comparar se esse valor é diferente de -1, que seria o resultado da conta caso o não ouvesse valor adicionado adicionado 
        return true
    } else {
        return false
    }
}

function Verinu(n) {
    if (Number(n) >= 1 && Number(n) <= 100) { //vai procurar saber se o parâmetro "n"(que é o número adicionado), é maior ou igual a 1 e menor ou igual a 100
        return true
    } else {
        return false
    }
} 

function adicionar() {
    if (Verinu(nai.value) && !Verina(nai.value, valore)) { //vai fazer o chamado das duas functions superiores
       valore.push(Number(nai.value)) //esse código cria um elemento na ultima posição do vetor valore, e esse valor criado é o número digitado pelo cliente
       let item = document.createElement('option') //cria um elemento option
       item.innerHTML += `${num.value} <br>`//cria um elemento digitado no html atravez da let item
       val.appendChild(item) //considera a let item como filho da let val
       res.innerHTML = '' //limpa o res todo vez que o botão de adicionar é ativado
    } else {
        alert('[ERRO] Número inválido') //manda um alert se algumas das funções dem resultado false
    }   
}
let tot = valore.length
function finalizar() {
     if (valore.length == 0) { //se não ouver nenhum número adicionado, é enviado um alert 
        alert(`[ERRO] Digite um Número `)
     } else { //se não
        let maior = valore[0]
        let menor = valore[0]
        let soma = 0
        for(let pos in valore) { //vai se atribuindo o valor um toda vez que esse código é executado e novamente é true
            soma += valore[pos]
            if (valore[pos] > maior) //se o valor da casa 0 do array valore for maior que 0, a let maior recebe o valor da casa 0 do array valore
                maior = valore[pos]
            if (valore[pos] < menor) //se o valor da casa 0 do array valore for menor que 0, alet menos recebe o valor da casa 0 do array valore
                menos = valore[pos]
        }
         let media = soma / tot
        res.innerHTML += `<p>Ao todo, temos ${valore.length} números cadastrados.<p>` //mostra a quantidade de números adicionados
        res.innerHTML += `<p>O menor valor foi ${menor}.<p>` //mostra o menor número
        res.innerHTML += `<p>O maior valor foi ${maior}.<p>` //mostra o maior número
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.<p>` // mostra a soma de todos os valores
     }
        
}