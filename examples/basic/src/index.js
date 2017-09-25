import React from 'react'
import mirror, { render, effects, actions } from 'mirrorx'
import mirrorLoading from 'mirror-loading'

import appModel from './model'
import App from './App'

mirror.model(appModel)

// after models
mirrorLoading(mirror, { effects: true })

render(<App />, document.getElementById('root'))
