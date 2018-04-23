'use strict';

angular.module('esn.bpmn')
.directive('applicationMenuCnet', function(applicationMenuTemplateBuilder) {
  return {
    retrict: 'E',
    replace: true,
    template: applicationMenuTemplateBuilder('/#/bpmn', { url: '/bpmnJs/images/bpmn-icon.svg' }, 'Processus')
  };
})

.directive('subheaderMenu', function() {
  return {
    restrict: 'E',
    templateUrl: '/bpmnJs/views/subHeader.html'
  };
})
;
