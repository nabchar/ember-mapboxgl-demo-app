import Component from '@ember/component';
import { computed } from '@ember-object';

export default Component.extend({
  init() {
    this._super(...arguments);
    this.initOptions = {
      pitch: 30,
    };
    this.bikeLaneStyles = {
      type: 'line',
      path: {
        'line-color': '#007cbf',
        'line-width': 10,
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
