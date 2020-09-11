
export default () => {

   
        let listaNumeros = []
        let num_longo = 0
        let num_curto = 0
        let num_ponto = 0
        let num_branco = 0
        let incluir = false

 

        do {
            const numero = parseInt((Math.random() * (5 + 1)) + 1)
            if (numero === 1 || numero === 2) {
                if (num_longo < 7) {
                    incluir = true
                    num_longo++
                } else {
                    incluir = false
                }
            }
            if (numero === 3 || numero === 4) {
                if (num_curto < 7) {
                    incluir = true
                    num_curto++
                } else {
                    incluir = false
                }
            }
            if (numero === 5) {
                if (num_ponto < 7) {
                    incluir = true
                    num_ponto++
                } else {
                    incluir = false
                }
            }
            if (numero === 6) {
                if (num_branco < 4) {
                    incluir = true
                    num_branco++
                } else {
                    incluir = false
                }
            }

 
            if (incluir) {
                    listaNumeros.push(numero)
                }
        } while (listaNumeros.length < 25);
        return listaNumeros
    }

   

  

    


