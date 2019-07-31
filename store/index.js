export const state = () => ({
  isMobile: false,
  currency: {
    myInput: 1,
    usdBid: '',
    date: '',
  },
})

export const mutations = {
  MUTATE_IS_MOBILE(state, data) {
    state.isMobile = data
  },
  SET_CURRENCY(
    state,
    {
      USD: { bid, create_date: createDate },
    },
  ) {
    state.currency.usdBid = bid
    state.currency.date = createDate
  },
}

export const actions = {
  SET_IS_MOBILE({ commit }, data) {
    commit('MUTATE_IS_MOBILE', data)
  },
  async GET_USD_CURRENCY({ commit }) {
    const currency = await this.$axios.$get(
      'https://economia.awesomeapi.com.br/all/USD-BRL',
    )
    console.log(currency)
    commit('SET_CURRENCY', currency)
  },
}

export const getters = {
  IS_MOBILE: state => state.isMobile,
  USD_TO_BRL: state =>
    (
      +state.currency.myInput * +state.currency.usdBid.replace(/,/g, '.')
    ).toFixed(4),
  BRL_TO_US: state =>
    (
      +state.currency.myInput / +state.currency.usdBid.replace(/,/g, '.')
    ).toFixed(4),
}
