(function() {

  'use strict';

  var Main = function() {
    this.initialize.apply(this, arguments);
  };

  Main.prototype = {

    initialize: function() {
      this.bindEvents();
    },

    bindEvents: function() {}

  };

  new Main();

})();