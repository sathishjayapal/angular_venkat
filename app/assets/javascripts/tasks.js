// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var TaskController = function ($http,$filter,$document) {

    var controller = this;
    controller.newTask = {};
    controller.updateMessage='';
    controller.tasks = [];

    controller.getTasks = function () {
        $http.get("/tasks.json").success(function (data) {
            controller.tasks = controller.sortTasks(data);
        });
    }
    controller.sortTasks=function(tasks){
        var orderBy= $filter('orderBy');
        return orderBy(tasks,['taskName','taskDescr']);
    }
    controller.addTask = function () {
        alert('Trying post');
        $http.post("/tasks.json", controller.newTask).success(function (data) {
            controller.newTask = {};
            controller.updateMessage = data;
            controller.getTasks();
        });
    }
    $document.ready(controller.getTasks);
}
angular.module('todoapp', []).controller('TaskController', TaskController);