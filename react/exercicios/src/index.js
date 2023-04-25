import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Multi, { BoaNoite } from './componentes/Multiplos'
import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'


ReactDOM.render(<div>
    <Pai sobrenome='Castello' nome="Guilherme">
        <Filho nome="Pedro" sobrenome='Castello'></Filho>
        <Filho nome="Guilherme" sobrenome='Castello'></Filho>
        <Filho nome="Lucia" sobrenome='Castello'></Filho>

    </Pai>
    </div>, document.getElementById('root'))