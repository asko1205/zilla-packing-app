declare var Firebase:FirebaseStatic;
module zillaPackingApp {
  'use strict';

  export class CreateController {
    public itemList;
    public items;
    public data;
    public safeSrcItems;

    static $inject = ["$firebaseObject", "$firebaseArray"];

    /* @ngInject */
    constructor ($firebaseObject, $firebaseArray) {
      var ref = new Firebase("https://zillapack.firebaseio.com");
      this.items = $firebaseArray(ref);
      this.safeSrcItems = this.items;
    }

    public addItem(){
      this.items.$add({
        itemName: "watershoes",
        tags: ["beach", "shoes"]
      });
    }

  }
}
