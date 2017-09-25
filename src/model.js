const createModel = (name, mirror, options) => {

  // function to generate both "show" & "hide" reducers
  const createLoadingAction = (show) => (state, { namespace, action }) => {
    const next = Object.assign({}, state, {
      global: show,
      models: Object.assign({}, state.models, { [namespace]: show }),
    })
    if (options.effects) {
      next.effects = Object.assign({}, state.effects, {
        [namespace]: Object.assign({}, state.effects[namespace], {
          [action]: show
        })
      })
    }
    return next
  }

  // create mirror "loading" model
  const model = {
    name,
    initialState: {
      global: false,
      models: {},
    },
    reducers: {
      show: createLoadingAction(true),
      hide: createLoadingAction(false),
    }
  }

  // add effects if option specified
  if (options.effects) {
    // collect initial models for effects and create empty objects
    model.initialState.effects = Object.keys(mirror.actions || {})
    .reduce((models, namespace) => {
      models[namespace] = {}
      return models
    }, {})
  }

  // instantiate model
  mirror.model(model)
}

export default createModel
