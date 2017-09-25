# Mirror Loading

Adds automated loading indicators for effects to [Mirror.js](https://github.com/mirrorjs/mirror). Inspired by [dva-loading](https://github.com/dvajs/dva-loading).

> WARNING
> As of yet not published. Requires a small change to mirror.js in order to work. See https://github.com/mirrorjs/mirror/pull/62.

## Example

See an example use case below using a loading indicator within a button.

```js
import React from 'react'
import { actions, connect } from 'mirrorx'
import AwesomeLoadingButton from './components/KindaCoolLoadingButton'

const LoginButton = (props) => (
  <LoadingButton onClick={props.submit} loading={props.loading}>
    Login
  </LoadingButton>
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

Initiate mirror loading.

```js
import mirror from 'mirrorx'
import mirrorLoading from 'mirror-loading'

mirrorLoading(mirror)
```

## Options

### effects.

Loading defaults to use only "global" and "model" loading indicators. If you would like indicators for all effects, use the `effects` option.

```js
mirrorLoading(mirror, { effects: true })
```

These can be accessed from the effects.

```js
state.loading.effects.modelName.effectName
```

### reducer namespace

The loading reducer defaults to the name "loading". If you would like to change this, use the `name` option.

```js
mirrorLoading(mirror, { name: 'indicators' })
```
