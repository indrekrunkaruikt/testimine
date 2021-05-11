const restaurants = api => ({
  namespaced: true,
  state: {
    records: [],
    loading: false,
    loadError: false,
  },

  actions: {
    load({commit}) {
      commit('startLoading');
      api
        .loadRestaurants()
        .then(records => {
          commit('storeRecords', records);
        })
        .catch(() => {
          commit('recordLoadingError');
        });
    },
  },
  mutations: {
    startLoading(state) {
      state.loading = true;
    },
    recordLoadingError(state) {
      state.loading = false;
      state.loadError = true;
    },
    storeRecords(state, records) {
      state.loading = false;
      state.records = records;
    },
  },
});

export default restaurants;
