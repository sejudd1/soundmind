angular
	.module( 'Soundmind' )
	.controller( 'usersController', usersController )

usersController.$inject = ['$state', '$rootScope', '$http']

function usersController( $state, $rootScope, $http ){
	console.log( 'usersController is loading' )
	var vm = this
	vm.recognition = new webkitSpeechRecognition()
	vm.recognition.continuous = true
	vm.recognition.interimResults = true
	vm.recognition.onResult = function( event ){
		console.log( event )
	}
	vm.record = function(  ){

	}


}

usersController.$inject = [ "$http" ]

function usersController($http){
  this.all = []
  this.newUser = {}
  this.$http = $http
  this.getUsers()
}
usersController.prototype.getUsers = function () {
  this.$http
    .get( "10.35.111.206:3000/users" )
    .then( response => {
      this.all = response.data.Users
    })
}

usersController.prototype.addUser = function () {
  this.$http
    .post( "10.35.111.206:3000/users", this.newUser )
    .then( ( response ) => {
     this.getUsers()
    })
  this.newUser = {}
}

usersController.prototype.deleteUser = function ( user ){
  this.$http
    .delete( "10.35.111.206:3000/users" + user._id )
    .then( response => {
      var index = this.all.indexOf( user )
      this.all.splice( index, 1 )
    })
}




