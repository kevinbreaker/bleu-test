<script>
export default {
  functional: true,
  props: {
    desactive: Boolean,
    currencyType: {
      type: String,
      default: () => 'BRL',
      required: true,
      validator: currency => currency.length === 3,
    },
    currencyValue: {
      type: [String, Number],
      default: () => '100.00',
      // validator: currency => currency.length > 0,
    },
  },
  render(h, context) {
    const { currencyType, currencyValue, desactive } = context.props
    return h(
      'label',
      {
        attrs: {
          class: 'button',
        },
      },
      [
        h('input', {
          attrs: {
            class: 'button--input',
            inputmode: 'numeric',
          },
          domProps: {
            value: new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: currencyType,
            }).format(+currencyValue),
          },
          on: {
            input: event => {
              const novo = event.target.value
                .split(',')[0]
                .replace(/[R $ , ]/gi, '')
              context.listeners.changeCurrencyValue(novo)
            },
          },
        }),
        h(
          'select',
          {
            attrs: {
              class: 'button--select',
              disabled: desactive,
            },
          },
          [h('option', {}, currencyType)],
        ),
      ],
    )
  },
}
</script>
<style lang="stylus" scoped>
.button
  max-width 200px
  width 100%
  display inline-block
  border 1px solid #585858
  padding 5px
  border-radius 10px

  &--input
    width 55%
    border none
    padding-right 5px
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

  @media (max-width: 600px)
    margin 10px 0
</style>
