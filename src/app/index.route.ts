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
        .state('edit', {
          url: '/edit',
          templateUrl: 'app/edit/edit.html',
          controller: 'EditController',
          controllerAs: 'edit'
        });

      $urlRouterProvider.otherwise('/');
    }

  }
}
