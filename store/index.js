export const state = () => ({
  sidebar: false,
  items: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setItems (state, items) {
    state.items = items
  }
}
