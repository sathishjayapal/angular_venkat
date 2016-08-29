// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var MyController= function() {
    console.log("AM getting here");
    var controller=this;
    var greet = function () {
        return "howdy";
    }
    controller.greet=greet;
}
angular.module('myapp',[]).controller('MyController', MyController);