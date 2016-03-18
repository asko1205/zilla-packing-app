module szAngularBaseProject {
  'use strict';

  /** @ngInject */
  export function userMessaging(): ng.IDirective {

    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/components/userMessaging/userMessaging.html',
      controller: UserMessagingController,
      controllerAs: 'umc',
      bindToController: true
    };

  }

  class UserMessagingController{
    static $inject = ["$timeout", "userMessaging"];
    public successMessage;
    public errorMessage;
    public showError;
    public showSuccess;
    public hideAlertTimer;

    /* @ngInject */
    constructor (private $timeout, private userMessaging) {
      this.userMessaging.registerObserverCallback(this.updateSuccessMessage);
      this.userMessaging.registerObserverCallback(this.updateErrorMessage);
      this.userMessaging.registerObserverCallback(this.updateShowError);
      this.userMessaging.registerObserverCallback(this.updateShowSuccess);
      this.userMessaging.registerObserverCallback(this.updateHideAlertTimer);
    }

    public updateSuccessMessage = () =>{
      this.successMessage = this.userMessaging.successMessage;
    }

    public updateErrorMessage = () =>{
      this.errorMessage = this.userMessaging.errorMessage;
    }

    public updateShowError = () =>{
      this.showError = this.userMessaging.showError;
    }

    public updateShowSuccess = () =>{
      this.showSuccess = this.userMessaging.showSuccess;
    }

    public updateHideAlertTimer = () =>{
      this.hideAlertTimer = this.userMessaging.hideAlertTimer;
    }


  }


}

