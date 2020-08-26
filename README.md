# ember-hotjar

Quick and easy hotjar integration

## Usage
* `npm install --save-dev ember-hotjar`
* add `config.hotjar.id` to config/environment.js
* optionally add `hotjar.forceSSL=true` to config/environment.js to force loading scripts via SSL.
* optionally add `hotjar.snippetVersion=5` to config/environment.js to change the version. 5 is the default.
* in routes and controller you will have _hj.push available


## Dev Installation

* `git clone <repository-url>` this repository
* `cd ember-hotjar`
* `npm install`
* `bower install`

## Dev Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Dev Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Dev Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).