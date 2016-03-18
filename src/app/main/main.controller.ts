module szAngularBaseProject {
  'use strict';

  export class MainController {

    public connectors;
    public formIds;
    public statuses;

    /* @ngInject */
    constructor () {

      //this will be replaced with the real data coming back from the endpoint
      this.connectors = ['NWEA MAP','PowerSchool Database Connection','SBAC'];
      this.formIds = ['10', '11', '14', '23', '64', '102'];
      this.statuses = ['Success! Schoolzilla has successfully connected to your data', 'In Progress. Schoolzilla is connecting to your data', 'default']
    }

  }
}
