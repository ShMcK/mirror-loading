/**
 * mirror
 * options
 *  - name (string) - name of loading model
 *  - effects (bool) - whether or not to have specific effect loading indicators
 */
export default (mirror, options = {}) => {

  // init
  console.log('actions', mirror.actions)
  console.log('mirror', mirror)

  // map over effects and add loading indicators
  // TODO

  const createLoadingAction = (show) => (state, { namespace, actionType }) => {
    const next = {
      ...state,
      global: show,
      models: { ...state.models, [namespace]: show },
    }
    if (options.effects) {
      next.effects = { ...state.effects, [actionType]: show }
    }
    return next
  }
  
  // settings
  const model = {
    name: options.name || 'loading',
    initialState: {
      global: false,
      models: {},
    },
    reducers: {
      show: createLoadingAction(true),
      hide: createLoadingAction(false),
    }
  }
  if (options.effects) {
    model.initialState.effects = {}
  }

  // map over actions
  Object.keys(mirror.actions).map(modelName => {
    const modelActions = mirror.actions[modelName]
    // map over models
    Object.keys(modelActions).map(actionName => {
      console.log(modelActions[actionName])
    })
  })

  // create loading model
  mirror.model(model)
}
