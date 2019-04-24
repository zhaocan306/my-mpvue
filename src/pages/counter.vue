<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index" class="home">去往首页</a>
  </div>
</template>

<script>
export default {
  config: {
    navigationBarTitleText: 'Vuex示例'
  },

  computed: {
    count() {
      return this.$store.state.common.count
    }
  },

  methods: {
    increment() {
      this.$store.dispatch('increment')
    },
    decrement() {
      this.$store.dispatch('decrement')
    }
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
