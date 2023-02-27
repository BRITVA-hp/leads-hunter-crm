import { createStore } from 'vuex'
import loader from './others/loader'
import projects from './projects/projects'

export default createStore({
  modules: {
    loader,
    projects
  }
})