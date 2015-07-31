'use strict';

let angular = require('angular');

require('./createPipelineButton.html');

module.exports = angular.module('spinnaker.pipelines.config.actions.create.createPipelineButtonDirective', [
])
  .directive('createPipelineButton', function() {
    return {
      restrict: 'E',
      scope: {
        application: '=',
        target: '@',
        reinitialize: '&',
      },
      templateUrl: require('./createPipelineButton.html'),
      controller: 'CreatePipelineButtonCtrl',
      controllerAs: 'buttonCtrl',
    };
  }).name;
