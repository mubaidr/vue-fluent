import * as components from 'buefy/src/components'

import config, { setOptions } from 'buefy/src/utils/config'
import { use } from 'buefy/src/utils/plugins'

const VueFluent = {
  install(Vue, options = {}) {
    // Options
    setOptions(Object.assign(config, options))
    // Components
    for (let componentKey in components) {
      Vue.use(components[componentKey])
    }
  },
}

use(VueFluent)

export default VueFluent
export * from 'buefy/src/components'
