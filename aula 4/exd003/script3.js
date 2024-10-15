function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (Number(fano.value) == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Sua idade é de ${idade} anos!`
        genero = ''
    } if (sex[0].checked) {
        genero = 'Homem'
    } else if (sex[1].checked) {
        genero = 'Mulher'
    }
    res.innerHTML = `Você é ${genero} com ${idade} anos.`
}