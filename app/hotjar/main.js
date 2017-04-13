import config from '../config/environment';
import Ember from 'ember';


var  hj = window.hj = window.hj || function(){(window.hj.q=window.hj.q||[]).push(arguments)};

function load(id, forceSSL, snippetVer) {

  setTimeout(function() {
    window._hjSettings = {
      hjid: id,
      hjsv: snippetVer ? snippetVer : 5
    };

    let prefix = '//';
    if (forceSSL) {
      prefix = 'https://';
    }

    let a=document.getElementsByTagName('head')[0];
    let r=document.createElement('script');
    r.async=1;
    r.src = `${prefix}static.hotjar.com/c/hotjar-${window._hjSettings.hjid}.js?sv=${window._hjSettings.hjsv}`;
    a.appendChild(r);
  }, 1);
}


if (config.hotjar && config.hotjar.id) {

  if ('enabled' in config.hotjar && ! config.hotjar.enabled) {
    Ember.Logger.debug('Not running hotjar script, config.hotjar.enabled set to false');
  } else {
    load(config.hotjar.id, !!config.hotjar.forceSSL, config.hotjar.snippetVersion);
  }
} else {
  throw new TypeError('Missing config/environment entry `config.hotjar.id`');
}


export default {
  create:  function () {
    return hj;
  }
};
