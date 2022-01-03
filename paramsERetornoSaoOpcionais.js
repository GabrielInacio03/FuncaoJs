function area(largura = 0, altura = 0){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
console.log(area(4, 8))
console.log(area(2))
console.log(area())
console.log(area())
console.log(area(2,5,6,8))