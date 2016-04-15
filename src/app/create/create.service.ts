module zillaPackingApp {
  'use strict';

  export class CreateService{
    private firebaseUrlPrefix;
    private $http;
    private userMessaging;
    private $q;
    public items = [];
    static $inject = ["firebaseUrlPrefix", "$http", "userMessaging", "$q"];

    constructor (firebaseUrlPrefix, $http, userMessaging, $q) {
      this.$http = $http;
      this.firebaseUrlPrefix = firebaseUrlPrefix;
      this.userMessaging = userMessaging;
      this.$q = $q;
    }

    getItems(){
      var deferred = this.$q.defer();
      if(this.items.length > 0){
        deferred.resolve(this.items);
      }
      else{
        return this.$http.get(this.firebaseUrlPrefix + '/items.json')
          .success((data) =>{
            console.log(data);
            angular.forEach(data, (value, key) =>{
              this.items.push(value);
            });
            console.log(this.items);
          })
          .error((http, status) => {
            var serverError = (http && http.message) ? http.message : "";
            this.userMessaging.showErrorMessage("Sorry! An error occured: " + serverError);
          });
      }
      return deferred.promise;
    }

    addItem(itemData){
      var req = {
        method: 'POST',
        url: this.firebaseUrlPrefix + '/items.json',
        data: itemData
      }
      return this.$http(req)
        .success((data) =>{
          this.userMessaging.showSuccessMessage("Success! Your new item has been added!");
        })
        .error((http, status) => {
          var serverError = (http && http.message) ? http.message : "";
		  	  this.userMessaging.showErrorMessage("Sorry! An error occured: " + serverError);
        });
    }


  }

}
