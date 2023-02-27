import API from "@/services/auth/api";

export default {
  namespaced: true,
  state() {
    return {
      projects: null,
      searchProjects: '',
      filteredProjects: null,
    }
  },
  getters: {
    stateProjects(state) {
      return state.projects
    },
    stateFilteredProjects: state => {
      return state.filteredProjects
    }
  },
  mutations: {
    SET_SEARCH_PROJECTS(state, value) {
      state.searchProjects = value
    }
  },
  actions: {
    filterProjects ({ state }) {
      state.filteredProjects = state.projects.filter(project => project.name.toLowerCase().includes(state.searchProjects.toLowerCase()))
    },
    async getProjects({state}) {
      await API.get('v2/dashboard')
        .then(
          response => {
            state.projects = response.data.data
            state.filteredProjects = response.data.data
            console.log(response)
          }
        )
        .catch(error => {
          console.log(error)
        })
    }
  }
}