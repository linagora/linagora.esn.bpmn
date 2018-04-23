'use strict';

angular.module('esn.bpmn')
  .factory('bpmnService', function($http, fileUploadService, notificationFactory, bpmnConfig) {
    //TODO manage config return file list server
    var webServiceActivitiExecuteBpmnURL = '/action/parse/execute';
    var webServiceActivitiTaskForm = '/action/task/list';
    var webServiceActivitiTaskList = '/action/data';
    var webServiceActivitiTaskComplete = '/action/task/complet';

    function _getActivitiURL() {
      return bpmnConfig.config('activitiURL');
    }

    //ACTIVITI WEBSERVICE
    var activitiExecuteBpmn = function(file) {
      return _getActivitiURL().then(function(activitiBaseURL) {
        var webServiceUrl = activitiBaseURL + webServiceActivitiExecuteBpmnURL;
        var formData = new FormData();
        formData.append('file', file);
  
        return $http.post(webServiceUrl, formData, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        }).success(function(res) {
          notificationFactory.weakInfo('Execution', 'Process started : ' + res.idNumber);
          return res;
        }).error(function(err) {
          notificationFactory.weakError('Error', 'Error during the  execution : ' + err.message);
          return err;
        });
      });
    };

    var listActiveTaskForm = function(userInfo) {
      return _getActivitiURL().then(function(activitiBaseURL) {
        var webServiceUrl = activitiBaseURL + webServiceActivitiTaskForm;
        var formData = new FormData();
  
        formData.append('email', userInfo.preferredEmail);
  
        return $http.post(webServiceUrl, formData, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
        }).success(function(res) {
          return res;
        }).error(function(err) {
          return err;
        });
      });
    };

    var listActiveTaskList = function() {
      return _getActivitiURL().then(function(activitiBaseURL) {
        var webServiceUrl = activitiBaseURL + webServiceActivitiTaskList;
        return $http.get(webServiceUrl).then(function(response) {
          return response;
        });
      });
    };

    var completeTask = function(values) {
      return _getActivitiURL().then(function(activitiBaseURL) {
        var webServiceUrl = activitiBaseURL + webServiceActivitiTaskComplete;
        return $http.post(webServiceUrl, JSON.stringify(values)).then(function(response) {
          return response;
        });
      });
    };

    return {
      activitiExecuteBpmn:activitiExecuteBpmn,
      listActiveTaskForm:listActiveTaskForm,
      listActiveTaskList:listActiveTaskList,
      completeTask:completeTask
    };
  });
