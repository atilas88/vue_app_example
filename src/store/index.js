import { createStore } from 'vuex'

import UserModule from './user.module.js'
import HotelModule from './hotels.module.js'

export default createStore({
  modules: {
    user: UserModule,
    hotel: HotelModule
  }
})
