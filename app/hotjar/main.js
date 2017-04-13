import config from '../config/environment';


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

if (config.hotjarId) {
  load(config.hotjarId, !!config.hotjarForceSSL, config.hotjarSnippetVersion);
} else {
  throw new TypeError('Missing config/environment entry `config.hotjarId`');
}


export default {
  create:  function () {
    return hj;
  }
};
