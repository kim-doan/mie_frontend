<template>
  <div>
    <top></top>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
    <foot></foot>
  </div>
</template>

<script>
  import top from '../layout/top';
  import foot from '../layout/foot'

  export default {
    name: 'index',
    components: {
      top,
      foot,
    },
  };
</script>

<style scoped>
</style>
