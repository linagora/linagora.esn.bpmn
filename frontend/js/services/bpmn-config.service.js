(function() {
  'use strict';

  var MODULE_NAME = 'esn.bpmn';

  angular.module(MODULE_NAME)
    .factory('bpmnConfig', function(esnConfig) {
      return {
        config: function(key, defaultValue) {
          return esnConfig(MODULE_NAME + '.' + key, defaultValue);
        }
      };
    });

})();
