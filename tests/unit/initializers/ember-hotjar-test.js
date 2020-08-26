import Resolver from 'ember-resolver';
import { run } from '@ember/runloop';
import Application from '@ember/application';
import { initialize } from 'dummy/initializers/ember-hotjar';
import { module, test } from 'qunit';

module('Unit | Initializer | ember hotjar', {
  beforeEach() {
    run(() => {
      this.application = Application.create({ Resolver });
      this.application.deferReadiness();
    });
  },
  afterEach() {
    this.application.destroy();
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
