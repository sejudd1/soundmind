angular
	.module( 'soundmind' )
	.controller( 'usersController', usersController )

usersController.$inject = [ '$http', '$scope']

function usersController( $http, $scope, $uibModalInstance, $uibModal, $log, $modal ){
  var vm = this
	vm.all = []
  vm.newUser = {}
  vm.$http = $http
	vm.toggleNewForm = function() {
		console.log("In there babay")
		vm.showNew = !vm.showNew
	}
	vm.sayHi = function() {
		console.log("hi")
	}

	console.log( "VIEW", vm.viewUser )

	//FUNCTIONS
	//=========================
	vm.show = function( user ) {
		vm.viewUser = user
		window.localStorage.viewUser = user
		console.log("View User = ", vm.viewUser )
	}

	vm.getViewUser = function() {
		return window.localStorage.viewUser.name
	}


//AJAX CALLS
	//Get users and store them in an array
	vm.getUsers = function() {
		vm.$http
    // .get( "10.35.105.139:3000/users" )
		.get( "http://10.35.107.24:3000/users" )
    .then( function( response ) {
			console.log( "POOP", response )
			vm.all = response.data
			console.log("LL", vm.all)
			// $scope.$apply( function() {
			// 	vm.all = response.data
			// })
		} )
	}

	vm.getUser = function( user ) {
		vm.$http( {

		} )
	}

	//Create a new user and add them to array of stored users
	vm.addUser = function() {
		var vm = this
		if ( vm.newUser.name ) {
			this.$http( {
				method: "POST",
				url: "http://10.35.107.24:3000/users",
				data: {
					name: vm.newUser.name
				}
			} ).then( function( response ) {
				vm.getUsers()
			} )
		}
		vm.newUser = {}
	}

  vm.getUsers()

  vm.open = function () {
  	console.log("shits")
    var modalInstance = $uibModal.open( {
      animation: $scope.animationsEnabled,
      templateUrl: 'views/clientModal.html',
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };


}

usersController.prototype.deleteUser = function ( user ){
  this.$http
    // .delete( "10.35.111.206:3000/users" + user._id )
    .delete( 'http://loclahost:3000/users' + user._id )
		.then( response => {
      var index = this.all.indexOf( user )
      this.all.splice( index, 1 )
    })
}




