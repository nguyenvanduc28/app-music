<template>
  <div >
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
  
  myFunction(){
    this.$refs.iconn.innerHTML = `<button class="ducduc">test</button>`;
    console.log(this.$refs.iconn);
  }
  }}
</script>

<style scoped>
div {
  color: aliceblue;
}

.testt {
  color: aqua;
}
</style>