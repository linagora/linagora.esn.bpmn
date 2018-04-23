(function() {
  'use strict';

  var BPMN_MODULE_METADATA = {
    id: 'esn.bpmn',
    title: 'Bpmn',
    homePage: 'bpmn',
    icon: '/bpmnJs/images/bpmn-icon.svg',
    config: {
      template: 'bpmn-config-form',
      displayIn: {
        user: false,
        domain: false,
        platform: true
      }
    }
  };

  angular.module('esn.bpmn')
    .run(registerModule);

    function registerModule(esnModuleRegistry) {
      esnModuleRegistry.add(BPMN_MODULE_METADATA);
    }

})(angular);
