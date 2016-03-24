module zillaPackingApp {
  'use strict';

  export class CreateController {
    public textLimit;
    static $inject = ["descriptionTextLimitConstant"];
    /* @ngInject */
    constructor (private descriptionTextLimitConstant) {
      this.textLimit = this.descriptionTextLimitConstant;
    }

  }
}
