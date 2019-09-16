<template>
<div style="height:200px; position:relative;">
  <!-- MODAL -->
  <modal-login/>
  <modal-register/>
  <img :src="bg" alt="bg1" style="width:100%; height: 200px;"/>
  <div class="container clearfix position_nbanner noleftpadding norightpadding">
                    <div class="col-sm-3 col-xs-5 ine_pos_left noleftpadding norightpadding">
                        <div>{{ title }}</div>
                    </div>
                </div>

</div>
</template>
<script>
import ModalLogin from "../page/sign/login"
import ModalRegister from "../page/sign/register"

export default {
  name: 'sublogo',
  components: {
    ModalLogin,
    ModalRegister
  },
  props: {
    title: String,
    bg: String,
  }
};
</script>
<style>
.container {
    flex: 1 1 100%;
    margin: auto;
    padding: 0px;
    width: 100%;
}
.container-fluid {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
.position_nbanner {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) !important;
    background: rgba(255,255,255,.5);
}
.position_nbanner .ine_pos_left {
    background: rgba(255,255,255,.7);
    padding-bottom: 5px;
    padding-top: 5px;
}
.position_nbanner .ine_pos_left div {
    color: #0067b3;
    font-size: 24px;
    text-align: center;
}
.position_nbanner .ine_pos_right div {
    text-align: right;
}
.position_nbanner .ine_pos_right div ol {
    display: inline-block;
    margin-top: 17px;
}
.position_nbanner .ine_pos_right div ol li {
    float: left;
}
.position_nbanner .ine_pos_right div ol li span, .position_nbanner .ine_pos_right ol li a {
    color: #000;
    font-size: 13px;
}
.norightpadding {
    padding-right: 0 !important;
}
.noleftpadding {
    padding-left: 0 !important;
}
</style>
