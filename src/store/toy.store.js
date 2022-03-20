import { toyService } from "../services/toy.service.js"

export default {
  state: {
    toys: null,
    filterBy: null,
    labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
  },
  getters: {
    toys(state) {
      return state.toys;
    },
    labels(state) {
      return state.labels;
    }
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },

    removeToy(state, { toyId }) {
      const idx = state.toys.findIndex(toy => toy._id === toyId)
      state.toys.splice(idx, 1)
    },

    setFilter(state, { filterBy }) {
      state.filterBy = filterBy;
    },

    saveToy(state, { savedToy }) {
      const idx = state.toys.findIndex(toy => toy._id === savedToy._id)
      if (idx !== -1) state.toys.splice(idx, 1, savedToy)
      else state.toys.unshift(savedToy)
    },
  },
  actions: {
    async loadToys({ commit, state }) {
      const toys = await toyService.query(state.filterBy)
      commit({ type: 'setToys', toys })
      return toys
    },

    async removeToy({ commit }, { toyId }) {
      await toyService.remove(toyId)
      commit({ type: 'removeToy', toyId })
    },

    getById(context, { id }) {
      return toyService.getById(id)
    },

    async saveToy({ commit }, { toyToSave }) {
      const savedToy = await toyService.save(toyToSave)
      commit({ type: 'saveToy', savedToy })
    },
    
    filter({ commit, dispatch }, { filterBy }) {
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadToys' });
    },
  },
}
