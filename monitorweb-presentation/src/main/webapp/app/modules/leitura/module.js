define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/leitura/services/module');
  require('app/modules/leitura/controllers/module');

  return require('angular')
    .module('app.leitura', [
      'ui.router',
      'app.leitura.controllers',
      'app.leitura.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('leitura.list', {
          url: '/list',
          templateUrl: 'app/modules/leitura/views/list.html',
          controller: 'LeituraListController'
        })
        .state('leitura.insert', {
          url: '/insert',
          templateUrl: 'app/modules/leitura/views/form.html',
          controller: 'LeituraFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/leitura/new');
            }]
          }
        })
        .state('leitura.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/leitura/views/form.html',
          controller: 'LeituraFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/leitura/' + $stateParams.id);
            }]
          }
        });
    })
});