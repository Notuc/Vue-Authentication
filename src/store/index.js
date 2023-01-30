
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  },
  actions: {
    async login ({ commit }, { email, password }) {
      try {
<<<<<<< Updated upstream
        const { data } = await axios.post('api/registerusers', { email, password })
        commit('SET_USER', data)
      } catch (error) {
        // handle error
      }
    }
=======
          const { data } = await axios.post('api/registerusers', { email, password })
          if (data.error) {
            // handle error
          } else {
            commit('SET_USER', data)
          }
      } catch (error) {
          // handle error
      }
  }
  
>>>>>>> Stashed changes
  }
})