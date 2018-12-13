import { Template } from 'meteor/templating';
import { Previewer } from 'pagedjs';

import './bookPaged.html';

Template.bookPaged.onCreated(function() {
  Meteor.subscribe('pubCollBooks.all');
  const link1 = document.createElement('link');
  link1.rel = 'stylesheet';
  link1.type = 'text/css';
  link1.href = '/reportcss/preview.css';
  document.head.appendChild(link1);
  const link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.type = 'text/css';
  link2.href = '/reportcss/moby-dick.css';
  document.head.appendChild(link1);
});

Template.bookPaged.onRendered(function() {
  let flowText = document.querySelector('#flow');
  console.log(flowText);
  let paged = new Previewer();
  console.log(paged);
  let flow = paged.preview(flowText, ['/reportcss/moby-dick.css'], document.body).then((flow) => {
    console.log('Rendered', flow.total, 'pages.');
  });
});

Template.bookPaged.helpers({
  'counters'() {
    const counterNumber = ['1a','2b','3c','4d','5e'];
    return counterNumber;
  }
});