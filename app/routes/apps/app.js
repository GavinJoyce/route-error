import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    console.log('beforeModel: apps.app');
  },

  actions: {
    error(error, transition) {
      console.log('app.app error handler', error, transition);
      return true;
    }
  }
});
