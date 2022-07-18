function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src','menino.png')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src','moço.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulto.png')
            } else {
                //idoso
                img.setAttribute('src','senhor.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                //criança
                img.setAttribute('src','menina.png')
            } else if (idade <= 20) {
                //jovem
                img.setAttribute('src','moça.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','adulta.png')
            } else {
                //idoso
                img.setAttribute('src','senhora.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}