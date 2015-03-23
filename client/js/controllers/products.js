angular
  .module('app')
  .controller('ProductsController', ['$scope', '$state', 'Product', function($scope,
      $state, Product) {
    $scope.products = [];
    function getProducts() {
      Product
        .find()
        .$promise
        .then(function(results) {
          $scope.products = results;
        });
    }
    getProducts();

    $scope.addProduct = function() {
      Product
        .create($scope.newProduct)
        .$promise
        .then(function(product) {
          $scope.newProduct = '';
          $scope.productForm.content.$setPristine();
          $('.focus').focus();
          getProducts();
        });
    };

    $scope.removeProduct = function(item) {
      Product
        .deleteById(item)
        .$promise
        .then(function() {
          getProducts();
        });
    };
  }]);
