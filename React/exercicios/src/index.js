import React from 'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Craudin"/>
            <Filho nome="Jose"/>
            <Filho nome="Maises"/>
            <Filho nome="Zé"/>
        </Pai>
    </div>
    , document.getElementById('root')
)

// 