<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>
<script>
export default {
  components: {
    Navbar: () => import('@/components/Navbar'),
  },
}
</script>

<style lang="stylus">
:root
  --primary #0080DD

html
  font-family Roboto
  font-size 16px
  word-spacing 1px
  -ms-text-size-adjust 100%
  -webkit-text-size-adjust 100%
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  box-sizing border-box
i
  background #ddd
  border 2px solid #fffafa
  border-radius 8px
  padding 2px
*, *:before, *:after
  box-sizing border-box
  margin 0
</style>
