<template>
  <div class="card large">
  <table width="900" border="0" cellspacing="0" cellpadding="0" align="center" id="tabst_04">
  	<tbody><tr>
  		<td width="20%" rowspan="5"><img src=""></td>
  		<th width="20%">성명</th>
  		<td width="60%" class="thle">정대진(Dae-Jin Jeong)</td>
  	</tr>
  	<tr>
  		<th>입학년도</th>
  		<td class="thle">2015</td>
  	</tr>
  	<tr>
  		<th>E-mail</th>
  		<td class="thle">daejin4u@nate.com</td>
  	</tr>
  	<tr>
  		<th>연구분야
  		</th><td class="thle">통계/안드로이드/수치계산</td>
  	</tr>
  	<tr>
  		<th>근무지</th>
  		<td class="thle">리얼타임테크</td>
  	</tr>
  	<tr>
  		<th>논문</th>
  		<td colspan="2" class="thle">
  <hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">박사학위논문</b><br>&nbsp; · 분산 IoT센서 기반 실험실 안전관리 시스템(Distributed IoT Sensor based Laboratory Safety Management System)<br><hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">석사학위논문</b><br>&nbsp; · 임베디드 리눅스를 이용한 IP-PBX 시스템 설계 및 구현(Design and Implementation on IP-PBX System using Embedded Linux)<br><hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">국내논문지</b><br>&nbsp; · 분산 IoT 센서 기반 실험실 안전관리 시스템<br>&nbsp; · RasPBX 기반의 IP-PBX 시스템<br><hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">국외논문지</b><br>&nbsp; · A Study on the Ways of Performing Voice Match with Voice Analysis Methods Using Spectral Contents<br><hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">국내학술대회논문</b><br>&nbsp; · 분산 다중 센서 기반 실험실 안전 관리 시스템<br>&nbsp; · 다중 IoT 센서 기반 실험실 관리 시스템<br>&nbsp; · 주요 문단 영역 선정 기반 문서 분석 시스템<br>&nbsp; · 사용자 기기 선택에 따른 우선순위 자동 설정 알고리즘<br>&nbsp; · Design of Multiple Routing for Simulcast<br>&nbsp; · Wi-Fi를 활용한 IoT기반 D2D 릴레이션 알고리즘<br>&nbsp; · 사용자 중심 검색 시스템 설계 및 구현<br>&nbsp; · Snort Wireless 기반의 무선 침입 방지 시스템<br><hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">국외학술대회논문</b><br>&nbsp; · Design of Personal Exercise Management<br><hr style="border:#b9b9b9 0.5px dashed"><b style="font-size: 13px;">기사 및 수상경력</b><br>&nbsp; ·  2018년 한국정보통신학회 추계학술대회 우수논문상 <br><hr style="border:#b9b9b9 0.5px dashed">		</td>
  	</tr>
  	<tr>
  		<th>한마디</th>
  		<td colspan="2" class="thle"></td>
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

  name: 'card',

  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
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
