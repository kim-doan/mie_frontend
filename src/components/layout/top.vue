<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#/">
        <img src="../../assets/logo.png" alt="logo" width="100%"/>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse" style="margin-left:100px;">
        <b-navbar-nav>
          <b-nav-item-dropdown text="MIE 소개" class="mr-sm-5">
            <topItem link="/introduce/labintro" icon="sss">
              연구실소개
            </topItem>
            <b-dropdown-divider></b-dropdown-divider>
            <topItem link="/introduce/professorintro" icon="sss">
              교수님소개
            </topItem>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="연구실구성원" class="mr-sm-5">
            <topItem link="/member/phd" icon="sss">
              박사과정
            </topItem>
            <topItem link="/member/phm" icon="sss">
              석사과정
            </topItem>
            <b-dropdown-divider></b-dropdown-divider>
            <topItem link="/member/master" icon="sss">
              졸업생(석사)
            </topItem>
            <topItem link="/member/doctor" icon="sss">
              졸업생(박사)
            </topItem>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="연구활동" class="mr-sm-5">
            <topItem link="test" icon="sss">
              Book
            </topItem>
            <topItem link="hello" icon="sss">
              A thesis
            </topItem>
            <topItem link="hello" icon="sss">
              Master Theses
            </topItem>
            <topItem link="hello" icon="sss">
              Conference papers
            </topItem>
            <topItem link="hello" icon="sss">
              Research project
            </topItem>
            <topItem link="hello" icon="sss">
              Report
            </topItem>
            <topItem link="hello" icon="sss">
              Award
            </topItem>
            <topItem link="hello" icon="sss">
              Patents & Program
            </topItem>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="강의자료" class="mr-sm-5">
            <topItem link="test" icon="sss">
              학부
            </topItem>
            <b-dropdown-divider></b-dropdown-divider>
            <topItem link="hello" icon="sss">
              대학원
            </topItem>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="세미나자료" class="mr-sm-5">
            <topItem link="test" icon="sss">
              Schedule
            </topItem>
            <topItem link="hello" icon="sss">
              Paper
            </topItem>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="기타자료실" class="mr-sm-5">
            <topItem link="test" icon="sss">
              test
            </topItem>
            <topItem link="hello" icon="sss">
              hello-vue
            </topItem>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="커뮤니티" class="mr-sm-5">
            <topItem link="test" icon="sss">
              test
            </topItem>
            <topItem link="hello" icon="sss">
              hello-vue
            </topItem>
          </b-nav-item-dropdown>
          <!--<b-nav-item href="#" disabled>추후예정</b-nav-item>-->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right style="display:none;">
            <b-dropdown-item href="#">한국어</b-dropdown-item>
            <b-dropdown-item href="#">English</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/#/member/login" style="inline-size: max-content;">로그인</b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              마이페이지
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

    <b-breadcrumb :items="this.$route.meta.breadcrumb"/>
  </div>
</template>

<script>
  import topItem from './topItem';

  export default {
    name: 'top',
    components: { topItem },
  };
</script>

<style scope>
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
