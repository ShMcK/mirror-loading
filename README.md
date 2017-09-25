# Mirror Loading

Adds automated loading indicators for effects to [Mirror.js](https://github.com/mirrorjs/mirror). Inspired by [dva-loading](https://github.com/dvajs/dva-loading).

## Example

See an example below using a loading indicator within a button.

```js
import React from 'react'
import { actions, connect } from 'mirrorx'
import AwesomeLoadingButton from './components/KindaCoolLoadingButton'

const LoginButton = (props) => (
  <AwesomeLoadingButton onClick={props.submit} loading={props.loading}>
    Login
  </AwesomeLoadingButton>
)

const mapState = state => ({
  submit: () => actions.login.submit(),
  // state.loading.models.login is automagically set to true
  // when submit is triggered, and returned to false when it finishes
  loading: state.loading.models.login,
})

export default connect(mapState)(App)
```

## Demo

See a [demo](./examples/basic)

## Setup

Install `mirror-loading` as a dependency.

```shell
npm install mirror-loading
```

Configure mirror loading.

```js
import mirror from 'mirrorx'
import mirrorLoading from 'mirror-loading'

// see options API below
const options = {}

mirrorLoading(mirror, options)
```

## Options

### effects

Loading defaults to use only "global" and "model" loading indicators.

If you would also like indicators for all effects, set the `effects` option to true.

```js
mirrorLoading(mirror, { effects: true })
```

Loading effects can be accessed as `state.loading.effects.modelName.effectName`.

As an example: 

```js
state.loading.effects.login.submit
```

### name

The loading reducer defaults to the name of "loading".

If you would like to change this, use the `name` option.

```js
mirrorLoading(mirror, { name: 'load' })
```

In which case, loading can be accessed from `state.load.global`.
