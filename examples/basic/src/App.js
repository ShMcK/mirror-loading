import React from 'react'
import { actions, connect } from 'mirrorx'

const App = (props) => (
  <div>
    <h1>{props.count}</h1>
    {/* dispatch the async action */}
    <button onClick={() => actions.app.incrementAsync()}>+ Async</button>
  </div>
)

const mapState = state => {
  return { count: state.app }
}

export default connect(mapState)(App)