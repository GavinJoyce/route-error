import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  bootService: service(),

  beforeModel() {
    console.log('beforeModel: apps.app');
  },

  actions: {
    error(error, transition) {
      console.log('app.app error handler', error, transition);
      console.log('boot', this.bootService);

      if (!this.bootService.hasBooted) {
        this.bootService.set('showBootError', true);
      }
      return true;
    }
  }
});
