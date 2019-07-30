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
      <label class="container__actions__button">
        <input
          class="container__actions__button--input"
          type="tel"
          inputmode="decimal"
        />
        <select class="container__actions__button--select">
          <option :value="$t('page.compare.buttons.brl')">{{
            $t('page.compare.buttons.brl')
          }}</option>
          <option :value="$t('page.compare.buttons.usd')">{{
            $t('page.compare.buttons.usd')
          }}</option>
        </select>
      </label>
      <label class="container__actions__button">
        <input
          class="container__actions__button--input"
          type="tel"
          inputmode="decimal"
        />
        <select class="container__actions__button--select">
          <option :value="$t('page.compare.buttons.usd')">{{
            $t('page.compare.buttons.usd')
          }}</option>
          <option :value="$t('page.compare.buttons.brl')">{{
            $t('page.compare.buttons.brl')
          }}</option>
        </select>
      </label>
    </section>
  </section>
</template>

<script>
export default {}
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
    &__button
      max-width 200px
      width 100%
      display inline-block
      border 1px solid #585858
      padding 5px
      border-radius 10px

      &--input
        width 55%
        border none
        outline none
        text-align right
        font-size 1rem

      &--select
        width 38%
        background transparent
        padding 5px
        border none
        border-left 2px solid #ddd
        outline none
        font-weight bold
        color #003358
        font-size 1.2rem
</style>
