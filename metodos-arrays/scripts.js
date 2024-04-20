const array = [1, -2, 3, 4, 5, 9, 8, 11, -12]

function ordenaNumerosPorValorAbsoluto(a, b) {
  a = Math.abs(a)
  b = Math.abs(b)
  return b - a
}

const arrayordenada = array.sort(ordenaNumerosPorValorAbsoluto)
console.log(`Lista ordenada em ordem descrescente com valores absolutos: ${arrayordenada}`)

const arrayDosTresMaiores = arrayordenada.slice(0, 3)
console.log(`Lista com os 3 maiores números: ${arrayDosTresMaiores}`)

const arrayMultiplicada = arrayDosTresMaiores.reduce((valorantigo, element) =>{
  return valorantigo * element
}, 1)
console.log(`O produto dos três maiores números da lista é: ${arrayMultiplicada}`)

function checaProdutoNegativo() {
  if (arrayMultiplicada < 0){
    
  }

}