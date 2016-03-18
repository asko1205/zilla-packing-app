/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="edit/edit.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/sampleTable/sampleTable.directive.ts" />
/// <reference path="../app/components/userMessaging/userMessaging.service.ts" />
/// <reference path="../app/components/userMessaging/userMessaging.directive.ts" />

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

module szAngularBaseProject {
  'use strict';

  angular.module('szAngularBaseProject', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'smart-table', 'xeditable', 'ngDialog', 'app.config'])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .service('userMessaging', UserMessaging)
    .controller('MainController', MainController)
    .controller('EditController', EditController)
    .directive('acmeNavbar', acmeNavbar)
    .directive('sampleTable', sampleTable)
    .directive('userMessaging', userMessaging);
}
