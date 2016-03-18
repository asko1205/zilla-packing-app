module szAngularBaseProject {
  'use strict';

  export class EditController {
    public textLimit;
    static $inject = ["descriptionTextLimitConstant"];
    /* @ngInject */
    constructor (private descriptionTextLimitConstant) {
      this.textLimit = this.descriptionTextLimitConstant;
    }

  }
}
