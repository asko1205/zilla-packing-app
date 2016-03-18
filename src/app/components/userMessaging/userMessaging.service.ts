/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
/// <reference path="../../../../.tmp/typings/angularjs/angular.d.ts" />

module zillaPackingApp {
 	'use strict';
	export class UserMessaging {

		static $inject = ["$timeout"];
		public successMessage;
		public errorMessage;
		public showError;
		public showSuccess;
		public hideAlertTimer;

		/* @ngInject */
	  	constructor (private $timeout) {

	  	}

	  	public observerCallbacks = [];

		  //register an observer
		  public registerObserverCallback = (callback) =>{
		    this.observerCallbacks.push(callback);
		  };

		  //call this when you know 'foo' has been changed
		  public notifyObservers = () =>{
		    angular.forEach(this.observerCallbacks, (callback) =>{
		      callback();
		    });
		  };

	  	public showSuccessMessage = (message) => {
	      //Hide any existing alert
	      this.hideAlerts();

	      //Cancel any existing timer to hide alerts
	      this.$timeout.cancel(this.hideAlertTimer);

	      //Show the message
	      this.successMessage = message;
	      this.showSuccess = true;

	      //Schedule automatic hiding of this alert in 15 seconds
	      this.hideAlertTimer = this.$timeout(this.hideAlerts, 5000);
	      this.notifyObservers();
	    }

	    public showErrorMessage = (message) => {
	      //Hide any existing alert
	      this.hideAlerts();

	      //Cancel any existing timer to hide alerts
	      this.$timeout.cancel(this.hideAlertTimer);

	      //Show the message
	      this.errorMessage = message;
	      this.showError = true;

	      //Schedule automatic hiding of this alert in 15 seconds
	      this.hideAlertTimer = this.$timeout(this.hideAlerts, 5000);
	      this.notifyObservers();
	    }

	    public hideAlerts = () => {
	      //Hide alert messages in form.gsp
	      this.showSuccess = false;
	      this.showError = false;
	      this.notifyObservers();
	    }

	}

}
