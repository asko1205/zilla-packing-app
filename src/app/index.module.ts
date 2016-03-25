/// <reference path="../../.tmp/typings/tsd.d.ts" />


/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="create/create.controller.ts" />
/// <reference path="../app/components/navbar/navbar.directive.ts" />
/// <reference path="../app/components/packingListTable/packingListTable.directive.ts" />
/// <reference path="../app/components/userMessaging/userMessaging.service.ts" />
/// <reference path="../app/components/userMessaging/userMessaging.directive.ts" />
/// <reference path="../app/components/modal/modal.instance.controller.ts" />

declare var malarkey: any;
declare var toastr: Toastr;
declare var moment: moment.MomentStatic;

module zillaPackingApp {
  'use strict';

  angular.module('zillaPackingApp', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'smart-table', 'xeditable', 'ngDialog', 'app.config', 'firebase', 'ngTagsInput'])
    .constant('malarkey', malarkey)
    .constant('toastr', toastr)
    .constant('moment', moment)
    .config(Config)

    .config(RouterConfig)

    .run(RunBlock)
    .service('userMessaging', UserMessaging)
    .controller('MainController', MainController)
    .controller('CreateController', CreateController)
    .controller('ModalInstanceCtrl', ModalInstanceCtrl)
    .directive('acmeNavbar', acmeNavbar)
    .directive('packingListTable', packingListTable)
    .directive('userMessaging', userMessaging);
}
