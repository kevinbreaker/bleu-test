<template>
  <nav class="navbar">
    <div class="navbar__container">
      <div class="navbar__container__logo">
        <span class="navbar__container__logo--brand">{{
          $t('navbar.brand.bleutest')
        }}</span>
      </div>
      <div v-if="!IS_MOBILE" class="navbar__container__menu">
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
          <v-select v-model="select" :options="selectOptions">
            <template #option="option">
              <img width="30" :src="option.value" :alt="option.text" />
              {{ option.text }}
            </template>
            <template #selected-option="option">
              <img width="30" :src="option.value" :alt="option.value" />
            </template>
          </v-select>
        </div>
      </div>
      <div v-else class="navbar__container__mobile">
        <div
          role="button"
          class="navbar__container__mobile--menu"
          @click="openMenuMobile = !openMenuMobile"
        >
          <img
            width="40"
            :src="
              openMenuMobile
                ? require('~/assets/icons/close.svg')
                : require('~/assets/icons/menu.svg')
            "
            :alt="openMenuMobile ? 'close menu' : 'open menu'"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    VSelect: () => import('vue-select'),
  },
  data: () => ({
    openMenuMobile: false,
    select: '',
    selectOptions: [
      {
        locale: 'pt',
        text: 'Português',
        value: require('~/assets/flags/bra.png'),
      },
      {
        locale: 'en',
        text: 'English',
        value: require('~/assets/flags/usa.png'),
      },
    ],
  }),
  computed: {
    ...mapGetters(['IS_MOBILE']),
  },
  watch: {
    select(value) {
      window.location.pathname = value.locale === 'en' ? value.locale : ''
    },
  },
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
    padding 5px
    width 80%
    display flex
    justify-content space-around
    align-items center

    @media (max-width: 600px)
      justify-content space-between

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
      justify-content flex-end
      align-items center
      display flex

      &--link
        font-weight 410
        font-size 0.9rem
        padding 5px
        margin 0 5px
        color white
        cursor pointer
        display inline-block

        &:hover
          transition all 0.2s
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
          transition all 0.4s
          background white
          color var(--primary)

    &__mobile
      &--menu
        background transparent

.active-link
  border-bottom 4px solid white
  font-weight bold
</style>
