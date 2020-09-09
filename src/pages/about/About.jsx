import React from 'react'
import Typography from '@material-ui/core/Typography';
import './about.css'



export default props => (
    <div > 
        <h1 className='title'>  Regras da Instrução 61</h1>
        <Typography paragraph className='paragrafo'>
                    Para a INSTRUÇÃO 61, para quatro instrumentos quaisquer, são necessários
           100 cartões quadriculados, divididos em quatro grupos de 25, um grupo 
           para cada instrumento, respectivamente.
        </Typography>
        <Typography paragraph className='paragrafo'      >
            Em cada grupo de 25 cartões, 7 tem linha longa, 7 uma linha curta, 7 um
            ponto e 4 estão em branco.
        </Typography>
        <Typography paragraph className='paragrafo' >
                   As linhas, quando na posição horizontal, e o ponto, leia-se um único som.
        </Typography>
        <Typography paragraph className='paragrafo' >
                   As linhas, quando na posição vertical, leia-se um grupo de sons.
        </Typography>  
        <Typography paragraph className='paragrafo' >
                   Quando na posição horizontal a linha longa, em relação a curta, tem maior duração e vice-versa.
        </Typography>
        <Typography paragraph className='paragrafo' >
                  Quando na posição vertical a linha longa, em relação a curta, tem maior número de sons agrupados e vice-versa.
        </Typography> 
        <Typography paragraph className='paragrafo' >
                   O ponto é sempre som isolado de duração a mais curta possível.
        </Typography>  
        <Typography paragraph className='paragrafo' >
                  Os cartões em branco são pausas=silêncios=ausência de sons/sons.
        </Typography>
        <Typography paragraph className='paragrafo' >
                  A relatividade entre os valores acima estabelecidos e as alturas e intensidades dos sons ficam na dependência 
                  do momento.
        </Typography>    
        <Typography paragraph className='paragrafo' >
                  A ordem e o tempo de exposição de cada cartão depende, direta e exclusivamente, 
                  de quem os manipula.
        </Typography> 
        <Typography paragraph className='paragrafo' >
                  O trabalho (a composição) a ser realizada pode ser de qualquer duração.
        </Typography>    
       
    </div>
)
