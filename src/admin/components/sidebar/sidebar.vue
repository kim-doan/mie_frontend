<template>
    <Slide noOverlay>
      <a id="home" href="/#/admin/dashboard">
        <span>대시보드</span>
      </a>
      <a id="labintro" href="/#/admin/labintroEdit">
        <span>연구실 소개</span>
      </a>
      <a id="propessorintro" href="/#/admin/professorintroEdit">
        <span>교수님 소개</span>
      </a>
      <a id="boardEdit" href="/#/admin/boardEdit">
        <span>게시판 수정</span>
      </a>
      <a id="labmemberEdit" href="/#/admin/labmemberEdit">
        <span>연구실구성원 수정</span>
      </a>
    </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
    components: {
        Slide // Register your component
    }
}
</script>

<style>
.bm-burger-bars {
    background-color: white;
}
.bm-burger-button {
    cursor: pointer;
    height: 30px;
    left: 65px;
    position: absolute;
    top: 19px;
    width: 36px;
}
</style>
