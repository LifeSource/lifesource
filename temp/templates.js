angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/app.html","<template><div class=site-container><header><h1>lifesource</h1><nav-menu router.bind=router></nav-menu></header><router-view></router-view><footer>&copy; Yeoman Generated Footer</footer></div></template>");
$templateCache.put("app/core/navMenu.html","<template><ul><li repeat.for=\"nav of router.navigation\"><a href.bind=nav.href>${nav.title}</a></li></ul></template>");}]);