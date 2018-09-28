import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.initOptions = {
      pitch: 30,
    };
    this.bikeLaneStyles = {
      type: 'line',
      paint: {
        'line-color': {
          property: 'bikeroute',
          type: 'categorical',
          stops: [
            ['ACCESS PATH', '#e41a1c'],
            ['EXISTING BUFFERED BIKE LANE', '#f781bf'],
            ['EXISTING CYCLE TRACK', '#4daf4a'],
            ['EXISTING SHARED-LANE', '#984ea3'],
            ['EXISTING BIKE LANE', '#ff7f00'],
            ['EXISTING OFF-STREET TRAIL', '#ffff33'],
            ['EXISTING NEIGHBORHOOD GREENWAY', '#a65628'],
            ['RECOMMENDED BIKE ROUTE', '#377eb8'],
          ],
          default: '#66c2a5',
        },
        'line-width': 2,
      },
    };
    this.bikeLaneSourceOptions = computed('data', function() {
      const { data } = this;

      return {
        type: 'geojson',
        data,
      };
    });
  }
});
