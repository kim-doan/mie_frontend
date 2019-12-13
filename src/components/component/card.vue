<template>
  <div class="card large">
  <table width="850" border="0" cellspacing="0" cellpadding="0" align="center" id="tabst_04">
  	<tbody><tr>
  		<td width="20%" rowspan="5"><img :src="this.profile_img" style="min-width:120px; max-width:160px;"></td>
  		<th width="20%">성명</th>
  		<td width="60%" class="thle">{{this.name}}({{this.enname}})</td>
  	</tr>
  	<tr>
  		<th>입학년도</th>
  		<td class="thle">{{this.admission}}</td>
  	</tr>
  	<tr>
  		<th>E-mail</th>
  		<td class="thle">{{this.email}}</td>
  	</tr>
  	<tr>
  		<th>관심분야
  		</th><td class="thle">{{this.field}}</td>
  	</tr>
  	<tr>
  		<th>근무지</th>
  		<td class="thle">{{this.workplace}}</td>
  	</tr>
  	<tr>
  		<th>논문</th>
  		<td colspan="2" class="thle">
          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper1.length !== 0">
            <b style="font-size: 13px;" v-if="this.paper1.length !== 0">박사학위논문</b>
            <li v-for="(item, i) in paper1" :value="item" :key="item.activitie_id">
              {{item.title}}
            </li>

          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper2.length !== 0">
          <b style="font-size: 13px;" v-if="this.paper2.length !== 0">석사학위논문</b>
          <li v-for="(item, i) in paper2" :value="item" :key="item.activitie_id">
            {{item.title}}
          </li>

          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper3.length !== 0">
          <b style="font-size: 13px;" v-if="this.paper3.length !== 0">국내논문지</b>
          <li v-for="(item, i) in paper3" :value="item" :key="item.activitie_id">
            {{item.title}}
          </li>

          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper4.length !== 0">
          <b style="font-size: 13px;" v-if="this.paper4.length !== 0">국외논문지</b>
          <li v-for="(item, i) in paper4" :value="item" :key="item.activitie_id">
            {{item.title}}
          </li>

          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper5.length !== 0">
          <b style="font-size: 13px;" v-if="this.paper5.length !== 0">국내학술대회논문</b>
          <li v-for="(item, i) in paper5" :value="item" :key="item.activitie_id">
            {{item.title}}
          </li>

          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper6.length !== 0">
          <b style="font-size: 13px;" v-if="this.paper6.length !== 0">국외학술대회논문</b>
          <li v-for="(item, i) in paper6" :value="item" :key="item.activitie_id">
            {{item.title}}
          </li>

          <hr style="border:#b9b9b9 0.5px dashed" v-if="this.paper7.length !== 0">
          <b style="font-size: 13px;" v-if="this.paper7.length !== 0">기사 및 수상경력</b>
          <li v-for="(item, i) in paper7" :value="item" :key="item.activitie_id">
            {{item.title}}
          </li>
      </td>
  	</tr>
  	<tr>
  		<th>한마디</th>
  		<td colspan="2" class="thle">{{this.oneword}}</td>
  	</tr>
  </tbody>
</table>
</div>
<!---
  <div class="card large">
    <div class="card-image">
      <figure class="image">
        <img src="@/assets/unnamed.jpg" alt="Image">
      </figure>
    </div>

    <div class="card-content content">
      <h4>{{ title }}</h4>
      <p>{{ body }}</p>
    </div>
  </div>
-->

</template>

<script>
export default {
  data: () => ({
    paper1: [],
    paper2: [],
    paper3: [],
    paper4: [],
    paper5: [],
    paper6: [],
    paper7: []
  }),
  props: {
    name: {
      type: String,
      default: ''
    },
    enname: {
      type: String,
      default: ''
    },
    admission: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    field: {
      type: String,
      default: ''
    },
    workplace: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    profile_img: {
      type: String,
      default: ''
    },
    oneword: {
      type: String,
      default: ''
    },
    activities: {
      type: Array,
      default: () => [{}]
    }
  },
  mounted() {
    for(var i=0;i<this.activities.length;i++) {
      var type = this.activities[i].type;
      if(type == 1) {
        this.paper1.splice(i, 1, this.activities[i]);
      } else if (type == 2) {
        this.paper2.splice(i, 1, this.activities[i]);
      } else if (type == 3) {
        this.paper3.splice(i, 1, this.activities[i]);
      } else if (type == 4) {
        this.paper4.splice(i, 1, this.activities[i]);
      } else if (type == 5) {
        this.paper5.splice(i, 1, this.activities[i]);
      } else if (type == 6) {
        this.paper6.splice(i, 1, this.activities[i]);
      } else if (type == 7) {
        this.paper7.splice(i, 1, this.activities[i]);
      }
    }

  }

}
</script>

<style>
.image img {
  width:50%;
}
#tabst_04 {
    border-top: 2px solid #6c87b1;
    border-bottom: 1px solid #566885;
    margin-bottom: 20px;
}
#tabst_04 th {
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    color: #58595b;
    border-bottom: 1px solid #afafaf;
    border-right: 1px solid #cfcfcf;
    background-color: #f4f3ee;
}
#tabst_04 td {
    text-align: center;
    font-size: 12px;
    border-bottom: 1px solid #cfcfcf;
    border-right: 1px solid #cfcfcf;
    line-height: 23px;
    padding: 5px 0px 5px 0px;
}
#tabst_04 .thle {
    border-right: 0px;
    text-align: left;
    padding: 5px 5px 5px 5px;
}
</style>
