import hj  from '../hotjar/main';
export function initialize() {

  let application = arguments[0];
  if (arguments.length === 2) {
    //for ember 1.x
    const container = arguments[0];
    application =  arguments[1];
    container.options('hotjar:main');
  }

  let h =  hj.create();
  application.register('hotjar:main', h, {instantiate: false});
  application.inject('controller', '_hj', 'hotjar:main');
  application.inject('route',      '_hj', 'hotjar:main');
}
export default {
  name: 'ember-hotjar',
  initialize: initialize
};
