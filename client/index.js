import BrowserHistory from 'react-router/lib/BrowserHistory';
import debugFactory from 'debug';
import { Cat } from 'thundercats';

import { app$ } from '../common/app';

const debug = debugFactory('fcc:client');
const DOMContianer = document.getElemenetById('#fCC');
const fcc = new Cat();

// returns an observable
app$(BrowserHistory)
  .flatMap(app => {
    return fcc.render(app, DOMContianer);
  })
  .subscribe(
    function() {
      debug('react rendered');
    },
    function(err) {
      debug('an error has occured', err.stack);
    }
  );
