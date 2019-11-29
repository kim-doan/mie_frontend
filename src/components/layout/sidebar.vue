<template>
<div class="ine_sect_left_2 clearfix">

  <div class="ine_sect_left ine0530">

    <ul>

      <li style="margin:0;" data-id="72">

        <a href="javascript:void(0);" data-id="72">{{ title }}</a>

        <ul class="sanji" style="margin: 0;">
          <li v-for="menu in sideMenu_Sort" :class="menu.selected">
            <a :href="menu.href">{{ menu.name }}</a>
          </li>
          <!--<li class="li_hover">
            <a href="/en/index.php?s=/sys/cate/65.html">연구실 소개</a>
          </li>
          <li>
            <a href="/en/index.php?s=/sys/cate/66.html">교수님 소개</a>
          </li>-->
        </ul>

      </li>

    </ul>

  </div>

</div>
</template>

<script>
export default {
  name: 'sidebar',
  components: {
  },
  props: {
    title: String,
    menus: {
      type: Array,
      default: {
        name: String,
        href: String,
        selected: String,
      }
    }
  },
  computed: {
    sideMenu_Sort : function() {
      return _.orderBy(this.menus, 'boardId', 'esc');
    },
  }
};
</script>

<style>
.sanji a:hover {
  transform:scale(1.1, 1.1);
  text-decoration:none;
  color: #0067b3;
}
.ine_sect_left {
}
.ine_sect_left ul {
    margin-bottom: 20px;
    list-style-type: none;
    padding-left:0px;
}
.ine_sect_left ul li {
    position: relative;
    background: #fff;
}
.ine_sect_left ul li a {
    padding: 15px;
    transition: all 0.5s;
    text-decoration:none;
}
.ine_sect_left> ul li a {
    font-size: 18px;
    color: #000;
    padding: 18px 0 18px 15%;
    display: block;
    border-bottom: 2px solid #f7f7f7;
}
.ine_sect_left ul li {
    position: relative;
    background: #fff;
}
.ine_sect_left ul li ul.sanji li a {
    padding-left: 50px;
    border-bottom: 2px solid #f7f7f7;
    font-size: 15px;
    transition: 0.5s;
}
.ine_sect_left ul li.li_hover > a:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 3px;
    background: #0c6eb7;
    display: block;
}
</style>
