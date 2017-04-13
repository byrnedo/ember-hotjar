export function initialize() {
  let application = arguments[0];
  if (arguments.length === 2) {
    //for ember 1.x
    const container = arguments[0];
    application =  arguments[1];
    container.options('hotjar:main');
  }

  application.inject('controller', '_hj', 'hotjar:main');
  application.inject('route',      '_hj', 'hotjar:main');
};

export default {
  name: 'ember-hotjar',
  initialize: initialize
};
