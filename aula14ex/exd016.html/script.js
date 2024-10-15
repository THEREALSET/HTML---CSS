function verificar() {
   var nub = document.getElementById('num')
   var res = document.getElementById('res')
   if (nub.value.lenght == 0) {
    alert('Digite um número!')
   } else {
      var n = Number(nub.value)
      var t1 = 1
      res.innerHTML = ''
   }
   while (t1 <= 10){
      var item = document.createElement('option')
      item.innerHTML += `${n} x ${t1} =  ${n*t1}`
      res.appendChild(item)
      t1++
      item.style.textAlign = 'center'
   }
}