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
            disabled: desactive,
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
                .replace(/[R $ U S , ]/gi, '')
              if (!desactive) {
                context.listeners.changeCurrencyValue(novo)
              }
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
            domProps: {
              value: currencyType,
            },
            on: {
              change: event =>
                context.listeners.changeCurrencyType(event.target.value),
            },
          },
          [h('option', {}, 'BRL'), h('option', {}, 'USD')],
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

    &[disabled]
      background transparent

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

    &[disabled]
      color grey

  @media (max-width: 600px)
    margin 10px 0
</style>
