import Ember from 'ember';

export default Ember.Controller.extend({
  isOpenClass: null,

  click: function() {
    this.sendAction('open');
  },
  actions: {
    open: function() {
      this.set('isOpenClass', 'is-open');
    },
    close: function() {
      this.set('isOpenClass', null);
    }
  }
});
