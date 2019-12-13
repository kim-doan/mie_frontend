<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/admin" style="margin-left:130px;">
      <!--  <img src="../../../assets/logo.png" alt="logo" width="100%"/>-->
      <h2>관리자모드</h2>
      </b-navbar-brand>

    </b-navbar>

    <b-breadcrumb :items="this.$route.meta.breadcrumb"/>
  </div>
</template>

<script>
  import axios from 'axios'


  export default {
    name: 'top',
    components: {
     },
    methods: {
    }
  };
</script>

<style scope>
.bg-dark {
  height: 70px;
}
.bg-secondary {
    background-color: #343a40 !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: white !important;
}
.breadcrumb {
  padding: 0px !important;
  width:1500px;
  margin: auto;
  background-color: #fff !important;
  border-radius:0px;
}
.breadcrumb-item.active {
  display:none;
}
</style>
