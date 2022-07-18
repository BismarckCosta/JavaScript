let num = [5,6,9,8,3]
num.sort()
num.push(1)
console.log(num);
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor do valor é ${num[0]}`)
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
