import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

import './layout.html';
import './main.html';
import './bookPlain.js';
import './bookPaged.js';

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('layout', { main: 'mainContent' });
  }
});

FlowRouter.route('/bookPlain', {
  name: 'bookPlain',
  action: function() {
    BlazeLayout.render('layout', { main: 'bookPlain' });
  }
});

FlowRouter.route('/bookPaged', {
  name: 'bookPaged',
  action: function() {
    BlazeLayout.render('layout', { main: 'bookPaged' });
  }
});