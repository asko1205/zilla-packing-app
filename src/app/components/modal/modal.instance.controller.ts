module zillaPackingApp {
  'use strict';

  export class ModalInstanceCtrl {

  	static $inject = ["$scope", "$modalInstance", "userMessaging", "$filter", "CreateService"];
  	public newItemName;
  	public modalErrorMessage;
    public tags;
    private CreateService;

    /* @ngInject */
    constructor (private $scope, private $modalInstance, private userMessaging, private $filter, CreateService) {
      this.CreateService = CreateService;
    }

    public ok = () => {
	    this.$modalInstance.close();
  	}

  	public cancel = () => {
  	    this.$modalInstance.dismiss('cancel');
  	}

  	public saveItem = () => {
      var tagArray = [];
      angular.forEach(this.tags, function(value, key) {
        this.push(value.text);
      }, tagArray);
      var newItem = {"itemName":this.newItemName, "tags":tagArray};
      this.CreateService.addItem(newItem);
      this.CreateService.items.push(newItem);
  	}
  }
}
