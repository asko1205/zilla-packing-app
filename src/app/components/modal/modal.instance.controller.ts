module zillaPackingApp {
  'use strict';

  export class ModalInstanceCtrl {

  	static $inject = ["$scope", "$modalInstance", "userMessaging", "$filter"];
  	public newCategoryName;
  	public modalErrorMessage;

    /* @ngInject */
    constructor (private $scope, private $modalInstance, private userMessaging, private $filter) {

    }

    public ok = () => {
	    this.$modalInstance.close();
  	}

  	public cancel = () => {
  	    this.$modalInstance.dismiss('cancel');
  	}

  	public addItem = () => {


  	}
  }
}
