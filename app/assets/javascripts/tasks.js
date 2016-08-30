// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var TaskController = function () {
    var controller=this;
    controller.tasks=['task1','task2','task3'];
}
angular.module('todoapp', []).controller('TaskController',TaskController);