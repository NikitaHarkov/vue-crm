<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{ 'CurrencyAmount' | localize}}</span>

        <p
          v-for="cur of currencies"
          :key="cur"
          class="currency-line">
          <span>{{ getCurrency(cur) | currency(cur) }}</span>
        </p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['EUR', 'USD', 'RUB']
  }),
  computed: {
    base () {
      return this.$store.getters.info.bill
    }
  },
  methods: {
    getCurrency (currency) {
      if (currency === 'EUR'){
        return this.base
      }
      const number = this.base * this.rates[currency]
      return Math.round((number + Number.EPSILON) * 100) / 100
    }
  }
}
</script>
