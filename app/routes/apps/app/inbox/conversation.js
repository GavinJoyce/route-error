import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    console.log('beforeModel: apps.app.inbox.conversation');
  }
});
