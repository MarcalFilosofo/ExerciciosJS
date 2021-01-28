function switchCleanCode(option) {
    const options = [
        'A',
        'B', 
        'C', 
        'D'
    ]
    return options[option] ? options[option] : 'Opção Inválida'
    
}

const res = switchCleanCode(3)

console.log(res)