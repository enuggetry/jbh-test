let thisHook = sails.hooks.testhook;

import _ from 'lodash'
import Marlinspike from 'marlinspike'

if (!thisHook) {
  class Hook extends Marlinspike {

    constructor(sails) {
      super(sails, module)
    }

    configure() {
    }
  }

  thisHook = Marlinspike.createSailsHook(Hook)
}

export default thisHook;