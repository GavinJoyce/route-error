import Service from '@ember/service';
import { later } from '@ember/runloop';

export default Service.extend({
  hasBooted: false,
  showBootError: false,

  init() {
    this._super(...arguments);

    later(this, function() {
      this.set('hasBooted', true); //simulate the staged boot process
    }, 1000);
  },
});
