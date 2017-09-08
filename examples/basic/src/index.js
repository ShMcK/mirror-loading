import React from 'react'
import mirror, { render, effects } from 'mirrorx'

import appModel from './model'
import App from './App'

mirror.model(appModel)

render(<App />, document.getElementById('root'))