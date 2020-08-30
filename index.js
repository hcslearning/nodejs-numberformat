const numeral = require('numeral')

// settings
numeral.register('locale', 'es-CL', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousands: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '$'
    }
})
numeral.locale('es-CL')

// example 
const formats = [
    '$0,0.00', 
    '($0,0)', 
    '+0,0'
]
const numeros = [100500.58, -100500.605]

formats.forEach( f => {
    numeros.forEach( n => {
        const formateado = numeral( n ).format( f )
        console.log(n, '\t|', f, '\t\t|', formateado)
    })
})
