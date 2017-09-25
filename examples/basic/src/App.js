import React from 'react'
import { actions, connect } from 'mirrorx'

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  count: {
    padding: '1rem',
  },
  loading: {
    border: '1px solid black',
    backgroundColor: 'lightYellow',
    padding: '1rem'
  }
}

const App = (props) => (
  <div style={styles.page}>
    
    <div style={styles.count}>
      <h1>{props.count}</h1>
      <button onClick={props.incrementAsync}>+ Async</button>
    </div>

    <div style={styles.loading}>
      <p>state.loading.global: <strong>{props.loading.global.toString()}</strong></p>
      <p>state.loading.models.app: <strong>{props.loading.model.toString()}</strong></p>
      <p>state.loading.effects.app.incrementAsync: <strong>{props.loading.effect.toString()}</strong></p>
    </div>

  </div>
)

const mapState = state => ({
  count: state.app,
  incrementAsync: () => actions.app.incrementAsync(),
  loading: {
    global: !!state.loading.global,
    model: !!state.loading.models.app,
    effect: !!state.loading.effects.app.incrementAsync,
  }
})

export default connect(mapState)(App)