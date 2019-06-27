import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | apps/app/inbox', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:apps/app/inbox');
    assert.ok(route);
  });
});
