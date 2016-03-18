module szAngularBaseProject {
  'use strict';

  /** @ngInject */
  export function sampleTable(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        connectors: '=',
        formIds: '=',
        statuses: '='
      },
      templateUrl: 'app/components/sampleTable/sampleTable.html',
      controller: sampleTableController,
      controllerAs: 'ctc',
      bindToController: true
    };

  }

  /** @ngInject */
  class sampleTableController {

  }
}