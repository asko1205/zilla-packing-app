module zillaPackingApp {
  'use strict';

  export class CreateController {
    public itemList;

    static $inject = [];

    /* @ngInject */
    constructor () {
      
      this.itemList = [{"itemName":"watershoes", "tags":["beach", "shoes"]}];
    }

  }
}
