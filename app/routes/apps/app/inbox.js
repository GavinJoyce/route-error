import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    console.log('beforeModel: apps.app.inbox');

    throw new Error('apps.app.inbox');
  },

  actions: {
    error22() {
      console.log('app.app.inbox error handler');
      return true;
    }
  }
});
