let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let val = []

function isnumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true 
    } else {
        return false
    }
}

function islista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isnumero(num.value) && !islista(num.value, val)) {
        val.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido Ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}


function finalizar() {
    if (val ==0) {
        window.alert('ADICIONE UM NÚMERO POR FAVOR')
    } else {
        let tot = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0
        let media = 0
        for(let pos in val) {
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]
            if (val[pos < menor])
                menor = val[pos]
        }
        media = soma / tot 
        res.innerHTML = ''
        res.innerHTML += `<p>O menor número é ${menor}</p>`
        res.innerHTML += `<p>O maior número é ${maior}</p>`
        res.innerHTML += `<p>Temos ${tot} números carregados.</p>`
        res.innerHTML += `<p>Somando tudo temos ${soma}</p>`
        res.innerHTML += `<p>A media é${media}</p>`
    }
}