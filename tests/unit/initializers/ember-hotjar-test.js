import Ember from 'ember';
import { initialize } from 'dummy/initializers/ember-hotjar';
import { module, test } from 'qunit';
import destroyApp from '../../helpers/destroy-app';

module('Unit | Initializer | ember hotjar', {
  beforeEach() {
    Ember.run(() => {
      this.application = Ember.Application.create();
      this.application.deferReadiness();
    });
  },
  afterEach() {
    destroyApp(this.application);
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(this.application);
  let done = assert.async();


  setTimeout(function(){
    // you would normally confirm the results of the initializer here
    assert.ok(window, 'Window not defined');
    assert.ok(window.hj, 'window.hj not defined');
    done();
  }, 100);

});
