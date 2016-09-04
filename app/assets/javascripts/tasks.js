// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var TaskController = function ($http) {
    var controller = this;
    // controller.tasks=['task1','task2','task3'];
    controller.getTasks = function () {
        $http.get("/tasks.json").success(function (data) {
            controller.tasks = data;
        });
    }
    controller.addTask = function () {
        $http.post("/tasks.json", controller.newTask).success(function (data) {
            controller.newTask = {};
            controller.updateMessage = data;
            controller.getTasks();
        });
    }
    controller.newTask = {};
    controller.updateMessage='';
    controller.getTasks();
    controller.addTask();
    controller.tasks = [];
}
angular.module('todoapp', []).controller('TaskController', TaskController);