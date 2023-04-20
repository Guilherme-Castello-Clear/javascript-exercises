import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'
import Multi, { BoaNoite } from './componentes/Multiplos'

ReactDOM.render(<div>
    <Multi.BoaTarde nome='Elis'/>
    <BoaNoite nome='Maria'/>
</div>, document.getElementById('root'))