import { Template } from 'meteor/templating';

import './bookPlain.html';

Template.bookPlain.helpers({
  'counters'() {
    const counterNumber = ['1a','2b','3c','4d','5e'];
    return counterNumber;
  }
});