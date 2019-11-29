import Widget from '../components/Widget.vue';
import DataTable from '../components/DataTable.vue';
import TimeLine from '../components/TimeLine.vue';
import UserTreeView from '../components/UserTreeView.vue';
import Stepper from '../components/Stepper.vue';

import LocationStatistic from '../components/statistics/LocationStatistic.vue';
import SiteViewStatistic from '../components/statistics/SiteViewStatistic.vue';
import TotalEarningsStatistic from '../components/statistics/TotalEarningsStatistic.vue';

function setupComponents(Vue){

  Vue.component('widget', Widget);
  Vue.component('data-table', DataTable);
  Vue.component('time-line', TimeLine);
  Vue.component('user-tree-view', UserTreeView);
  Vue.component('stepper', Stepper);

  Vue.component('location-statistic', LocationStatistic);
  Vue.component('site-view-statistic', SiteViewStatistic);
  Vue.component('total-earnings-statistic', TotalEarningsStatistic);
}


export {
  setupComponents
}
