import 'babel-polyfill';
import config from './config';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configure_store from './redux/store/configure';
import FeedContainer from './containers/feed/FeedContainer';
import HamburgerIcon from './components/navmenu/HamburgerIcon';
import NavSections from './components/navmenu/NavSections';
import NavSubjects from './components/navmenu/NavSubjects';
import NavAuthors from './components/navmenu/NavAuthors';

// Browser Window Configuration
window.onload = () => { document.body.scrollTop = document.documentElement.scrollTop = 0; };
window.onbeforeunload = () => { document.body.scrollTop = document.documentElement.scrollTop = 0; };

// Store Configuration
const store = configure_store();

let render = () => {
  if(window.location.pathname.match(/^(\/blog\/)(\?.+)?$/)){
    ReactDOM.render(
      <Provider store={store}>
        <FeedContainer />
      </Provider>,
      document.getElementById('feed')
    );
  }
  ReactDOM.render(<HamburgerIcon />, document.getElementsByClassName('hamburger')[0]);

  // TODO: Refactor the following three in a single component to which important
  // class names & text are passed
  toArray(document.getElementsByClassName('exploreSection')).forEach((e) => {
    ReactDOM.render(<NavSections />, e);
  });
  toArray(document.getElementsByClassName('filterBy')).forEach((e) => {
    ReactDOM.render(<NavAuthors />, e);
  });
  toArray(document.getElementsByClassName('resonateWith')).forEach((e) => {
    ReactDOM.render(<NavSubjects />, e);
  });
};

function toArray(x) {
  for(var i = 0, a = []; i < x.length; i++) {
    a.push(x[i]);
  }
  return a;
}

render();
