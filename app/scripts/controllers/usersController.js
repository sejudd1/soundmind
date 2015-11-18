angular
	.module( 'soundmind' )
	.controller( 'usersController', usersController )

usersController.$inject = ['$state', '$rootScope', '$http']

// function usersController( $state, $rootScope, $http ){
// 	console.log( 'usersController is loading' )
// 	var vm = this
// 	vm.recognition = new webkitSpeechRecognition()
// 	vm.recognition.continuous = true
// 	vm.recognition.interimResults = true
// 	vm.recognition.onResult = function( event ){
// 		console.log( event )
// 	}
// 	vm.record = function(  ){

// 	}


// }

usersController.$inject = [ "$http", "$scope" ]

function usersController( $http, $scope ){
  var vm = this
	vm.all = []
	vm.poop = "Controller works"
	// vm.viewUser = {}
  vm.newUser = {}
  vm.$http = $http
	// vm.showNew = false
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
		.get( "http://localhost:3000/users" )
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
				url: "http://localhost:3000/users",
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
	console.log("D",vm.all)
}
// usersController.prototype.getUsers = function () {
//   this.$http
//     // .get( "10.35.105.139:3000/users" )
// 		.get( "http://localhost:3000/users" )
//     .then( function( response ) {
// 			console.log( "POOP", response )
// 			this.all = response.data
// 			console.log("LL",this.all)
// 		} )
// }

/*response => {
			console.log("Hello")
      this.all = response.data.Users
    }*/

// usersController.prototype.addUser = function () {
//   console.log("WORKS")
// 	var vm = this
// 	this.$http
//     // .post( "10.35.105.139:3000/users", this.newUser )
// 		// .post( "http://localhost:3000/users", { name: this.newUser.name } )
//     // .then( ( response ) => {
//     //  this.getUsers()
//     // })
// 		( {
// 			method: "POST",
// 			url: "http://localhost:3000/users",
// 			data: {
// 				name: vm.newUser.name
// 			}
// 		} ).then( function( response ) {
// 			console.log("This is the response", response )
// 			vm.getUsers()
// 		} )
//   this.newUser = {}
// }

usersController.prototype.deleteUser = function ( user ){
  this.$http
    // .delete( "10.35.111.206:3000/users" + user._id )
    .delete( 'http://loclahost:3000/users' + user._id )
		.then( response => {
      var index = this.all.indexOf( user )
      this.all.splice( index, 1 )
    })
}




