// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var MyController = function () {
    var controller = this;

    var greet = function () {
        return "howdy";
    }

    var getFullName = function () {
        console.log("Coming here");
        if (controller.firstName == '')
            controller.fullName = '';
        if (controller.lastName == '')
            controller.fullName = controller.firstName + '';
        else
            controller.fullName=controller.firstName+controller.lastName;
        if (controller.fullName == '')
            controller.fullName = "NA";
        return controller.fullName;
    }
    controller.firstName = '';
    controller.lastName = '';
    controller.fullName = '';
    controller.greet = greet;
    controller.getFullName = getFullName;


}
angular.module('myapp', []).controller('MyController', MyController);