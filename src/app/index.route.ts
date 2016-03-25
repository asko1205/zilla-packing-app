module zillaPackingApp {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .state('create', {
          url: '/create',
          templateUrl: 'app/create/create.html',
          controller: 'CreateController',
          controllerAs: 'create'
        });

      $urlRouterProvider.otherwise('/');
    }

  }
}
