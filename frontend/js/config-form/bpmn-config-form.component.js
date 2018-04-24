(function(angular) {
  'use strict';

  var MODULE_NAME = 'esn.bpmn';
  var MODULE_DIR_NAME = '/bpmnJs';

  angular.module(MODULE_NAME)

    .component('bpmnConfigForm', {
      templateUrl: MODULE_DIR_NAME + '/views/bpmn-config-form.html',
      bindings: {
        configurations: '='
      }
    });

})(angular);
