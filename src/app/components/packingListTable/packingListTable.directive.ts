module zillaPackingApp {
  'use strict';

  /** @ngInject */
  export function packingListTable(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        itemList: '=',
        safeSrcItems: '='
      },
      templateUrl: 'app/components/packingListTable/packingListTable.html',
      controller: packingListTableController,
      controllerAs: 'pltc',
      bindToController: true
    };

  }

  /** @ngInject */
  class packingListTableController {

  }
}
