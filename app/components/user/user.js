/**
 * 
 *
 * @deprecated 
 * @module components/user
 */
(function () {
  'use strict';

  angular
    .module('CartApp.user', [])
    .controller('UserController', UserController);

  UserController.$inject = ['UsersService'];
  /**
   * AboutController
   *
   * @class AboutController
   * @constructor
   */
  function UserController(UsersService) {
  	console.log('UserController Constructor');
    this.UsersService = UsersService;
  }

  /**
  * My method description.  Like other pieces of your comment blocks, 
  * this can span multiple lines.
  *
  * @method activate
  */
  UserController.prototype.activate = function() {
  	console.log('UserController activate Method');
    vm = this;
    var users = vm.UsersService.query().$promise;
    users
      .then(setUsers);
  };

  UserController.prototype.register = function() {
    console.log('UserController register Method');
    var user = {
      name: vm.name,
      address: vm.address,
      tel: vm.tel,
      mail: vm.mail
    };

    var users = vm.UsersService.save(user).$promise;
    users
      .catch(error);
  };

  UserController.prototype.delete = function() {
    console.log('UserController delete Method');
    var users = vm.UsersService.delete().$promise;
    users
      .catch(error);
  };

  /**
   * Static property
   */

  /**
   * Static method, assigned to class
   */

  /**
   * Private property
   */
  var vm;

  /**
   * Private Method
   */
  var setUsers = function (user) {
    vm.name = user[0].name;
    vm.address = user[0].address;
    vm.tel = user[0].tel;
    vm.mail = user[0].mail;
  };

  var error = function () {

  };

})();