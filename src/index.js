import createModel from './model'
import addLoadingToEffects from './effects'

/**
 * mirror
 * options
 *  - name (string) - name of loading model
 *  - effects (bool) - whether or not to have specific effect loading indicators
 */
export default (mirror, options = {}) => {
  const name = options.name || 'loading'
  // create model
  createModel(name, mirror, options)

  // map over actions
  addLoadingToEffects(name, mirror)
}
