angular
  .module('app', [
    'lbServices',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('products', {
        url: '',
        templateUrl: 'views/products.html',
        controller: 'ProductsController'
      });

    $urlRouterProvider.otherwise('products');
  }]);
