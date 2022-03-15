import { toyService } from "../services/toy.service.js"

export default {
  state: {
    toys: null,
    filterBy: null,
    labels: ["On wheels", "Box game","Art", "Baby", "Doll", "Puzzle", "Outdoor"],
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
    loadToys({ commit , state }) {
      return toyService.query(state.filterBy)
        .then((toys) => {
          commit({ type: 'setToys', toys })
          return toys
        })
    },
    removeToy({ commit }, { toyId }) {
      toyService.remove(toyId)
        .then(() => {
          commit({ type: 'removeToy', toyId })
        })
    },
    getById(context, { id }) {
      return toyService.getById(id)
    },
    saveToy({commit}, { toyToSave }) {
      return toyService.save(toyToSave)
        .then((savedToy) => {
          commit({ type: 'saveToy', savedToy })
        })
    },
    filter({ commit, dispatch }, { filterBy }) {
      console.log(filterBy);
      commit({ type: 'setFilter', filterBy });
      dispatch({ type: 'loadToys' });
    },
  },
}
