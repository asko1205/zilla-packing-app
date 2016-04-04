declare var Firebase:FirebaseStatic;
module zillaPackingApp {
  'use strict';

  export class CreateController {
    public itemList;
    public items;
    public selected;
    public safeSrcItems;

    static $inject = ["firebaseUrlPrefix", "$modal", "CreateService"];

    /* @ngInject */
    constructor (firebaseUrlPrefix, private $modal, private CreateService) {

      this.items = this.CreateService.getItems()
        .success(() => {
          this.items = this.CreateService.items;
          this.safeSrcItems = this.items;
        });
    }

    public addItem(item){
      this.CreateService.addItem(item);
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
