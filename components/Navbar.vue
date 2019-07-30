<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__container__logo">
        <span class="navbar__container__logo--brand">{{
          $t('navbar.brand.bleutest')
        }}</span>
      </div>
      <div class="navbar__container__menu">
        <span class="navbar__container__menu--link">{{
          $t('navbar.bleutest_buy')
        }}</span>
        <span class="navbar__container__menu--link active-link">{{
          $t('navbar.compare')
        }}</span>
        <span class="navbar__container__menu--link">{{
          $t('navbar.remittance')
        }}</span>
        <span class="navbar__container__menu--link">{{
          $t('navbar.exchanges')
        }}</span>
        <span class="navbar__container__menu--link">{{
          $t('navbar.exchanges_fees')
        }}</span>
        <button class="navbar__container__menu--button">
          {{ $t('navbar.buttons.login') }}
        </button>
        <div class="navbar__container__menu--select">
          <img height="30" src="~/assets/flags/bra.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {},
}
</script>
<style lang="stylus" scoped>
.navbar
  background var(--primary)
  height 60px
  display flex
  justify-content center
  align-content center

  &__container
    // background red
    padding 5px
    width 80%
    display flex
    justify-content space-around
    align-items center

    &__logo
      padding 10px
      margin 10px

      &--brand
        font-weight bold
        color white
        font-size 2rem

    &__menu
      width 80%
      padding 0 20px
      // background orange
      justify-content flex-end
      align-items center
      display flex

      &--link
        font-weight 350
        font-size .9rem
        padding 5px
        margin 0 5px
        color white
        cursor pointer
        display inline-block

        &:hover
          transition all .2s
          border-bottom 4px solid white
          font-weight bold

      &--button
        border 2px solid white
        border-radius 10px
        padding 5px
        margin 0 10px
        background transparent
        font-weight bold
        color white
        width 80px

        &:hover
          transition all .4s
          background white
          color var(--primary)
.active-link
  border-bottom 4px solid white
  font-weight bold
</style>
