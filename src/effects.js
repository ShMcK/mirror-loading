const addLoadingToEffects = (name, mirror) => {
  Object.keys(mirror.actions).forEach(namespace => {
    if (namespace === name) { return }
    const modelActions = mirror.actions[namespace]
    // map over effects within models
    Object.keys(modelActions).forEach(action => {
      if (mirror.actions[namespace][action].isEffect) {
        // copy function
        const fn = mirror.actions[namespace][action]
        // replace function with pre & post loading calls
        mirror.actions[namespace][action] = async function (props) {
          mirror.actions.loading.show({ namespace, action })
          await fn(props)
          mirror.actions.loading.hide({ namespace, action })
        }
      }
    })
  })
}

export default addLoadingToEffects
