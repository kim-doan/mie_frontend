<template>
  <div>
    <top></top>
    <sidebar></sidebar>
    <b-container fluid>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
  import top from '@/admin/components/top/top';
  import sidebar from '@/admin/components/sidebar/sidebar';
  export default {
    name: 'admin',
    components: {
      top,
      sidebar
    },
  };
</script>

<style scoped>
</style>
