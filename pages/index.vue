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
        currency-type="BRL"
        @changeCurrencyValue="pega"
        :currency-value="myCurrency"
      />
      <bleu-button
        :currency-type="currencyConvertType"
        :desactive="true"
        currency-value="400"
      />
    </section>
  </section>
</template>

<script>
export default {
  components: {
    BleuButton: () => import('@/components/Button'),
  },
  data: () => ({
    myCurrency: 1,
    convertCurrency: '',
    currencyConvertType: 'USD',
  }),
  asyncData({ req, store }) {
    store.dispatch(
      'SET_IS_MOBILE',
      req.headers['user-agent'].includes('Mobile'),
    )
  },
  computed: {},
  methods: {
    pega(a) {
      /* eslint-disable */
      this.myCurrency = +a
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
    // &__button
    // max-width 200px
    // width 100%
    // display inline-block
    // border 1px solid #585858
    // padding 5px
    // border-radius 10px

    // &--input
    // width 55%
    // border none
    // outline none
    // text-align right
    // font-size 1rem

    // &--select
    // width 38%
    // background transparent
    // padding 5px
    // border none
    // border-left 2px solid #ddd
    // outline none
    // font-weight bold
    // color #003358
    // font-size 1.2rem
    @media (max-width: 600px)
      display flex
      flex-direction column
      justify-content center
      align-items center
</style>
