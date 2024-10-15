function carregar() {
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours()
   msg.innerText = `Agora são ${hora} horas.`
   if (hora >= 0 && hora < 12) {
      img.src = 'ftmanhã.jpeg'
      xave.innerText = 'Bom dia pae!'
   } else if (hora >= 12 && hora <= 18) {
      img.src = 'fttarde.jpeg'
      xave.innerText = 'Bom tarde pae!'
      } else {
      img.src = 'ftnoite.jpeg'
      xave.innerText = 'Bom noite pae!'
      }    
}
