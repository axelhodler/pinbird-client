# pinbird-client
Front end for a bookmarking application using [Ember.js](http://emberjs.com/)

Can be used in conjunction with the following [REST API](https://github.com/xorrr/freezing-octo-hipster)

#Development
To run the scripts `run.sh` and `run_tests` you need to have [http-server](https://github.com/nodeapps/http-server) globally

Install the dependencies listed in `bower.json` via [bower](http://bower.io):

    bower install

## Run the app

    ./bin/run.sh

## Run tests
### Browser of your choice
Append `?test` to the url in the address bar of your browser to run the tests via [QUnit](https://qunitjs.com/)

or via script:

    ./bin/run_tests.sh

### Karma
via:

    karma start

or via script:

    ./bin/run_karma_tests.sh
