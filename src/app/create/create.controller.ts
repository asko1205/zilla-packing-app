declare var Firebase:FirebaseStatic;
module zillaPackingApp {
  'use strict';

  export class CreateController {
    public itemList;
    public items;
    public selected;
    public safeSrcItems;

    static $inject = ["$firebaseObject", "$firebaseArray", "$modal"];

    /* @ngInject */
    constructor ($firebaseObject, $firebaseArray, private $modal) {
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

    //-------- modal features ------------

    public open = (size) => {
      var modalInstance = this.$modal.open({
        templateUrl: 'app/components/modal/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'mic',
        size: size
      });
    }

  }
}
