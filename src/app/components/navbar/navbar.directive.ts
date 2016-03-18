module zillaPackingApp {
  'use strict';

  /** @ngInject */
  export function acmeNavbar(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
      },
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

  }

  /** @ngInject */
  class NavbarController {

    constructor() {
    }
  }
}
