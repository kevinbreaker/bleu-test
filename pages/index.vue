<template>
  <section class="container">
    <header class="container__header">
      <h3 class="container__header--title">{{ $t('page.compare.title') }}</h3>
      <p
        class="container__header--caption"
        v-html="$t('page.compare.caption')"
      ></p>
    </header>
    <section class="container__actions">
      <bleu-button
        :currency-value="myCurrency"
        :currency-type="currencyType"
        @changeCurrencyType="event => (currencyType = event)"
        @changeCurrencyValue="changeCurrencyValue"
      />
      <bleu-button
        :currency-type="typeConvert"
        :desactive="true"
        :currency-value="valueConverted"
      />
    </section>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    BleuButton: () => import('@/components/Button'),
  },
  data: () => ({
    myCurrency: 1,
    currencyType: 'USD',
  }),
  computed: {
    ...mapGetters(['BRL_TO_USD', 'USD_TO_BRL']),
    valueConverted() {
      return this.currencyType === 'USD' ? this.BRL_TO_USD : this.USD_TO_BRL
    },
    typeConvert() {
      return this.currencyType === 'USD' ? 'BRL' : 'USD'
    },
  },
  asyncData({ res, req, store }) {
    if (process.client) {
      console.log(' -> client <-')
    }
  },
  beforeMount() {
    this.$store.dispatch('GET_USD_CURRENCY')
    this.$store.dispatch(
      'SET_IS_MOBILE',
      navigator.userAgent.includes('Mobile'),
    )
  },
  methods: {
    changeCurrencyValue(value) {
      this.myCurrency = +value
      this.$store.dispatch('SET_MY_CURRECY', +value)
    },
  },
}
</script>
<style lang="stylus" scoped>
.container
  display flex
  justify-content center
  align-items center
  flex-direction column

  &__header
    text-align justify
    max-width 600px
    margin 20px

    &--title
      text-align center
      font-size 2rem
      font-weight 600
      color #003358

    &--caption
      font-weight 400
      color #585858

  &__actions
    @media (max-width: 600px)
      display flex
      flex-direction column
      justify-content center
      align-items center
</style>
