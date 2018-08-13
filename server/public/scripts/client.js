console.log('JS');

const myApp = angular.module('myApp', []);

myApp.controller('TaskController', function ($http) {
    console.log('in TaskController');
    const vm = this;

    vm.tasks = [];

    vm.taskToAdd = function () {
        objTask = {
            task: vm.taskInput.task
        };
        $http({
            method: 'POST',
            url: '/tasks',
            data: objTask
        }).then(function (response) {
            console.log('successful response in taskToAdd');
            vm.taskInput.task = '';
            vm.retrieveTasks();
        }).catch(function (error) {
            console.log('ERROR, failed to complete response.', error);
        });
    } //end taskToAdd

    vm.retrieveTasks = function () {
        //get input data from server
        $http({
            method: 'GET',
            url: '/tasks'
        }).then(function (response) {
            console.log('GET response successful');
            vm.tasks = response.data;
        }).catch(function (error) {
            console.log('ERROR in GET of retrieveTasks:', error);
        });
    } //end retrieveTasks

    vm.deleteTask = function (id) {
        ('in deleteTask');
        $http({
            method: 'DELETE',
            url: '/tasks/delete/' + id
        }).then(function (response) {
            vm.retrieveTasks();
        });
    } //end deleteTask
    vm.taskConfirm = function () {
        console.log('in taskConfirm');

    } //end taskConfrim
    vm.retrieveTasks();
}); // end myApp.controller